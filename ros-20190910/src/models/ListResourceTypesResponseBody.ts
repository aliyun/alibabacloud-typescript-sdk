// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypesResponseBodyResourceTypeSummaries extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is displayed in UTC+0 based on the ISO 8601 standard but without the Z suffix. Format: YYYY-MM-DDThh:mm:ss.
   * 
   * @example
   * 2023-02-24T08:25:21
   */
  createTime?: string;
  /**
   * @remarks
   * The default version ID.
   * 
   * @example
   * v1
   */
  defaultVersionId?: string;
  /**
   * @remarks
   * The resource type description.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The entity type. Valid values: 
   * - Resource: regular resource type.
   * - DataSource: data source resource type. 
   * - Module: module.
   * 
   * @example
   * Module
   */
  entityType?: string;
  /**
   * @remarks
   * The latest version ID.
   * 
   * @example
   * v10
   */
  latestVersionId?: string;
  /**
   * @remarks
   * The resource type provider. Valid values:
   * - ROS: Resource Orchestration Service.
   * - Self: the user.
   * 
   * @example
   * ROS
   */
  provider?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  /**
   * @remarks
   * The total number of versions.
   * 
   * @example
   * 10
   */
  totalVersionCount?: number;
  /**
   * @remarks
   * The update time. The time is displayed in UTC+0 based on the ISO 8601 standard but without the Z suffix. Format: YYYY-MM-DDThh:mm:ss.
   * 
   * @example
   * 2023-02-24T08:25:21
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultVersionId: 'DefaultVersionId',
      description: 'Description',
      entityType: 'EntityType',
      latestVersionId: 'LatestVersionId',
      provider: 'Provider',
      resourceType: 'ResourceType',
      totalVersionCount: 'TotalVersionCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultVersionId: 'string',
      description: 'string',
      entityType: 'string',
      latestVersionId: 'string',
      provider: 'string',
      resourceType: 'string',
      totalVersionCount: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EA00860C-ECAF-5253-A1F9-8198695A7157
   */
  requestId?: string;
  /**
   * @remarks
   * The resource type summary list.
   */
  resourceTypeSummaries?: ListResourceTypesResponseBodyResourceTypeSummaries[];
  /**
   * @remarks
   * The resource type array.
   */
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceTypeSummaries: 'ResourceTypeSummaries',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceTypeSummaries: { 'type': 'array', 'itemType': ListResourceTypesResponseBodyResourceTypeSummaries },
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypeSummaries)) {
      $dara.Model.validateArray(this.resourceTypeSummaries);
    }
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

