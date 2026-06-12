// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the subscription belongs.
   * 
   * @example
   * test_application_name
   */
  application?: string;
  /**
   * @remarks
   * The description of the subscription.
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
   * 1724041098000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the subscription.
   * 
   * @example
   * 1559031978056215
   */
  creator?: string;
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
   * The request ID.
   * 
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the subscription. Valid values:
   * - 0: offline.
   * - 1: online.
   * 
   * @example
   * 1
   */
  state?: number;
  /**
   * @remarks
   * The subscription ID.
   * 
   * @example
   * 1741072334529RFEF7
   */
  subscriptionId?: string;
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
   * The topic name.
   * 
   * @example
   * test_topic
   */
  topicName?: string;
  /**
   * @remarks
   * The type of the subscription. Valid values:
   * - USER: created by a user.
   * - SYSTEM: created by the system.
   * 
   * @example
   * USER
   */
  type?: string;
  /**
   * @remarks
   * The last update time.
   * 
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

