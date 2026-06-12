// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The description of the consumer group.
   * 
   * @example
   * test_comment
   */
  comment?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1708171905000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the consumer group.
   * 
   * @example
   * 276887103073464052
   */
  creator?: string;
  /**
   * @remarks
   * The consumer group name.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * The list of topics bound to the consumer group.
   */
  topicList?: string[];
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * 1708171905000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      creator: 'Creator',
      groupName: 'GroupName',
      projectName: 'ProjectName',
      topicList: 'TopicList',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      creator: 'string',
      groupName: 'string',
      projectName: 'string',
      topicList: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.topicList)) {
      $dara.Model.validateArray(this.topicList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of consumer groups.
   */
  list?: ListGroupsResponseBodyList[];
  /**
   * @remarks
   * The maximum number of records returned in this query.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. If NextToken is empty, no more results are available. If NextToken has a value, it indicates the token from which the next query starts.
   * 
   * @example
   * 9892074a2a89600ae4b0d5a34fb99a3f
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records in the query result.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListGroupsResponseBodyList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

