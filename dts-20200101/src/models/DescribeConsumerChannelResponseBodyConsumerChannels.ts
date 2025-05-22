// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConsumerChannelResponseBodyConsumerChannels extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * dtsor2y66j4219****
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * @example
   * consumergrouptest
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The username of the consumer group.
   * 
   * @example
   * dtstest
   */
  consumerGroupUserName?: string;
  /**
   * @remarks
   * The consumption checkpoint, which is the time when the latest data record was consumed by the change tracking client. The time is displayed in the yyyy-MM-ddTHH:mm:ssZ format in UTC.
   * 
   * @example
   * 2021-06-20T12:00:00Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The message latency, which is the timestamp of the latest data consumed by the downstream client minus the timestamp of the latest data tracked by the change tracking task. The value is a UNIX timestamp. Unit: seconds.
   * 
   * For example, the latest data in the source database is generated at 10:00. The change tracking task reads the data generated at 09:55, and the downstream client consumes the data generated at 09:30. In this case, the message latency is the UNIX timestamp difference between 09:55 and 09:30.
   * 
   * >  If the return value of this parameter is **-1**, no client is connected to the consumer group.
   * 
   * @example
   * 1500
   */
  messageDelay?: number;
  /**
   * @remarks
   * The total number of unconsumed messages, which is the number of unconsumed data records plus the number of heartbeat messages.
   * 
   * >  If the return value of this parameter is -1, no client is connected to the consumer group.
   * 
   * @example
   * 186600
   */
  unconsumedData?: number;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'ConsumerGroupId',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupUserName: 'ConsumerGroupUserName',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      messageDelay: 'MessageDelay',
      unconsumedData: 'UnconsumedData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      consumerGroupName: 'string',
      consumerGroupUserName: 'string',
      consumptionCheckpoint: 'string',
      messageDelay: 'number',
      unconsumedData: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

