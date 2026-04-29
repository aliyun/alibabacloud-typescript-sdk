// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListEnterpriseTimeRequest extends $dara.Model {
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 时间条件名称；同一呼叫中心下不能重复
   * 
   * @example
   * test-name2
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * 时间条件优先级；同一呼叫中心下不能重复、 值从1开始，值越小优先级越高
   * 
   * @example
   * 1
   */
  priority?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 时间条件类型；1:按照星期配置 2:按照固定时间配置
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'EnterpriseId',
      name: 'Name',
      ownerId: 'OwnerId',
      priority: 'Priority',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      name: 'string',
      ownerId: 'number',
      priority: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

