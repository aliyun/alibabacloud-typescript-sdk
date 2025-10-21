// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Cell } from "./Cell";


export class Row extends $dara.Model {
  cells?: Cell[];
  static names(): { [key: string]: string } {
    return {
      cells: 'cells',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cells: { 'type': 'array', 'itemType': Cell },
    };
  }

  validate() {
    if(Array.isArray(this.cells)) {
      $dara.Model.validateArray(this.cells);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

