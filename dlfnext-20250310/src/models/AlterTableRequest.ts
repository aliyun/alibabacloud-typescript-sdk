// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FullSchemaChange } from "./FullSchemaChange";


export class AlterTableRequest extends $dara.Model {
  changes?: FullSchemaChange[];
  static names(): { [key: string]: string } {
    return {
      changes: 'changes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changes: { 'type': 'array', 'itemType': FullSchemaChange },
    };
  }

  validate() {
    if(Array.isArray(this.changes)) {
      $dara.Model.validateArray(this.changes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

