// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendRCSResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值
   */
  bdcust?: string;
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  debug?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
   */
  e?: string;
  extendMap?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
   */
  gateFailMsg?: string;
  /**
   * @example
   * 示例值示例值
   */
  keyString?: string;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  module?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
   */
  partnerId?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      bdcust: 'Bdcust',
      code: 'Code',
      debug: 'Debug',
      e: 'E',
      extendMap: 'ExtendMap',
      gateFailMsg: 'GateFailMsg',
      keyString: 'KeyString',
      message: 'Message',
      module: 'Module',
      partnerId: 'PartnerId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      bdcust: 'string',
      code: 'string',
      debug: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      e: 'string',
      extendMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gateFailMsg: 'string',
      keyString: 'string',
      message: 'string',
      module: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      partnerId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.debug) {
      $dara.Model.validateMap(this.debug);
    }
    if(this.extendMap) {
      $dara.Model.validateMap(this.extendMap);
    }
    if(this.module) {
      $dara.Model.validateMap(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendRCSResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: SendRCSResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: SendRCSResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

