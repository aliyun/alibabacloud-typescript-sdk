// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMultiDocIntroductionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docIdsShrink?: string;
  keyPointPrompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 75bf82fa-b71b-45d7-ae40-0b00e496cd9e
   */
  sessionId?: string;
  summaryPrompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docIdsShrink: 'DocIds',
      keyPointPrompt: 'KeyPointPrompt',
      sessionId: 'SessionId',
      summaryPrompt: 'SummaryPrompt',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIdsShrink: 'string',
      keyPointPrompt: 'string',
      sessionId: 'string',
      summaryPrompt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

