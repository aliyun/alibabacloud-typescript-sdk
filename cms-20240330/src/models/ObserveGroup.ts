// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ObserveGroupDiscoverRule } from "./ObserveGroupDiscoverRule";
import { ObserveGroupPromInstance } from "./ObserveGroupPromInstance";


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
   * The creation time in UTC format: yyyy-MM-ddTHH:mm:ssZ.
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the observability group, which explains its business purpose.
   */
  description?: string;
  /**
   * @remarks
   * The list of entity discovery rules that define which entities the group automatically matches.
   */
  discoverRules?: ObserveGroupDiscoverRule[];
  /**
   * @remarks
   * The number of entities in each category. The key is the category domain (acs for cloud services, apm, or rum, which is extensible). The value is the number of entities in that category that belong to this group. Returned only when withEntityCount is set to true.
   */
  entityCounts?: { [key: string]: number };
  /**
   * @remarks
   * The extended information as a JSON string, which carries alert templates, alert contact groups, and suspension policies.
   */
  extraInfo?: string;
  /**
   * @remarks
   * Indicates whether the current user has followed this group. This value is used as the filter criterion for the My Favorites feature.
   */
  favorited?: boolean;
  /**
   * @remarks
   * The globally unique ID of the observability group. Format: og-<16-character hash>. Used uniformly across metrics, alerts, and consoles.
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the observability group. Must be unique within the same workspace.
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
   * The last modification time in UTC format: yyyy-MM-ddTHH:mm:ssZ. Automatically updated when any resource attribute changes.
   */
  modifyTime?: string;
  /**
   * @remarks
   * Specifies whether og_entity_info metric output is enabled. When enabled, the data plane writes the group membership information to the target Prometheus instance.
   */
  ogEntityInfoEnabled?: boolean;
  /**
   * @remarks
   * The set of Prometheus instances to which og_entity_info is written. Includes two source types: system (automatically identified by the system) and custom (user-defined).
   */
  ogEntityInfoPromInstances?: ObserveGroupPromInstance[];
  /**
   * @remarks
   * The product_group.id of the version 1.0 application group. This parameter is valid only when sourceOrigin is set to synced_from_1_0.
   */
  originGroupId?: string;
  /**
   * @remarks
   * The region ID to which the group belongs.
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
   * The resource tags (Alibaba Cloud standard tags) as an array of key-value pairs.
   */
  tags?: ObserveGroupTags[];
  /**
   * @remarks
   * The workspace ID to which the group belongs. This value is set at the workspace level and cannot be changed after creation.
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
      ogEntityInfoEnabled: 'ogEntityInfoEnabled',
      ogEntityInfoPromInstances: 'ogEntityInfoPromInstances',
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
      discoverRules: { 'type': 'array', 'itemType': ObserveGroupDiscoverRule },
      entityCounts: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      extraInfo: 'string',
      favorited: 'boolean',
      groupId: 'string',
      groupName: 'string',
      groupType: 'string',
      health: 'number',
      modifyTime: 'string',
      ogEntityInfoEnabled: 'boolean',
      ogEntityInfoPromInstances: { 'type': 'array', 'itemType': ObserveGroupPromInstance },
      originGroupId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceOrigin: 'string',
      tags: { 'type': 'array', 'itemType': ObserveGroupTags },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.discoverRules)) {
      $dara.Model.validateArray(this.discoverRules);
    }
    if(this.entityCounts) {
      $dara.Model.validateMap(this.entityCounts);
    }
    if(Array.isArray(this.ogEntityInfoPromInstances)) {
      $dara.Model.validateArray(this.ogEntityInfoPromInstances);
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

