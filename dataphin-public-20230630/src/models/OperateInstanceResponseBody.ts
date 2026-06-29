// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateInstanceResponseBodyInstanceStatusList extends $dara.Model {
  /**
   * @remarks
   * The display name of the instance.
   * 
   * @example
   * xx测试
   */
  displayName?: string;
  /**
   * @remarks
   * The error message returned when the operation fails.
   * 
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * t_132435
   */
  id?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * The owner of the instance.
   * 
   * @example
   * 121311
   */
  ownerId?: string;
  /**
   * @remarks
   * The owner of the instance.
   * 
   * @example
   * xx测试
   */
  ownerName?: string;
  /**
   * @remarks
   * The result of the operation, which indicates success or failure.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      errorMessage: 'ErrorMessage',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      errorMessage: 'string',
      id: 'string',
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The O&M results of the instances.
   */
  instanceStatusList?: OperateInstanceResponseBodyInstanceStatusList[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceStatusList: 'InstanceStatusList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceStatusList: { 'type': 'array', 'itemType': OperateInstanceResponseBodyInstanceStatusList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatusList)) {
      $dara.Model.validateArray(this.instanceStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

