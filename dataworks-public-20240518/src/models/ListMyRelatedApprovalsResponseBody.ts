// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyRelatedApprovalsResponseBodyDataDataContentsGrantee extends $dara.Model {
  /**
   * @remarks
   * Principal ID.
   * 
   * Note: When principalType is a different type, it corresponds to different semantics:
   * 
   * - RamUser: Dataworks UserId
   * - RamRole: Dataworks UserId prefixed with "ROLE_"
   * - DataworksTenantMember: Dataworks UserId
   * - DataworksTenantRole: Dataworks tenant roleCode
   * - DataworksProjectRole: Dataworks workspace roleCode
   * - DataworksProjectMember: Dataworks UserId
   * - DlfRole: DlfNext role name
   * 
   * @example
   * ROLE_3133343434
   */
  principalId?: string;
  /**
   * @remarks
   * Principal type. Enum values:
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
   * ResourceSchema.name that the resource parsing depends on
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * ResourceSchema.version that the resource parsing depends on
   * 
   * @example
   * v1.0.0
   */
  defVersion?: string;
  /**
   * @remarks
   * Resource metadata, data content is constrained by ResourceSchema
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
   * Resource operation permissions requested in the application
   */
  accessTypes?: string[];
  /**
   * @remarks
   * Authorization method
   * 
   * @example
   * default
   */
  authMethod?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2025-09-11 10:13:21
   */
  createTime?: number;
  /**
   * @remarks
   * Resource type
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * Permission expiration date, millisecond timestamp
   * 
   * @example
   * 1779695088000
   */
  expirationTime?: number;
  /**
   * @remarks
   * Resource operation permissions finally approved
   */
  finalAccessTypes?: string[];
  /**
   * @remarks
   * Authorization target
   */
  grantee?: ListMyRelatedApprovalsResponseBodyDataDataContentsGrantee;
  /**
   * @remarks
   * Unique identifier of the application content
   * 
   * @example
   * 1009516415
   */
  id?: string;
  /**
   * @remarks
   * Approval process instance ID of the submitted application
   * 
   * @example
   * 777799223
   */
  processInstanceId?: string;
  /**
   * @remarks
   * Resource declaration
   */
  resource?: ListMyRelatedApprovalsResponseBodyDataDataContentsResource;
  /**
   * @remarks
   * Minimum permission resource type
   * 
   * @example
   * table
   */
  resourceName?: string;
  /**
   * @remarks
   * Approval status. Enum values:
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
   * Deleted
   */
  status?: string;
  /**
   * @remarks
   * Tenant ID
   * 
   * @example
   * 69973837489
   */
  tenantId?: string;
  /**
   * @remarks
   * Update time
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
   * Application submission time
   * 
   * @example
   * 1779695088000
   */
  applicationTime?: number;
  /**
   * @remarks
   * Application content
   */
  contents?: ListMyRelatedApprovalsResponseBodyDataDataContents[];
  /**
   * @remarks
   * Resource type
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * Process instance ID
   * 
   * @example
   * 176906667488145
   */
  processInstanceId?: string;
  /**
   * @remarks
   * Application reason
   * 
   * @example
   * 业务需要
   */
  reason?: string;
  /**
   * @remarks
   * Approval status. Enum values:
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
   * Application order details
   */
  data?: ListMyRelatedApprovalsResponseBodyDataData[];
  /**
   * @remarks
   * Whether there is more data
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * Pagination cursor
   * 
   * @example
   * eyJpZCI6NDU2fQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Page size (default 10, maximum 200)
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
   * Paginated results
   */
  data?: ListMyRelatedApprovalsResponseBodyData;
  /**
   * @remarks
   * API request ID, generated by UUID
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

