// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeCheckShrinkRequestApproveFlowParamApproveNodesApproverDTO } from "./ChangeCheckShrinkRequestApproveFlowParamApproveNodesApproverDto";


export class ChangeCheckShrinkRequestApproveFlowParamApproveNodes extends $dara.Model {
  approverDTO?: ChangeCheckShrinkRequestApproveFlowParamApproveNodesApproverDTO[];
  nodeStatus?: number;
  processName?: string;
  processNodeOrder?: number;
  strategy?: number;
  static names(): { [key: string]: string } {
    return {
      approverDTO: 'ApproverDTO',
      nodeStatus: 'NodeStatus',
      processName: 'ProcessName',
      processNodeOrder: 'ProcessNodeOrder',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approverDTO: { 'type': 'array', 'itemType': ChangeCheckShrinkRequestApproveFlowParamApproveNodesApproverDTO },
      nodeStatus: 'number',
      processName: 'string',
      processNodeOrder: 'number',
      strategy: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.approverDTO)) {
      $dara.Model.validateArray(this.approverDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

