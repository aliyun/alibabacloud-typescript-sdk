// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysResponseBodyDataCustomKeyList extends $dara.Model {
  /**
   * @remarks
   * API Key
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
   * Indicates whether the key is throttled.
   * 
   * @example
   * false
   */
  isRateLimited?: boolean;
  /**
   * @remarks
   * The name of the API key.
   * 
   * @example
   * api-*****
   */
  keyName?: string;
  /**
   * @remarks
   * The quota ratio.
   * 
   * @example
   * 0.2
   */
  limitRate?: number;
  /**
   * @remarks
   * The quota type. Valid values:
   * - **fixed**: fixed value.
   * - **ratio**: percentage.
   * - **auto**: automatic allocation.
   * 
   * @example
   * fixed
   */
  limitType?: string;
  /**
   * @remarks
   * The alert threshold percentage. For example, 80 indicates that an alert is triggered when the usage reaches 80%. The alert is reset when the usage drops below this percentage.
   * 
   * @example
   * 80
   */
  thresholdPercent?: number;
  /**
   * @remarks
   * The quota of the current key.
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
   * The URL for model invocation.
   * 
   * @example
   * http://xxx.yy/v1
   */
  baseUrl?: string;
  /**
   * @remarks
   * The list of custom API keys.
   */
  customKeyList?: ListApiKeysResponseBodyDataCustomKeyList[];
  /**
   * @example
   * 100000000
   */
  dailyTokenQuota?: number;
  /**
   * @remarks
   * Indicates whether the key is throttled.
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
   * The number of records per page.
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
   * The alert threshold percentage for SystemApiKey. For example, 80 indicates that an alert is triggered when the usage reaches 80%. The alert is reset when the usage drops below this percentage.
   * 
   * @example
   * 80
   */
  thresholdPercent?: number;
  /**
   * @remarks
   * The total number of records.
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
   * The query result.
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
   * Id of the request
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result.
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

