// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeErrorLogsResponseBodyItemsErrorLog } from "./DescribeErrorLogsResponseBodyItemsErrorLog";


export class DescribeErrorLogsResponseBodyItems extends $dara.Model {
  errorLog?: DescribeErrorLogsResponseBodyItemsErrorLog[];
  static names(): { [key: string]: string } {
    return {
      errorLog: 'ErrorLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLog: { 'type': 'array', 'itemType': DescribeErrorLogsResponseBodyItemsErrorLog },
    };
  }

  validate() {
    if(Array.isArray(this.errorLog)) {
      $dara.Model.validateArray(this.errorLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

