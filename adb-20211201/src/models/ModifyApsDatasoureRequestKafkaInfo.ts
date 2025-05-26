// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApsDatasoureRequestKafkaInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the Kafka instance.
   * 
   * @example
   * -
   */
  kafkaClusterId?: string;
  /**
   * @remarks
   * The topic of the Kafka instance.
   * 
   * @example
   * test-topic
   */
  kafkaTopic?: string;
  static names(): { [key: string]: string } {
    return {
      kafkaClusterId: 'KafkaClusterId',
      kafkaTopic: 'KafkaTopic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kafkaClusterId: 'string',
      kafkaTopic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

