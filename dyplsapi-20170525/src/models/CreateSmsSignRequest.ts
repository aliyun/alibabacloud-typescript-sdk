// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsSignRequest extends $dara.Model {
  /**
   * @remarks
   * 收信人号码
   * 
   * This parameter is required.
   * 
   * @example
   * 178****3614
   */
  calledNo?: string;
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
   * 发信人号码
   * 
   * This parameter is required.
   * 
   * @example
   * 150****6539
   */
  callingNo?: string;
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
  static names(): { [key: string]: string } {
    return {
      calledNo: 'CalledNo',
      callerParentId: 'CallerParentId',
      callingNo: 'CallingNo',
      customerPoolKey: 'CustomerPoolKey',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNo: 'string',
      callerParentId: 'number',
      callingNo: 'string',
      customerPoolKey: 'string',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

