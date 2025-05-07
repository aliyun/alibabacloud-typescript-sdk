// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListXTelephonesRequest extends $dara.Model {
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
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  ownerId?: number;
  /**
   * @remarks
   * 页码从1开始
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * 每页条数
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerParentId: 'number',
      customerPoolKey: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
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

