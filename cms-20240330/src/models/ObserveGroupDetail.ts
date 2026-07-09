// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveGroupDetailEntitySummaries extends $dara.Model {
  /**
   * @remarks
   * The entity category.
   */
  entityCategory?: string;
  /**
   * @remarks
   * The entity count.
   */
  entityCount?: number;
  /**
   * @remarks
   * The entity domain.
   */
  entityDomain?: string;
  /**
   * @remarks
   * The entity type.
   */
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityCategory: 'entityCategory',
      entityCount: 'entityCount',
      entityDomain: 'entityDomain',
      entityType: 'entityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityCategory: 'string',
      entityCount: 'number',
      entityDomain: 'string',
      entityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObserveGroupDetail extends $dara.Model {
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
   * The description of the observability group, which explains its business purpose.
   */
  description?: string;
  /**
   * @remarks
   * The list of entity discovery rules that define which entities the group automatically matches.
   */
  discoverRules?: string;
  /**
   * @remarks
   * The statistics of entities in the group, grouped by entity type.
   */
  entitySummaries?: ObserveGroupDetailEntitySummaries[];
  /**
   * @remarks
   * The extended information in JSON string format, which carries alert templates, alert contact groups, pause policies, and other configurations.
   */
  extraInfo?: string;
  /**
   * @remarks
   * Indicates whether the current user has favorited the group.
   */
  favorited?: boolean;
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
   * The time when the group was last modified, in UTC format (yyyy-MM-ddTHH:mm:ssZ). This value is automatically updated when any property of the resource changes.
   */
  modifyTime?: string;
  /**
   * @remarks
   * The ID of the version 1.0 application group (product_group.id). This parameter is valid only when sourceOrigin is set to synced_from_1_0.
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
   * The workspace ID to which the group belongs. This value is set at the workspace level and cannot be changed after the group is created.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'aliUid',
      createTime: 'createTime',
      description: 'description',
      discoverRules: 'discoverRules',
      entitySummaries: 'entitySummaries',
      extraInfo: 'extraInfo',
      favorited: 'favorited',
      groupId: 'groupId',
      groupName: 'groupName',
      groupType: 'groupType',
      modifyTime: 'modifyTime',
      originGroupId: 'originGroupId',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      sourceOrigin: 'sourceOrigin',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      createTime: 'string',
      description: 'string',
      discoverRules: 'string',
      entitySummaries: { 'type': 'array', 'itemType': ObserveGroupDetailEntitySummaries },
      extraInfo: 'string',
      favorited: 'boolean',
      groupId: 'string',
      groupName: 'string',
      groupType: 'string',
      modifyTime: 'string',
      originGroupId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceOrigin: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entitySummaries)) {
      $dara.Model.validateArray(this.entitySummaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

