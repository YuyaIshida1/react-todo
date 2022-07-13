import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // 状態が変化するものstateにする（今回の場合はTODOのテキスト）
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodo, setImcompleteTodo] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);

  // テキストのステートを変更できる
  // event.taget.valueに変更された値が入る
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodo, todoText];
    setImcompleteTodo(newTodos);
    setTodoText("");
  };

  // 削除が押されたとき
  //
  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodo];
    newTodos.splice(index, 1);
    setImcompleteTodo(newTodos);
  };

  // 完了ボタンが押されたとき
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...imcompleteTodo];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodo, imcompleteTodo[index]];
    setImcompleteTodo(newIncompleteTodos);
    setCompleteTodo(newCompleteTodos);
  };

  // 戻るボタンが押されたとき
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodo];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...imcompleteTodo, completeTodo[index]];

    setCompleteTodo(newCompleteTodos);
    setImcompleteTodo(newIncompleteTodos);
  };
  return (
    // HTMLの記述
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={imcompleteTodo.length >= 5}
      />
      {imcompleteTodo.length >= 5 && <p>登録できるTODOは５個まで</p>}
      <IncompleteTodo
        todos={imcompleteTodo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodo} onClickBack={onClickBack} />
    </>
  );
};
