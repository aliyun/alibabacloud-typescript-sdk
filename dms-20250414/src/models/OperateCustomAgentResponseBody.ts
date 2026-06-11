// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateCustomAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Custom Agent ID
   * 
   * @example
   * ca-4y3ca4khkcu**********ysf
   */
  customAgentId?: string;
  /**
   * @remarks
   * Operation message
   * 
   * @example
   * Custom agent successfully released
   */
  message?: string;
  /**
   * @remarks
   * Is the operation successful?
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      message: 'string',
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

export class OperateCustomAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return struct
   */
  data?: OperateCustomAgentResponseBodyData;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message returned when the call fails.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Is the request successful? Return values are as follows:
   * 
   * - True: The request is successful.
   * 
   * - False: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OperateCustomAgentResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

