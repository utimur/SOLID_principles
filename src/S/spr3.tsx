// Single Responsibility Principle
// Принцип единственной ответственности
import React from 'react';

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
  const validateForeignFORM = () => {
    // правила валидации
  }
  const saveHandler = () => {
    validateForeignFORM()
    props.onSave({})
  }
  return <Requisites onSave={saveHandler} onReset={props.onReset} title={props.title}/>
}

const RussianRequisites = (props: RequisitesProps) => {
  const validateRussianFORM = () => {
    // правила валидации
  }
  const saveHandler = () => {
    validateRussianFORM()
    props.onSave({})
  }
  return <Requisites onSave={saveHandler} onReset={props.onReset} title={props.title}/>
}

const CreateRequisitesForm = ({isForeign}) => {
  const createRequisites = () => {}
  const resetRequisites = () => {}

  if(isForeign) {
    return <ForeignRequisites
      onSave={createRequisites}
      onReset={resetRequisites}
      title={'Сохранение реквизитов'}
    />
  }
  return <RussianRequisites
    onSave={createRequisites}
    onReset={resetRequisites}
    title={'Сохранение реквизитов'}
  />
}

const updateRequisitesForm = ({isForeign}) => {
  const updateRequisites = () => {}
  const resetRequisites = () => {}

  if(isForeign) {
    return <ForeignRequisites
      onSave={updateRequisites}
      onReset={resetRequisites}
      title={'Обновление реквизитов'}
    />
  }
  return <RussianRequisites
    onSave={updateRequisites}
    onReset={resetRequisites}
    title={'Обновление реквизитов'}
  />
}
