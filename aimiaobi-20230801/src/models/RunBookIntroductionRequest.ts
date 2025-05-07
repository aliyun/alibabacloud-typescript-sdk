// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunBookIntroductionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3YQRatoe8phnpIsIE6z7DTPknhG8Fj
   */
  docId?: string;
  keyPointPrompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0f56f98a-f2d8-47ec-98e9-1cbdcffa9539
   */
  sessionId?: string;
  summaryPrompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-vtmox6g2bhq2qv5c
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      keyPointPrompt: 'KeyPointPrompt',
      sessionId: 'SessionId',
      summaryPrompt: 'SummaryPrompt',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
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

