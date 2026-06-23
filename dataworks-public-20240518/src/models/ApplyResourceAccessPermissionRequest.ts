// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyResourceAccessPermissionRequestApplyContentsGrantee extends $dara.Model {
  /**
   * @remarks
   * The ID of the principal. The value of this parameter depends on the `PrincipalType`:
   * 
   * - `RamUser`: The Dataworks user ID.
   * 
   * - `RamRole`: The Dataworks user ID, prefixed with `ROLE_`.
   * 
   * - `DlfRole`: The DlfNext role name.
   * 
   * This parameter is required.
   * 
   * @example
   * ROLE_32237475848545
   */
  principalId?: string;
  /**
   * @remarks
   * The principal type. Valid values:
   * 
   * - RamRole
   * 
   * - RamUser
   * 
   * - DlfRole
   * 
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
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The version of `ResourceSchema` that is required to parse the resource.
   * 
   * @example
   * v1.0.0
   */
  defVersion?: string;
  /**
   * @remarks
   * The resource metadata. The content is constrained by `ResourceSchema`.
   */
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
   * The requested permissions.
   * 
   * Note: The supported permission types vary by resource level and are constrained by the `ResourceSchema` of the corresponding resource type.
   * 
   * This parameter is required.
   */
  accessTypes?: string[];
  /**
   * @remarks
   * The authorization method.
   * 
   * Note: This parameter is supported only for `SEVERLESS_STARROCKS` resources. Valid values are `ranger` and `starrocksManager`.
   * 
   * @example
   * ranger
   */
  authMethod?: string;
  /**
   * @remarks
   * The permission expiration time, as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1785835708000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The principal to which permissions are granted.
   * 
   * This parameter is required.
   */
  grantee?: ApplyResourceAccessPermissionRequestApplyContentsGrantee;
  /**
   * @remarks
   * The resource for which permissions are requested.
   */
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
   * A list of permission requests.
   * 
   * This parameter is required.
   */
  applyContents?: ApplyResourceAccessPermissionRequestApplyContents[];
  /**
   * @remarks
   * The idempotency parameter, which prevents duplicate operations from repeated calls.
   * 
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * The reason for the request.
   * 
   * This parameter is required.
   * 
   * @example
   * 业务发展需要
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

