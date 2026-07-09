// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveGroupDiscoverRuleNameRulesTags extends $dara.Model {
  /**
   * @remarks
   * The matching operation.
   */
  op?: string;
  /**
   * @remarks
   * The list of matching values.
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      op: 'Op',
      tagValues: 'TagValues',
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
   * The name matching logic.
   */
  op?: string;
  /**
   * @remarks
   * The list of name conditions.
   */
  tags?: ObserveGroupDiscoverRuleNameRulesTags[];
  static names(): { [key: string]: string } {
    return {
      op: 'Op',
      tags: 'Tags',
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
   * The matching operation.
   */
  op?: string;
  /**
   * @remarks
   * The tag key.
   */
  tagKey?: string;
  /**
   * @remarks
   * The list of tag values.
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      op: 'Op',
      tagKey: 'TagKey',
      tagValues: 'TagValues',
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
   * The tag matching logic.
   */
  op?: string;
  /**
   * @remarks
   * The list of tag conditions.
   */
  tags?: ObserveGroupDiscoverRuleTagRulesTags[];
  static names(): { [key: string]: string } {
    return {
      op: 'Op',
      tags: 'Tags',
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
   * Indicates whether the rule is enabled. If set to false, the data plane skips this rule and does not perform matching, tagging, or delivery.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The entity type (legacy). This parameter is retained for backward compatibility. Use entityTypes instead.
   */
  entityType?: string;
  /**
   * @remarks
   * The list of entity types. A single rule can match across multiple types, such as acs.ecs.instance, acs.rds.instance, and acs.arms.service.
   */
  entityTypes?: string[];
  /**
   * @remarks
   * The time when the rule was created, in UNIX millisecond timestamp format. This value is used for display in the console.
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The list of manually specified instance IDs. This is an enumeration type and includes instances synchronized manually in version 1.0.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The name matching rules.
   */
  nameRules?: ObserveGroupDiscoverRuleNameRules;
  /**
   * @remarks
   * The list of region IDs used for region-based filtering.
   */
  regionIds?: string[];
  /**
   * @remarks
   * The resource group ID used for filtering.
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The stable ID of the rule, used as an anchor for editing, deleting, and enabling or disabling operations. Format: dr-<16-character hash>.
   */
  ruleId?: string;
  /**
   * @remarks
   * The matching method. Valid values: byTag, byResourceGroup, byInstanceName, byManual, and bySpl.
   */
  ruleType?: string;
  /**
   * @remarks
   * The applicable scope. Valid values: all (all entity types, exclusive) and entity (specified entity types).
   */
  scope?: string;
  /**
   * @remarks
   * The complete SPL expression for advanced configuration. If this parameter is not empty, it takes precedence over other filter fields.
   */
  spl?: string;
  /**
   * @remarks
   * The tag matching rules.
   */
  tagRules?: ObserveGroupDiscoverRuleTagRules;
  /**
   * @remarks
   * The UID of the user to whom the rule belongs.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      entityType: 'EntityType',
      entityTypes: 'EntityTypes',
      gmtCreate: 'GmtCreate',
      instanceIds: 'InstanceIds',
      nameRules: 'NameRules',
      regionIds: 'RegionIds',
      resourceGroupId: 'ResourceGroupId',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      scope: 'Scope',
      spl: 'Spl',
      tagRules: 'TagRules',
      userId: 'UserId',
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

