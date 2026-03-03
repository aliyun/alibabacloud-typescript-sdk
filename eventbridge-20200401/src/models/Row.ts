// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Column } from "./Column";


export class Row extends $dara.Model {
  columns?: Column[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': Column },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

