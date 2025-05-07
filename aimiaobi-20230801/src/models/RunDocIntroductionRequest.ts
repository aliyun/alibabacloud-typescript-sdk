// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocIntroductionRequest extends $dara.Model {
  cleanCache?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  docId?: string;
  introductionPrompt?: string;
  keyPointPrompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a3b5eb35-6b28-4cf9-ac09-1dec25ab4df6
   */
  sessionId?: string;
  summaryPrompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  referenceContent?: string;
  static names(): { [key: string]: string } {
    return {
      cleanCache: 'CleanCache',
      docId: 'DocId',
      introductionPrompt: 'IntroductionPrompt',
      keyPointPrompt: 'KeyPointPrompt',
      sessionId: 'SessionId',
      summaryPrompt: 'SummaryPrompt',
      workspaceId: 'WorkspaceId',
      referenceContent: 'referenceContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanCache: 'boolean',
      docId: 'string',
      introductionPrompt: 'string',
      keyPointPrompt: 'string',
      sessionId: 'string',
      summaryPrompt: 'string',
      workspaceId: 'string',
      referenceContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

