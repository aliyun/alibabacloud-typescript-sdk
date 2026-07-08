// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotTopicsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the business space.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * The end of the creation time filter range (inclusive). The value must be in the `yyyy-MM-dd HH:mm:ss` format.
   * 
   * @example
   * 2026-06-04 23:59:59
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The start of the creation time filter range (inclusive). The value must be in the `yyyy-MM-dd HH:mm:ss` format.
   * 
   * @example
   * 2026-06-01 00:00:00
   */
  createTimeStart?: string;
  /**
   * @remarks
   * Filters the results by a custom business field. The service performs an exact keyword match on this field. The value can be up to 255 characters long.
   * 
   * @example
   * biz-tag-001
   */
  customField?: string;
  /**
   * @remarks
   * The maximum number of results to return for a single request. If this parameter is not specified, the service uses a default value.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. If you do not specify this parameter, the service returns the first page of results. You can get this token from the `NextToken` response parameter of the previous request.
   * 
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @remarks
   * A list of topic IDs.
   */
  topicIdsShrink?: string;
  /**
   * @remarks
   * The keywords for a full-text search on hot topics.
   * 
   * @example
   * 根据热榜主题全文检索
   */
  topicQuery?: string;
  /**
   * @remarks
   * Filters the results by hot topic source. For a list of supported hot topic sources, call the `ListHotSources` operation.
   * 
   * `Aggregation`: represents the aggregated list of national hot topics.
   * 
   * @example
   * Quark
   */
  topicSource?: string;
  /**
   * @remarks
   * Filters the results by data version.
   * 
   * @example
   * 数据版本筛选
   */
  topicVersion?: string;
  /**
   * @remarks
   * Filters the results by hot topic.
   */
  topicsShrink?: string;
  /**
   * @remarks
   * Specifies whether to include news in the response.
   * 
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

