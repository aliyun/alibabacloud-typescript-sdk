// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SchemeCheckTypeTaskFlowScoreInfoListSchemeScoreInfoList } from "./SchemeCheckTypeTaskFlowScoreInfoListSchemeScoreInfoList";


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

