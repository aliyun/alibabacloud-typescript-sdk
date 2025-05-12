// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePipelineResponseBodyPipelineNotifyConfig extends $dara.Model {
  /**
   * @remarks
   * The tags of the messages.
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
   * example1,example2
   */
  mqTopic?: string;
  /**
   * @remarks
   * The queue that is created in MNS.
   * 
   * @example
   * example-queue-****
   */
  queueName?: string;
  /**
   * @remarks
   * The topic that is created in MNS.
   * 
   * @example
   * example-topic-****
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

