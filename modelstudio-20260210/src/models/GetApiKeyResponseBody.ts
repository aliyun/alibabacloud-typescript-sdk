// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiKeyResponseBodyApiKey extends $dara.Model {
  /**
   * @remarks
   * API Key ID。
   * 
   * @example
   * 2965964
   */
  apiKeyId?: number;
  /**
   * @example
   * sk-ws-djI.mhU0D****testtestest
   */
  apiKeyValue?: string;
  /**
   * @example
   * 1378030599924858
   */
  createdBy?: string;
  /**
   * @example
   * v7
   */
  description?: string;
  /**
   * @example
   * 0
   */
  disabled?: number;
  /**
   * @example
   * 1774338222000
   */
  gmtCreate?: number;
  /**
   * @example
   * ws-b2d30f148c236908
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      apiKeyValue: 'apiKeyValue',
      createdBy: 'createdBy',
      description: 'description',
      disabled: 'disabled',
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
      disabled: 'number',
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

export class GetApiKeyResponseBody extends $dara.Model {
  apiKey?: GetApiKeyResponseBodyApiKey;
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
   * DFD55E7B-0615-5343-BDA0-FBEE86F29935
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
      apiKey: GetApiKeyResponseBodyApiKey,
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

