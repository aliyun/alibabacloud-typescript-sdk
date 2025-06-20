// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeCheckShrinkRequestApproveFlowParamApproveNodes } from "./SafeChangeCheckShrinkRequestApproveFlowParamApproveNodes";


export class SafeChangeCheckShrinkRequestApproveFlowParam extends $dara.Model {
  approveNodes?: SafeChangeCheckShrinkRequestApproveFlowParamApproveNodes[];
  flowStatus?: number;
  static names(): { [key: string]: string } {
    return {
      approveNodes: 'ApproveNodes',
      flowStatus: 'FlowStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveNodes: { 'type': 'array', 'itemType': SafeChangeCheckShrinkRequestApproveFlowParamApproveNodes },
      flowStatus: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.approveNodes)) {
      $dara.Model.validateArray(this.approveNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

