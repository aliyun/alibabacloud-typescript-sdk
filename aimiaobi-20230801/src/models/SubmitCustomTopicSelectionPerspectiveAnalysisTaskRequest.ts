// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequestDocuments extends $dara.Model {
  /**
   * @remarks
   * The author.
   * 
   * @example
   * 作者
   */
  author?: string;
  /**
   * @remarks
   * The content.
   * 
   * This parameter is required.
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @remarks
   * The publication time. Format: YYYY-MM-dd HH:mm:ss
   * 
   * @example
   * 2024-01-22 10:29:00
   */
  pubTime?: string;
  /**
   * @remarks
   * The source of the article.
   * 
   * @example
   * 新浪
   */
  source?: string;
  /**
   * @remarks
   * The summary.
   * 
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @remarks
   * The URL of the article.
   * 
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/2587494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * The list of documents to be analyzed.
   */
  documents?: SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequestDocuments[];
  /**
   * @remarks
   * The input prompt for custom perspectives.
   * 
   * This parameter is required.
   * 
   * @example
   * 自定义观点的输入Prompt
   */
  prompt?: string;
  /**
   * @remarks
   * The name of the topic to be analyzed.
   * 
   * @example
   * 待分析的主题名（documents与topic二者至少传一个）
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documents: 'Documents',
      prompt: 'Prompt',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documents: { 'type': 'array', 'itemType': SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequestDocuments },
      prompt: 'string',
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

