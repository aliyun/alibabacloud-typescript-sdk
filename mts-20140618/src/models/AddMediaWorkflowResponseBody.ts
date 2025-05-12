// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddMediaWorkflowResponseBodyMediaWorkflow } from "./AddMediaWorkflowResponseBodyMediaWorkflow";


export class AddMediaWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the media workflow.
   */
  mediaWorkflow?: AddMediaWorkflowResponseBodyMediaWorkflow;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F1D21261-ADB9-406A-1234-491382139D59
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
      mediaWorkflow: AddMediaWorkflowResponseBodyMediaWorkflow,
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

