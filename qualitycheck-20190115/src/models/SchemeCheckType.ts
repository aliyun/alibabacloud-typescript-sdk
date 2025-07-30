// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SchemeCheckTypeSchemeScoreInfoList extends $dara.Model {
  name?: string;
  rid?: number;
  scoreNum?: number;
  scoreNumType?: number;
  scoreRuleHitType?: number;
  scoreType?: number;
  taskFlowId?: number;
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
  name?: string;
  rid?: number;
  scoreNum?: number;
  scoreNumType?: number;
  scoreRuleHitType?: number;
  scoreType?: number;
  taskFlowId?: number;
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
  schemeScoreInfoList?: SchemeCheckTypeTaskFlowScoreInfoListSchemeScoreInfoList[];
  taskFlowId?: number;
  taskFlowName?: string;
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
  checkName?: string;
  checkType?: number;
  enable?: number;
  schemeId?: number;
  schemeScoreInfoList?: SchemeCheckTypeSchemeScoreInfoList[];
  score?: number;
  sourceScore?: number;
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

