// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryRequestLogsResponseBodyRequestLogs } from "./QueryRequestLogsResponseBodyRequestLogs";


export class QueryRequestLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CE5722A6-AE78-4741-A9B0-6C81********
   */
  requestId?: string;
  /**
   * @remarks
   * The request logs.
   */
  requestLogs?: QueryRequestLogsResponseBodyRequestLogs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      requestLogs: 'RequestLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      requestLogs: QueryRequestLogsResponseBodyRequestLogs,
    };
  }

  validate() {
    if(this.requestLogs && typeof (this.requestLogs as any).validate === 'function') {
      (this.requestLogs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

