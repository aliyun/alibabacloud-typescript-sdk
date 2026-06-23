// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyApplicationsResponseBodyDataDataContentsGrantee extends $dara.Model {
  /**
   * @remarks
   * The ID of the principal. The value of this parameter varies based on the value of `PrincipalType`:
   * 
   * - `RamUser`: The DataWorks user ID.
   * 
   * - `RamRole`: The DataWorks user ID, prefixed with `ROLE_`.
   * 
   * - `DataworksTenantMember`: The DataWorks user ID.
   * 
   * - `DataworksTenantRole`: The DataWorks tenant role code.
   * 
   * - `DataworksProjectRole`: The DataWorks workspace role code.
   * 
   * - `DataworksProjectMember`: The DataWorks user ID.
   * 
   * - `DlfRole`: The DlfNext role name.
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

export class ListMyApplicationsResponseBodyDataDataContentsResource extends $dara.Model {
  /**
   * @remarks
   * **The name of the `ResourceSchema` used to parse the resource.**
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * **The version of the `ResourceSchema` used to parse the resource.**
   * 
   * @example
   * v1.0.0
   */
  defVersion?: string;
  /**
   * @remarks
   * **The resource metadata. Its format is defined by the `ResourceSchema`.**
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
   * The time when the item was created, in Unix timestamp format (milliseconds).
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
   * When the permission expires, in Unix timestamp format (milliseconds).
   * 
   * @example
   * 1782354014507
   */
  expirationTime?: number;
  /**
   * @remarks
   * The granted permissions.
   */
  finalAccessTypes?: string[];
  /**
   * @remarks
   * **The principal to be granted the permission.**
   */
  grantee?: ListMyApplicationsResponseBodyDataDataContentsGrantee;
  /**
   * @remarks
   * The unique ID of the application item.
   * 
   * @example
   * a8aa620037bb410ea13837f9b4d053d8
   */
  id?: string;
  /**
   * @remarks
   * The ID of the approval process instance for the application.
   * 
   * @example
   * 777799223
   */
  processInstanceId?: string;
  /**
   * @remarks
   * **The requested resource.**
   */
  resource?: ListMyApplicationsResponseBodyDataDataContentsResource;
  /**
   * @remarks
   * The category of the resource. For example, `table`.
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
   * - `AuthorizeSucceed`: Authorization succeeded
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
   * The time when the item was last updated, in Unix timestamp format (milliseconds).
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
   * The time the application was submitted, in Unix timestamp format (milliseconds).
   * 
   * @example
   * 1779695088000
   */
  applicationTime?: number;
  /**
   * @remarks
   * The content of the application.
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
   * The reason for the application.
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
   * - `AuthorizeSucceed`: Authorization succeeded
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
   * The list of application details.
   */
  data?: ListMyApplicationsResponseBodyDataData[];
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
   * The cursor to retrieve the next page of results. If this parameter is empty, all results have been returned.
   * 
   * @example
   * eyJpZCI6NDU2fQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The page size. Default value: 10. Maximum value: 200.
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
   * The paginated results.
   */
  data?: ListMyApplicationsResponseBodyData;
  /**
   * @remarks
   * A unique identifier (UUID) generated for the request.
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

