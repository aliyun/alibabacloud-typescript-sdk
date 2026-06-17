// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoginPolarClawChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The name of the operation.
   * 
   * @example
   * LoginPolarClawChannel
   */
  operation?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD3FA5F3-FAF3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the asynchronous task.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * dc6762fb-20ad-4796-84fe-5c5d0dc413ce
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      operation: 'Operation',
      requestId: 'RequestId',
      state: 'State',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      message: 'string',
      operation: 'string',
      requestId: 'string',
      state: 'string',
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

