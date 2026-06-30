// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiKeyRequestAuthModelAccessScope extends $dara.Model {
  accessibleModels?: string[];
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

export class CreateApiKeyRequestAuth extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist.
   * 
   * > 
   * > - When you use custom permissions, if you do not specify the IP address whitelist, the server sets it to IPv4 (0.0.0.0/0) and IPv6 (::/0) by default, which allows all traffic.
   */
  accessIps?: string[];
  modelAccessScope?: CreateApiKeyRequestAuthModelAccessScope;
  /**
   * @remarks
   * Valid values:
   * - All: all permissions.
   * - Custom: custom permissions.
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
      modelAccessScope: CreateApiKeyRequestAuthModelAccessScope,
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

export class CreateApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The API key permission settings.
   */
  auth?: CreateApiKeyRequestAuth;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The workspace ID.
   * > 
   * > - If you leave this parameter empty, the created API key is automatically assigned to the default workspace.
   * 
   * @example
   * ws-8af73c50f5596193
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'auth',
      description: 'description',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: CreateApiKeyRequestAuth,
      description: 'string',
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

