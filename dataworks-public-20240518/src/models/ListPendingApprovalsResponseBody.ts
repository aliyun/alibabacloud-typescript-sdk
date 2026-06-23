// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPendingApprovalsResponseBodyDataDataContentsGrantee extends $dara.Model {
  /**
   * @remarks
   * The principal ID.
   * 
   * Note: The meaning of this ID varies based on the `principalType`.
   * 
   * - If the `principalType` is `RamUser`, this is the DataWorks user ID.
   * 
   * - If the `principalType` is `RamRole`, this is the DataWorks user ID, prefixed with "ROLE_".
   * 
   * - If the `principalType` is `DataWorksTenantMember`, this is the DataWorks user ID.
   * 
   * - If the `principalType` is `DataWorksTenantRole`, this is the DataWorks tenant role code.
   * 
   * - If the `principalType` is `DataWorksProjectRole`, this is the DataWorks workspace role code.
   * 
   * - If the `principalType` is `DataWorksProjectMember`, this is the DataWorks user ID.
   * 
   * - If the `principalType` is `DlfRole`, this is the DLF role name.
   * 
   * @example
   * 213463068144525171
   */
  principalId?: string;
  /**
   * @remarks
   * The principal type. Valid values:
   * 
   * - `RamRole`: A RAM role.
   * 
   * - `RamUser`: A RAM user.
   * 
   * - `DataWorksTenantMember`: A DataWorks tenant member.
   * 
   * - `DataWorksTenantRole`: A DataWorks tenant role.
   * 
   * - `DataWorksProjectMember`: A DataWorks workspace member.
   * 
   * - `DataWorksProjectRole`: A DataWorks workspace role.
   * 
   * - `DlfRole`: A DLF role.
   * 
   * @example
   * RamUser
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

export class ListPendingApprovalsResponseBodyDataDataContentsResource extends $dara.Model {
  /**
   * @remarks
   * The name of the `ResourceSchema` used to parse the resource.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The version of the `ResourceSchema` used to parse the resource.
   * 
   * @example
   * v1.0.0
   */
  defVersion?: string;
  /**
   * @remarks
   * The resource metadata. The content is constrained by the DefSchema.
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

export class ListPendingApprovalsResponseBodyDataDataContents extends $dara.Model {
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
   * The creation time of the entry.
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
   * The permission expiration time, in milliseconds since the Unix epoch.
   * 
   * @example
   * 1782354014507
   */
  expirationTime?: number;
  /**
   * @remarks
   * The final permissions granted after approval.
   */
  finalAccessTypes?: string[];
  /**
   * @remarks
   * Information about the grantee.
   */
  grantee?: ListPendingApprovalsResponseBodyDataDataContentsGrantee;
  /**
   * @remarks
   * The unique identifier of the requested item.
   * 
   * @example
   * 210001918826
   */
  id?: string;
  /**
   * @remarks
   * **The process instance ID.**
   * 
   * @example
   * 176906667488145
   */
  processInstanceId?: string;
  /**
   * @remarks
   * The resource declaration.
   */
  resource?: ListPendingApprovalsResponseBodyDataDataContentsResource;
  /**
   * @remarks
   * The type of the resource, such as a table or function.
   * 
   * @example
   * table
   */
  resourceName?: string;
  /**
   * @remarks
   * The approval status. Valid values:
   * 
   * - `WaitApproval`: Pending approval
   * 
   * - `Confirmed`: Pending authorization
   * 
   * - `RejectApproval`: Rejected
   * 
   * - `AuthorizeSucceed`: Authorization successful
   * 
   * - `AuthorizeFailed`: Authorization failed
   * 
   * - `Deleted`: Deleted
   * 
   * - `Canceled`: Canceled
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
   * The time the entry was last updated.
   * 
   * @example
   * 2022-07-06 19:13:05
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
      grantee: ListPendingApprovalsResponseBodyDataDataContentsGrantee,
      id: 'string',
      processInstanceId: 'string',
      resource: ListPendingApprovalsResponseBodyDataDataContentsResource,
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

export class ListPendingApprovalsResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * The submission time of the request.
   * 
   * @example
   * 申请时间
   */
  applicationTime?: number;
  /**
   * @remarks
   * The content of the request.
   */
  contents?: ListPendingApprovalsResponseBodyDataDataContents[];
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
   * - `WaitApproval`: Pending approval
   * 
   * - `Confirmed`: Pending authorization
   * 
   * - `RejectApproval`: Rejected
   * 
   * - `AuthorizeSucceed`: Authorization successful
   * 
   * - `AuthorizeFailed`: Authorization failed
   * 
   * - `Deleted`: Deleted
   * 
   * - `Canceled`: Canceled
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
      contents: { 'type': 'array', 'itemType': ListPendingApprovalsResponseBodyDataDataContents },
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

export class ListPendingApprovalsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of pending approvals.
   */
  data?: ListPendingApprovalsResponseBodyDataData[];
  /**
   * @remarks
   * Indicates whether more data is available.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * A token to retrieve the next page of results.
   * 
   * @example
   * eyJpZCI6MTIzfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The page size. Default: 10. Maximum: 200.
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
      data: { 'type': 'array', 'itemType': ListPendingApprovalsResponseBodyDataData },
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

export class ListPendingApprovalsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paginated results.
   */
  data?: ListPendingApprovalsResponseBodyData;
  /**
   * @remarks
   * The request ID.
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
      data: ListPendingApprovalsResponseBodyData,
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

