// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SafeChangeQueryApproveFlowResponseBodyData extends $dara.Model {
  approveStrategy?: string;
  approver?: string;
  nodeName?: string;
  nodeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      approveStrategy: 'ApproveStrategy',
      approver: 'Approver',
      nodeName: 'NodeName',
      nodeStatus: 'NodeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveStrategy: 'string',
      approver: 'string',
      nodeName: 'string',
      nodeStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

