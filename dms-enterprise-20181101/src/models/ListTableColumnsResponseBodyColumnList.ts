// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTableColumnsResponseBodyColumnListColumn } from "./ListTableColumnsResponseBodyColumnListColumn";


export class ListTableColumnsResponseBodyColumnList extends $dara.Model {
  column?: ListTableColumnsResponseBodyColumnListColumn[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': ListTableColumnsResponseBodyColumnListColumn },
    };
  }

  validate() {
    if(Array.isArray(this.column)) {
      $dara.Model.validateArray(this.column);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

