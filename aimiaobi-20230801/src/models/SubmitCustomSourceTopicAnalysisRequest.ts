// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HottopicNews } from "./HottopicNews";


export class SubmitCustomSourceTopicAnalysisRequestNewsComments extends $dara.Model {
  /**
   * @remarks
   * The comment text.
   * 
   * @example
   * 评论内容
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomSourceTopicAnalysisRequestNews extends $dara.Model {
  /**
   * @remarks
   * A list of comments.
   */
  comments?: SubmitCustomSourceTopicAnalysisRequestNewsComments[];
  /**
   * @remarks
   * The content of the news article.
   * 
   * @example
   * 新闻正文
   */
  content?: string;
  /**
   * @remarks
   * The publication time. The format must be `YYYY-MM-dd HH:mm:ss`.
   * 
   * @example
   * 2024-01-22 10:29:00
   */
  pubTime?: string;
  /**
   * @remarks
   * The source of the news article.
   * 
   * @example
   * 百度
   */
  source?: string;
  /**
   * @remarks
   * The title of the news article.
   * 
   * @example
   * 新闻标题
   */
  title?: string;
  /**
   * @remarks
   * The URL of the news article.
   * 
   * @example
   * http://www.example.com/xxx.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      content: 'Content',
      pubTime: 'PubTime',
      source: 'Source',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: { 'type': 'array', 'itemType': SubmitCustomSourceTopicAnalysisRequestNewsComments },
      content: 'string',
      pubTime: 'string',
      source: 'string',
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

export class SubmitCustomSourceTopicAnalysisRequestTopics extends $dara.Model {
  /**
   * @remarks
   * A custom field. You can use this field to filter results when you call the `ListHotTopics` operation.
   * 
   * @example
   * xxx
   */
  customField?: string;
  /**
   * @remarks
   * A list of news articles.
   */
  news?: HottopicNews[];
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * 话题名称
   */
  topic?: string;
  /**
   * @remarks
   * The URL of the topic. This value is passed through to the `ListHotTopics` response without being processed.
   * 
   * @example
   * https://www.example.com/topic/123
   */
  topicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      customField: 'CustomField',
      news: 'News',
      topic: 'Topic',
      topicUrl: 'TopicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customField: 'string',
      news: { 'type': 'array', 'itemType': HottopicNews },
      topic: 'string',
      topicUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomSourceTopicAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The types of analysis for hot topic selection. Multiple values are supported. If you omit this parameter, the service analyzes all types by default. If you pass an empty array, the service performs only clustering and skips the analysis of hot topics for selection.
   * `HotViewPoints`: Analyzes perspectives on hot topics.
   * `WebReviewPoints`: Analyzes user viewpoints. This requires comments.
   * `TimedViewPoints`: Analyzes perspectives on timeliness.
   * `FreshViewPoints`: Analyzes novel perspectives.
   * `TopicSummary`: Summarizes news content.
   */
  analysisTypes?: string[];
  /**
   * @remarks
   * The file type. Valid values: `json` (JSON array) and `jsonLine` (JSON Lines).
   * 
   * @example
   * json
   */
  fileType?: string;
  /**
   * @remarks
   * The file URL. You must specify either `FileUrl` or `News`. For details on the file structure, see the description of the `News` parameter.
   * 
   * @example
   * http://www.example.com/xxx.json
   */
  fileUrl?: string;
  /**
   * @remarks
   * The maximum number of topics to analyze. By default, the service sorts clustered news by count in descending order and analyzes the top 50 topics. The maximum value is 200.
   * 
   * @example
   * 50
   */
  maxTopicSize?: number;
  /**
   * @remarks
   * A list of news articles. You must specify either `News` or `FileUrl`.
   */
  news?: SubmitCustomSourceTopicAnalysisRequestNews[];
  /**
   * @remarks
   * A list of topics.
   */
  topics?: SubmitCustomSourceTopicAnalysisRequestTopics[];
  /**
   * @remarks
   * The URL of the file that contains the topic list. The file must be in JSON Lines format, with each line representing a single JSON object.
   * 
   * @example
   * http://www.example.com/xxx.jsonline
   */
  topicsFileUrl?: string;
  /**
   * @remarks
   * [The Model Studio workspace ID.](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisTypes: 'AnalysisTypes',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      maxTopicSize: 'MaxTopicSize',
      news: 'News',
      topics: 'Topics',
      topicsFileUrl: 'TopicsFileUrl',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisTypes: { 'type': 'array', 'itemType': 'string' },
      fileType: 'string',
      fileUrl: 'string',
      maxTopicSize: 'number',
      news: { 'type': 'array', 'itemType': SubmitCustomSourceTopicAnalysisRequestNews },
      topics: { 'type': 'array', 'itemType': SubmitCustomSourceTopicAnalysisRequestTopics },
      topicsFileUrl: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.analysisTypes)) {
      $dara.Model.validateArray(this.analysisTypes);
    }
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

