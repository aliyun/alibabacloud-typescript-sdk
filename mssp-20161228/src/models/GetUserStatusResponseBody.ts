// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Customer type.
   * 
   * @example
   * official
   */
  customerType?: string;
  /**
   * @remarks
   * End date.
   * 
   * @example
   * 2023-09-28 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * 726cec3c-4887-4354-8c21-c0ad12e10fc2
   */
  instanceId?: string;
  /**
   * @remarks
   * Start date.
   * 
   * @example
   * 2023-09-20 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * FirstLogin
   */
  status?: string;
  /**
   * @remarks
   * Version.
   * 
   * @example
   * mdrjichu
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      customerType: 'CustomerType',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerType: 'string',
      endDate: 'string',
      instanceId: 'string',
      startDate: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetUserStatusResponseBodyData;
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
   * Prompt message of the returned result.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * D8DBD769-613E-5E6B-A9FD-B622375B152D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
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
      data: GetUserStatusResponseBodyData,
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

