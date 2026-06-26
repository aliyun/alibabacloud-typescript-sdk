// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeFunctionHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * Asynchronous task ID. Enable asynchronous tasks beforehand.
   * 
   * > When using the SDK for invocation, set a business-related ID. This helps with subsequent operations on the execution. For example, a video processing function can use the video filename as the invocation ID. Use this ID to check if the video processing is complete or to stop it. The ID naming convention must start with an English letter (uppercase or lowercase) or an underscore (_). It can contain English letters (uppercase or lowercase), digits (0-9), underscores (_), and hyphens (-). The ID cannot exceed 128 characters. If you do not set an ID for asynchronous invocation, the system automatically generates one.
   * 
   * @example
   * test-id
   */
  xFcAsyncTaskId?: string;
  /**
   * @remarks
   * Function invocation type. Sync or Async.
   * 
   * @example
   * Sync
   */
  xFcInvocationType?: string;
  /**
   * @remarks
   * Log type returned by function invocation. None or Tail.
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

