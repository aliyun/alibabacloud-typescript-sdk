// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebLogEntry } from "./WebLogEntry";


export class DescribeInstanceLogsOutput extends $dara.Model {
  webLogEntrys?: WebLogEntry[];
  static names(): { [key: string]: string } {
    return {
      webLogEntrys: 'WebLogEntrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webLogEntrys: { 'type': 'array', 'itemType': WebLogEntry },
    };
  }

  validate() {
    if(Array.isArray(this.webLogEntrys)) {
      $dara.Model.validateArray(this.webLogEntrys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

