// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiKeyResponseBodyApiKey extends $dara.Model {
  /**
   * @remarks
   * API Key ID。
   * 
   * @example
   * 1858636
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The value of the API key.
   * >Notice: Copy your API key immediately. Store it securely. Anyone who obtains this key can initiate service requests on your behalf and incur charges. If you lose the key, you can reset it or create a new one.
   * 
   * @example
   * sk-ws-djI.8O7dkfkW2aICctnid4u4
   */
  apiKeyValue?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 1378030599924858
   */
  createdBy?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1774338222000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-3fa048e86117d91f
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      apiKeyValue: 'apiKeyValue',
      createdBy: 'createdBy',
      description: 'description',
      gmtCreate: 'gmtCreate',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      apiKeyValue: 'string',
      createdBy: 'string',
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
   * The API key information.
   */
  apiKey?: CreateApiKeyResponseBodyApiKey;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
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
   * C0CDC72E-52D7-5BC8-9396-9276B4FDF6B3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: Succeeded.
   * - false: Failed.
   * 
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

