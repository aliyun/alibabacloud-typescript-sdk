// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationContentsResponseBodyDataContentsGrantee extends $dara.Model {
  /**
   * @remarks
   * The authorization principal ID. The mapped ID has different semantics for different principal types:
   * 
   * - RamUser: the DataWorks user ID.
   * 
   * - RamRole: the DataWorks user ID starting with "ROLE_".
   * 
   * - DlfRole: the DlfNext role name.
   * 
   * @example
   * ROLE_3133343434
   */
  principalId?: string;
  /**
   * @remarks
   * The authorization principal type. Valid values:
   * 
   * - RamUser
   * - RamRole
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

export class GetApplicationContentsResponseBodyDataContentsResource extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * Note: The resource types supported by the system are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).name.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
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
   * The resource metadata declaration.
   * 
   * Note: The metadata is constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).resources. A valid resource declaration must include the full-path metadata declaration from level 0 to the validLeaf level.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
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
   * The list of requested permissions.
   * 
   * Note: Different levels of resources support different types of permission requests, which are uniformly constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).isValidLeaf, accessTypeRestrictions, and authMethodAccessTypes.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  accessTypes?: string[];
  /**
   * @remarks
   * The authorization method. Currently, only SEVERLESS_STARROCKS supports specifying the authorization method: ranger and starrocksManager.
   * 
   * Note: Different resources support different authorization methods, which are uniformly constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).authMethods.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * @example
   * ranger
   */
  authMethod?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1773972024000
   */
  createTime?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * Note: The resource types supported by the system are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).name.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The expiration date of the permission. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1785835708000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The list of resource operation permissions that are finally approved.
   */
  finalAccessTypes?: string[];
  /**
   * @remarks
   * The description of the authorization principal. 
   * 
   * Note: The authorization principal types supported by the system are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).authPrincipal.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  grantee?: GetApplicationContentsResponseBodyDataContentsGrantee;
  /**
   * @remarks
   * The unique identifier of the request item.
   * 
   * @example
   * Y9H7AKFmjhWzLYdZNDZA5
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
   * The resource declaration. The resource description is constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  resource?: GetApplicationContentsResponseBodyDataContentsResource;
  /**
   * @remarks
   * The least privilege resource type.
   * 
   * Note: The least privilege resource types are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).resources[*].isValidLeaf being true.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
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
   * - Canceled: canceled
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
   * The time when the request was submitted. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1779675618000
   */
  applicationTime?: number;
  /**
   * @remarks
   * The list of request items.
   */
  contents?: GetApplicationContentsResponseBodyDataContents[];
  /**
   * @remarks
   * The resource type.
   * 
   * Note: The resource types supported by the system are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).name.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
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
   * The reason for the request.
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
   * - Canceled: canceled
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
   * The process instance and the associated request details.
   */
  data?: GetApplicationContentsResponseBodyData;
  /**
   * @remarks
   * The request ID. You can use this ID to locate logs and troubleshoot issues.
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

