// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveGroupTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObserveGroup extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the group belongs.
   */
  aliUid?: string;
  /**
   * @remarks
   * The time when the group was created, in UTC format (yyyy-MM-ddTHH:mm:ssZ).
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the observability group, which describes the business purpose.
   */
  description?: string;
  /**
   * @remarks
   * The list of entity discovery rules that define which entities the group automatically matches.
   */
  discoverRules?: string;
  /**
   * @remarks
   * The number of entities in each category. The key is the category domain (such as acs for Alibaba Cloud services, apm, or rum, which is extensible). The value is the number of entities in that category that belong to this group. This parameter is returned only when withEntityCount is set to true.
   */
  entityCounts?: { [key: string]: number };
  /**
   * @remarks
   * The extended information, which is a JSON string that contains alert templates, alert contact groups, pause policies, and other settings.
   */
  extraInfo?: string;
  /**
   * @remarks
   * Indicates whether the current user has favorited this group. This value is used as the filter criterion for the My Favorites feature.
   */
  favorited?: boolean;
  /**
   * @remarks
   * The globally unique ID of the observability group, in the format of og-<16-character hash>. This ID is used across metrics, alerts, and the console.
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the observability group. The name must be unique within the workspace.
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the observability group.
   */
  groupType?: string;
  /**
   * @remarks
   * The health status of the group. Valid values:
   * - -1: unknown (placeholder).
   * - 1: healthy.
   * - 0: unhealthy.
   */
  health?: number;
  /**
   * @remarks
   * The time when the group was last modified, in UTC format (yyyy-MM-ddTHH:mm:ssZ). This value is automatically updated when any property of the resource changes.
   */
  modifyTime?: string;
  /**
   * @remarks
   * The product_group.id of the version 1.0 application group. This parameter is returned only when sourceOrigin is set to synced_from_1_0.
   */
  originGroupId?: string;
  /**
   * @remarks
   * The region ID of the group.
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The data source. Valid values:
   * - native_2_0: created natively in version 2.0.
   * - synced_from_1_0: synchronized from a version 1.0 application group.
   */
  sourceOrigin?: string;
  /**
   * @remarks
   * The resource tags (Alibaba Cloud standard tags), which are an array of key-value pairs.
   */
  tags?: ObserveGroupTags[];
  /**
   * @remarks
   * The workspace ID to which the group belongs. This value is set at the workspace level and cannot be changed after the group is created.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'aliUid',
      createTime: 'createTime',
      description: 'description',
      discoverRules: 'discoverRules',
      entityCounts: 'entityCounts',
      extraInfo: 'extraInfo',
      favorited: 'favorited',
      groupId: 'groupId',
      groupName: 'groupName',
      groupType: 'groupType',
      health: 'health',
      modifyTime: 'modifyTime',
      originGroupId: 'originGroupId',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      sourceOrigin: 'sourceOrigin',
      tags: 'tags',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      createTime: 'string',
      description: 'string',
      discoverRules: 'string',
      entityCounts: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      extraInfo: 'string',
      favorited: 'boolean',
      groupId: 'string',
      groupName: 'string',
      groupType: 'string',
      health: 'number',
      modifyTime: 'string',
      originGroupId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceOrigin: 'string',
      tags: { 'type': 'array', 'itemType': ObserveGroupTags },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.entityCounts) {
      $dara.Model.validateMap(this.entityCounts);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

