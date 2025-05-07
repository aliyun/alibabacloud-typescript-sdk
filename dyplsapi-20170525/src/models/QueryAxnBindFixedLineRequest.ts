// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAxnBindFixedLineRequest extends $dara.Model {
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
   * 示例值示例值
   */
  orderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * A号码，queryType=1时，必传
   * 
   * @example
   * 15500001111
   */
  phone?: string;
  /**
   * @remarks
   * 查询类型 0：根据绑定id查询 1：根据A号码查询 2：根据X查询
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
   * 绑定id queryType=0时，必传
   * 
   * @example
   * GHX0534X202504221531579290029-2-1-aliaxn
   */
  subId?: string;
  /**
   * @remarks
   * 隐私号码
   * 
   * @example
   * 05718950
   */
  telX?: string;
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

