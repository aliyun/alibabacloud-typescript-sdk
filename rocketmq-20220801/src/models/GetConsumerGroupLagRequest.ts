// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerGroupLagRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the lite topic.
   * 
   * @example
   * abc
   */
  liteTopicName?: string;
  /**
   * @remarks
   * The name of the topic to which the consumer group subscribes.
   * 
   * @example
   * normal-topic-1
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      liteTopicName: 'liteTopicName',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liteTopicName: 'string',
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

