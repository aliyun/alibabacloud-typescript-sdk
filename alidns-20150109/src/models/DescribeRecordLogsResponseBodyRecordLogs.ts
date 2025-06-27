// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRecordLogsResponseBodyRecordLogsRecordLog } from "./DescribeRecordLogsResponseBodyRecordLogsRecordLog";


export class DescribeRecordLogsResponseBodyRecordLogs extends $dara.Model {
  recordLog?: DescribeRecordLogsResponseBodyRecordLogsRecordLog[];
  static names(): { [key: string]: string } {
    return {
      recordLog: 'RecordLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordLog: { 'type': 'array', 'itemType': DescribeRecordLogsResponseBodyRecordLogsRecordLog },
    };
  }

  validate() {
    if(Array.isArray(this.recordLog)) {
      $dara.Model.validateArray(this.recordLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

