// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Field } from "./Field";


export class GetStatementResultResponseBodyDataRecordsRecords extends $dara.Model {
  record?: Field[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': Field },
    };
  }

  validate() {
    if(Array.isArray(this.record)) {
      $dara.Model.validateArray(this.record);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

