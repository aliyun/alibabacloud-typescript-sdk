// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAppSecurityInfoResponseBodyAppSecurityInfoExtConfig extends $dara.Model {
  tlogRsaSecret?: string;
  static names(): { [key: string]: string } {
    return {
      tlogRsaSecret: 'TlogRsaSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tlogRsaSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppSecurityInfoResponseBodyAppSecurityInfo extends $dara.Model {
  /**
   * @example
   * 123456
   */
  appKey?: string;
  /**
   * @example
   * abc123abc123
   */
  appSecret?: string;
  extConfig?: QueryAppSecurityInfoResponseBodyAppSecurityInfoExtConfig;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      extConfig: 'ExtConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appSecret: 'string',
      extConfig: QueryAppSecurityInfoResponseBodyAppSecurityInfoExtConfig,
    };
  }

  validate() {
    if(this.extConfig && typeof (this.extConfig as any).validate === 'function') {
      (this.extConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppSecurityInfoResponseBody extends $dara.Model {
  appSecurityInfo?: QueryAppSecurityInfoResponseBodyAppSecurityInfo;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appSecurityInfo: 'AppSecurityInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecurityInfo: QueryAppSecurityInfoResponseBodyAppSecurityInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appSecurityInfo && typeof (this.appSecurityInfo as any).validate === 'function') {
      (this.appSecurityInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

