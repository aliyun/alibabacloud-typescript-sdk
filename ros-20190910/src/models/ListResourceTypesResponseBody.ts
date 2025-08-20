// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypesResponseBodyResourceTypeSummaries extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is displayed in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format.
   * 
   * @example
   * 2023-02-24T08:25:21
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the default version.
   * 
   * @example
   * v1
   */
  defaultVersionId?: string;
  /**
   * @remarks
   * The description of the resource type.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The entity type. Valid values:
   * 
   * *   Resource: regular resources.
   * *   DataSource: DataSource resources.
   * *   Module: modules.
   * 
   * @example
   * Module
   */
  entityType?: string;
  /**
   * @remarks
   * The ID of the latest version.
   * 
   * @example
   * v10
   */
  latestVersionId?: string;
  /**
   * @remarks
   * The provider of the resource type. Valid values:
   * 
   * *   ROS: The resource type is provided by ROS.
   * *   Self: The resource type is provided by you.
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
   * The number of versions.
   * 
   * @example
   * 10
   */
  totalVersionCount?: number;
  /**
   * @remarks
   * The update time. The time is displayed in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format.
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
   * The ID of the request.
   * 
   * @example
   * EA00860C-ECAF-5253-A1F9-8198695A7157
   */
  requestId?: string;
  /**
   * @remarks
   * The resource type summaries.
   */
  resourceTypeSummaries?: ListResourceTypesResponseBodyResourceTypeSummaries[];
  /**
   * @remarks
   * The array of resource types.
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

