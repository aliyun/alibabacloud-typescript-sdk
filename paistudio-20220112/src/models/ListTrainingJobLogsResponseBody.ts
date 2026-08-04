// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrainingJobLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of logs.
   */
  logs?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF05F13-B24C-5129-9048-4FA684DCD579
   */
  requestId?: string;
  /**
   * @remarks
   * The number of logs that match the filter condition.
   * 
   * @example
   * 23
   */
  totalCount?: string;
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
      totalCount: 'string',
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

