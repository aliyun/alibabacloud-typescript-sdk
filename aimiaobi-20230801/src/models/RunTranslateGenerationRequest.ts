// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTranslateGenerationRequestReferenceData extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contents?: string[];
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTranslateGenerationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * toEnglish
   */
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  referenceData?: RunTranslateGenerationRequestReferenceData;
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
      prompt: 'Prompt',
      referenceData: 'ReferenceData',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      referenceData: RunTranslateGenerationRequestReferenceData,
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

