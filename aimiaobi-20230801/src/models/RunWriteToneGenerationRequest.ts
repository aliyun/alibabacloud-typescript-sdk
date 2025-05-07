// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunWriteToneGenerationRequestReferenceData } from "./RunWriteToneGenerationRequestReferenceData";


export class RunWriteToneGenerationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  referenceData?: RunWriteToneGenerationRequestReferenceData;
  /**
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'Prompt',
      referenceData: 'ReferenceData',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      referenceData: RunWriteToneGenerationRequestReferenceData,
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.referenceData && typeof (this.referenceData as any).validate === 'function') {
      (this.referenceData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

