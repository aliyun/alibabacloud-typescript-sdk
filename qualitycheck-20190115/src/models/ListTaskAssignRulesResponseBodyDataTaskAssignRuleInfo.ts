// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents } from "./ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents";
import { ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers } from "./ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers";
import { ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules } from "./ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules";
import { ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode } from "./ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode";
import { ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups } from "./ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups";


export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo extends $dara.Model {
  agents?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents;
  /**
   * @example
   * XX
   */
  agentsStr?: string;
  /**
   * @example
   * 0
   */
  assignmentType?: number;
  /**
   * @example
   * 39600
   */
  callTimeEnd?: number;
  /**
   * @example
   * 39600
   */
  callTimeStart?: number;
  /**
   * @example
   * 1
   */
  callType?: number;
  /**
   * @example
   * 2019-07-12T14:47Z
   */
  createTime?: string;
  /**
   * @example
   * 400
   */
  durationMax?: number;
  /**
   * @example
   * 100
   */
  durationMin?: number;
  /**
   * @example
   * 1
   */
  enabled?: number;
  /**
   * @example
   * 1
   */
  priority?: number;
  reviewers?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers;
  /**
   * @example
   * 23
   */
  ruleId?: number;
  ruleName?: string;
  rules?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules;
  samplingMode?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode;
  skillGroups?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups;
  /**
   * @example
   * XX
   */
  skillGroupsStr?: string;
  /**
   * @example
   * 2019-07-12T14:47Z
   */
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

