// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduleWorkItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether a new plan is created in this request.
   * 
   * @example
   * false
   */
  created?: boolean;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The ID of the physical plan.
   * 
   * @example
   * example
   */
  planId?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The revision number.
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * example
   */
  runId?: string;
  /**
   * @remarks
   * The run sequence number.
   * 
   * @example
   * 1
   */
  runSeq?: number;
  /**
   * @remarks
   * The ID of the work item.
   * 
   * @example
   * example
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      created: 'created',
      message: 'message',
      planId: 'planId',
      requestId: 'requestId',
      revision: 'revision',
      runId: 'runId',
      runSeq: 'runSeq',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      created: 'boolean',
      message: 'string',
      planId: 'string',
      requestId: 'string',
      revision: 'number',
      runId: 'string',
      runSeq: 'number',
      workItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

