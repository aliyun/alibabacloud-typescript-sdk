// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListExtensResponseBodyDataExtens extends $dara.Model {
  /**
   * @remarks
   * 语音编码。1：g729(已弃用)；2：g729,alaw,ulaw；3：alaw,ulaw,g729；4：myopus,alaw,ulaw,g729；5：alaw,ulaw；6：myopus,alaw,ulaw
   * 
   * @example
   * 2
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
   * xxx
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

export class ClinkListExtensResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * xxx
   */
  clinkRequestId?: string;
  /**
   * @remarks
   * 话机对象列表
   */
  extens?: ClinkListExtensResponseBodyDataExtens[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 38
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clinkRequestId: 'ClinkRequestId',
      extens: 'Extens',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clinkRequestId: 'string',
      extens: { 'type': 'array', 'itemType': ClinkListExtensResponseBodyDataExtens },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.extens)) {
      $dara.Model.validateArray(this.extens);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListExtensResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkListExtensResponseBodyData;
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
      data: ClinkListExtensResponseBodyData,
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

