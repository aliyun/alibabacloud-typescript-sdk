// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiKeyRequestAuthModelAccessScope extends $dara.Model {
  /**
   * @remarks
   * The list of accessible models.
   * >Notice: This parameter takes effect only when allowAllModels is set to false.
   */
  accessibleModels?: string[];
  /**
   * @remarks
   * Specifies whether all models with granted inference permissions in the workspace are accessible. Valid values:
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

export class CreateApiKeyRequestAuth extends $dara.Model {
  /**
   * @remarks
   * The IP access whitelist.
   * 
   * > 
   * > - When you set custom permissions and leave the IP access whitelist empty, the server sets the default values to IPv4 (0.0.0.0/0) and IPv6 (::/0), which allows all traffic.
   */
  accessIps?: string[];
  /**
   * @remarks
   * The model access scope.
   */
  modelAccessScope?: CreateApiKeyRequestAuthModelAccessScope;
  /**
   * @remarks
   * Valid values:
   * 
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
   * > - If you leave this parameter empty, the API key is automatically assigned to the default workspace.
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

