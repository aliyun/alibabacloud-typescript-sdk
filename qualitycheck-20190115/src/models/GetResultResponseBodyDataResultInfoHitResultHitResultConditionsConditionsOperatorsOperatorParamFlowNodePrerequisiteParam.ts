// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamFlowNodePrerequisiteParam extends $dara.Model {
  /**
   * @remarks
   * 节点id
   */
  nodeId?: number;
  /**
   * @remarks
   * 节点匹配状态。
   */
  nodeMatchStatus?: number;
  /**
   * @remarks
   * 冗余的节点名称
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeMatchStatus: 'NodeMatchStatus',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeMatchStatus: 'number',
      nodeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

