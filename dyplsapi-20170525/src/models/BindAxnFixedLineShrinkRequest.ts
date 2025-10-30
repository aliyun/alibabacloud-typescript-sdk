// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAxnFixedLineShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 放音编码必须包含3个场景的编码。按照“B->X,A->X,其他号码->X”的顺序填写编码，编码之间以逗号分隔。  比如：“1,2,3”表示B->X放音编号为1，A->X放音编号为2， 其他号码->X放音编号为3
   * 
   * This parameter is required.
   * 
   * @example
   * 10001,10002,10003
   */
  anucode?: string;
  /**
   * @remarks
   * 被叫侧放音编码  被叫放音编码必须包含2个场景的编码。按照“A被叫,其他号码被叫”的顺序填写编码，编码之间以逗号分隔。  比如：“1,2”表示A号码为被叫侧接听时的放音编号为1，其他号码为被叫侧接听时的放音编号为2
   * 
   * @example
   * 10001,10002
   */
  anucodecalled?: string;
  /**
   * @remarks
   * 号池ID。
   * 
   * This parameter is required.
   * 
   * @example
   * alitest
   */
  appId?: string;
  /**
   * @remarks
   * 去掉“0” 例如：北京（10）；在平台分配X号码模式中，平台从号码池中分配该地区的X号码，避免产生呼叫长途费
   * 
   * @example
   * 10
   */
  areacode?: string;
  /**
   * @remarks
   * 绑定类型，值如下： mode101：客户携带X号码 mode102：平台分配X号码
   * 
   * This parameter is required.
   * 
   * @example
   * mode101
   */
  bindType?: string;
  /**
   * @remarks
   * 位：秒，必须为数字 0：不会自动解绑 非0：自动解绑周期
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  expiration?: string;
  /**
   * @remarks
   * 扩展参数
   */
  extraShrink?: string;
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
  /**
   * @remarks
   * 接入商自有字段，最大250字符长度
   * 
   * @example
   * 12444
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 格式为yyyyMMddHHmmss。时间采用北京时间，24小时制。
   * 
   * This parameter is required.
   * 
   * @example
   * 20250421141723098
   */
  subts?: string;
  /**
   * @remarks
   * 接通后主叫侧放音编码  接通后主叫侧放音编码必须包含2个场景的编码。按照“A被叫,其他号码被叫”的顺序填写编码，编码之间以逗号分隔。  比如：“1,2”表示A号码为被叫时主叫侧的放音编号为1，其他号码被叫为被叫时主叫侧的放音编号为2
   * 
   * @example
   * 10001,10002
   */
  TAnucodeConnect?: string;
  /**
   * @remarks
   * A号码
   * 
   * This parameter is required.
   * 
   * @example
   * 15500001111
   */
  telA?: string;
  /**
   * @remarks
   * N号码
   * 
   * @example
   * 15500002222
   */
  telB?: string;
  /**
   * @remarks
   * X号码； 平台分配号码模式下，该参数可不带，系统忽略该参数
   * 
   * @example
   * 0571409312
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
      anucode: 'Anucode',
      anucodecalled: 'Anucodecalled',
      appId: 'AppId',
      areacode: 'Areacode',
      bindType: 'BindType',
      expiration: 'Expiration',
      extraShrink: 'Extra',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subts: 'Subts',
      TAnucodeConnect: 'TAnucodeConnect',
      telA: 'TelA',
      telB: 'TelB',
      telX: 'TelX',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anucode: 'string',
      anucodecalled: 'string',
      appId: 'string',
      areacode: 'string',
      bindType: 'string',
      expiration: 'string',
      extraShrink: 'string',
      orderId: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subts: 'string',
      TAnucodeConnect: 'string',
      telA: 'string',
      telB: 'string',
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

