// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SchemeCheckTypeSchemeScoreInfoList } from "./SchemeCheckTypeSchemeScoreInfoList";
import { SchemeCheckTypeTaskFlowScoreInfoList } from "./SchemeCheckTypeTaskFlowScoreInfoList";


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

