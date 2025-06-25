// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocWashingRequest extends $dara.Model {
  modelId?: string;
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  referenceContent?: string;
  sessionId?: string;
  topic?: string;
  /**
   * @example
   * 500
   */
  wordNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  writingTypeName?: string;
  writingTypeRefDoc?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      prompt: 'Prompt',
      referenceContent: 'ReferenceContent',
      sessionId: 'SessionId',
      topic: 'Topic',
      wordNumber: 'WordNumber',
      workspaceId: 'WorkspaceId',
      writingTypeName: 'WritingTypeName',
      writingTypeRefDoc: 'WritingTypeRefDoc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      prompt: 'string',
      referenceContent: 'string',
      sessionId: 'string',
      topic: 'string',
      wordNumber: 'number',
      workspaceId: 'string',
      writingTypeName: 'string',
      writingTypeRefDoc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

