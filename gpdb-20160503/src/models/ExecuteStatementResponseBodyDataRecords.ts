// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteStatementResponseBodyDataRecordsRecords } from "./ExecuteStatementResponseBodyDataRecordsRecords";


export class ExecuteStatementResponseBodyDataRecords extends $dara.Model {
  records?: ExecuteStatementResponseBodyDataRecordsRecords[];
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': ExecuteStatementResponseBodyDataRecordsRecords },
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

