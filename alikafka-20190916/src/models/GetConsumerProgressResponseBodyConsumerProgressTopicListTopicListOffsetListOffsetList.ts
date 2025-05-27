// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerProgressResponseBodyConsumerProgressTopicListTopicListOffsetListOffsetList extends $dara.Model {
  /**
   * @remarks
   * The latest offset in the partition of the topic.
   * 
   * @example
   * 9
   */
  brokerOffset?: number;
  /**
   * @remarks
   * Client ID of the application.
   * 
   * @example
   * client-id-KafkaConsumerDemo
   */
  clientId?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 172.16.11.3
   */
  clientIp?: string;
  /**
   * @remarks
   * The consumer offset in the partition of the topic.
   * 
   * @example
   * 9
   */
  consumerOffset?: number;
  /**
   * @remarks
   * The time when the last consumed message in the partition was generated.
   * 
   * @example
   * 1566874931649
   */
  lastTimestamp?: number;
  /**
   * @remarks
   * Member ID.
   * 
   * @example
   * client-id-KafkaConsumerDemo-70b64883-a911-4882-8084-598b958848b4
   */
  memberId?: string;
  /**
   * @remarks
   * The partition ID.
   * 
   * @example
   * 0
   */
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      brokerOffset: 'BrokerOffset',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      consumerOffset: 'ConsumerOffset',
      lastTimestamp: 'LastTimestamp',
      memberId: 'MemberId',
      partition: 'Partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerOffset: 'number',
      clientId: 'string',
      clientIp: 'string',
      consumerOffset: 'number',
      lastTimestamp: 'number',
      memberId: 'string',
      partition: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

