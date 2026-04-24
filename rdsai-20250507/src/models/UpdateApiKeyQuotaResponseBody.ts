// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiKeyQuotaResponseBodyDataCustomKeyList extends $dara.Model {
  /**
   * @remarks
   * Api Key
   * 
   * @example
   * sk-rds-xxx
   */
  apiKey?: string;
  /**
   * @example
   * 0.2
   */
  limitRate?: number;
  /**
   * @example
   * fixed
   */
  limitType?: string;
  /**
   * @example
   * 10000
   */
  tokenQuota?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      limitRate: 'LimitRate',
      limitType: 'LimitType',
      tokenQuota: 'TokenQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      limitRate: 'number',
      limitType: 'string',
      tokenQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApiKeyQuotaResponseBodyData extends $dara.Model {
  customKeyList?: UpdateApiKeyQuotaResponseBodyDataCustomKeyList[];
  static names(): { [key: string]: string } {
    return {
      customKeyList: 'CustomKeyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customKeyList: { 'type': 'array', 'itemType': UpdateApiKeyQuotaResponseBodyDataCustomKeyList },
    };
  }

  validate() {
    if(Array.isArray(this.customKeyList)) {
      $dara.Model.validateArray(this.customKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApiKeyQuotaResponseBody extends $dara.Model {
  data?: UpdateApiKeyQuotaResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateApiKeyQuotaResponseBodyData,
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

