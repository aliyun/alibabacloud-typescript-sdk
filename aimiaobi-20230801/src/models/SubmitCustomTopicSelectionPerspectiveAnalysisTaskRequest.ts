// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequestDocuments extends $dara.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 2024-01-22 10:29:00
   */
  pubTime?: string;
  /**
   * @example
   * 新浪
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  documents?: SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequestDocuments[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 自定义观点的输入Prompt
   */
  prompt?: string;
  /**
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

