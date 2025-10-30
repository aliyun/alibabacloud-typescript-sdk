// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAxbBindFixedLineRequest extends $dara.Model {
  /**
   * @remarks
   * 号池ID。
   * 
   * This parameter is required.
   * 
   * @example
   * ALPT_1234
   */
  appId?: string;
  /**
   * @remarks
   * 消息请求唯一标识。
   * 
   * This parameter is required.
   * 
   * @example
   * 3ererrrdrrrr
   */
  orderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * A/B号码，queryType=1时，必传
   * 
   * @example
   * 示例值
   */
  phone?: string;
  /**
   * @remarks
   * 查询类型 0：根据绑定id查询 1：根据X和A/B号码查询
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
   * 绑定id， queryType=0时，必传
   * 
   * @example
   * A20304o0200303004j
   */
  subId?: string;
  /**
   * @remarks
   * x号码，queryType=1时，必传
   * 
   * @example
   * 示例值示例值示例值
   */
  telX?: string;
  /**
   * @remarks
   * 格式yyyyMMddHHmmssSSS，时间采用北京时间，24小时制，精确至毫秒
   * 
   * This parameter is required.
   * 
   * @example
   * 20161114143116001
   */
  ts?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      phone: 'Phone',
      queryType: 'QueryType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subId: 'SubId',
      telX: 'TelX',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      orderId: 'string',
      ownerId: 'number',
      phone: 'string',
      queryType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subId: 'string',
      telX: 'string',
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

