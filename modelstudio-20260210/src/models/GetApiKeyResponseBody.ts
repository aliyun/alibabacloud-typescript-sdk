// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiKeyResponseBodyApiKeyAuthModelAccessScope extends $dara.Model {
  /**
   * @remarks
   * The list of accessible models.
   */
  accessibleModels?: string[];
  /**
   * @remarks
   * Indicates whether all models with granted inference permissions in the workspace can be accessed. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * false
   */
  allowAllModels?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessibleModels: 'accessibleModels',
      allowAllModels: 'allowAllModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibleModels: { 'type': 'array', 'itemType': 'string' },
      allowAllModels: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.accessibleModels)) {
      $dara.Model.validateArray(this.accessibleModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiKeyResponseBodyApiKeyAuth extends $dara.Model {
  /**
   * @remarks
   * The IP access whitelist.
   */
  accessIps?: string[];
  /**
   * @remarks
   * The model access scope.
   */
  modelAccessScope?: GetApiKeyResponseBodyApiKeyAuthModelAccessScope;
  /**
   * @remarks
   * All: all permissions. Custom: custom permissions.
   * 
   * @example
   * Custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessIps: 'accessIps',
      modelAccessScope: 'modelAccessScope',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIps: { 'type': 'array', 'itemType': 'string' },
      modelAccessScope: GetApiKeyResponseBodyApiKeyAuthModelAccessScope,
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessIps)) {
      $dara.Model.validateArray(this.accessIps);
    }
    if(this.modelAccessScope && typeof (this.modelAccessScope as any).validate === 'function') {
      (this.modelAccessScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * @remarks
   * The value of the API key.
   * 
   * @example
   * sk-ws-djI.mhU0D****testtestest
   */
  apiKeyValue?: string;
  /**
   * @remarks
   * The permission settings.
   */
  auth?: GetApiKeyResponseBodyApiKeyAuth;
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
   * v7
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the API key is disabled.
   * 
   * - **0**: Active.
   * - **1**: Disabled.
   * 
   * @example
   * 0
   */
  disabled?: number;
  /**
   * @remarks
   * The time when the API key was created.
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
   * ws-b2d30f148c236908
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      apiKeyValue: 'apiKeyValue',
      auth: 'auth',
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
      auth: GetApiKeyResponseBodyApiKeyAuth,
      createdBy: 'string',
      description: 'string',
      disabled: 'number',
      gmtCreate: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.auth && typeof (this.auth as any).validate === 'function') {
      (this.auth as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API key information.
   */
  apiKey?: GetApiKeyResponseBodyApiKey;
  /**
   * @remarks
   * The response status code.
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
   * DFD55E7B-0615-5343-BDA0-FBEE86F29935
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * - true: The request was successful.
   * - false: The request failed.
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

