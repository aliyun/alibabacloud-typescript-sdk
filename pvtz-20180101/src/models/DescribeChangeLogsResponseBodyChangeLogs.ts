// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeChangeLogsResponseBodyChangeLogsChangeLog } from "./DescribeChangeLogsResponseBodyChangeLogsChangeLog";


export class DescribeChangeLogsResponseBodyChangeLogs extends $dara.Model {
  changeLog?: DescribeChangeLogsResponseBodyChangeLogsChangeLog[];
  static names(): { [key: string]: string } {
    return {
      changeLog: 'ChangeLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeLog: { 'type': 'array', 'itemType': DescribeChangeLogsResponseBodyChangeLogsChangeLog },
    };
  }

  validate() {
    if(Array.isArray(this.changeLog)) {
      $dara.Model.validateArray(this.changeLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

