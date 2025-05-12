// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ActivateMediaWorkflowResponseBodyMediaWorkflow } from "./ActivateMediaWorkflowResponseBodyMediaWorkflow";


export class ActivateMediaWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the media workflow.
   */
  mediaWorkflow?: ActivateMediaWorkflowResponseBodyMediaWorkflow;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A1326BD4-30B1-4CB6-Q123-3330B877B0D4
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
      mediaWorkflow: ActivateMediaWorkflowResponseBodyMediaWorkflow,
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

