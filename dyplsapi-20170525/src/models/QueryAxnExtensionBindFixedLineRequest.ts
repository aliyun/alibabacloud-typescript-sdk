// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAxnExtensionBindFixedLineRequest extends $dara.Model {
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
   * 消息请求标识
   * 
   * This parameter is required.
   * 
   * @example
   * 12345dkwkd99d
   */
  orderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * 查询类型 0：根据绑定id查询 1：根据A号码查询
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  queryType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 绑定id，queryType=0时，必传
   * 
   * @example
   * 可参考绑定响应
   */
  subId?: string;
  /**
   * @remarks
   * A号码，queryType=1时，必传
   * 
   * @example
   * 15500001111
   */
  telA?: string;
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
      queryType: 'QueryType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subId: 'SubId',
      telA: 'TelA',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      orderId: 'string',
      ownerId: 'number',
      queryType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subId: 'string',
      telA: 'string',
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

