// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeCheckShrinkRequestApproveFlowParamApproveNodes } from "./ChangeCheckShrinkRequestApproveFlowParamApproveNodes";


export class ChangeCheckShrinkRequestApproveFlowParam extends $dara.Model {
  approveNodes?: ChangeCheckShrinkRequestApproveFlowParamApproveNodes[];
  authKey?: string;
  authSign?: string;
  bgVid?: string;
  flowStatus?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      approveNodes: 'ApproveNodes',
      authKey: 'AuthKey',
      authSign: 'AuthSign',
      bgVid: 'BgVid',
      flowStatus: 'FlowStatus',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveNodes: { 'type': 'array', 'itemType': ChangeCheckShrinkRequestApproveFlowParamApproveNodes },
      authKey: 'string',
      authSign: 'string',
      bgVid: 'string',
      flowStatus: 'number',
      timestamp: 'number',
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

