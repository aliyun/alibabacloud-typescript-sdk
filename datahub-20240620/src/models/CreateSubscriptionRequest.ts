// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_application
   */
  application?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_abc
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @example
   * 1764122860063VIIZ2
   */
  subscriptionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_topic
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      comment: 'Comment',
      projectName: 'ProjectName',
      subscriptionId: 'SubscriptionId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      comment: 'string',
      projectName: 'string',
      subscriptionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

