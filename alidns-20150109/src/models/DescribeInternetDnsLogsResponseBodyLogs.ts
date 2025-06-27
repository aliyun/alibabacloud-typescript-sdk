// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInternetDnsLogsResponseBodyLogsLog } from "./DescribeInternetDnsLogsResponseBodyLogsLog";


export class DescribeInternetDnsLogsResponseBodyLogs extends $dara.Model {
  log?: DescribeInternetDnsLogsResponseBodyLogsLog[];
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: { 'type': 'array', 'itemType': DescribeInternetDnsLogsResponseBodyLogsLog },
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

