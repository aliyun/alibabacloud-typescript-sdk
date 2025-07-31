// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateInstanceResponseBodyInstanceStatusList extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @example
   * t_132435
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 121311
   */
  ownerId?: string;
  ownerName?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  instanceStatusList?: OperateInstanceResponseBodyInstanceStatusList[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
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

