// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Relation } from "./Relation";


export class Edge extends $dara.Model {
  columnLineage?: Relation[];
  tableLineage?: Relation[];
  static names(): { [key: string]: string } {
    return {
      columnLineage: 'columnLineage',
      tableLineage: 'tableLineage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnLineage: { 'type': 'array', 'itemType': Relation },
      tableLineage: { 'type': 'array', 'itemType': Relation },
    };
  }

  validate() {
    if(Array.isArray(this.columnLineage)) {
      $dara.Model.validateArray(this.columnLineage);
    }
    if(Array.isArray(this.tableLineage)) {
      $dara.Model.validateArray(this.tableLineage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

