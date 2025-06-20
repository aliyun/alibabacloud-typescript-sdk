// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeCheckRequestApproveFlowParamApproveNodesApproverDTO } from "./SafeChangeCheckRequestApproveFlowParamApproveNodesApproverDto";


export class SafeChangeCheckRequestApproveFlowParamApproveNodes extends $dara.Model {
  approverDTO?: SafeChangeCheckRequestApproveFlowParamApproveNodesApproverDTO[];
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
      approverDTO: { 'type': 'array', 'itemType': SafeChangeCheckRequestApproveFlowParamApproveNodesApproverDTO },
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

