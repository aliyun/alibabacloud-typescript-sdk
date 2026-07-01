// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiKeyRequestAuthModelAccessScope extends $dara.Model {
  /**
   * @remarks
   * The list of accessible models.
   * >Notice: The content takes effect only when allowAllModels is set to false.
   */
  accessibleModels?: string[];
  /**
   * @remarks
   * Specifies whether to allow access to all models with granted inference permissions in the workspace. Valid values:
   * 
   * - true
   * - false
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

export class UpdateApiKeyRequestAuth extends $dara.Model {
  /**
   * @remarks
   * The IP access whitelist.
   * 
   * > 
   * > - When you customize the permission scope, if the IP access whitelist is not specified, the server sets it to IPv4 (0.0.0.0/0) and IPv6 (::/0) by default, which allows all traffic.
   */
  accessIps?: string[];
  /**
   * @remarks
   * The model access scope.
   */
  modelAccessScope?: UpdateApiKeyRequestAuthModelAccessScope;
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
      modelAccessScope: UpdateApiKeyRequestAuthModelAccessScope,
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

export class UpdateApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The API key permission settings.
   * 
   * > Do not fill in this section or fill it in completely for each UpdateApiKey operation. Otherwise, the configuration may not match your expectations.
   */
  auth?: UpdateApiKeyRequestAuth;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * update description.
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'auth',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: UpdateApiKeyRequestAuth,
      description: 'string',
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

