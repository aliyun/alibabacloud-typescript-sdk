// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCustomHotTopicViewPointAnalysisRequest extends $dara.Model {
  /**
   * @example
   * 模型反问
   */
  askUser?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 自定义选题视角的Prompt
   */
  prompt?: string;
  /**
   * @example
   * 改写后的Query
   */
  searchQuery?: string;
  /**
   * @example
   * true
   */
  skipAskUser?: boolean;
  /**
   * @example
   * 热点主题
   */
  topic?: string;
  /**
   * @example
   * 热点主题ID
   */
  topicId?: string;
  /**
   * @example
   * 热点主题来源
   */
  topicSource?: string;
  /**
   * @example
   * 热点主题版本
   */
  topicVersion?: string;
  /**
   * @example
   * 用户反馈
   */
  userBack?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      askUser: 'AskUser',
      prompt: 'Prompt',
      searchQuery: 'SearchQuery',
      skipAskUser: 'SkipAskUser',
      topic: 'Topic',
      topicId: 'TopicId',
      topicSource: 'TopicSource',
      topicVersion: 'TopicVersion',
      userBack: 'UserBack',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      askUser: 'string',
      prompt: 'string',
      searchQuery: 'string',
      skipAskUser: 'boolean',
      topic: 'string',
      topicId: 'string',
      topicSource: 'string',
      topicVersion: 'string',
      userBack: 'string',
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

