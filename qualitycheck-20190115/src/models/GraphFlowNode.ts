// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConditionBasicInfo } from "./ConditionBasicInfo";


export class GraphFlowNodeNextNodes extends $dara.Model {
  /**
   * @remarks
   * The quality check dimension.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The flow branch priority. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The Lambda expression for the next hop.
   * 
   * @example
   * a
   */
  lambda?: string;
  /**
   * @remarks
   * The conditional branch name.
   * 
   * @example
   * a
   */
  name?: string;
  /**
   * @remarks
   * The subsequent node ID.
   * 
   * @example
   * 31533
   */
  nextNodeId?: number;
  /**
   * @remarks
   * The monitored operators.
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
   * The auto review setting. Valid values:
   * - 1: Disables automatic review.
   * 
   * @example
   * 1
   */
  autoReview?: number;
  /**
   * @remarks
   * Specifies whether branch judgment is enabled.
   * 
   * @example
   * true
   */
  branchJudge?: boolean;
  /**
   * @remarks
   * The maximum number of sentences to check.
   * 
   * @example
   * 1
   */
  checkMoreSize?: number;
  /**
   * @remarks
   * The quality check dimension.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The common operator logic.
   * 
   * @example
   * a
   */
  lambda?: string;
  /**
   * @remarks
   * The role when the type is single.
   * 
   * @example
   * Customer
   */
  role?: string;
  /**
   * @remarks
   * Specifies whether scoring is enabled.
   * 
   * @example
   * 1
   */
  ruleScoreType?: number;
  /**
   * @remarks
   * Indicates whether expression is enabled when the type is single.
   * 
   * @example
   * Deprecated field
   */
  sayType?: string;
  /**
   * @remarks
   * The score value.
   * 
   * @example
   * 1
   */
  scoreNum?: number;
  /**
   * @remarks
   * The score number type. Valid values:
   * - 0: Adds or deducts points after the rule is triggered.
   * - 1: Assigns a one-time score after the rule is triggered.
   * 
   * @example
   * 1
   */
  scoreNumType?: number;
  /**
   * @remarks
   * The score rule hit type. Valid values:
   * - 0: Scores when the node is hit.
   * 
   * @example
   * 0
   */
  scoreRuleHitType?: number;
  /**
   * @remarks
   * The score type. Valid values:
   * - 1: Adds points.
   * - 3: Deducts points.
   * Default value: 1.
   * 
   * @example
   * 1
   */
  scoreType?: number;
  /**
   * @remarks
   * The monitored operators.
   */
  triggers?: string[];
  /**
   * @remarks
   * The property type.
   * 
   * @example
   * Deprecated field
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
   * The operator information.
   */
  conditions?: ConditionBasicInfo[];
  /**
   * @remarks
   * The content for frontend display.
   * 
   * @example
   * {}
   */
  content?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The index.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * Start node
   */
  name?: string;
  /**
   * @remarks
   * The child nodes.
   */
  nextNodes?: GraphFlowNodeNextNodes[];
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * startNode
   */
  nodeType?: string;
  /**
   * @remarks
   * The node properties.
   */
  properties?: GraphFlowNodeProperties;
  /**
   * @remarks
   * The rule ID. If the rule is not saved to the database, the value is empty. If the rule is saved, the value equals the ID.
   * 
   * @example
   * 1
   */
  rid?: number;
  /**
   * @remarks
   * Specifies whether to use operator matching or legacy matching.
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

