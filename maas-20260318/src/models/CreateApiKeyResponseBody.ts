// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateApiKeyResponseBodyApiKey extends $dara.Model {
  /**
   * @remarks
   * API Key ID。
   * 
   * @example
   * 3291361
   */
  apiKeyId?: number;
  /**
   * @remarks
   * API Key Value。
   * 
   * @example
   * sk-f83898fqwer340049bae6209cbb0bc29
   */
  apiKeyValue?: string;
  /**
   * @example
   * 1378030599924858
   */
  creator?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 1774338222000
   */
  gmtCreate?: number;
  /**
   * @example
   * llm-p3krn6ctp17d34e9
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      apiKeyValue: 'apiKeyValue',
      creator: 'creator',
      description: 'description',
      gmtCreate: 'gmtCreate',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      apiKeyValue: 'string',
      creator: 'string',
      description: 'string',
      gmtCreate: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * API Key。
   */
  apiKey?: CreateApiKeyResponseBodyApiKey;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
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
   * 6BD217D2-9F5B-5CCF-96E3-AF8E5FC8496A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: CreateApiKeyResponseBodyApiKey,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.apiKey && typeof (this.apiKey as any).validate === 'function') {
      (this.apiKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

