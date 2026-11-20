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
   * @remarks
   * The daily token quota.
   * 
   * @example
   * 100000000
   */
  dailyTokenQuota?: number;
  /**
   * @remarks
   * Indicates whether the API key is throttled.
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
   * The quota limit percentage.
   * 
   * @example
   * 0.2
   */
  limitRate?: number;
  /**
   * @remarks
   * The quota limit type. Valid values:
   * - **fixed**: Fixed value.
   * - **ratio**: Percentage.
   * - **auto**: Automatic allocation.
   * 
   * @example
   * fixed
   */
  limitType?: string;
  /**
   * @remarks
   * The ARN of the RAM role bound to the custom API key.
   * 
   * @example
   * acs:ram::1234567890123456:role/example-role
   */
  roleArn?: string;
  /**
   * @remarks
   * The alert threshold percentage. A value of 80 indicates that an alert is triggered when the usage reaches 80%. The alert is reset when the usage drops below this percentage.
   * 
   * @example
   * 80
   */
  thresholdPercent?: number;
  /**
   * @remarks
   * The token quota of the current API key.
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
      roleArn: 'RoleArn',
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
      roleArn: 'string',
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
   * @remarks
   * The daily token quota of the system API key.
   * 
   * @example
   * 100000000
   */
  dailyTokenQuota?: number;
  /**
   * @remarks
   * Indicates whether the API key is throttled.
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
   * The system-generated API key.
   * 
   * @example
   * sk-rds-xxx
   */
  systemApiKey?: string;
  /**
   * @remarks
   * The alert threshold percentage for the system API key. A value of 80 indicates that an alert is triggered when the usage reaches 80%. The alert is reset when the usage drops below this percentage.
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
   * The query result.
   */
  data?: ListApiKeysResponseBodyData;
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

