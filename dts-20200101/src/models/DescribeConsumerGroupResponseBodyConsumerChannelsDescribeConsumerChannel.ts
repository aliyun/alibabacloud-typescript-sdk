// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConsumerGroupResponseBodyConsumerChannelsDescribeConsumerChannel extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * dtspis1110z232****
   */
  consumerGroupID?: string;
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
   * test
   */
  consumerGroupUserName?: string;
  /**
   * @remarks
   * The consumption checkpoint, which is the time when the latest data record was consumed by the change tracking client. The format is *yyyy-MM-dd*T*HH:mm:ss*Z. The time is displayed in UTC.
   * 
   * @example
   * 2019-10-02T12:00:00Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The message delay, which is the current time minus the timestamp of the earliest unconsumed message in the change tracking instance. Unit: seconds.
   * 
   * >  If the return value of this parameter is **-1**, no client is connected to the consumer group.
   * 
   * @example
   * 172714
   */
  messageDelay?: number;
  /**
   * @remarks
   * The total number of unconsumed messages, which is the number of unconsumed data records plus the number of heartbeat messages.
   * 
   * >  If the return value of this parameter is **-1**, no client is connected to the consumer group.
   * 
   * @example
   * 186600
   */
  unconsumedData?: number;
  static names(): { [key: string]: string } {
    return {
      consumerGroupID: 'ConsumerGroupID',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupUserName: 'ConsumerGroupUserName',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      messageDelay: 'MessageDelay',
      unconsumedData: 'UnconsumedData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupID: 'string',
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

