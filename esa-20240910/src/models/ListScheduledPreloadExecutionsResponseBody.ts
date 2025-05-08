// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListScheduledPreloadExecutionsResponseBodyExecutions } from "./ListScheduledPreloadExecutionsResponseBodyExecutions";


export class ListScheduledPreloadExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about prefetch plans returned.
   */
  executions?: ListScheduledPreloadExecutionsResponseBodyExecutions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ET5BF670-09D5-4D0B-BEBY-D96A2A528000
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      executions: 'Executions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executions: { 'type': 'array', 'itemType': ListScheduledPreloadExecutionsResponseBodyExecutions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.executions)) {
      $dara.Model.validateArray(this.executions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

