// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyRelatedApprovalsRequestGrantee extends $dara.Model {
  /**
   * @remarks
   * Authorization principal ID:
   * 
   * - `RamUser`: Dataworks UserId
   * - `RamRole`: Dataworks UserId prefixed with "ROLE_"
   * - `DataworksTenantMember`: Dataworks UserId
   * - `DataworksTenantRole`: Dataworks tenant roleCode
   * - `DataworksProjectRole`: Dataworks workspace roleCode
   * - `DataworksProjectMember`: Dataworks UserId
   * - `DlfRole`: DlfNext role name
   * 
   * @example
   * ROLE_3133343434
   */
  principalId?: string;
  /**
   * @remarks
   * Authorization principal type:
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
   * Resource type.
   * 
   * Note: The resource types supported by the system for applications are constrained by [ResourceSchema](https://help.aliyun.com/zh/dataworks/developer-reference/resourceschema-template-instructions).name.
   * 
   * Reference: [ResourceSchema International Site Documentation](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The resource parsing version is constrained by [ResourceSchema](https://help.aliyun.com/zh/dataworks/developer-reference/resourceschema-template-instructions).version.
   * 
   * [ResourceSchema International Site Documentation](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * @example
   * v1.0.0
   */
  defVersion?: string;
  /**
   * @remarks
   * Resource metadata.
   * 
   * Note: The metadata is constrained by [ResourceSchema](https://help.aliyun.com/zh/dataworks/developer-reference/resourceschema-template-instructions).resources. A valid resource declaration must include the full-path metadata declaration from level 0 to validLeaf layer.
   * 
   * Reference: [ResourceSchema International Site Documentation](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
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
   * Filter by requested permissions.
   * 
   * Note: Different resource levels support different application permission types, all constrained by [ResourceSchema](https://help.aliyun.com/zh/dataworks/developer-reference/resourceschema-template-instructions).isValidLeaf, accessTypeRestrictions, and authMethodAccessTypes.
   * 
   * Reference: [ResourceSchema International Site Documentation](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  accessTypes?: string[];
  /**
   * @remarks
   * Filter by resource type.
   * 
   * Note: The resource types supported by the system for applications are constrained by [ResourceSchema](https://help.aliyun.com/zh/dataworks/developer-reference/resourceschema-template-instructions).name.
   * 
   * Reference: [ResourceSchema International Site Documentation](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * Application time end (millisecond timestamp)
   * 
   * @example
   * 1779724799999
   */
  endTime?: number;
  /**
   * @remarks
   * Filter by authorization principal.
   * 
   * Note: The authorization principal types supported by the system are constrained by [ResourceSchema](https://help.aliyun.com/zh/dataworks/developer-reference/resourceschema-template-instructions).authPrincipal.
   * 
   * Reference: [ResourceSchema International Site Documentation](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  grantee?: ListMyRelatedApprovalsRequestGrantee;
  /**
   * @remarks
   * Pagination cursor
   * 
   * @example
   * eyJpZCI6MTIzfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Page size (default 10, maximum 200)
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filter by resource with exact/generalized matching. The resource description is constrained by [ResourceSchema](https://help.aliyun.com/zh/dataworks/developer-reference/resourceschema-template-instructions).
   * 
   * Reference: [ResourceSchema International Site Documentation](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  resource?: ListMyRelatedApprovalsRequestResource;
  /**
   * @remarks
   * Filter by minimum permission resource type.
   * 
   * Note: The minimum permission resource type is constrained by [ResourceSchema](https://help.aliyun.com/zh/dataworks/developer-reference/resourceschema-template-instructions).resources[*].isValidLeaf being true.
   * 
   * Reference: [ResourceSchema International Site Documentation](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * This parameter is required.
   * 
   * @example
   * ["table", "column"]
   */
  resourceType?: string[];
  /**
   * @remarks
   * Application time start (millisecond timestamp)
   * 
   * @example
   * 1771948800000
   */
  startTime?: number;
  /**
   * @remarks
   * Filter by approval status. Enum values:
   * 
   * - WaitApproval: Pending approval
   * - Confirmed: Pending authorization
   * - RejectApproval: Approval rejected
   * - AuthorizeSucceed: Authorization succeeded
   * - AuthorizeFailed: Authorization failed
   * - Deleted: Deleted
   * - Canceled: Withdrawn
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

