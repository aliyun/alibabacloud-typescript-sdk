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
   * @remarks
   * The daily quota of the API key.
   * 
   * @example
   * 1000000000
   */
  dailyTokenQuota?: number;
  /**
   * @remarks
   * The quota limit ratio.
   * 
   * @example
   * 0.2
   */
  limitRate?: number;
  /**
   * @remarks
   * The quota limit type. Valid values:
   * - ratio: Proportional limit.
   * - fixed: Fixed value.
   * - auto: Automatic allocation.
   * 
   * @example
   * fixed
   */
  limitType?: string;
  /**
   * @remarks
   * The quota limit of the current key.
   * 
   * @example
   * 10000
   */
  tokenQuota?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      dailyTokenQuota: 'DailyTokenQuota',
      limitRate: 'LimitRate',
      limitType: 'LimitType',
      tokenQuota: 'TokenQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      dailyTokenQuota: 'number',
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
  /**
   * @remarks
   * The list of custom API keys.
   */
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
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateApiKeyQuotaResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
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
   * @remarks
   * Indicates whether the request is successful.
   * 
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

