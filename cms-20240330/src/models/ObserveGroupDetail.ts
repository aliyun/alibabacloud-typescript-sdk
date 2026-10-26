// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ObserveGroupDiscoverRule } from "./ObserveGroupDiscoverRule";
import { ObserveGroupPromInstance } from "./ObserveGroupPromInstance";


export class ObserveGroupDetailEntitySummaries extends $dara.Model {
  /**
   * @remarks
   * 实体分类。
   */
  entityCategory?: string;
  /**
   * @remarks
   * 实体数量。
   */
  entityCount?: number;
  /**
   * @remarks
   * 实体域。
   */
  entityDomain?: string;
  /**
   * @remarks
   * 实体类型。
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

export class ObserveGroupDetailTags extends $dara.Model {
  /**
   * @remarks
   * 标签键。
   */
  tagKey?: string;
  /**
   * @remarks
   * 标签值。
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

export class ObserveGroupDetail extends $dara.Model {
  /**
   * @remarks
   * 分组归属的阿里云主账号 UID。
   */
  aliUid?: string;
  /**
   * @remarks
   * 创建时间，UTC 格式 yyyy-MM-ddTHH:mm:ssZ。
   */
  createTime?: string;
  /**
   * @remarks
   * 观测分组描述（业务用途说明）。
   */
  description?: string;
  /**
   * @remarks
   * 实体发现规则列表，定义分组自动匹配哪些实体。
   */
  discoverRules?: ObserveGroupDiscoverRule[];
  /**
   * @remarks
   * 分组内实体按类型的统计。
   */
  entitySummaries?: ObserveGroupDetailEntitySummaries[];
  /**
   * @remarks
   * 扩展信息（JSON 字符串，承载告警模板/联系人组/暂停策略等）。
   */
  extraInfo?: string;
  /**
   * @remarks
   * 当前用户是否已关注该分组。
   */
  favorited?: boolean;
  groupId?: string;
  /**
   * @remarks
   * 观测分组名称（同 workspace 下唯一）。
   */
  groupName?: string;
  /**
   * @remarks
   * 观测分组类型。
   */
  groupType?: string;
  /**
   * @remarks
   * 最后修改时间，UTC 格式 yyyy-MM-ddTHH:mm:ssZ。资源任意属性变更时自动更新。
   */
  modifyTime?: string;
  /**
   * @remarks
   * 是否开启 og_entity_info 指标输出。开启后数据面会把本分组归属写入目标 Prometheus 实例。
   */
  ogEntityInfoEnabled?: boolean;
  /**
   * @remarks
   * 写入 og_entity_info 的 Prometheus 实例集合，包含系统自动识别(system)和用户自定义(custom)两类来源。
   */
  ogEntityInfoPromInstances?: ObserveGroupPromInstance[];
  /**
   * @remarks
   * 仅 synced_from_1_0 时填值，存 1.0 应用分组的 product_group.id。
   */
  originGroupId?: string;
  /**
   * @remarks
   * 分组所属地域 ID。
   */
  regionId?: string;
  /**
   * @remarks
   * 阿里云资源组 ID。
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * 数据来源：native_2_0（2.0 原生）/ synced_from_1_0（从 1.0 应用分组同步）。
   */
  sourceOrigin?: string;
  /**
   * @remarks
   * 资源标签（阿里云标准标签），键值对数组。
   */
  tags?: ObserveGroupDetailTags[];
  /**
   * @remarks
   * 分组归属的 workspace ID（workspace 级归属，创建后不可变）。
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
      entitySummaries: { 'type': 'array', 'itemType': ObserveGroupDetailEntitySummaries },
      extraInfo: 'string',
      favorited: 'boolean',
      groupId: 'string',
      groupName: 'string',
      groupType: 'string',
      modifyTime: 'string',
      ogEntityInfoEnabled: 'boolean',
      ogEntityInfoPromInstances: { 'type': 'array', 'itemType': ObserveGroupPromInstance },
      originGroupId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceOrigin: 'string',
      tags: { 'type': 'array', 'itemType': ObserveGroupDetailTags },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.discoverRules)) {
      $dara.Model.validateArray(this.discoverRules);
    }
    if(Array.isArray(this.entitySummaries)) {
      $dara.Model.validateArray(this.entitySummaries);
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

