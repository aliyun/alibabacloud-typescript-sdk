// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysResponseBodyDataCustomKeyList extends $dara.Model {
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * sk-rds-*****
   */
  apiKey?: string;
  /**
   * @example
   * 100000000
   */
  dailyTokenQuota?: number;
  /**
   * @remarks
   * Specifies if the API key is rate-limited.
   * 
   * @example
   * false
   */
  isRateLimited?: boolean;
  /**
   * @remarks
   * The key name.
   * 
   * @example
   * api-*****
   */
  keyName?: string;
  /**
   * @remarks
   * The limit, specified as a ratio in decimal format. This parameter is used when LimitType is ratio.
   * 
   * @example
   * 0.2
   */
  limitRate?: number;
  /**
   * @remarks
   * The limit type. Valid values:
   * 
   * - **fixed**: A fixed value.
   * 
   * - **ratio**: A percentage of the total quota.
   * 
   * - **auto**: The quota is allocated automatically.
   * 
   * @example
   * fixed
   */
  limitType?: string;
  /**
   * @remarks
   * The alarm threshold percentage. For example, a value of 80 indicates that an alarm is triggered when usage reaches 80% of the quota. The alarm clears when usage falls below this threshold.
   * 
   * @example
   * 80
   */
  thresholdPercent?: number;
  /**
   * @remarks
   * The token quota.
   * 
   * @example
   * 10000
   */
  tokenQuota?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      dailyTokenQuota: 'DailyTokenQuota',
      isRateLimited: 'IsRateLimited',
      keyName: 'KeyName',
      limitRate: 'LimitRate',
      limitType: 'LimitType',
      thresholdPercent: 'ThresholdPercent',
      tokenQuota: 'TokenQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      dailyTokenQuota: 'number',
      isRateLimited: 'boolean',
      keyName: 'string',
      limitRate: 'number',
      limitType: 'string',
      thresholdPercent: 'number',
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

export class ListApiKeysResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The base URL for model calls.
   * 
   * @example
   * http://xxx.yy/v1
   */
  baseUrl?: string;
  /**
   * @remarks
   * The custom API key list.
   */
  customKeyList?: ListApiKeysResponseBodyDataCustomKeyList[];
  /**
   * @example
   * 100000000
   */
  dailyTokenQuota?: number;
  /**
   * @remarks
   * Specifies if the system-generated key is rate-limited.
   * 
   * @example
   * false
   */
  isRateLimited?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The system-generated key.
   * 
   * @example
   * sk-rds-xxx
   */
  systemApiKey?: string;
  /**
   * @remarks
   * The alarm threshold percentage for the SystemApiKey. For example, a value of 80 indicates that an alarm is triggered when usage reaches 80% of the quota. The alarm clears when usage falls below this threshold.
   * 
   * @example
   * 80
   */
  thresholdPercent?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 138
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'BaseUrl',
      customKeyList: 'CustomKeyList',
      dailyTokenQuota: 'DailyTokenQuota',
      isRateLimited: 'IsRateLimited',
      page: 'Page',
      pageSize: 'PageSize',
      systemApiKey: 'SystemApiKey',
      thresholdPercent: 'ThresholdPercent',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      customKeyList: { 'type': 'array', 'itemType': ListApiKeysResponseBodyDataCustomKeyList },
      dailyTokenQuota: 'number',
      isRateLimited: 'boolean',
      page: 'number',
      pageSize: 'number',
      systemApiKey: 'string',
      thresholdPercent: 'number',
      total: 'number',
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

export class ListApiKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: ListApiKeysResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the request succeeded.
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
      data: ListApiKeysResponseBodyData,
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

