// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAxbBindFixedLineShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 主叫侧放音编码
   * 
   * @example
   * 1,2,3
   */
  anucode?: string;
  /**
   * @remarks
   * 被叫侧放音编码
   * 
   * @example
   * 1,2
   */
  anucodecalled?: string;
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
   * 过期时间,单位：秒，必须为数字 0：不会自动解绑 非0：自动解绑周期
   * 
   * @example
   * 10
   */
  expiration?: string;
  /**
   * @remarks
   * 扩展参数
   */
  extraShrink?: string;
  /**
   * @remarks
   * 消息请求唯一标识。
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890
   */
  orderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * 接入商自有字段，最大250字符长度
   * 
   * @example
   * remark
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 绑定id
   * 
   * This parameter is required.
   * 
   * @example
   * A100X558X0000400023
   */
  subId?: string;
  /**
   * @remarks
   * 格式为yyyyMMddHHmmss。时间采用北京时间，24小时制。
   * 
   * This parameter is required.
   * 
   * @example
   * 20150920190126
   */
  subts?: string;
  /**
   * @remarks
   * 接通后主叫侧的放音编码
   * 
   * @example
   * 1,2
   */
  TAnucodeConnect?: string;
  /**
   * @remarks
   * 真实号码，telA,telB不允许同时更新
   * 
   * @example
   * 13900000000
   */
  telA?: string;
  /**
   * @remarks
   * 对端号码，telA,telB不允许同时更新
   * 
   * @example
   * 13005711234
   */
  telB?: string;
  /**
   * @remarks
   * 业务时间戳，格式yyyyMMddHHmmssSSS，时间采用北京时间，24小时制，精确至毫秒
   * 
   * This parameter is required.
   * 
   * @example
   * 20161114143116001
   */
  ts?: string;
  static names(): { [key: string]: string } {
    return {
      anucode: 'Anucode',
      anucodecalled: 'Anucodecalled',
      appId: 'AppId',
      expiration: 'Expiration',
      extraShrink: 'Extra',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subId: 'SubId',
      subts: 'Subts',
      TAnucodeConnect: 'TAnucodeConnect',
      telA: 'TelA',
      telB: 'TelB',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anucode: 'string',
      anucodecalled: 'string',
      appId: 'string',
      expiration: 'string',
      extraShrink: 'string',
      orderId: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subId: 'string',
      subts: 'string',
      TAnucodeConnect: 'string',
      telA: 'string',
      telB: 'string',
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

