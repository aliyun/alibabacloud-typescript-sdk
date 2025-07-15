// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocumentsComments extends $dara.Model {
  text?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocuments extends $dara.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  comments?: SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocumentsComments[];
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
      comments: 'Comments',
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
      comments: { 'type': 'array', 'itemType': SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocumentsComments },
      content: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.comments)) {
      $dara.Model.validateArray(this.comments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTopicSelectionPerspectiveAnalysisTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  documents?: SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocuments[];
  /**
   * @example
   * TimedViewPoints
   */
  perspectiveTypes?: string[];
  /**
   * @example
   * 待分析的主题名（documents与topic二者至少传一个）
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documents: 'Documents',
      perspectiveTypes: 'PerspectiveTypes',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documents: { 'type': 'array', 'itemType': SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocuments },
      perspectiveTypes: { 'type': 'array', 'itemType': 'string' },
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    if(Array.isArray(this.perspectiveTypes)) {
      $dara.Model.validateArray(this.perspectiveTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

