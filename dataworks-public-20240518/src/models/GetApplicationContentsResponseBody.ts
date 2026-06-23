// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationContentsResponseBodyDataContentsGrantee extends $dara.Model {
  /**
   * @remarks
   * The ID of the principal. The format of the ID varies based on the `PrincipalType` value:
   * 
   * - If `PrincipalType` is `RamUser`, this parameter specifies the ID of a DataWorks user.
   * 
   * - If `PrincipalType` is `RamRole`, this parameter specifies the ID of a role in DataWorks. The ID must be prefixed with `ROLE_`.
   * 
   * - If `PrincipalType` is `DlfRole`, this parameter specifies the name of a DlfNext role.
   * 
   * @example
   * ROLE_3133343434
   */
  principalId?: string;
  /**
   * @remarks
   * The principal type. Valid values:
   * 
   * - `RamUser`
   * 
   * - `RamRole`
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

export class GetApplicationContentsResponseBodyDataContentsResource extends $dara.Model {
  /**
   * @remarks
   * The name of the `ResourceSchema` that defines how to parse this resource.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The version of the `ResourceSchema` that defines how to parse this resource.
   * 
   * @example
   * v1.0.0
   */
  defVersion?: string;
  /**
   * @remarks
   * The resource metadata. The structure of the metadata is defined by the `ResourceSchema`.
   * 
   * @example
   * "{\\"schema\\":\\"default\\",\\"threeTierModel\\":false,\\"workspace\\":\\"449656\\",\\"project\\":\\"sync_destination\\",\\"table\\":\\"order_table\\",\\"tenant\\":\\"524997424564736\\"}"
   */
  metaData?: string;
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
      metaData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationContentsResponseBodyDataContents extends $dara.Model {
  /**
   * @remarks
   * A list of the permissions requested for the resource.
   */
  accessTypes?: string[];
  /**
   * @remarks
   * The authorization method.
   * 
   * @example
   * ranger
   */
  authMethod?: string;
  /**
   * @remarks
   * The time when the content item was created. This value is a millisecond-precision timestamp.
   * 
   * @example
   * 1773972024000
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
   * The time when the permissions expire. This value is a millisecond-precision timestamp.
   * 
   * @example
   * 1785835708000
   */
  expirationTime?: number;
  /**
   * @remarks
   * A list of the permissions granted in the final approval.
   */
  finalAccessTypes?: string[];
  /**
   * @remarks
   * The grantee.
   */
  grantee?: GetApplicationContentsResponseBodyDataContentsGrantee;
  /**
   * @remarks
   * The unique ID of the application content item.
   * 
   * @example
   * Y9H7AKFmjhWzLYdZNDZA5
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
   * The resource declaration.
   */
  resource?: GetApplicationContentsResponseBodyDataContentsResource;
  /**
   * @remarks
   * The specific type of the resource, such as a table.
   * 
   * @example
   * table
   */
  resourceName?: string;
  /**
   * @remarks
   * The approval status. Valid values:
   * 
   * - `WaitApproval`: The item is pending approval.
   * 
   * - `Confirmed`: The item is pending authorization.
   * 
   * - `RejectApproval`: The item was rejected.
   * 
   * - `AuthorizeSucceed`: Authorization was successful.
   * 
   * - `AuthorizeFailed`: Authorization failed.
   * 
   * - `Deleted`: The item was deleted during the approval process.
   * 
   * - `Canceled`: The item was canceled.
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
   * The time when the content item was last updated. This value is a millisecond-precision timestamp.
   * 
   * @example
   * 1773972024000
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
      grantee: GetApplicationContentsResponseBodyDataContentsGrantee,
      id: 'string',
      processInstanceId: 'string',
      resource: GetApplicationContentsResponseBodyDataContentsResource,
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

export class GetApplicationContentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the application was submitted. This value is a millisecond-precision timestamp.
   * 
   * @example
   * 1779675618000
   */
  applicationTime?: number;
  /**
   * @remarks
   * A list of the application contents.
   */
  contents?: GetApplicationContentsResponseBodyDataContents[];
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
   * 332066440109224007
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
   * - `WaitApproval`: The application is pending approval.
   * 
   * - `Confirmed`: The application is pending authorization.
   * 
   * - `RejectApproval`: The application was rejected.
   * 
   * - `AuthorizeSucceed`: Authorization was successful.
   * 
   * - `AuthorizeFailed`: Authorization failed.
   * 
   * - `Deleted`: The application was deleted.
   * 
   * - `Canceled`: The application was canceled.
   * 
   * @example
   * WaitApproval
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
      contents: { 'type': 'array', 'itemType': GetApplicationContentsResponseBodyDataContents },
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

export class GetApplicationContentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The process instance and its associated application contents.
   */
  data?: GetApplicationContentsResponseBodyData;
  /**
   * @remarks
   * The request ID. Use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 34267E2E-0335-1A60-A1F0-ADA530890CBA
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
      data: GetApplicationContentsResponseBodyData,
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

