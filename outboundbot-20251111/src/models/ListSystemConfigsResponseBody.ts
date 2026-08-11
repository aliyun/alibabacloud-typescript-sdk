// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemConfigsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time, in millisecond-level timestamp.
   * 
   * @example
   * 1786085104904
   */
  createdTime?: string;
  /**
   * @remarks
   * The system configuration name.\\
   * callableTime: the outbound job window.\\
   * calleeDailyAttemptLimit: the maximum number of daily calls to a single callee number.
   * 
   * @example
   * callableTime
   */
  name?: string;
  /**
   * @remarks
   * The configuration type ID.\\
   * If ObjectType is set to INSTANCE, this parameter specifies the instance ID.\\
   * If ObjectType is set to TENANT, this parameter specifies the tenant ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  objectId?: string;
  /**
   * @remarks
   * The configuration type.\\
   * INSTANCE: instance-level.\\
   * TENANT: tenant-level.
   * 
   * @example
   * INSTANCE
   */
  objectType?: string;
  /**
   * @remarks
   * The update time, in millisecond-level timestamp.
   * 
   * @example
   * 1786085104904
   */
  updatedTime?: string;
  /**
   * @remarks
   * The system configuration content.
   * 
   * @example
   * 5
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      name: 'Name',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      updatedTime: 'UpdatedTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      name: 'string',
      objectId: 'string',
      objectType: 'string',
      updatedTime: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListSystemConfigsResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Instance does not exist. Instance=outb001
   */
  message?: string;
  /**
   * @remarks
   * The list of variable values in the error message.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FDAC7-13C5-1B64-A853-999DF105B9EF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
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
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListSystemConfigsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

