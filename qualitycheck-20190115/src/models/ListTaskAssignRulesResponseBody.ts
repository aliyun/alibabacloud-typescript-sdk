// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent extends $dara.Model {
  agentId?: string;
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents extends $dara.Model {
  agent?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent[];
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent },
    };
  }

  validate() {
    if(Array.isArray(this.agent)) {
      $dara.Model.validateArray(this.agent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer extends $dara.Model {
  reviewerId?: string;
  reviewerName?: string;
  static names(): { [key: string]: string } {
    return {
      reviewerId: 'ReviewerId',
      reviewerName: 'ReviewerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewerId: 'string',
      reviewerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers extends $dara.Model {
  reviewer?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer[];
  static names(): { [key: string]: string } {
    return {
      reviewer: 'Reviewer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewer: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer },
    };
  }

  validate() {
    if(Array.isArray(this.reviewer)) {
      $dara.Model.validateArray(this.reviewer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo extends $dara.Model {
  name?: string;
  rid?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules extends $dara.Model {
  ruleBasicInfo?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleBasicInfo: 'RuleBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleBasicInfo: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleBasicInfo)) {
      $dara.Model.validateArray(this.ruleBasicInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgentsSamplingModeAgent extends $dara.Model {
  agentId?: string;
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents extends $dara.Model {
  samplingModeAgent?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgentsSamplingModeAgent[];
  static names(): { [key: string]: string } {
    return {
      samplingModeAgent: 'SamplingModeAgent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      samplingModeAgent: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgentsSamplingModeAgent },
    };
  }

  validate() {
    if(Array.isArray(this.samplingModeAgent)) {
      $dara.Model.validateArray(this.samplingModeAgent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode extends $dara.Model {
  anyNumberOfDraws?: number;
  designated?: boolean;
  dimension?: number;
  limit?: number;
  numberOfDraws?: number;
  proportion?: number;
  randomInspectionNumber?: number;
  samplingModeAgents?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents;
  static names(): { [key: string]: string } {
    return {
      anyNumberOfDraws: 'AnyNumberOfDraws',
      designated: 'Designated',
      dimension: 'Dimension',
      limit: 'Limit',
      numberOfDraws: 'NumberOfDraws',
      proportion: 'Proportion',
      randomInspectionNumber: 'RandomInspectionNumber',
      samplingModeAgents: 'SamplingModeAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anyNumberOfDraws: 'number',
      designated: 'boolean',
      dimension: 'number',
      limit: 'number',
      numberOfDraws: 'number',
      proportion: 'number',
      randomInspectionNumber: 'number',
      samplingModeAgents: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents,
    };
  }

  validate() {
    if(this.samplingModeAgents && typeof (this.samplingModeAgents as any).validate === 'function') {
      (this.samplingModeAgents as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup extends $dara.Model {
  skillId?: string;
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      skillId: 'SkillId',
      skillName: 'SkillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillId: 'string',
      skillName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups extends $dara.Model {
  skillGroup?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup[];
  static names(): { [key: string]: string } {
    return {
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroup: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup },
    };
  }

  validate() {
    if(Array.isArray(this.skillGroup)) {
      $dara.Model.validateArray(this.skillGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo extends $dara.Model {
  agents?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents;
  agentsStr?: string;
  assignmentType?: number;
  callTimeEnd?: number;
  callTimeStart?: number;
  callType?: number;
  createTime?: string;
  durationMax?: number;
  durationMin?: number;
  enabled?: number;
  priority?: number;
  reviewers?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers;
  ruleId?: number;
  ruleName?: string;
  rules?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules;
  samplingMode?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode;
  skillGroups?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups;
  skillGroupsStr?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      agents: 'Agents',
      agentsStr: 'AgentsStr',
      assignmentType: 'AssignmentType',
      callTimeEnd: 'CallTimeEnd',
      callTimeStart: 'CallTimeStart',
      callType: 'CallType',
      createTime: 'CreateTime',
      durationMax: 'DurationMax',
      durationMin: 'DurationMin',
      enabled: 'Enabled',
      priority: 'Priority',
      reviewers: 'Reviewers',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      rules: 'Rules',
      samplingMode: 'SamplingMode',
      skillGroups: 'SkillGroups',
      skillGroupsStr: 'SkillGroupsStr',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents,
      agentsStr: 'string',
      assignmentType: 'number',
      callTimeEnd: 'number',
      callTimeStart: 'number',
      callType: 'number',
      createTime: 'string',
      durationMax: 'number',
      durationMin: 'number',
      enabled: 'number',
      priority: 'number',
      reviewers: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers,
      ruleId: 'number',
      ruleName: 'string',
      rules: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules,
      samplingMode: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode,
      skillGroups: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups,
      skillGroupsStr: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.agents && typeof (this.agents as any).validate === 'function') {
      (this.agents as any).validate();
    }
    if(this.reviewers && typeof (this.reviewers as any).validate === 'function') {
      (this.reviewers as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    if(this.samplingMode && typeof (this.samplingMode as any).validate === 'function') {
      (this.samplingMode as any).validate();
    }
    if(this.skillGroups && typeof (this.skillGroups as any).validate === 'function') {
      (this.skillGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyData extends $dara.Model {
  taskAssignRuleInfo?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      taskAssignRuleInfo: 'TaskAssignRuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskAssignRuleInfo: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.taskAssignRuleInfo)) {
      $dara.Model.validateArray(this.taskAssignRuleInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 23
   */
  count?: number;
  data?: ListTaskAssignRulesResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListTaskAssignRulesResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

