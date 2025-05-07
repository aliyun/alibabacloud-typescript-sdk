// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAXBCallRequest extends $dara.Model {
  /**
   * @remarks
   * authId绑定关系BX唯一id
   * 
   * This parameter is required.
   * 
   * @example
   * 12353
   */
  authId?: string;
  /**
   * @remarks
   * 客户uid
   * 
   * @example
   * -
   */
  callerParentId?: number;
  /**
   * @remarks
   * 号码池key
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  /**
   * @remarks
   * 绑定关系过期失效时间： 取值必须大于0； 单位：秒，ct_time + expiration = 自动解绑时间
   * 
   * This parameter is required.
   * 
   * @example
   * 7200
   */
  expiration?: number;
  ownerId?: number;
  /**
   * @remarks
   * 请求去重ID, reqId最大长度为20位,接入方需要保持原子性
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 客户A号码
   * 
   * This parameter is required.
   * 
   * @example
   * 13*******43
   */
  telA?: string;
  /**
   * @remarks
   * 客户自定义参数回调带回
   * 
   * @example
   * 000
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      expiration: 'Expiration',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      telA: 'TelA',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'string',
      callerParentId: 'number',
      customerPoolKey: 'string',
      expiration: 'number',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      telA: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

