// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrationJobPlanContactsChannels extends $dara.Model {
  level?: number;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanContacts extends $dara.Model {
  channels?: MigrationJobPlanContactsChannels[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': MigrationJobPlanContactsChannels },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanEscalationsEscalationsLevelGroups extends $dara.Model {
  critical?: string[];
  info?: string[];
  resolved?: string[];
  warning?: string[];
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      resolved: 'Resolved',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: { 'type': 'array', 'itemType': 'string' },
      info: { 'type': 'array', 'itemType': 'string' },
      resolved: { 'type': 'array', 'itemType': 'string' },
      warning: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.critical)) {
      $dara.Model.validateArray(this.critical);
    }
    if(Array.isArray(this.info)) {
      $dara.Model.validateArray(this.info);
    }
    if(Array.isArray(this.resolved)) {
      $dara.Model.validateArray(this.resolved);
    }
    if(Array.isArray(this.warning)) {
      $dara.Model.validateArray(this.warning);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanEscalationsEscalations extends $dara.Model {
  groups?: string[];
  levelGroups?: MigrationJobPlanEscalationsEscalationsLevelGroups;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      levelGroups: 'LevelGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': 'string' },
      levelGroups: MigrationJobPlanEscalationsEscalationsLevelGroups,
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(this.levelGroups && typeof (this.levelGroups as any).validate === 'function') {
      (this.levelGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanEscalations extends $dara.Model {
  escalations?: MigrationJobPlanEscalationsEscalations[];
  name?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      name: 'Name',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: { 'type': 'array', 'itemType': MigrationJobPlanEscalationsEscalations },
      name: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.escalations)) {
      $dara.Model.validateArray(this.escalations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanGroups extends $dara.Model {
  contacts?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contacts: 'Contacts',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanStrategiesEscalationSetting extends $dara.Model {
  escalationUuid?: string;
  static names(): { [key: string]: string } {
    return {
      escalationUuid: 'escalationUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanStrategiesPushingSetting extends $dara.Model {
  targetUuids?: string[];
  static names(): { [key: string]: string } {
    return {
      targetUuids: 'TargetUuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetUuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targetUuids)) {
      $dara.Model.validateArray(this.targetUuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanStrategies extends $dara.Model {
  escalationSetting?: MigrationJobPlanStrategiesEscalationSetting;
  name?: string;
  pushingSetting?: MigrationJobPlanStrategiesPushingSetting;
  static names(): { [key: string]: string } {
    return {
      escalationSetting: 'EscalationSetting',
      name: 'Name',
      pushingSetting: 'PushingSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationSetting: MigrationJobPlanStrategiesEscalationSetting,
      name: 'string',
      pushingSetting: MigrationJobPlanStrategiesPushingSetting,
    };
  }

  validate() {
    if(this.escalationSetting && typeof (this.escalationSetting as any).validate === 'function') {
      (this.escalationSetting as any).validate();
    }
    if(this.pushingSetting && typeof (this.pushingSetting as any).validate === 'function') {
      (this.pushingSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanSubscriptionsConditions extends $dara.Model {
  field?: string;
  op?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      op: 'Op',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      op: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanSubscriptions extends $dara.Model {
  conditions?: MigrationJobPlanSubscriptionsConditions[];
  name?: string;
  strategyUuid?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      name: 'Name',
      strategyUuid: 'StrategyUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': MigrationJobPlanSubscriptionsConditions },
      name: 'string',
      strategyUuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanTargetsHttpRequestTarget extends $dara.Model {
  contentType?: string;
  method?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      method: 'Method',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      method: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanTargets extends $dara.Model {
  arn?: string;
  httpRequestTarget?: MigrationJobPlanTargetsHttpRequestTarget;
  name?: string;
  type?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      httpRequestTarget: 'HttpRequestTarget',
      name: 'Name',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      httpRequestTarget: MigrationJobPlanTargetsHttpRequestTarget,
      name: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(this.httpRequestTarget && typeof (this.httpRequestTarget as any).validate === 'function') {
      (this.httpRequestTarget as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlan extends $dara.Model {
  contacts?: MigrationJobPlanContacts[];
  escalations?: MigrationJobPlanEscalations[];
  groups?: MigrationJobPlanGroups[];
  ruleNames?: string[];
  strategies?: MigrationJobPlanStrategies[];
  subscriptions?: MigrationJobPlanSubscriptions[];
  targets?: MigrationJobPlanTargets[];
  static names(): { [key: string]: string } {
    return {
      contacts: 'Contacts',
      escalations: 'Escalations',
      groups: 'Groups',
      ruleNames: 'RuleNames',
      strategies: 'Strategies',
      subscriptions: 'Subscriptions',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': MigrationJobPlanContacts },
      escalations: { 'type': 'array', 'itemType': MigrationJobPlanEscalations },
      groups: { 'type': 'array', 'itemType': MigrationJobPlanGroups },
      ruleNames: { 'type': 'array', 'itemType': 'string' },
      strategies: { 'type': 'array', 'itemType': MigrationJobPlanStrategies },
      subscriptions: { 'type': 'array', 'itemType': MigrationJobPlanSubscriptions },
      targets: { 'type': 'array', 'itemType': MigrationJobPlanTargets },
    };
  }

  validate() {
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    if(Array.isArray(this.escalations)) {
      $dara.Model.validateArray(this.escalations);
    }
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.ruleNames)) {
      $dara.Model.validateArray(this.ruleNames);
    }
    if(Array.isArray(this.strategies)) {
      $dara.Model.validateArray(this.strategies);
    }
    if(Array.isArray(this.subscriptions)) {
      $dara.Model.validateArray(this.subscriptions);
    }
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobSourceRuleKeywordFilter extends $dara.Model {
  keywords?: string[];
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: { 'type': 'array', 'itemType': 'string' },
      relation: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobSourceRulePrimaryFilters extends $dara.Model {
  field?: string;
  opType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      opType: 'OpType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      opType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobSourceRule extends $dara.Model {
  keywordFilter?: MigrationJobSourceRuleKeywordFilter;
  name?: string;
  primaryFilters?: MigrationJobSourceRulePrimaryFilters[];
  static names(): { [key: string]: string } {
    return {
      keywordFilter: 'KeywordFilter',
      name: 'Name',
      primaryFilters: 'PrimaryFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordFilter: MigrationJobSourceRuleKeywordFilter,
      name: 'string',
      primaryFilters: { 'type': 'array', 'itemType': MigrationJobSourceRulePrimaryFilters },
    };
  }

  validate() {
    if(this.keywordFilter && typeof (this.keywordFilter as any).validate === 'function') {
      (this.keywordFilter as any).validate();
    }
    if(Array.isArray(this.primaryFilters)) {
      $dara.Model.validateArray(this.primaryFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobSourceTargetsContent extends $dara.Model {
  group?: string;
  level?: string;
  method?: string;
  region?: string;
  resourcePath?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      level: 'Level',
      method: 'Method',
      region: 'Region',
      resourcePath: 'ResourcePath',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      level: 'string',
      method: 'string',
      region: 'string',
      resourcePath: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobSourceTargets extends $dara.Model {
  content?: MigrationJobSourceTargetsContent;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: MigrationJobSourceTargetsContent,
      type: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobSource extends $dara.Model {
  rule?: MigrationJobSourceRule;
  targets?: MigrationJobSourceTargets[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: MigrationJobSourceRule,
      targets: { 'type': 'array', 'itemType': MigrationJobSourceTargets },
    };
  }

  validate() {
    if(this.rule && typeof (this.rule as any).validate === 'function') {
      (this.rule as any).validate();
    }
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJob extends $dara.Model {
  createTime?: string;
  detail?: string;
  jobStatus?: string;
  plan?: MigrationJobPlan;
  ruleNames?: string[];
  source?: MigrationJobSource[];
  updateTime?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      detail: 'Detail',
      jobStatus: 'JobStatus',
      plan: 'Plan',
      ruleNames: 'RuleNames',
      source: 'Source',
      updateTime: 'UpdateTime',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      detail: 'string',
      jobStatus: 'string',
      plan: MigrationJobPlan,
      ruleNames: { 'type': 'array', 'itemType': 'string' },
      source: { 'type': 'array', 'itemType': MigrationJobSource },
      updateTime: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(this.plan && typeof (this.plan as any).validate === 'function') {
      (this.plan as any).validate();
    }
    if(Array.isArray(this.ruleNames)) {
      $dara.Model.validateArray(this.ruleNames);
    }
    if(Array.isArray(this.source)) {
      $dara.Model.validateArray(this.source);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

