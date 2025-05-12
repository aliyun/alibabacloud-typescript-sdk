// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMediaWorkflowResponseBodyMediaWorkflow } from "./UpdateMediaWorkflowResponseBodyMediaWorkflow";


export class UpdateMediaWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the media workflow.
   */
  mediaWorkflow?: UpdateMediaWorkflowResponseBodyMediaWorkflow;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7D752035-97DA-54E5-88E2-E8405EEA****
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
      mediaWorkflow: UpdateMediaWorkflowResponseBodyMediaWorkflow,
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

