// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmLogsResponseBodyLogsLog } from "./DescribeGtmLogsResponseBodyLogsLog";


export class DescribeGtmLogsResponseBodyLogs extends $dara.Model {
  log?: DescribeGtmLogsResponseBodyLogsLog[];
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: { 'type': 'array', 'itemType': DescribeGtmLogsResponseBodyLogsLog },
    };
  }

  validate() {
    if(Array.isArray(this.log)) {
      $dara.Model.validateArray(this.log);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

