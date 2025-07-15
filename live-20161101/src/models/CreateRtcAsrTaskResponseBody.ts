// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRtcAsrTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the request. If success is returned, the request is successful. If an error message is returned, the request failed.
   * 
   * @example
   * success
   */
  description?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7FF5417D-06E9-5A2C-9A70-581F6149E6C1
   */
  requestId?: string;
  /**
   * @remarks
   * The returned HTTP status code. HTTP status code 2000 indicates that the request is successful. If another HTTP status code is returned, the request failed.
   * 
   * @example
   * 2000
   */
  retCode?: number;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * asr-a6ac15e0-9118-4b4c-9e64-306163a0****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      retCode: 'RetCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      requestId: 'string',
      retCode: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

