import React from "react";

export const IncompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      {/* map関数でTODOが入った配列を順番にリストに表示、リターンでHTMLを返す */}
      <ul>
        {todos.map((todo, index) => {
          return (
            // ??keyをつける意味
            <div key={todo} className="listRow">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* onClick={onClickDelete(index)} だとクリックされるまえに実行される*/}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
