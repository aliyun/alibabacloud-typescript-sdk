// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsConsumerTimeSpanResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The most recent point in time when a message in the topic was consumed by the customer group.
   * 
   * @example
   * 1570761026400
   */
  consumeTimeStamp?: number;
  /**
   * @remarks
   * The ID of the instance to which the consumer group belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The point in time when the most recently stored message was published to the topic.
   * 
   * @example
   * 1570761026804
   */
  maxTimeStamp?: number;
  /**
   * @remarks
   * The point in time when the earliest stored message was published to the topic.
   * 
   * @example
   * 1570701231122
   */
  minTimeStamp?: number;
  /**
   * @remarks
   * The name of the topic that you want to query.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      consumeTimeStamp: 'ConsumeTimeStamp',
      instanceId: 'InstanceId',
      maxTimeStamp: 'MaxTimeStamp',
      minTimeStamp: 'MinTimeStamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimeStamp: 'number',
      instanceId: 'string',
      maxTimeStamp: 'number',
      minTimeStamp: 'number',
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

export class OnsConsumerTimeSpanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsConsumerTimeSpanResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A07E3902-B92E-44A6-B6C5-6AA111111****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsConsumerTimeSpanResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

