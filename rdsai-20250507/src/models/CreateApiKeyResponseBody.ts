// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiKeyResponseBodyDataCustomKeyList extends $dara.Model {
  /**
   * @remarks
   * Api Key
   * 
   * @example
   * sk-rds-*****
   */
  apiKey?: string;
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
  /**
   * @example
   * 100000
   */
  tokenQuota?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      keyName: 'KeyName',
      limitRate: 'LimitRate',
      limitType: 'LimitType',
      tokenQuota: 'TokenQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      keyName: 'string',
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

export class CreateApiKeyResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://xxx.yy/v1
   */
  baseUrl?: string;
  customKeyList?: CreateApiKeyResponseBodyDataCustomKeyList[];
  /**
   * @example
   * sk-rds-xxx
   */
  systemApiKey?: string;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'BaseUrl',
      customKeyList: 'CustomKeyList',
      systemApiKey: 'SystemApiKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      customKeyList: { 'type': 'array', 'itemType': CreateApiKeyResponseBodyDataCustomKeyList },
      systemApiKey: 'string',
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

export class CreateApiKeyResponseBody extends $dara.Model {
  data?: CreateApiKeyResponseBodyData;
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
      data: CreateApiKeyResponseBodyData,
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

