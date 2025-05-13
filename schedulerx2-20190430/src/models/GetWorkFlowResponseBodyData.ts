// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkFlowResponseBodyDataWorkFlowInfo } from "./GetWorkFlowResponseBodyDataWorkFlowInfo";
import { GetWorkFlowResponseBodyDataWorkFlowNodeInfo } from "./GetWorkFlowResponseBodyDataWorkFlowNodeInfo";


export class GetWorkFlowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The basic information of the workflow.
   */
  workFlowInfo?: GetWorkFlowResponseBodyDataWorkFlowInfo;
  /**
   * @remarks
   * The node information of the workflow.
   */
  workFlowNodeInfo?: GetWorkFlowResponseBodyDataWorkFlowNodeInfo;
  static names(): { [key: string]: string } {
    return {
      workFlowInfo: 'WorkFlowInfo',
      workFlowNodeInfo: 'WorkFlowNodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workFlowInfo: GetWorkFlowResponseBodyDataWorkFlowInfo,
      workFlowNodeInfo: GetWorkFlowResponseBodyDataWorkFlowNodeInfo,
    };
  }

  validate() {
    if(this.workFlowInfo && typeof (this.workFlowInfo as any).validate === 'function') {
      (this.workFlowInfo as any).validate();
    }
    if(this.workFlowNodeInfo && typeof (this.workFlowNodeInfo as any).validate === 'function') {
      (this.workFlowNodeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

