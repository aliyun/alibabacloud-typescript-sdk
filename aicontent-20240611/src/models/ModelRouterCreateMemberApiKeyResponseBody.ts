// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateMemberApiKeyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The full API key in plaintext. This value is returned only once during creation. Store it securely.
   * 
   * @example
   * sk-xxxxxxxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The API key ID. You can use this ID to query the bound groups by API key.
   * 
   * @example
   * 502
   */
  apiKeyId?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      apiKeyId: 'apiKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      apiKeyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelRouterCreateMemberApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   * 
   * @example
   * { "apiKeyId": 502, "apiKey": "sk-xxxxxxxxxxxxxxxx" }
   */
  data?: ModelRouterCreateMemberApiKeyResponseBodyData;
  /**
   * @remarks
   * The fault message code.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Unknown error
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
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
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModelRouterCreateMemberApiKeyResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

