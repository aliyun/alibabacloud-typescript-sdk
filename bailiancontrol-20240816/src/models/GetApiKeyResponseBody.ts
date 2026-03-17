// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetApiKeyResponseBodyApiKeyAuthSetModelAuthAppStructure extends $dara.Model {
  agents?: string[];
  highCodeApps?: string[];
  isAllowAccessAllApps?: boolean;
  workflows?: string[];
  static names(): { [key: string]: string } {
    return {
      agents: 'agents',
      highCodeApps: 'highCodeApps',
      isAllowAccessAllApps: 'isAllowAccessAllApps',
      workflows: 'workflows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: { 'type': 'array', 'itemType': 'string' },
      highCodeApps: { 'type': 'array', 'itemType': 'string' },
      isAllowAccessAllApps: 'boolean',
      workflows: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.agents)) {
      $dara.Model.validateArray(this.agents);
    }
    if(Array.isArray(this.highCodeApps)) {
      $dara.Model.validateArray(this.highCodeApps);
    }
    if(Array.isArray(this.workflows)) {
      $dara.Model.validateArray(this.workflows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiKeyResponseBodyApiKeyAuthSetModelAuthModelStructure extends $dara.Model {
  defineModels?: string[];
  deployments?: string[];
  isAllowAccessAllModels?: boolean;
  models?: string[];
  static names(): { [key: string]: string } {
    return {
      defineModels: 'defineModels',
      deployments: 'deployments',
      isAllowAccessAllModels: 'isAllowAccessAllModels',
      models: 'models',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defineModels: { 'type': 'array', 'itemType': 'string' },
      deployments: { 'type': 'array', 'itemType': 'string' },
      isAllowAccessAllModels: 'boolean',
      models: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.defineModels)) {
      $dara.Model.validateArray(this.defineModels);
    }
    if(Array.isArray(this.deployments)) {
      $dara.Model.validateArray(this.deployments);
    }
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiKeyResponseBodyApiKeyAuthSetModel extends $dara.Model {
  accessIps?: string[];
  authAppStructure?: GetApiKeyResponseBodyApiKeyAuthSetModelAuthAppStructure;
  authModelStructure?: GetApiKeyResponseBodyApiKeyAuthSetModelAuthModelStructure;
  authSetMode?: string;
  static names(): { [key: string]: string } {
    return {
      accessIps: 'accessIps',
      authAppStructure: 'authAppStructure',
      authModelStructure: 'authModelStructure',
      authSetMode: 'authSetMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIps: { 'type': 'array', 'itemType': 'string' },
      authAppStructure: GetApiKeyResponseBodyApiKeyAuthSetModelAuthAppStructure,
      authModelStructure: GetApiKeyResponseBodyApiKeyAuthSetModelAuthModelStructure,
      authSetMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessIps)) {
      $dara.Model.validateArray(this.accessIps);
    }
    if(this.authAppStructure && typeof (this.authAppStructure as any).validate === 'function') {
      (this.authAppStructure as any).validate();
    }
    if(this.authModelStructure && typeof (this.authModelStructure as any).validate === 'function') {
      (this.authModelStructure as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiKeyResponseBodyApiKey extends $dara.Model {
  apiKeyValue?: string;
  apikeyId?: string;
  authSetModel?: GetApiKeyResponseBodyApiKeyAuthSetModel;
  blocked?: string;
  createTime?: number;
  creator?: string;
  description?: string;
  expireTime?: number;
  extData?: string;
  parentUid?: string;
  uid?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyValue: 'apiKeyValue',
      apikeyId: 'apikeyId',
      authSetModel: 'authSetModel',
      blocked: 'blocked',
      createTime: 'createTime',
      creator: 'creator',
      description: 'description',
      expireTime: 'expireTime',
      extData: 'extData',
      parentUid: 'parentUid',
      uid: 'uid',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyValue: 'string',
      apikeyId: 'string',
      authSetModel: GetApiKeyResponseBodyApiKeyAuthSetModel,
      blocked: 'string',
      createTime: 'number',
      creator: 'string',
      description: 'string',
      expireTime: 'number',
      extData: 'string',
      parentUid: 'string',
      uid: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.authSetModel && typeof (this.authSetModel as any).validate === 'function') {
      (this.authSetModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiKeyResponseBody extends $dara.Model {
  apiKey?: GetApiKeyResponseBodyApiKey;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
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

