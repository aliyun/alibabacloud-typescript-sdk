// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotTopicsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 2026-06-04 23:59:59
   */
  createTimeEnd?: string;
  /**
   * @example
   * 2026-06-01 00:00:00
   */
  createTimeStart?: string;
  /**
   * @example
   * biz-tag-001
   */
  customField?: string;
  /**
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  topicIdsShrink?: string;
  /**
   * @example
   * 根据热榜主题全文检索
   */
  topicQuery?: string;
  /**
   * @example
   * 热榜源筛选，支持的热榜源。热榜源详见API：ListHotSources
   */
  topicSource?: string;
  /**
   * @example
   * 数据版本筛选
   */
  topicVersion?: string;
  topicsShrink?: string;
  /**
   * @example
   * true
   */
  withNews?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      customField: 'CustomField',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      topicIdsShrink: 'TopicIds',
      topicQuery: 'TopicQuery',
      topicSource: 'TopicSource',
      topicVersion: 'TopicVersion',
      topicsShrink: 'Topics',
      withNews: 'WithNews',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      customField: 'string',
      maxResults: 'number',
      nextToken: 'string',
      topicIdsShrink: 'string',
      topicQuery: 'string',
      topicSource: 'string',
      topicVersion: 'string',
      topicsShrink: 'string',
      withNews: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

