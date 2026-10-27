// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeFunctionHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the asynchronous task. You must enable asynchronous tasks in advance.
   * 
   * > We recommend that you set a business-related ID when you use the SDK to invoke the function, which facilitates subsequent operations on the execution. For example, a video processing function can use the video file name as the invoke ID, through which you can check whether the video processing is complete or stop the video processing. The ID must start with an uppercase or lowercase letter or an underscore (_), and can contain uppercase and lowercase letters, digits (0-9), underscores (_), and hyphens (-). It can be up to 128 characters in length. If you do not specify an ID for the asynchronous invoke, the system automatically generates one.
   * 
   * @example
   * test-id
   */
  xFcAsyncTaskId?: string;
  /**
   * @remarks
   * The function invoke type. Valid values: Sync and Async.
   * 
   * @example
   * Sync
   */
  xFcInvocationType?: string;
  /**
   * @remarks
   * The log type returned for function invoke. Valid values: None and Tail.
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

