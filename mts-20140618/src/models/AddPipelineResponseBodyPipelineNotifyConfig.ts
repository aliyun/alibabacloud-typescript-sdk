// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPipelineResponseBodyPipelineNotifyConfig extends $dara.Model {
  /**
   * @remarks
   * The tag string.
   * 
   * @example
   * mts-test
   */
  mqTag?: string;
  /**
   * @remarks
   * The queue of messages that are received.
   * 
   * @example
   * example1
   */
  mqTopic?: string;
  /**
   * @remarks
   * The name of the queue.
   * 
   * @example
   * mts-queue-1
   */
  queueName?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * mts-topic-1
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      mqTag: 'MqTag',
      mqTopic: 'MqTopic',
      queueName: 'QueueName',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqTag: 'string',
      mqTopic: 'string',
      queueName: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

