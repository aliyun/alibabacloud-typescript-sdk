// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeChatAgentStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Current agent status. Valid values:
   * - **0**: Offline
   * - **3**: On break
   * 
   * @example
   * 0
   */
  data?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * DF6A3FB7-A5AA-43BE-A65B
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the API call succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

