// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestAgenticDataSourceConnectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the connection test result. This parameter is usually empty when the connection is successful, and returns the cause when the connection fails.
   * 
   * @example
   * Connection timed out. Check the connection endpoint
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the data source is connected.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class TestAgenticDataSourceConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The connection test result.
   */
  data?: TestAgenticDataSourceConnectionResponseBodyData;
  /**
   * @remarks
   * The error code returned when the call fails. This parameter is empty when the call is successful.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails. This parameter is empty when the call is successful.
   * 
   * @example
   * The parameter is invalid
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate the current call.
   * 
   * @example
   * request-1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current call is successful.
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
      data: TestAgenticDataSourceConnectionResponseBodyData,
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

