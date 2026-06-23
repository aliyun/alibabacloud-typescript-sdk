// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyRelatedApprovalsResponseBodyDataDataContentsGrantee extends $dara.Model {
  /**
   * @remarks
   * The principal ID.
   * 
   * Note: The format of this ID depends on the PrincipalType:
   * 
   * - RamUser: The user ID.
   * 
   * - RamRole: The user ID, prefixed with `ROLE_`.
   * 
   * - DataworksTenantMember: The user ID.
   * 
   * - DataworksTenantRole: The role code in the Dataworks tenant.
   * 
   * - DataworksProjectRole: The role code in the Dataworks workspace.
   * 
   * - DataworksProjectMember: The user ID.
   * 
   * - DlfRole: The name of the DlfNext role.
   * 
   * @example
   * ROLE_3133343434
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
   * - DataworksTenantMember
   * 
   * - DataworksTenantRole
   * 
   * - DataworksProjectMember
   * 
   * - DataworksProjectRole
   * 
   * - DlfRole
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

export class ListMyRelatedApprovalsResponseBodyDataDataContentsResource extends $dara.Model {
  /**
   * @remarks
   * The name of the ResourceSchema required to parse the resource.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The version of the ResourceSchema required to parse the resource.
   * 
   * @example
   * v1.0.0
   */
  defVersion?: string;
  /**
   * @remarks
   * The resource metadata. The content is constrained by the ResourceSchema.
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

export class ListMyRelatedApprovalsResponseBodyDataDataContents extends $dara.Model {
  /**
   * @remarks
   * The permissions requested for the resource.
   */
  accessTypes?: string[];
  /**
   * @remarks
   * The authorization method.
   * 
   * @example
   * default
   */
  authMethod?: string;
  /**
   * @remarks
   * The time when the entry was created, in milliseconds since the Unix epoch.
   * 
   * @example
   * 2025-09-11 10:13:21
   */
  createTime?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The permission\\"s expiration time, in milliseconds since the Unix epoch.
   * 
   * @example
   * 1779695088000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The permissions granted for the resource after the final approval.
   */
  finalAccessTypes?: string[];
  /**
   * @remarks
   * The grantee.
   */
  grantee?: ListMyRelatedApprovalsResponseBodyDataDataContentsGrantee;
  /**
   * @remarks
   * The unique ID of the request content.
   * 
   * @example
   * 1009516415
   */
  id?: string;
  /**
   * @remarks
   * The ID of the approval process instance for the request.
   * 
   * @example
   * 777799223
   */
  processInstanceId?: string;
  /**
   * @remarks
   * The resource declaration.
   */
  resource?: ListMyRelatedApprovalsResponseBodyDataDataContentsResource;
  /**
   * @remarks
   * The name of the resource type at the leaf-node level.
   * 
   * @example
   * table
   */
  resourceName?: string;
  /**
   * @remarks
   * The approval status. Valid values:
   * 
   * - WaitApproval: Waiting for approval.
   * 
   * - Confirmed: Pending authorization.
   * 
   * - RejectApproval: Approval rejected.
   * 
   * - AuthorizeSucceed: Authorization succeeded.
   * 
   * - AuthorizeFailed: Authorization failed.
   * 
   * - Deleted: Deleted.
   * 
   * - Canceled: Canceled.
   * 
   * @example
   * Deleted
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 69973837489
   */
  tenantId?: string;
  /**
   * @remarks
   * The time when the entry was last updated, in milliseconds since the Unix epoch.
   * 
   * @example
   * 2024-03-05 18:24:13
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessTypes: 'AccessTypes',
      authMethod: 'AuthMethod',
      createTime: 'CreateTime',
      defSchema: 'DefSchema',
      expirationTime: 'ExpirationTime',
      finalAccessTypes: 'FinalAccessTypes',
      grantee: 'Grantee',
      id: 'Id',
      processInstanceId: 'ProcessInstanceId',
      resource: 'Resource',
      resourceName: 'ResourceName',
      status: 'Status',
      tenantId: 'TenantId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTypes: { 'type': 'array', 'itemType': 'string' },
      authMethod: 'string',
      createTime: 'number',
      defSchema: 'string',
      expirationTime: 'number',
      finalAccessTypes: { 'type': 'array', 'itemType': 'string' },
      grantee: ListMyRelatedApprovalsResponseBodyDataDataContentsGrantee,
      id: 'string',
      processInstanceId: 'string',
      resource: ListMyRelatedApprovalsResponseBodyDataDataContentsResource,
      resourceName: 'string',
      status: 'string',
      tenantId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessTypes)) {
      $dara.Model.validateArray(this.accessTypes);
    }
    if(Array.isArray(this.finalAccessTypes)) {
      $dara.Model.validateArray(this.finalAccessTypes);
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

export class ListMyRelatedApprovalsResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * The time when the request was submitted, in milliseconds since the Unix epoch.
   * 
   * @example
   * 1779695088000
   */
  applicationTime?: number;
  /**
   * @remarks
   * The content of the request.
   */
  contents?: ListMyRelatedApprovalsResponseBodyDataDataContents[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The process instance ID.
   * 
   * @example
   * 176906667488145
   */
  processInstanceId?: string;
  /**
   * @remarks
   * The reason for the request.
   * 
   * @example
   * 业务需要
   */
  reason?: string;
  /**
   * @remarks
   * The approval status. Valid values:
   * 
   * - WaitApproval: Waiting for approval.
   * 
   * - Confirmed: Pending authorization.
   * 
   * - RejectApproval: Approval rejected.
   * 
   * - AuthorizeSucceed: Authorization succeeded.
   * 
   * - AuthorizeFailed: Authorization failed.
   * 
   * - Deleted: Deleted.
   * 
   * - Canceled: Canceled.
   * 
   * @example
   * Deleted
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationTime: 'ApplicationTime',
      contents: 'Contents',
      defSchema: 'DefSchema',
      processInstanceId: 'ProcessInstanceId',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTime: 'number',
      contents: { 'type': 'array', 'itemType': ListMyRelatedApprovalsResponseBodyDataDataContents },
      defSchema: 'string',
      processInstanceId: 'string',
      reason: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyRelatedApprovalsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the approval requests.
   */
  data?: ListMyRelatedApprovalsResponseBodyDataData[];
  /**
   * @remarks
   * Indicates whether more results are available.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The token to use to retrieve the next page of results.
   * 
   * @example
   * eyJpZCI6NDU2fQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page. Default: 10. Maximum: 200.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      hasMore: 'HasMore',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListMyRelatedApprovalsResponseBodyDataData },
      hasMore: 'boolean',
      nextToken: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyRelatedApprovalsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paginated results.
   */
  data?: ListMyRelatedApprovalsResponseBodyData;
  /**
   * @remarks
   * The request ID, a universally unique identifier (UUID).
   * 
   * @example
   * 0bc5df3a17****903790e8e8a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMyRelatedApprovalsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

