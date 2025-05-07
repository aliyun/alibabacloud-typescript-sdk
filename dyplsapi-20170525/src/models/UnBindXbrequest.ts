// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnBindXBRequest extends $dara.Model {
  /**
   * @remarks
   * authId绑定关系BX唯一id
   * 
   * This parameter is required.
   * 
   * @example
   * 34*****46
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
   * X号码
   * 
   * This parameter is required.
   * 
   * @example
   * 17*******22
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'string',
      callerParentId: 'number',
      customerPoolKey: 'string',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      telX: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

