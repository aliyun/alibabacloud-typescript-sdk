// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SchemeCheckTypeSchemeScoreInfoList extends $dara.Model {
  /**
   * @remarks
   * Rule Name
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * Rule ID
   * 
   * @example
   * 1
   */
  rid?: number;
  /**
   * @remarks
   * Agent rating: default 0, [0, 100]
   * 
   * @example
   * 1
   */
  scoreNum?: number;
  /**
   * @remarks
   * 0 – Add or subtract points after triggering a rule
   * 
   * @example
   * 0
   */
  scoreNumType?: number;
  /**
   * @remarks
   * 0 – Score when hitting an edge zone
   * 
   * @example
   * 0
   */
  scoreRuleHitType?: number;
  /**
   * @remarks
   * 1 for adding points, 3 for deducting points; default is 1
   * 
   * @example
   * 1
   */
  scoreType?: number;
  /**
   * @remarks
   * Flow ID
   * 
   * @example
   * 1
   */
  taskFlowId?: number;
  /**
   * @remarks
   * Flow name
   * 
   * @example
   * xx
   */
  taskFlowName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rid: 'Rid',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreRuleHitType: 'ScoreRuleHitType',
      scoreType: 'ScoreType',
      taskFlowId: 'TaskFlowId',
      taskFlowName: 'TaskFlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rid: 'number',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreRuleHitType: 'number',
      scoreType: 'number',
      taskFlowId: 'number',
      taskFlowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemeCheckTypeTaskFlowScoreInfoListSchemeScoreInfoList extends $dara.Model {
  /**
   * @remarks
   * Rule Name
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * Rule ID
   * 
   * @example
   * 1
   */
  rid?: number;
  /**
   * @remarks
   * Agent score: default is 0, range [0, 100]
   * 
   * @example
   * 11
   */
  scoreNum?: number;
  /**
   * @remarks
   * 0 – Points added or deducted after a rule is triggered
   * 
   * @example
   * 0
   */
  scoreNumType?: number;
  /**
   * @remarks
   * 0—score when a hit occurs at an edge zone
   * 
   * @example
   * 0
   */
  scoreRuleHitType?: number;
  /**
   * @remarks
   * 1 for adding points, 3 for deducting points; default is 1
   * 
   * @example
   * 1
   */
  scoreType?: number;
  /**
   * @remarks
   * Flow ID
   * 
   * @example
   * 1
   */
  taskFlowId?: number;
  /**
   * @remarks
   * flow name
   * 
   * @example
   * xx
   */
  taskFlowName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rid: 'Rid',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreRuleHitType: 'ScoreRuleHitType',
      scoreType: 'ScoreType',
      taskFlowId: 'TaskFlowId',
      taskFlowName: 'TaskFlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rid: 'number',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreRuleHitType: 'number',
      scoreType: 'number',
      taskFlowId: 'number',
      taskFlowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemeCheckTypeTaskFlowScoreInfoList extends $dara.Model {
  /**
   * @remarks
   * list of scoring items
   */
  schemeScoreInfoList?: SchemeCheckTypeTaskFlowScoreInfoListSchemeScoreInfoList[];
  /**
   * @remarks
   * Flow ID
   * 
   * @example
   * 1
   */
  taskFlowId?: number;
  /**
   * @remarks
   * flow name
   * 
   * @example
   * xx
   */
  taskFlowName?: string;
  /**
   * @remarks
   * \\"Flow version: 0: tree, 1: graph\\"
   * 
   * @example
   * 1
   */
  taskFlowType?: number;
  static names(): { [key: string]: string } {
    return {
      schemeScoreInfoList: 'SchemeScoreInfoList',
      taskFlowId: 'TaskFlowId',
      taskFlowName: 'TaskFlowName',
      taskFlowType: 'TaskFlowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeScoreInfoList: { 'type': 'array', 'itemType': SchemeCheckTypeTaskFlowScoreInfoListSchemeScoreInfoList },
      taskFlowId: 'number',
      taskFlowName: 'string',
      taskFlowType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.schemeScoreInfoList)) {
      $dara.Model.validateArray(this.schemeScoreInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemeCheckType extends $dara.Model {
  /**
   * @remarks
   * Check item name
   * 
   * @example
   * 流程规则
   */
  checkName?: string;
  /**
   * @remarks
   * Quality inspection dimension ID
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * Is enabled
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * Quality inspection scheme ID
   * 
   * @example
   * 1
   */
  schemeId?: number;
  /**
   * @remarks
   * List of scoring items under the check item. See SchemeScoreInfo.
   */
  schemeScoreInfoList?: SchemeCheckTypeSchemeScoreInfoList[];
  /**
   * @remarks
   * Final score
   * 
   * @example
   * 50
   */
  score?: number;
  /**
   * @remarks
   * Original score
   * 
   * @example
   * 1
   */
  sourceScore?: number;
  /**
   * @remarks
   * List of scoring items under the check item. See TaskFlowScoreInfo.
   */
  taskFlowScoreInfoList?: SchemeCheckTypeTaskFlowScoreInfoList[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkType: 'CheckType',
      enable: 'Enable',
      schemeId: 'SchemeId',
      schemeScoreInfoList: 'SchemeScoreInfoList',
      score: 'Score',
      sourceScore: 'SourceScore',
      taskFlowScoreInfoList: 'TaskFlowScoreInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkType: 'number',
      enable: 'number',
      schemeId: 'number',
      schemeScoreInfoList: { 'type': 'array', 'itemType': SchemeCheckTypeSchemeScoreInfoList },
      score: 'number',
      sourceScore: 'number',
      taskFlowScoreInfoList: { 'type': 'array', 'itemType': SchemeCheckTypeTaskFlowScoreInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.schemeScoreInfoList)) {
      $dara.Model.validateArray(this.schemeScoreInfoList);
    }
    if(Array.isArray(this.taskFlowScoreInfoList)) {
      $dara.Model.validateArray(this.taskFlowScoreInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

