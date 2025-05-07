// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAxnExtensionBindFixedLineRequestExtraaxx } from "./UpdateAxnExtensionBindFixedLineRequestExtraaxx";


export class UpdateAxnExtensionBindFixedLineRequest extends $dara.Model {
  /**
   * @remarks
   * 放音编码必须包含3个场景的编码。按照“B->X,A->X,其他号码->X”的顺序填写编码，编码之间以逗号分隔。  AXN分机号业务的放音编码,B->X和其他号码->X的编码一致  比如：“1,2,3”表示B->X放音编号为1，A->X放音编号为2， 其他号码->X放音编号为3
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
   * 单位：秒，必须为数字 0：不会自动解绑 非0：自动解绑周期
   * 
   * @example
   * 60
   */
  expiration?: string;
  /**
   * @remarks
   * AXx的扩展参数项
   */
  extraaxx?: UpdateAxnExtensionBindFixedLineRequestExtraaxx;
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
   * 接入商自有字段，最大100字符长度
   * 
   * @example
   * 1233
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
   * 可参考绑定响应
   */
  subId?: string;
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
   * 接通后主叫侧放音编码  接通后主叫侧放音编码必须包含2个场景的编码。按照“A被叫,其他号码被叫”的顺序填写编码，编码之间以逗号分隔。  比如：“1,2”表示A号码为被叫时主叫侧的放音编号为1，其他号码为被叫时主叫侧的放音编号为2
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
      expiration: 'Expiration',
      extraaxx: 'Extraaxx',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subId: 'SubId',
      subts: 'Subts',
      TAnucodeConnect: 'TAnucodeConnect',
      telA: 'TelA',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anucode: 'string',
      anucodecalled: 'string',
      appId: 'string',
      expiration: 'string',
      extraaxx: UpdateAxnExtensionBindFixedLineRequestExtraaxx,
      orderId: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subId: 'string',
      subts: 'string',
      TAnucodeConnect: 'string',
      telA: 'string',
      ts: 'string',
    };
  }

  validate() {
    if(this.extraaxx && typeof (this.extraaxx as any).validate === 'function') {
      (this.extraaxx as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

