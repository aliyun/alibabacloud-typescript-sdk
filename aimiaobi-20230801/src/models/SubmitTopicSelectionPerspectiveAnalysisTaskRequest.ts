// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocumentsComments extends $dara.Model {
  /**
   * @remarks
   * Content
   * 
   * @example
   * 内容
   */
  text?: string;
  /**
   * @remarks
   * Username
   * 
   * @example
   * 用户名
   */
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
   * @remarks
   * Author
   * 
   * @example
   * 作者
   */
  author?: string;
  /**
   * @remarks
   * Content list
   */
  comments?: SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocumentsComments[];
  /**
   * @remarks
   * Content
   * 
   * This parameter is required.
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @remarks
   * Publication time. Format: YYYY-MM-dd HH:mm:ss
   * 
   * @example
   * 2024-01-22 10:29:00
   */
  pubTime?: string;
  /**
   * @remarks
   * Article source
   * 
   * @example
   * 新浪
   */
  source?: string;
  /**
   * @remarks
   * Summary
   * 
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @remarks
   * Title
   * 
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @remarks
   * Article URL
   * 
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
   * The unique identifier of the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * The list of documents to be analyzed. (Provide at least one of documents or topic)
   */
  documents?: SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocuments[];
  /**
   * @remarks
   * The topic selection perspective tasks to be analyzed. By default, this parameter is empty, which means all tasks are analyzed. (TopicSummary: Topic event summary, HotViewPoints: Hot topic selection perspectives, TimedViewPoints: Timeliness topic selection perspectives, WebReviewPoints: Online review topic selection perspectives, FreshViewPoints: Novel topic selection perspectives)
   * 
   * @example
   * TimedViewPoints
   */
  perspectiveTypes?: string[];
  /**
   * @remarks
   * The name of the topic to be analyzed. (Provide at least one of documents or topic)
   * 
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

