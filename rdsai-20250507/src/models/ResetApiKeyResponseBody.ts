// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetApiKeyResponseBodyDataCustomKeyList extends $dara.Model {
  /**
   * @remarks
   * The custom API key.
   * 
   * @example
   * sk-rds-*****
   */
  apiKey?: string;
  /**
   * @remarks
   * The API key name.
   * 
   * @example
   * api-*****
   */
  keyName?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      keyName: 'KeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      keyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetApiKeyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The system API key.
   * 
   * @example
   * sk-rds-*****
   */
  apiKey?: string;
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
  customKeyList?: ResetApiKeyResponseBodyDataCustomKeyList[];
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      baseUrl: 'BaseUrl',
      customKeyList: 'CustomKeyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      baseUrl: 'string',
      customKeyList: { 'type': 'array', 'itemType': ResetApiKeyResponseBodyDataCustomKeyList },
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

export class ResetApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query result.
   */
  data?: ResetApiKeyResponseBodyData;
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
   * FE9C65D7-930F-57A5-A207-8C396329241C
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
      data: ResetApiKeyResponseBodyData,
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

