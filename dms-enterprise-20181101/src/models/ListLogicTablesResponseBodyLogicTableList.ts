// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogicTablesResponseBodyLogicTableListLogicTable } from "./ListLogicTablesResponseBodyLogicTableListLogicTable";


export class ListLogicTablesResponseBodyLogicTableList extends $dara.Model {
  logicTable?: ListLogicTablesResponseBodyLogicTableListLogicTable[];
  static names(): { [key: string]: string } {
    return {
      logicTable: 'LogicTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicTable: { 'type': 'array', 'itemType': ListLogicTablesResponseBodyLogicTableListLogicTable },
    };
  }

  validate() {
    if(Array.isArray(this.logicTable)) {
      $dara.Model.validateArray(this.logicTable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

