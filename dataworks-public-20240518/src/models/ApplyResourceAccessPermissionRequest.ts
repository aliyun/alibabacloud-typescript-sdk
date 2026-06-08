// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyResourceAccessPermissionRequestApplyContentsGrantee extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ROLE_32237475848545
   */
  principalId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RamRole
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalId: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyResourceAccessPermissionRequestApplyContentsResource extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @example
   * v1.0.0
   */
  defVersion?: string;
  metaData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      defSchema: 'DefSchema',
      defVersion: 'DefVersion',
      metaData: 'MetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defSchema: 'string',
      defVersion: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyResourceAccessPermissionRequestApplyContents extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accessTypes?: string[];
  /**
   * @example
   * ranger
   */
  authMethod?: string;
  /**
   * @example
   * 1785835708000
   */
  expirationTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  grantee?: ApplyResourceAccessPermissionRequestApplyContentsGrantee;
  resource?: ApplyResourceAccessPermissionRequestApplyContentsResource;
  static names(): { [key: string]: string } {
    return {
      accessTypes: 'AccessTypes',
      authMethod: 'AuthMethod',
      expirationTime: 'ExpirationTime',
      grantee: 'Grantee',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTypes: { 'type': 'array', 'itemType': 'string' },
      authMethod: 'string',
      expirationTime: 'number',
      grantee: ApplyResourceAccessPermissionRequestApplyContentsGrantee,
      resource: ApplyResourceAccessPermissionRequestApplyContentsResource,
    };
  }

  validate() {
    if(Array.isArray(this.accessTypes)) {
      $dara.Model.validateArray(this.accessTypes);
    }
    if(this.grantee && typeof (this.grantee as any).validate === 'function') {
      (this.grantee as any).validate();
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyResourceAccessPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applyContents?: ApplyResourceAccessPermissionRequestApplyContents[];
  /**
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      applyContents: 'ApplyContents',
      clientToken: 'ClientToken',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyContents: { 'type': 'array', 'itemType': ApplyResourceAccessPermissionRequestApplyContents },
      clientToken: 'string',
      reason: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applyContents)) {
      $dara.Model.validateArray(this.applyContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

