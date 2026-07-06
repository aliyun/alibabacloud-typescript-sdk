// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicSubscribeStatusResponseBodyTopicSubscribeStatus extends $dara.Model {
  /**
   * @remarks
   * List of Groups that subscribe to this topic.
   */
  consumerGroups?: string[];
  /**
   * @remarks
   * Topic name.
   * 
   * @example
   * topic_api_1681624879908
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroups: 'ConsumerGroups',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroups: { 'type': 'array', 'itemType': 'string' },
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.consumerGroups)) {
      $dara.Model.validateArray(this.consumerGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSubscribeStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * HTTP return code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 06084011-E093-46F3-A51F-4B19A8AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Subscription details
   */
  topicSubscribeStatus?: GetTopicSubscribeStatusResponseBodyTopicSubscribeStatus;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      topicSubscribeStatus: 'TopicSubscribeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      topicSubscribeStatus: GetTopicSubscribeStatusResponseBodyTopicSubscribeStatus,
    };
  }

  validate() {
    if(this.topicSubscribeStatus && typeof (this.topicSubscribeStatus as any).validate === 'function') {
      (this.topicSubscribeStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

