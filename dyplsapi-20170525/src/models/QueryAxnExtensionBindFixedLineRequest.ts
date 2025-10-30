// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAxnExtensionBindFixedLineRequest extends $dara.Model {
  /**
   * @remarks
   * 号池ID
   * 
   * This parameter is required.
   * 
   * @example
   * alitest
   */
  appId?: string;
  /**
   * @remarks
   * 消息请求唯一标识。
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
   * 查询类型。取值： 0：根据绑定ID查询。1：根据X和A/B号码查询
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
   * 绑定ID。QueryType参数为0时必传。
   * 
   * @example
   * A203**************
   */
  subId?: string;
  /**
   * @remarks
   * A号码。QueryType参数为1时必传。
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

