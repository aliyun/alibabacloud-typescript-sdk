// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTablesResponseBodyTableListTable } from "./ListTablesResponseBodyTableListTable";


export class ListTablesResponseBodyTableList extends $dara.Model {
  table?: ListTablesResponseBodyTableListTable[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': ListTablesResponseBodyTableListTable },
    };
  }

  validate() {
    if(Array.isArray(this.table)) {
      $dara.Model.validateArray(this.table);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

