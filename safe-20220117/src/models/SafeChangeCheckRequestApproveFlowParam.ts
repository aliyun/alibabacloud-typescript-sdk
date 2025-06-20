// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeCheckRequestApproveFlowParamApproveNodes } from "./SafeChangeCheckRequestApproveFlowParamApproveNodes";


export class SafeChangeCheckRequestApproveFlowParam extends $dara.Model {
  approveNodes?: SafeChangeCheckRequestApproveFlowParamApproveNodes[];
  flowStatus?: number;
  static names(): { [key: string]: string } {
    return {
      approveNodes: 'ApproveNodes',
      flowStatus: 'FlowStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveNodes: { 'type': 'array', 'itemType': SafeChangeCheckRequestApproveFlowParamApproveNodes },
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

