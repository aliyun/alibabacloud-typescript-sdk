// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPendingApprovalsRequestGrantee extends $dara.Model {
  /**
   * @remarks
   * The ID of the authorization principal.
   * 
   * @example
   * ROLE_3133343434
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the authorization principal.
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

export class ListPendingApprovalsRequestResource extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * Note: The resource types for which permissions can be requested are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).name.
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
   * The resource metadata.
   * 
   * Note: The metadata is constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).resources. A valid resource declaration must include the full-path metadata declaration from level 0 to the validLeaf level.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * @example
   * {"workspace": "449056", "project": "sync_destination"}
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

export class ListPendingApprovalsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by requested permissions.
   * 
   * Note: The permission types supported for application vary across resource levels and are uniformly constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).isValidLeaf, accessTypeRestrictions, and authMethodAccessTypes.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  accessTypes?: string[];
  /**
   * @remarks
   * Filters by resource type.
   * 
   * Note: The resource types for which permissions can be requested are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).name.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The end of the time range for request submission, as a timestamp in milliseconds.
   * 
   * @example
   * 1779724799999
   */
  endTime?: number;
  /**
   * @remarks
   * Filters by authorization principal. 
   * 
   * Note: The authorization principal types supported by the system are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).authPrincipal.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  grantee?: ListPendingApprovalsRequestGrantee;
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters by exact or generalized resource. The resource description is constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   */
  resource?: ListPendingApprovalsRequestResource;
  /**
   * @remarks
   * Filters by least privilege resource type.
   * 
   * Note: The least privilege resource types are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).resources[*].isValidLeaf being true.
   * 
   * Appendix: [ResourceSchema documentation for the international site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
   * 
   * This parameter is required.
   * 
   * @example
   * ["table", "column"]
   */
  resourceType?: string[];
  /**
   * @remarks
   * The start of the time range for request submission, as a timestamp in milliseconds.
   * 
   * @example
   * 1771948800000
   */
  startTime?: number;
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTypes: { 'type': 'array', 'itemType': 'string' },
      defSchema: 'string',
      endTime: 'number',
      grantee: ListPendingApprovalsRequestGrantee,
      nextToken: 'string',
      pageSize: 'number',
      resource: ListPendingApprovalsRequestResource,
      resourceType: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

