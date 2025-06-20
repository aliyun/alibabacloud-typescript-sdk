// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeCheckRequestApproveFlowParamApproveNodesApproverDTO } from "./ChangeCheckRequestApproveFlowParamApproveNodesApproverDto";


export class ChangeCheckRequestApproveFlowParamApproveNodes extends $dara.Model {
  approverDTO?: ChangeCheckRequestApproveFlowParamApproveNodesApproverDTO[];
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
      approverDTO: { 'type': 'array', 'itemType': ChangeCheckRequestApproveFlowParamApproveNodesApproverDTO },
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

