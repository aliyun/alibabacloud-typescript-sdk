// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunBookIntroductionRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  cleanCache?: boolean;
  /**
   * @remarks
   * The document ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3YQRatoe8phnpIsIE6z7DTPknhG8Fj
   */
  docId?: string;
  /**
   * @remarks
   * A custom prompt for extracting key points.
   * 
   * @example
   * 用英文输出
   */
  keyPointPrompt?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0f56f98a-f2d8-47ec-98e9-1cbdcffa9539
   */
  sessionId?: string;
  /**
   * @remarks
   * A custom prompt for generating the summary.
   * 
   * @example
   * 用英文输出
   */
  summaryPrompt?: string;
  /**
   * @remarks
   * The unique ID of the workspace in Model Studio (Bailian). For more information, see [Get your workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-vtmox6g2bhq2qv5c
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      cleanCache: 'CleanCache',
      docId: 'DocId',
      keyPointPrompt: 'KeyPointPrompt',
      sessionId: 'SessionId',
      summaryPrompt: 'SummaryPrompt',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanCache: 'boolean',
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

