// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAirflowLoginTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The endpoint that is used to access the Airflow instance.
   * 
   * @example
   * https://data-dms.aliyuncs.com/airflow/x/xxxx/af-ehrmszbxxxxxxx
   */
  host?: string;
  /**
   * @remarks
   * The generated token.
   * 
   * @example
   * f432d77de03b6b95fc24f91414e29c
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAirflowLoginTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result of the site monitoring task.
   */
  data?: CreateAirflowLoginTokenResponseBodyData;
  /**
   * @remarks
   * The error code returned if the call failed. Variable description:
   * 
   * *   If the request was successful, this parameter is not returned.
   * *   This parameter is returned only if the request failed.
   * 
   * For more information, see the "Error codes" section in this topic.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The description of the error code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 4284D079-30F4-5B23-ADC4-28F291622C9A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   True
   * *   False
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateAirflowLoginTokenResponseBodyData,
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
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

