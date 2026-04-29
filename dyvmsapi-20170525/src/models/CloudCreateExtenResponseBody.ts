// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudCreateExtenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 语音编码
   * 
   * @example
   * alaw,ulaw
   */
  allow?: string;
  /**
   * @remarks
   * 区号
   * 
   * @example
   * 010
   */
  areaCode?: string;
  /**
   * @remarks
   * 绑定的agent-gateway
   * 
   * @example
   * 28
   */
  bindGatewayId?: number;
  /**
   * @remarks
   * 呼叫权限，0：无限制，1：国内长途，2：国内本市，3：内部呼叫，默认无限制
   * 
   * @example
   * 0
   */
  callPower?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2026-03-30 06:09:04
   */
  createTime?: string;
  /**
   * @remarks
   * 降噪开关 0:关闭 1:开启 默认关闭(该参数只有在类型为注册到webrtc才有效)
   * 
   * @example
   * 0
   */
  denoise?: number;
  /**
   * @remarks
   * 企业编号
   * 
   * @example
   * 7000002
   */
  enterpriseId?: string;
  /**
   * @remarks
   * 分机号,3-11位
   * 
   * @example
   * 9000
   */
  exten?: string;
  /**
   * @remarks
   * 呼入是否录音，0：不录用，1：录音，默认录音
   * 
   * @example
   * 1
   */
  ibRecord?: number;
  /**
   * @remarks
   * 分机号id
   * 
   * @example
   * 336450
   */
  id?: number;
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
   * 是否允许外呼，0：不允许，1：可以，默认允许
   * 
   * @example
   * 1
   */
  isOb?: string;
  /**
   * @remarks
   * 外呼是否录音，0：不录音，1：录音，默认录音
   * 
   * @example
   * 1
   */
  obRecord?: number;
  /**
   * @remarks
   * 密码
   * 
   * @example
   * Aa248236
   */
  password?: string;
  /**
   * @remarks
   * 类型，1. 注册到IAD分机 2.注册到webrtc 3.注册到远程话机
   * 
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      allow: 'Allow',
      areaCode: 'AreaCode',
      bindGatewayId: 'BindGatewayId',
      callPower: 'CallPower',
      createTime: 'CreateTime',
      denoise: 'Denoise',
      enterpriseId: 'EnterpriseId',
      exten: 'Exten',
      ibRecord: 'IbRecord',
      id: 'Id',
      isDirect: 'IsDirect',
      isOb: 'IsOb',
      obRecord: 'ObRecord',
      password: 'Password',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: 'string',
      areaCode: 'string',
      bindGatewayId: 'number',
      callPower: 'string',
      createTime: 'string',
      denoise: 'number',
      enterpriseId: 'string',
      exten: 'string',
      ibRecord: 'number',
      id: 'number',
      isDirect: 'number',
      isOb: 'string',
      obRecord: 'number',
      password: 'string',
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

export class CloudCreateExtenResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudCreateExtenResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudCreateExtenResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

