// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoginPolarClawChannelResponseBody extends $dara.Model {
  /**
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * LoginPolarClawChannel
   */
  operation?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CD3FA5F3-FAF3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  /**
   * @example
   * running
   */
  state?: string;
  /**
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

