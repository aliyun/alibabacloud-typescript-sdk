// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkCreateExtenResponseBodyDataExten extends $dara.Model {
  /**
   * @remarks
   * 语音编码。 1：g729(已弃用) 2：g729,alaw,ulaw 3：alaw,ulaw,g729 4：myopus,alaw,ulaw,g729 5：alaw,ulaw 6：myopus,alaw,ulaw
   * 
   * @example
   * 6
   */
  allow?: number;
  /**
   * @remarks
   * 话机区号
   * 
   * @example
   * 010
   */
  areaCode?: string;
  /**
   * @remarks
   * 话机号码
   * 
   * @example
   * 11354
   */
  extenNumber?: string;
  /**
   * @remarks
   * 是否允许主叫外呼，1：允许；0：不允许。话机类型为IP话机时，可以开启主叫外呼功能，直接通过IP话机进行外呼。若要使用主叫外呼功能，需要开启企业级开关。
   * 
   * @example
   * 1
   */
  isDirect?: number;
  /**
   * @remarks
   * 网络防抖开关，0：关闭；1：开启
   * 
   * @example
   * 0
   */
  jittBuffer?: number;
  /**
   * @remarks
   * 话机密码，密码规则参见企业配置
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * 话机类型。1: IP话机， 2: 软电话
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      allow: 'Allow',
      areaCode: 'AreaCode',
      extenNumber: 'ExtenNumber',
      isDirect: 'IsDirect',
      jittBuffer: 'JittBuffer',
      password: 'Password',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: 'number',
      areaCode: 'string',
      extenNumber: 'string',
      isDirect: 'number',
      jittBuffer: 'number',
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

export class ClinkCreateExtenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * 示例值
   */
  clinkRequestId?: string;
  /**
   * @remarks
   * 分机
   */
  exten?: ClinkCreateExtenResponseBodyDataExten;
  static names(): { [key: string]: string } {
    return {
      clinkRequestId: 'ClinkRequestId',
      exten: 'Exten',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clinkRequestId: 'string',
      exten: ClinkCreateExtenResponseBodyDataExten,
    };
  }

  validate() {
    if(this.exten && typeof (this.exten as any).validate === 'function') {
      (this.exten as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkCreateExtenResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkCreateExtenResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 7BF47617-7851-48F7-A3A1-2021342A78E2
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
      data: ClinkCreateExtenResponseBodyData,
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

