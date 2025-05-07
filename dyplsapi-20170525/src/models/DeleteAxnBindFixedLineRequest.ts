// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAxnBindFixedLineRequest extends $dara.Model {
  /**
   * @remarks
   * 业务id标识，由阿里云分配给客户侧
   * 
   * This parameter is required.
   * 
   * @example
   * alitest
   */
  appId?: string;
  /**
   * @remarks
   * 消息请求唯一标识
   * 
   * This parameter is required.
   * 
   * @example
   * 12345dkwkd99d
   */
  orderId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 绑定id
   * 
   * This parameter is required.
   * 
   * @example
   * GHX0534X202504221531579290029-2-1-aliaxn
   */
  subId?: string;
  /**
   * @remarks
   * 格式yyyyMMddHHmmssSSS，时间采用北京时间，24小时制，精确至毫秒
   * 
   * This parameter is required.
   * 
   * @example
   * 20250421141723098
   */
  ts?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subId: 'SubId',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      orderId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subId: 'string',
      ts: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

