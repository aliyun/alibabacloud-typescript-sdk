// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunKeywordsExtractionGenerationRequestReferenceData } from "./RunKeywordsExtractionGenerationRequestReferenceData";


export class RunKeywordsExtractionGenerationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  referenceData?: RunKeywordsExtractionGenerationRequestReferenceData;
  /**
   * @example
   * xxx
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
      referenceData: 'ReferenceData',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceData: RunKeywordsExtractionGenerationRequestReferenceData,
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

