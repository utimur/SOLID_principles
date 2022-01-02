import React from "react";

interface RequisitesProps {
  onSave?: (obj) => void;
  onReset?: () => void;
  title?: string;
}
const Requisites = (props: RequisitesProps) => {
  const {
    onSave,
    onReset,
    title,
  } = props;

  return (
    <form>

        <div>
          <input type="text" placeholder="SWIFT"/>
          <input type="text" placeholder="KPP"/>
          <input type="text" placeholder=""/>
        </div>
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

const ForeignRequisites = () => {

  return (
    <div>
      <input type="text" placeholder="SWIFT"/>
      <input type="text" placeholder="KPP"/>
      <input type="text" placeholder=""/>
      <Requisites
      />
    </div>
  )
}

const PassportData = () => {
  return (
    <div>
      <input type="number" placeholder="Серия паспорта"/>
      <input type="number" placeholder="Номер паспорта"/>
    </div>
  )
}

const FullRequisitesForm = () => {
  return (
    <div>
      <PassportData />
      <Requisites />
    </div>
  )
}

const FullForeignRequisitesForm = () => {
  return (
    <div>
      <PassportData />
      <ForeignRequisites />
    </div>
  )
}
