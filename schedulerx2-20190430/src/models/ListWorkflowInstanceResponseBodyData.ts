// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkflowInstanceResponseBodyDataWfInstanceInfos } from "./ListWorkflowInstanceResponseBodyDataWfInstanceInfos";


export class ListWorkflowInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The workflow instances.
   */
  wfInstanceInfos?: ListWorkflowInstanceResponseBodyDataWfInstanceInfos[];
  static names(): { [key: string]: string } {
    return {
      wfInstanceInfos: 'WfInstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wfInstanceInfos: { 'type': 'array', 'itemType': ListWorkflowInstanceResponseBodyDataWfInstanceInfos },
    };
  }

  validate() {
    if(Array.isArray(this.wfInstanceInfos)) {
      $dara.Model.validateArray(this.wfInstanceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

