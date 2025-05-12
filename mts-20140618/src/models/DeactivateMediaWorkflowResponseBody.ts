// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeactivateMediaWorkflowResponseBodyMediaWorkflow } from "./DeactivateMediaWorkflowResponseBodyMediaWorkflow";


export class DeactivateMediaWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The topology of the media workflow.
   */
  mediaWorkflow?: DeactivateMediaWorkflowResponseBodyMediaWorkflow;
  /**
   * @remarks
   * The name of the media workflow that is deactivated.
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
      mediaWorkflow: DeactivateMediaWorkflowResponseBodyMediaWorkflow,
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

