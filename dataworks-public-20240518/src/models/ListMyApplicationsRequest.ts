// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyApplicationsRequestResource extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * Note: The resource types supported by the system are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).name.
   * 
   * For more information, see [ResourceSchema documentation for Alibaba Cloud International site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions).
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The resource parsing version is constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).version.
   * 
   * [ResourceSchema documentation for Alibaba Cloud International site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions)
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
   * For more information, see [ResourceSchema documentation for Alibaba Cloud International site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions).
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

export class ListMyApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by resource type.
   * 
   * Note: The resource types supported by the system are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).name.
   * 
   * For more information, see [ResourceSchema documentation for Alibaba Cloud International site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions).
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The end of the request submission time range, as a timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1779724799999
   */
  endTime?: number;
  /**
   * @remarks
   * The pagination token.
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
   * For more information, see [ResourceSchema documentation for Alibaba Cloud International site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions).
   */
  resource?: ListMyApplicationsRequestResource;
  /**
   * @remarks
   * Filters by least privilege resource type.
   * 
   * Note: The least privilege resource types are constrained by [ResourceSchema](https://www.alibabacloud.com/help/en/dataworks/developer-reference/resourceschema-template-instructions).resources[*].isValidLeaf being true.
   * 
   * For more information, see [ResourceSchema documentation for Alibaba Cloud International site](https://www.alibabacloud.com/help/zh/dataworks/developer-reference/resourceschema-template-instructions).
   * 
   * This parameter is required.
   */
  resourceType?: string[];
  /**
   * @remarks
   * The start of the request submission time range, as a timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1771948800000
   */
  startTime?: number;
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
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      defSchema: 'DefSchema',
      endTime: 'EndTime',
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
      defSchema: 'string',
      endTime: 'number',
      nextToken: 'string',
      pageSize: 'number',
      resource: ListMyApplicationsRequestResource,
      resourceType: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
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

