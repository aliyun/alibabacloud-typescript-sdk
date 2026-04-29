// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudCreateExtenRequest extends $dara.Model {
  /**
   * @remarks
   * 允许的语音编码,支持格式: 1. g729 2. g729,alaw,ulaw 3. alaw,ulaw,g729 4. alaw,ulaw 5. myopus,alaw,ulaw5. myopus,alaw,ulaw6. myopus,g729,alaw,ulaw 7. myopus,g729 公网+远程话机支持配置1/2/3;专线+远程话机支持配置1/2;公网+软电话支持配置4;专线+软电话支持配置5;
   * 
   * @example
   * 1
   */
  allow?: string;
  /**
   * @remarks
   * 区号
   * 
   * This parameter is required.
   * 
   * @example
   * 010
   */
  areaCode?: string;
  /**
   * @remarks
   * 呼叫权限；0：无限制，1：国内长途，2：国内本市，3：内部呼叫，默认无限制
   * 
   * @example
   * 0
   */
  callPower?: string;
  /**
   * @remarks
   * 降噪开关；0:关闭 1:开启 (该参数只有在类型为注册到webrtc才有效)
   * 
   * @example
   * 0
   */
  denoise?: string;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 分机号,3-11位
   * 
   * This parameter is required.
   * 
   * @example
   * 9000
   */
  exten?: string;
  /**
   * @remarks
   * iad网关；该参数只有在类型为，注册到IAD分机，才有效
   * 
   * @example
   * ""
   */
  iadName?: string;
  /**
   * @remarks
   * 呼入是否录音；0：不录用，1：录音，默认录音
   * 
   * @example
   * 1
   */
  ibRecord?: number;
  /**
   * @remarks
   * 是否允许摘机外呼，0：不允许，1：可以，默认允许
   * 
   * @example
   * 1
   */
  isDirect?: number;
  /**
   * @remarks
   * 是否允许外呼；0：不允许，1：可以，默认允许
   * 
   * @example
   * 1
   */
  isOb?: string;
  /**
   * @remarks
   * 网络防抖；0：关闭，1：开启，默认关闭
   * 
   * @example
   * 0
   */
  jitterBuffer?: number;
  /**
   * @remarks
   * 外呼是否录音；0：不录音，1：录音，默认录音
   * 
   * @example
   * 1
   */
  obRecord?: number;
  ownerId?: number;
  /**
   * @remarks
   * 密码
   * 
   * This parameter is required.
   * 
   * @example
   * Aa248236
   */
  password?: string;
  /**
   * @remarks
   * 属性
   * 
   * @example
   * {}
   */
  property?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 类型；1. 注册到IAD分机 2.注册到webrtc 3.注册到远程话机
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      allow: 'Allow',
      areaCode: 'AreaCode',
      callPower: 'CallPower',
      denoise: 'Denoise',
      enterpriseId: 'EnterpriseId',
      exten: 'Exten',
      iadName: 'IadName',
      ibRecord: 'IbRecord',
      isDirect: 'IsDirect',
      isOb: 'IsOb',
      jitterBuffer: 'JitterBuffer',
      obRecord: 'ObRecord',
      ownerId: 'OwnerId',
      password: 'Password',
      property: 'Property',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: 'string',
      areaCode: 'string',
      callPower: 'string',
      denoise: 'string',
      enterpriseId: 'number',
      exten: 'string',
      iadName: 'string',
      ibRecord: 'number',
      isDirect: 'number',
      isOb: 'string',
      jitterBuffer: 'number',
      obRecord: 'number',
      ownerId: 'number',
      password: 'string',
      property: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

