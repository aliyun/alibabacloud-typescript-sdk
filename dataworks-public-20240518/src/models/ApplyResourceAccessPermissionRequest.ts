// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyResourceAccessPermissionRequestApplyContentsGrantee extends $dara.Model {
  /**
   * @remarks
   * The principal ID. The mapped IDs have different semantics for different principal types:
   * 
   * - RamUser: the DataWorks user ID.
   * - RamRole: the DataWorks user ID that starts with "ROLE_".
   * - DlfRole: the DlfNext role name.
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
   * - RamUser
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
   * **Note**: The resource types supported by the system are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).name.
   * 
   * Appendix: [ResourceSchema documentation](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The resource parsing version is constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).version.
   * 
   * [ResourceSchema documentation](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * @example
   * v1.0.0
   */
  defVersion?: string;
  /**
   * @remarks
   * The resource metadata declaration.
   * 
   * **Note**: The metadata is constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).resources. A valid resource declaration must include metadata for the full resource path from level 0 through the validLeaf level.
   * 
   * Appendix: [ResourceSchema documentation](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * @example
   * {"workspace": "449656", "project": "sync_destination", "table": "order_table", "threeTierModel": false}
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
   * The list of requested permissions.
   * 
   * **Note**: The types of permissions that can be applied for vary across resources at different levels. All are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).isValidLeaf, accessTypeRestrictions, and authMethodAccessTypes.
   * 
   * Appendix: [ResourceSchema documentation](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * This parameter is required.
   */
  accessTypes?: string[];
  /**
   * @remarks
   * The authorization method. Currently, only SEVERLESS_STARROCKS supports specifying the authorization method: ranger and starrocksManager.
   * 
   * **Note**: The authorization methods supported vary across resources. All are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).authMethods.
   * 
   * Appendix: [ResourceSchema documentation](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * @example
   * ranger
   */
  authMethod?: string;
  /**
   * @remarks
   * The expiration time of the permissions, specified as a millisecond timestamp.
   * 
   * @example
   * 1785835708000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The grantee description.
   * 
   * **Note**: The principal types supported by the system are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).authPrincipal.
   * 
   * Appendix: [ResourceSchema documentation](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * This parameter is required.
   */
  grantee?: ApplyResourceAccessPermissionRequestApplyContentsGrantee;
  /**
   * @remarks
   * The resource description.
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
   * The list of resource permission applications.
   * 
   * This parameter is required.
   */
  applyContents?: ApplyResourceAccessPermissionRequestApplyContents[];
  /**
   * @remarks
   * The idempotency token used to prevent duplicate operations caused by multiple calls.
   * 
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * The reason for the application.
   * 
   * This parameter is required.
   * 
   * @example
   * Business development requirements
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

