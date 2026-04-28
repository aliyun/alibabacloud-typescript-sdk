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
  isRateLimited?: boolean;
  /**
   * @example
   * api-*****
   */
  keyName?: string;
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
  thresholdPercent?: number;
  /**
   * @example
   * 10000
   */
  tokenQuota?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
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
   * @example
   * http://xxx.yy/v1
   */
  baseUrl?: string;
  customKeyList?: ListApiKeysResponseBodyDataCustomKeyList[];
  isRateLimited?: boolean;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * sk-rds-xxx
   */
  systemApiKey?: string;
  thresholdPercent?: number;
  /**
   * @example
   * 138
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'BaseUrl',
      customKeyList: 'CustomKeyList',
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
  data?: ListApiKeysResponseBodyData;
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

