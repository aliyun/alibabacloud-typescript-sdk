// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkflowInstanceResponseBodyDataWfInstanceDag } from "./GetWorkflowInstanceResponseBodyDataWfInstanceDag";
import { GetWorkflowInstanceResponseBodyDataWfInstanceInfo } from "./GetWorkflowInstanceResponseBodyDataWfInstanceInfo";


export class GetWorkflowInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The directed acyclic graph (DAG) of the workflow instance, including nodes and dependencies.
   */
  wfInstanceDag?: GetWorkflowInstanceResponseBodyDataWfInstanceDag;
  /**
   * @remarks
   * The details of the workflow instance, including the state of the workflow instance, the time when the workflow instance started to run, the time when the workflow instance stopped running, the state of each job instance, and the dependencies between job instances.
   */
  wfInstanceInfo?: GetWorkflowInstanceResponseBodyDataWfInstanceInfo;
  static names(): { [key: string]: string } {
    return {
      wfInstanceDag: 'WfInstanceDag',
      wfInstanceInfo: 'WfInstanceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wfInstanceDag: GetWorkflowInstanceResponseBodyDataWfInstanceDag,
      wfInstanceInfo: GetWorkflowInstanceResponseBodyDataWfInstanceInfo,
    };
  }

  validate() {
    if(this.wfInstanceDag && typeof (this.wfInstanceDag as any).validate === 'function') {
      (this.wfInstanceDag as any).validate();
    }
    if(this.wfInstanceInfo && typeof (this.wfInstanceInfo as any).validate === 'function') {
      (this.wfInstanceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

