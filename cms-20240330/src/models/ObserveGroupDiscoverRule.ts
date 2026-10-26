// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveGroupDiscoverRuleNameRulesTags extends $dara.Model {
  /**
   * @remarks
   * 匹配操作。
   */
  op?: string;
  /**
   * @remarks
   * 匹配值列表。
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      op: 'op',
      tagValues: 'tagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObserveGroupDiscoverRuleNameRules extends $dara.Model {
  /**
   * @remarks
   * 名称匹配逻辑。
   */
  op?: string;
  /**
   * @remarks
   * 名称条件列表。
   */
  tags?: ObserveGroupDiscoverRuleNameRulesTags[];
  static names(): { [key: string]: string } {
    return {
      op: 'op',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: 'string',
      tags: { 'type': 'array', 'itemType': ObserveGroupDiscoverRuleNameRulesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObserveGroupDiscoverRuleTagRulesTags extends $dara.Model {
  /**
   * @remarks
   * 匹配操作。
   */
  op?: string;
  /**
   * @remarks
   * 标签键。
   */
  tagKey?: string;
  /**
   * @remarks
   * 标签值列表。
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      op: 'op',
      tagKey: 'tagKey',
      tagValues: 'tagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: 'string',
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObserveGroupDiscoverRuleTagRules extends $dara.Model {
  /**
   * @remarks
   * 标签匹配逻辑。
   */
  op?: string;
  /**
   * @remarks
   * 标签条件列表。
   */
  tags?: ObserveGroupDiscoverRuleTagRulesTags[];
  static names(): { [key: string]: string } {
    return {
      op: 'op',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: 'string',
      tags: { 'type': 'array', 'itemType': ObserveGroupDiscoverRuleTagRulesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObserveGroupDiscoverRule extends $dara.Model {
  /**
   * @remarks
   * 规则是否启用；false 时数据面跳过该规则（不匹配 / 不打标 / 不下发）。
   */
  enabled?: boolean;
  /**
   * @remarks
   * （旧）单实体类型，向后兼容，优先用 entityTypes。
   */
  entityType?: string;
  /**
   * @remarks
   * 实体类型列表，支持一条规则跨多类型匹配（如 acs.ecs.instance/acs.rds.instance/acs.arms.service）。
   */
  entityTypes?: string[];
  /**
   * @remarks
   * 规则创建时间（Unix 毫秒时间戳），控制台展示用。
   */
  gmtCreate?: number;
  /**
   * @remarks
   * 手动指定的实例 ID 列表（枚举型，含 1.0 手动实例同步）。
   */
  instanceIds?: string[];
  /**
   * @remarks
   * 名称匹配规则。
   */
  nameRules?: ObserveGroupDiscoverRuleNameRules;
  /**
   * @remarks
   * 按地域过滤的 region ID 列表。
   */
  regionIds?: string[];
  /**
   * @remarks
   * 按资源组过滤。
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * 规则稳定 ID（编辑/删除/启停锚点），格式 dr-<16位hash>。
   */
  ruleId?: string;
  /**
   * @remarks
   * 匹配方式：byTag / byResourceGroup / byInstanceName / byManual / bySpl。
   */
  ruleType?: string;
  /**
   * @remarks
   * 适用范围：all（全部实体类型，独占）/ entity（指定实体类型）。
   */
  scope?: string;
  /**
   * @remarks
   * 完整 SPL 表达式（高级配置）；非空时优先生效，覆盖其它过滤字段。
   */
  spl?: string;
  /**
   * @remarks
   * 标签匹配规则。
   */
  tagRules?: ObserveGroupDiscoverRuleTagRules;
  /**
   * @remarks
   * 规则所属用户 UID。
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      entityType: 'entityType',
      entityTypes: 'entityTypes',
      gmtCreate: 'gmtCreate',
      instanceIds: 'instanceIds',
      nameRules: 'nameRules',
      regionIds: 'regionIds',
      resourceGroupId: 'resourceGroupId',
      ruleId: 'ruleId',
      ruleType: 'ruleType',
      scope: 'scope',
      spl: 'spl',
      tagRules: 'tagRules',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      entityType: 'string',
      entityTypes: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      nameRules: ObserveGroupDiscoverRuleNameRules,
      regionIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      ruleId: 'string',
      ruleType: 'string',
      scope: 'string',
      spl: 'string',
      tagRules: ObserveGroupDiscoverRuleTagRules,
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entityTypes)) {
      $dara.Model.validateArray(this.entityTypes);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(this.nameRules && typeof (this.nameRules as any).validate === 'function') {
      (this.nameRules as any).validate();
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    if(this.tagRules && typeof (this.tagRules as any).validate === 'function') {
      (this.tagRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

