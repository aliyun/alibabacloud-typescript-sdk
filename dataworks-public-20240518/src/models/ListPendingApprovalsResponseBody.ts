// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPendingApprovalsResponseBodyDataDataContentsGrantee extends $dara.Model {
  /**
   * @remarks
   * The ID of the principal.
   * 
   * Note: When principalType is of different types, it corresponds to different semantics:
   * - RamUser: DataWorks user ID
   * - RamRole: DataWorks user ID starting with "ROLE_"
   * - DataworksTenantMember: DataWorks user ID
   * - DataworksTenantRole: DataWorks tenant roleCode
   * - DataworksProjectRole: DataWorks workspace roleCode
   * - DataworksProjectMember: DataWorks user ID
   * - DlfRole: DlfNext role name
   * 
   * @example
   * 213463068144525171
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the principal. Valid values:
   * 
   * - RamRole
   * - RamUser
   * - DataworksTenantMember
   * - DataworksTenantRole
   * - DataworksProjectMember
   * - DataworksProjectRole
   * - DlfRole
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
   * The ResourceSchema.name on which the resource parsing depends.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The ResourceSchema.version on which the resource parsing depends.
   * 
   * @example
   * v1.0.0
   */
  defVersion?: string;
  /**
   * @remarks
   * The resource metadata. The data content is constrained by ResourceSchema.
   * 
   * @example
   * {"schema": "default", "threeTierModel": false, "project": "sync_dtestn", "workspace": "4477656", "table": "order", "tenant": "524257424864736"}
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
   * The requested resource operation permissions.
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
   * The creation time.
   * 
   * The format is `yyyy-MM-dd HH:mm:ss`, such as `2025-09-11 10:13:21`. This example does not include a time zone identifier.
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
   * The expiration date of the permissions. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1782354014507
   */
  expirationTime?: number;
  /**
   * @remarks
   * The resource operation permissions that received final approval.
   */
  finalAccessTypes?: string[];
  /**
   * @remarks
   * The description of the authorization principal.
   */
  grantee?: ListPendingApprovalsResponseBodyDataDataContentsGrantee;
  /**
   * @remarks
   * The unique identifier of the application content.
   * 
   * @example
   * 210001918826
   */
  id?: string;
  /**
   * @remarks
   * **The approval process instance ID.**
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
   * The least privilege resource type.
   * 
   * @example
   * table
   */
  resourceName?: string;
  /**
   * @remarks
   * The approval status. Valid values:
   * 
   * - WaitApproval: pending approval
   * - Confirmed: pending authorization
   * - RejectApproval: approval rejected
   * - AuthorizeSucceed: authorization succeeded
   * - AuthorizeFailed: authorization failed
   * - Deleted: deleted
   * - Canceled: withdrawn
   * 
   * @example
   * Deleted
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 69973837489
   */
  tenantId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * The format is `yyyy-MM-dd HH:mm:ss`, such as `2022-07-06 19:13:05`. This example does not include a time zone identifier.
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
   * The time when the application was initiated.
   * 
   * @example
   * 1778641560000
   */
  applicationTime?: number;
  /**
   * @remarks
   * The application content.
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
   * The approval process instance ID.
   * 
   * @example
   * 176906667488145
   */
  processInstanceId?: string;
  /**
   * @remarks
   * The reason for the application.
   * 
   * @example
   * Business requirement
   */
  reason?: string;
  /**
   * @remarks
   * The approval status. Valid values:
   * 
   * - WaitApproval: pending approval
   * - Confirmed: pending authorization
   * - RejectApproval: approval rejected
   * - AuthorizeSucceed: authorization succeeded
   * - AuthorizeFailed: authorization failed
   * - Deleted: deleted
   * - Canceled: withdrawn
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
   * The list of data in the paginated results.
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
   * The cursor.
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
   * The ID of the API request, generated by using a UUID.
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

