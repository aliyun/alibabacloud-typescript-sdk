// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyRelatedApprovalsRequestGrantee extends $dara.Model {
  /**
   * @remarks
   * The ID of the principal. The format varies based on the value of `PrincipalType`.
   * 
   * - If `PrincipalType` is `RamUser`, this parameter is the Dataworks user ID.
   * 
   * - If `PrincipalType` is `RamRole`, this parameter is a Dataworks user ID that starts with `ROLE_`.
   * 
   * - If `PrincipalType` is `DataworksTenantMember`, this parameter is the Dataworks user ID.
   * 
   * - If `PrincipalType` is `DataworksTenantRole`, this parameter is the Dataworks tenant `roleCode`.
   * 
   * - If `PrincipalType` is `DataworksProjectRole`, this parameter is the Dataworks workspace `roleCode`.
   * 
   * - If `PrincipalType` is `DataworksProjectMember`, this parameter is the Dataworks user ID.
   * 
   * - If `PrincipalType` is `DlfRole`, this parameter is the DlfNext role name.
   * 
   * @example
   * ROLE_3133343434
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the principal. Valid values:
   * 
   * - `RamRole`
   * 
   * - `RamUser`
   * 
   * - `DataworksTenantMember`
   * 
   * - `DataworksTenantRole`
   * 
   * - `DataworksProjectMember`
   * 
   * - `DataworksProjectRole`
   * 
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
   * The `name` of the `ResourceSchema` used to parse the resource.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The `version` of the `ResourceSchema` used to parse the resource.
   * 
   * @example
   * v1.0.0
   */
  defVersion?: string;
  /**
   * @remarks
   * The resource metadata. The `ResourceSchema` defines its content.
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
   * The permissions.
   */
  accessTypes?: string[];
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
   * The end of the application time range, specified as a millisecond timestamp.
   * 
   * @example
   * 1779724799999
   */
  endTime?: number;
  /**
   * @remarks
   * Filters approvals by the specified principal.
   */
  grantee?: ListMyRelatedApprovalsRequestGrantee;
  /**
   * @remarks
   * The pagination token that acts as a cursor to retrieve the next page of results.
   * 
   * @example
   * eyJpZCI6MTIzfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource declaration.
   */
  resource?: ListMyRelatedApprovalsRequestResource;
  /**
   * @remarks
   * The resource type, specified as a leaf node name. Multiple values are supported because a single business semantic can be mapped to multiple leaf node names.
   * 
   * This parameter is required.
   * 
   * @example
   * ["table", "column"]
   */
  resourceType?: string[];
  /**
   * @remarks
   * The start of the application time range, specified as a millisecond timestamp.
   * 
   * @example
   * 1771948800000
   */
  startTime?: number;
  /**
   * @remarks
   * Filters the results by approval status. Valid values:
   * 
   * - `WaitApproval`: Pending approval
   * 
   * - `Confirmed`: Pending authorization
   * 
   * - `RejectApproval`: Approval rejected
   * 
   * - `AuthorizeSucceed`: Authorization succeeded
   * 
   * - `AuthorizeFailed`: Authorization failed
   * 
   * - `Deleted`: Deleted
   * 
   * - `Canceled`: Withdrawn
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

