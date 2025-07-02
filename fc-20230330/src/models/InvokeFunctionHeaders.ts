// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeFunctionHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the asynchronous task. You must enable the asynchronous task feature in advance.
   * 
   * >  If you use an SDK to invoke a function, we recommend that you specify a business-related ID to facilitate subsequent operations. For example, a video processing function can use video file names as invocation IDs. This way, you can easily check whether a video is successfully processed or terminated before it is processed. The ID can start only with letters or underscores. An ID can contain *letters, digits (0 - 9), underscores*, and hyphens (-). It can be up to 128 characters in length. If you do not specify the ID of the asynchronous invocation, the system automatically generates an ID.
   * 
   * @example
   * test-id
   */
  xFcAsyncTaskId?: string;
  /**
   * @remarks
   * The type of function invocation. Valid values: Sync and Async.
   * 
   * @example
   * Sync
   */
  xFcInvocationType?: string;
  /**
   * @remarks
   * The log type of function invocation. Valid values: None and Tail.
   * 
   * @example
   * Tail
   */
  xFcLogType?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAsyncTaskId: 'x-fc-async-task-id',
      xFcInvocationType: 'x-fc-invocation-type',
      xFcLogType: 'x-fc-log-type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAsyncTaskId: 'string',
      xFcInvocationType: 'string',
      xFcLogType: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

