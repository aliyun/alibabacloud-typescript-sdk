// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiKeyQuotaResponseBodyDataCustomKeyList extends $dara.Model {
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * sk-rds-xxx
   */
  apiKey?: string;
  /**
   * @example
   * 1000000000
   */
  dailyTokenQuota?: number;
  /**
   * @remarks
   * The limit rate.
   * 
   * @example
   * 0.2
   */
  limitRate?: number;
  /**
   * @remarks
   * The quota limiting method. Valid values:
   * 
   * - `ratio`: Sets the limit based on a ratio.
   * 
   * - `fixed`: Sets the limit to a fixed value.
   * 
   * - `auto`: Allocates the limit automatically.
   * 
   * @example
   * fixed
   */
  limitType?: string;
  /**
   * @remarks
   * The token quota for the API key.
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
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

