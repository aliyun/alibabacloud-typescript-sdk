// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMediaWorkflowTriggerModeResponseBodyMediaWorkflow } from "./UpdateMediaWorkflowTriggerModeResponseBodyMediaWorkflow";


export class UpdateMediaWorkflowTriggerModeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the media workflow.
   */
  mediaWorkflow?: UpdateMediaWorkflowTriggerModeResponseBodyMediaWorkflow;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16CD0CDD-457E-420D-9755-8385075A1234
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflow: 'MediaWorkflow',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflow: UpdateMediaWorkflowTriggerModeResponseBodyMediaWorkflow,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaWorkflow && typeof (this.mediaWorkflow as any).validate === 'function') {
      (this.mediaWorkflow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

