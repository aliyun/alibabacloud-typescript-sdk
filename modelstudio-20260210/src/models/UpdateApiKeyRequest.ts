// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiKeyRequestAuthModelAccessScope extends $dara.Model {
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

export class UpdateApiKeyRequestAuth extends $dara.Model {
  /**
   * @remarks
   * The IP access whitelist.
   * 
   * > 
   * > - When you set custom permissions and do not specify the IP access whitelist, the server sets the whitelist to IPv4 (0.0.0.0/0) and IPv6 (::/0) by default, which allows all traffic.
   */
  accessIps?: string[];
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

