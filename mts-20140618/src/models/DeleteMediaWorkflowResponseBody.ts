// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteMediaWorkflowResponseBodyMediaWorkflow } from "./DeleteMediaWorkflowResponseBodyMediaWorkflow";


export class DeleteMediaWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the media workflow.
   */
  mediaWorkflow?: DeleteMediaWorkflowResponseBodyMediaWorkflow;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7D752035-97DA-54E5-88E2-E8405EEA4394
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
      mediaWorkflow: DeleteMediaWorkflowResponseBodyMediaWorkflow,
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

