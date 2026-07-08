// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocIntroductionRequest extends $dara.Model {
  /**
   * @remarks
   * Purge cache
   * 
   * @example
   * true
   */
  cleanCache?: boolean;
  /**
   * @remarks
   * Document ID
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  docId?: string;
  /**
   * @remarks
   * Custom requirements for the document summary
   * 
   * @example
   * 用英文输出
   */
  introductionPrompt?: string;
  /**
   * @remarks
   * Custom requirements for key points
   * 
   * @example
   * 用英文输出
   */
  keyPointPrompt?: string;
  /**
   * @remarks
   * User-defined model name
   * 
   * @example
   * quanmiao-max、quanmiao-plus
   */
  modelName?: string;
  /**
   * @remarks
   * Conversation ID
   * 
   * This parameter is required.
   * 
   * @example
   * a3b5eb35-6b28-4cf9-ac09-1dec25ab4df6
   */
  sessionId?: string;
  /**
   * @remarks
   * Custom requirements for the summary content
   * 
   * @example
   * 用英文输出
   */
  summaryPrompt?: string;
  /**
   * @remarks
   * Unique identifier (UUID) of the Alibaba Cloud Model Studio workspace. For more information, see [Workspace ID](https://help.aliyun.com/document_detail/2587495.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  /**
   * @remarks
   * Content to generate the summary from. If not empty, this value takes precedence over docId.
   * 
   * @example
   * 要进行导读的内容
   */
  referenceContent?: string;
  static names(): { [key: string]: string } {
    return {
      cleanCache: 'CleanCache',
      docId: 'DocId',
      introductionPrompt: 'IntroductionPrompt',
      keyPointPrompt: 'KeyPointPrompt',
      modelName: 'ModelName',
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
      modelName: 'string',
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

