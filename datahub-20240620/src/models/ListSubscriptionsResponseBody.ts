// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubscriptionsResponseBodyListSubscription extends $dara.Model {
  /**
   * @example
   * test_application_name
   */
  application?: string;
  /**
   * @example
   * test_comment
   */
  comment?: string;
  /**
   * @example
   * 1708171905000
   */
  createTime?: number;
  /**
   * @example
   * 1048133943212399
   */
  creator?: string;
  /**
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @example
   * 1
   */
  state?: number;
  /**
   * @example
   * 1745824636429WZ2EE
   */
  subscriptionId?: string;
  /**
   * @example
   * test_topic
   */
  topicName?: string;
  /**
   * @example
   * USER
   */
  type?: string;
  /**
   * @example
   * 1708171905000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      comment: 'Comment',
      createTime: 'CreateTime',
      creator: 'Creator',
      projectName: 'ProjectName',
      state: 'State',
      subscriptionId: 'SubscriptionId',
      topicName: 'TopicName',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      comment: 'string',
      createTime: 'number',
      creator: 'string',
      projectName: 'string',
      state: 'number',
      subscriptionId: 'string',
      topicName: 'string',
      type: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionsResponseBodyList extends $dara.Model {
  subscription?: ListSubscriptionsResponseBodyListSubscription[];
  static names(): { [key: string]: string } {
    return {
      subscription: 'Subscription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscription: { 'type': 'array', 'itemType': ListSubscriptionsResponseBodyListSubscription },
    };
  }

  validate() {
    if(Array.isArray(this.subscription)) {
      $dara.Model.validateArray(this.subscription);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionsResponseBody extends $dara.Model {
  list?: ListSubscriptionsResponseBodyList;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 9892074a2a89600ae4b0d5a34fb99a3f
   */
  nextToken?: string;
  /**
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
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
      list: ListSubscriptionsResponseBodyList,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

