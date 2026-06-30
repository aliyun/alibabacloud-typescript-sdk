// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConditionBasicInfo } from "./ConditionBasicInfo";


export class GraphFlowNodeNextNodes extends $dara.Model {
  /**
   * @remarks
   * Quality check dimension
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * Flow branch priority. A smaller value indicates higher priority.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Lambda expression for the next hop.
   * 
   * @example
   * a
   */
  lambda?: string;
  /**
   * @remarks
   * Conditional branch name.
   * 
   * @example
   * a
   */
  name?: string;
  /**
   * @remarks
   * Next node ID.
   * 
   * @example
   * 31533
   */
  nextNodeId?: number;
  /**
   * @remarks
   * Operators to follow.
   */
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
  /**
   * @remarks
   * 1: Do not auto-review.
   * 
   * @example
   * 1
   */
  autoReview?: number;
  /**
   * @remarks
   * Enable branch judgment.
   * 
   * @example
   * true
   */
  branchJudge?: boolean;
  /**
   * @remarks
   * Maximum N sentences to check.
   * 
   * @example
   * 1
   */
  checkMoreSize?: number;
  /**
   * @remarks
   * Quality check dimension
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * General operator logic.
   * 
   * @example
   * a
   */
  lambda?: string;
  /**
   * @remarks
   * Role when the type is \\`single\\`.
   * 
   * @example
   * 客户
   */
  role?: string;
  /**
   * @remarks
   * Is scored.
   * 
   * @example
   * 1
   */
  ruleScoreType?: number;
  /**
   * @remarks
   * Indicates expression when the type is \\`single\\`.
   */
  sayType?: string;
  /**
   * @remarks
   * Score value
   * 
   * @example
   * 1
   */
  scoreNum?: number;
  /**
   * @remarks
   * 0: Add or deduct points after the rule is triggered; 1: Score once after the rule is triggered.
   * 
   * @example
   * 1
   */
  scoreNumType?: number;
  /**
   * @remarks
   * 0: Score when the node is hit.
   * 
   * @example
   * 0
   */
  scoreRuleHitType?: number;
  /**
   * @remarks
   * 1: Add points; 3: Deduct points; default is 1.
   * 
   * @example
   * 1
   */
  scoreType?: number;
  /**
   * @remarks
   * Operators to follow.
   */
  triggers?: string[];
  /**
   * @remarks
   * Property type
   * 
   * @example
   * xx
   */
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
  /**
   * @remarks
   * Operator information.
   */
  conditions?: ConditionBasicInfo[];
  /**
   * @remarks
   * Used for frontend display.
   * 
   * @example
   * {}
   */
  content?: string;
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Index
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Node name
   * 
   * @example
   * 开始节点
   */
  name?: string;
  /**
   * @remarks
   * Child nodes
   */
  nextNodes?: GraphFlowNodeNextNodes[];
  /**
   * @remarks
   * Node Type
   * 
   * @example
   * startNode
   */
  nodeType?: string;
  /**
   * @remarks
   * Node properties
   */
  properties?: GraphFlowNodeProperties;
  /**
   * @remarks
   * Rule ID. \\`rid\\` is empty if the rule is not persisted. If the rule is persisted, \\`rid\\` equals \\`ID\\`.
   * 
   * @example
   * 1
   */
  rid?: number;
  /**
   * @remarks
   * Whether to use operator matching or legacy matching.
   * 
   * @example
   * true
   */
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

