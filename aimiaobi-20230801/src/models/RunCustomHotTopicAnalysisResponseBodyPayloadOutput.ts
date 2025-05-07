// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunCustomHotTopicAnalysisResponseBodyPayloadOutputArticles } from "./RunCustomHotTopicAnalysisResponseBodyPayloadOutputArticles";


export class RunCustomHotTopicAnalysisResponseBodyPayloadOutput extends $dara.Model {
  articles?: RunCustomHotTopicAnalysisResponseBodyPayloadOutputArticles[];
  askUser?: string[];
  /**
   * @example
   * 异步任务ID
   */
  asyncTaskId?: string;
  /**
   * @example
   * 自定义选题视角
   */
  attitude?: string;
  /**
   * @example
   * 大模型改变世界
   */
  searchQuery?: string;
  /**
   * @example
   * 文本生成结果
   */
  text?: string;
  /**
   * @example
   * 话题ID
   */
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      askUser: 'AskUser',
      asyncTaskId: 'AsyncTaskId',
      attitude: 'Attitude',
      searchQuery: 'SearchQuery',
      text: 'Text',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunCustomHotTopicAnalysisResponseBodyPayloadOutputArticles },
      askUser: { 'type': 'array', 'itemType': 'string' },
      asyncTaskId: 'string',
      attitude: 'string',
      searchQuery: 'string',
      text: 'string',
      topicId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(Array.isArray(this.askUser)) {
      $dara.Model.validateArray(this.askUser);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

