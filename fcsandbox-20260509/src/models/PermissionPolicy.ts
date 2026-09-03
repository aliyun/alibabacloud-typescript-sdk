// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PermissionPolicyAllow extends $dara.Model {
  /**
   * @remarks
   * The actions.
   */
  actions?: string[];
  /**
   * @remarks
   * The capabilities.
   */
  capabilities?: string[];
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      capabilities: 'capabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      capabilities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.capabilities)) {
      $dara.Model.validateArray(this.capabilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionPolicyDeny extends $dara.Model {
  /**
   * @remarks
   * The actions.
   */
  actions?: string[];
  /**
   * @remarks
   * The capabilities.
   */
  capabilities?: string[];
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      capabilities: 'capabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      capabilities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.capabilities)) {
      $dara.Model.validateArray(this.capabilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionPolicy extends $dara.Model {
  /**
   * @remarks
   * The allow policy.
   */
  allow?: PermissionPolicyAllow;
  /**
   * @remarks
   * catalog version
   */
  catalogVersion?: number;
  /**
   * @remarks
   * The deny policy.
   */
  deny?: PermissionPolicyDeny;
  /**
   * @remarks
   * schema version
   */
  schemaVersion?: number;
  static names(): { [key: string]: string } {
    return {
      allow: 'allow',
      catalogVersion: 'catalogVersion',
      deny: 'deny',
      schemaVersion: 'schemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: PermissionPolicyAllow,
      catalogVersion: 'number',
      deny: PermissionPolicyDeny,
      schemaVersion: 'number',
    };
  }

  validate() {
    if(this.allow && typeof (this.allow as any).validate === 'function') {
      (this.allow as any).validate();
    }
    if(this.deny && typeof (this.deny as any).validate === 'function') {
      (this.deny as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

