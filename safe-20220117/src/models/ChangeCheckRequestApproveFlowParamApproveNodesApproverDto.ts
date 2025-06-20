// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCheckRequestApproveFlowParamApproveNodesApproverDTO extends $dara.Model {
  approveDesc?: string;
  approveTime?: string;
  approverId?: string;
  approverName?: string;
  opinion?: number;
  static names(): { [key: string]: string } {
    return {
      approveDesc: 'ApproveDesc',
      approveTime: 'ApproveTime',
      approverId: 'ApproverId',
      approverName: 'ApproverName',
      opinion: 'Opinion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveDesc: 'string',
      approveTime: 'string',
      approverId: 'string',
      approverName: 'string',
      opinion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

