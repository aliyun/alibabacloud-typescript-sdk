// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyApplicationsResponseBodyDataDataContentsGrantee extends $dara.Model {
  /**
   * @remarks
   * The principal ID:
   * - RamUser: DataWorks user ID
   * - RamRole: DataWorks user ID starting with "ROLE_"
   * - DataworksTenantMember: DataWorks user ID
   * - DataworksTenantRole: DataWorks tenant role code
   * - DataworksProjectRole: DataWorks workspace role code
   * - DataworksProjectMember: DataWorks user ID
   * - DlfRole: DlfNext role name
   * 
   * @example
   * ROLE_3133343434
   */
  principalId?: string;
  /**
   * @remarks
   * The principal type. Valid values:
   * - RamRole
   * - RamUser
   * - DataworksTenantMember
   * - DataworksTenantRole
   * - DataworksProjectMember
   * - DataworksProjectRole
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

export class ListMyApplicationsResponseBodyDataDataContentsResource extends $dara.Model {
  /**
   * @remarks
   * **The ResourceSchema.name that the resource parsing depends on**
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * **The ResourceSchema.version that the resource parsing depends on**
   * 
   * @example
   * v1.0.0
   */
  defVersion?: string;
  /**
   * @remarks
   * **The resource metadata. The data content is constrained by ResourceSchema.**
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

export class ListMyApplicationsResponseBodyDataDataContents extends $dara.Model {
  /**
   * @remarks
   * The permissions requested for the resource operations.
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
   * @example
   * 2022-11-29 15:04:52
   */
  createTime?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * MAXCOMPUTE
   */
  defSchema?: string;
  /**
   * @remarks
   * The expiration time of the permissions in milliseconds.
   * 
   * @example
   * 1782354014507
   */
  expirationTime?: number;
  /**
   * @remarks
   * The final approved resource operation permissions.
   */
  finalAccessTypes?: string[];
  /**
   * @remarks
   * **Grantee**
   */
  grantee?: ListMyApplicationsResponseBodyDataDataContentsGrantee;
  /**
   * @remarks
   * The primary key of the application content.
   * 
   * @example
   * a8aa620037bb410ea13837f9b4d053d8
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
   * **Resource declaration**
   */
  resource?: ListMyApplicationsResponseBodyDataDataContentsResource;
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
   * Filters by approval status. Valid values:
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
   * The tenant ID.
   * 
   * @example
   * 69973837489
   */
  tenantId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2022-07-08 23:58:59
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
      grantee: ListMyApplicationsResponseBodyDataDataContentsGrantee,
      id: 'string',
      processInstanceId: 'string',
      resource: ListMyApplicationsResponseBodyDataDataContentsResource,
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

export class ListMyApplicationsResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * The time when the request was submitted.
   * 
   * @example
   * 1779695088000
   */
  applicationTime?: number;
  /**
   * @remarks
   * The request details.
   */
  contents?: ListMyApplicationsResponseBodyDataDataContents[];
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
   * Business requirements
   */
  reason?: string;
  /**
   * @remarks
   * Filters by approval status. Valid values:
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
      contents: { 'type': 'array', 'itemType': ListMyApplicationsResponseBodyDataDataContents },
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

export class ListMyApplicationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of request details.
   */
  data?: ListMyApplicationsResponseBodyDataData[];
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
   * The pagination token.
   * 
   * @example
   * eyJpZCI6NDU2fQ==
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
      data: { 'type': 'array', 'itemType': ListMyApplicationsResponseBodyDataData },
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

export class ListMyApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data in the paginated results.
   */
  data?: ListMyApplicationsResponseBodyData;
  /**
   * @remarks
   * The API request ID generated by using a UUID.
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
      data: ListMyApplicationsResponseBodyData,
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

