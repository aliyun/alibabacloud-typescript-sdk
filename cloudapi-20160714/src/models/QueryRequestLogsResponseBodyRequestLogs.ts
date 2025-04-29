// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryRequestLogsResponseBodyRequestLogsRequestLog } from "./QueryRequestLogsResponseBodyRequestLogsRequestLog";


export class QueryRequestLogsResponseBodyRequestLogs extends $dara.Model {
  requestLog?: QueryRequestLogsResponseBodyRequestLogsRequestLog[];
  static names(): { [key: string]: string } {
    return {
      requestLog: 'RequestLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestLog: { 'type': 'array', 'itemType': QueryRequestLogsResponseBodyRequestLogsRequestLog },
    };
  }

  validate() {
    if(Array.isArray(this.requestLog)) {
      $dara.Model.validateArray(this.requestLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

