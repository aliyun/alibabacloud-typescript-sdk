// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCustomHotTopicViewPointAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * Model follow-up question
   * 
   * @example
   * 模型反问
   */
  askUser?: string;
  /**
   * @remarks
   * Prompt for custom hot topic viewpoint analysis
   * 
   * This parameter is required.
   * 
   * @example
   * 自定义选题视角的Prompt
   */
  prompt?: string;
  /**
   * @remarks
   * Rewritten query
   * 
   * @example
   * 改写后的Query
   */
  searchQuery?: string;
  /**
   * @remarks
   * Set to true to skip the follow-up question
   * 
   * @example
   * true
   */
  skipAskUser?: boolean;
  /**
   * @remarks
   * The hot topic for analysis
   * 
   * @example
   * 热点主题
   */
  topic?: string;
  /**
   * @remarks
   * Hot topic ID
   * 
   * @example
   * 热点主题ID
   */
  topicId?: string;
  /**
   * @remarks
   * Hot topic source
   * 
   * @example
   * 热点主题来源
   */
  topicSource?: string;
  /**
   * @remarks
   * Hot topic version
   * 
   * @example
   * 热点主题版本
   */
  topicVersion?: string;
  /**
   * @remarks
   * User feedback
   * 
   * @example
   * 用户反馈
   */
  userBack?: string;
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud Model Studio workspace. For more information, see [Get the Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

