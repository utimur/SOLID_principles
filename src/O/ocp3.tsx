import React from "react";

interface RequisitesProps {
  onSave: (obj) => void;
  onReset: () => void;
  title: string;
}
const Requisites = (props: RequisitesProps) => {
  const {
    onSave,
    onReset,
    title,
  } = props;

  return (
    <form>
      <h1>{title}</h1>
      <input type="text" placeholder="ИНН"/>
      <input type="text" placeholder="БИК"/>
      <input type="text" placeholder="НАЗВАНИЕ БАНКА"/>
      <input type="text" placeholder="НОМЕР СЧЕТА"/>
      <button onClick={onReset}>Сбросить форму</button>
      <button onClick={onSave}>Сохранить</button>
    </form>
  );
};

const ForeignRequisites = (props: RequisitesProps) => {

  return (
    <div>
      <input type="text" placeholder="SWIFT"/>
      <input type="text" placeholder="KPP"/>
      <input type="text" placeholder=""/>
      <Requisites
        onSave={}
        onReset={}
        title={}
      />
    </div>
  )
}
