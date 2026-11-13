// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyRelatedApprovalsRequestGrantee extends $dara.Model {
  /**
   * @remarks
   * The ID of the authorization principal. The meaning of the ID varies based on the principal type:
   * 
   * - `RamUser`: DataWorks user ID.
   * - `RamRole`: DataWorks user ID that starts with "ROLE_".
   * - `DataworksTenantMember`: DataWorks user ID.
   * - `DataworksTenantRole`: DataWorks tenant role code.
   * - `DataworksProjectRole`: DataWorks workspace role code.
   * - `DataworksProjectMember`: DataWorks user ID.
   * - `DlfRole`: DLF Next role name.
   * 
   * @example
   * ROLE_3133343434
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the authorization principal. Valid values:
   * 
   * - `RamRole`
   * - `RamUser`
   * - `DataworksTenantMember`
   * - `DataworksTenantRole`
   * - `DataworksProjectMember`
   * - `DataworksProjectRole`
   * - `DlfRole`
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

export class ListMyRelatedApprovalsRequestResource extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * Note: The resource types supported for application are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).name.
   * 
   * Reference: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The resource parsing version is constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).version.
   * 
   * [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * @example
   * v1.0.0
   */
  defVersion?: string;
  /**
   * @remarks
   * The resource metadata.
   * 
   * Note: The metadata is constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).resources. A valid resource declaration must include the full-path metadata declaration from level 0 to the validLeaf level.
   * 
   * Reference: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * @example
   * {"workspace": "449056", "project": "sync_destination"}
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

export class ListMyRelatedApprovalsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by the requested permissions.
   * 
   * Note: The types of permissions that can be requested vary based on the resource level and are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).isValidLeaf, accessTypeRestrictions, and authMethodAccessTypes.
   * 
   * Reference: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  accessTypes?: string[];
  /**
   * @remarks
   * Filters by resource type.
   * 
   * Note: The resource types supported for application are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).name.
   * 
   * Reference: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The end time of the application. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1779724799999
   */
  endTime?: number;
  /**
   * @remarks
   * Filters by authorization principal. 
   * 
   * Note: The authorization principal types supported by the system are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).authPrincipal.
   * 
   * Reference: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  grantee?: ListMyRelatedApprovalsRequestGrantee;
  /**
   * @remarks
   * The pagination cursor.
   * 
   * @example
   * eyJpZCI6MTIzfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Performs exact or generalized filtering based on resources. The resource description is constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).
   * 
   * Reference: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  resource?: ListMyRelatedApprovalsRequestResource;
  /**
   * @remarks
   * Filters by least privilege resource type.
   * 
   * Note: The least privilege resource types are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).resources[*].isValidLeaf being true.
   * 
   * Reference: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * This parameter is required.
   * 
   * @example
   * ["table", "column"]
   */
  resourceType?: string[];
  /**
   * @remarks
   * The start time of the application. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1771948800000
   */
  startTime?: number;
  /**
   * @remarks
   * Filters by approval status. Valid values:
   * 
   * - WaitApproval: Pending approval.
   * - Confirmed: Pending authorization.
   * - RejectApproval: Rejected.
   * - AuthorizeSucceed: Authorized.
   * - AuthorizeFailed: Authorization failed.
   * - Deleted: Deleted.
   * - Canceled: Withdrawn.
   * 
   * @example
   * WAIT_APPROVAL
   */
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      accessTypes: 'AccessTypes',
      defSchema: 'DefSchema',
      endTime: 'EndTime',
      grantee: 'Grantee',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resource: 'Resource',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTypes: { 'type': 'array', 'itemType': 'string' },
      defSchema: 'string',
      endTime: 'number',
      grantee: ListMyRelatedApprovalsRequestGrantee,
      nextToken: 'string',
      pageSize: 'number',
      resource: ListMyRelatedApprovalsRequestResource,
      resourceType: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      statuses: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.resourceType)) {
      $dara.Model.validateArray(this.resourceType);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

