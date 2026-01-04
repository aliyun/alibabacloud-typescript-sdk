// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionResponseBody extends $dara.Model {
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
   * 1724041098000
   */
  createTime?: number;
  /**
   * @example
   * 1559031978056215
   */
  creator?: string;
  /**
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  state?: number;
  /**
   * @example
   * 1741072334529RFEF7
   */
  subscriptionId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
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
   * 1724041098000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      comment: 'Comment',
      createTime: 'CreateTime',
      creator: 'Creator',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      state: 'State',
      subscriptionId: 'SubscriptionId',
      success: 'Success',
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
      requestId: 'string',
      state: 'number',
      subscriptionId: 'string',
      success: 'boolean',
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

