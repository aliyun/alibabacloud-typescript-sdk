// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListColumnsResponseBodyColumnListColumn } from "./ListColumnsResponseBodyColumnListColumn";


export class ListColumnsResponseBodyColumnList extends $dara.Model {
  column?: ListColumnsResponseBodyColumnListColumn[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': ListColumnsResponseBodyColumnListColumn },
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

