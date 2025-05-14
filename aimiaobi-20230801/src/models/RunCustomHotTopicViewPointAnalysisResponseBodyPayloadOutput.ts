// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutputArticles } from "./RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutputArticles";


export class RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutput extends $dara.Model {
  articles?: RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutputArticles[];
  askUser?: string[];
  /**
   * @example
   * 异步任务ID
   */
  asyncTaskId?: string;
  /**
   * @example
   * 模型生成的自定义选题视角的观点
   */
  attitude?: string;
  /**
   * @example
   * xxxxxx
   */
  customViewPointId?: string;
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
      customViewPointId: 'CustomViewPointId',
      text: 'Text',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutputArticles },
      askUser: { 'type': 'array', 'itemType': 'string' },
      asyncTaskId: 'string',
      attitude: 'string',
      customViewPointId: 'string',
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

