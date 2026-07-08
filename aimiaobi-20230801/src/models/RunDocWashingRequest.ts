// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocWashingRequest extends $dara.Model {
  /**
   * @remarks
   * Model ID
   * 
   * @example
   * quanmiao-max、quanmiao-plus
   */
  modelId?: string;
  /**
   * @remarks
   * Additional prompt requirements
   * 
   * @example
   * 按英文输出
   */
  prompt?: string;
  /**
   * @remarks
   * The article to rewrite
   * 
   * This parameter is required.
   * 
   * @example
   * 文章内容
   */
  referenceContent?: string;
  /**
   * @remarks
   * Channel ID
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * Topic of the rewritten article
   * 
   * @example
   * 云南旅游主题
   */
  topic?: string;
  /**
   * @remarks
   * Required word count after rewriting
   * 
   * @example
   * 500
   */
  wordNumber?: number;
  /**
   * @remarks
   * Unique identifier for Alibaba Cloud Model Studio workspace: Get [Workspace ID](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  /**
   * @remarks
   * Writing style type name
   * 
   * @example
   * 小红书文体
   * 朋友圈文体
   * 专业新闻文体
   * 政府公文文体
   * 报纸文章文体
   * 意见信文体
   */
  writingTypeName?: string;
  /**
   * @remarks
   * Example article for writing style
   * 
   * @example
   * 该值若不为空则按该值优先
   */
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

