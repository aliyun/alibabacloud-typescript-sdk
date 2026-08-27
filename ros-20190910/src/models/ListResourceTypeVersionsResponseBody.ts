// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypeVersionsResponseBodyResourceTypeVersions extends $dara.Model {
  /**
   * @remarks
   * The time when the version was created. The time is displayed in UTC+0 based on the ISO 8601 standard but without the Z suffix. Format: YYYY-MM-DDThh:mm:ss.
   * 
   * @example
   * 2023-02-24T08:25:21
   */
  createTime?: string;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The entity type. Valid values: Module, which indicates a module.
   * 
   * @example
   * Module
   */
  entityType?: string;
  /**
   * @remarks
   * Indicates whether the version is the default version. Valid values:
   * - true: The version is the default version.
   * - false: The version is not the default version.
   * 
   * @example
   * true
   */
  isDefaultVersion?: boolean;
  /**
   * @remarks
   * The resource type provider. Valid values:
   * - ROS: Resource Orchestration Service.
   * - Self: The user.
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
   * The time when the version was last updated. The time is displayed in UTC+0 based on the ISO 8601 standard but without the Z suffix. Format: YYYY-MM-DDThh:mm:ss.
   * 
   * @example
   * 2023-02-24T08:25:21
   */
  updateTime?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      entityType: 'EntityType',
      isDefaultVersion: 'IsDefaultVersion',
      provider: 'Provider',
      resourceType: 'ResourceType',
      updateTime: 'UpdateTime',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      entityType: 'string',
      isDefaultVersion: 'boolean',
      provider: 'string',
      resourceType: 'string',
      updateTime: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypeVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resource type version information.
   */
  resourceTypeVersions?: ListResourceTypeVersionsResponseBodyResourceTypeVersions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceTypeVersions: 'ResourceTypeVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceTypeVersions: { 'type': 'array', 'itemType': ListResourceTypeVersionsResponseBodyResourceTypeVersions },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypeVersions)) {
      $dara.Model.validateArray(this.resourceTypeVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

