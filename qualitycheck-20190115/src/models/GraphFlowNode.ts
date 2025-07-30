// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConditionBasicInfo } from "./ConditionBasicInfo";


export class GraphFlowNodeNextNodes extends $dara.Model {
  checkType?: number;
  index?: number;
  lambda?: string;
  name?: string;
  nextNodeId?: number;
  triggers?: string[];
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      index: 'Index',
      lambda: 'Lambda',
      name: 'Name',
      nextNodeId: 'NextNodeId',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      index: 'number',
      lambda: 'string',
      name: 'string',
      nextNodeId: 'number',
      triggers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GraphFlowNodeProperties extends $dara.Model {
  autoReview?: number;
  branchJudge?: boolean;
  checkMoreSize?: number;
  checkType?: number;
  lambda?: string;
  role?: string;
  ruleScoreType?: number;
  sayType?: string;
  scoreNum?: number;
  scoreNumType?: number;
  scoreRuleHitType?: number;
  scoreType?: number;
  triggers?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      branchJudge: 'BranchJudge',
      checkMoreSize: 'CheckMoreSize',
      checkType: 'CheckType',
      lambda: 'Lambda',
      role: 'Role',
      ruleScoreType: 'RuleScoreType',
      sayType: 'SayType',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreRuleHitType: 'ScoreRuleHitType',
      scoreType: 'ScoreType',
      triggers: 'Triggers',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      branchJudge: 'boolean',
      checkMoreSize: 'number',
      checkType: 'number',
      lambda: 'string',
      role: 'string',
      ruleScoreType: 'number',
      sayType: 'string',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreRuleHitType: 'number',
      scoreType: 'number',
      triggers: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GraphFlowNode extends $dara.Model {
  conditions?: ConditionBasicInfo[];
  content?: string;
  id?: number;
  index?: number;
  name?: string;
  nextNodes?: GraphFlowNodeNextNodes[];
  nodeType?: string;
  properties?: GraphFlowNodeProperties;
  rid?: number;
  useConditions?: boolean;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      content: 'Content',
      id: 'Id',
      index: 'Index',
      name: 'Name',
      nextNodes: 'NextNodes',
      nodeType: 'NodeType',
      properties: 'Properties',
      rid: 'Rid',
      useConditions: 'UseConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': ConditionBasicInfo },
      content: 'string',
      id: 'number',
      index: 'number',
      name: 'string',
      nextNodes: { 'type': 'array', 'itemType': GraphFlowNodeNextNodes },
      nodeType: 'string',
      properties: GraphFlowNodeProperties,
      rid: 'number',
      useConditions: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.nextNodes)) {
      $dara.Model.validateArray(this.nextNodes);
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

