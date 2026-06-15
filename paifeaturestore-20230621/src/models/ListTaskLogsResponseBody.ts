// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of log entries.
   */
  logs?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 72F15A8A-5A28-5B18-A0DE-0EABD7D3245A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of log entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

