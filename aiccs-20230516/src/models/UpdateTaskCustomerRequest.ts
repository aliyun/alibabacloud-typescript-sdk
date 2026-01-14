// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskCustomerRequestCustomers extends $dara.Model {
  /**
   * @remarks
   * 是否取消外呼 0否，1是
   * 
   * @example
   * 0
   */
  cancel?: number;
  /**
   * @remarks
   * 电话号码
   * 
   * @example
   * 13661109390
   */
  number?: string;
  /**
   * @remarks
   * 需根据具体任务参数要求传输
   * 
   * @example
   * {"test":"234"}
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * 用户自定义标签
   * 
   * @example
   * tag1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      cancel: 'Cancel',
      number: 'Number',
      properties: 'Properties',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancel: 'number',
      number: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tag: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskCustomerRequest extends $dara.Model {
  /**
   * @remarks
   * 外呼客户
   * 
   * This parameter is required.
   */
  customers?: UpdateTaskCustomerRequestCustomers[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * 59
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      customers: 'Customers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customers: { 'type': 'array', 'itemType': UpdateTaskCustomerRequestCustomers },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customers)) {
      $dara.Model.validateArray(this.customers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

