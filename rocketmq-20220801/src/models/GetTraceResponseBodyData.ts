// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTraceResponseBodyDataBrokerInfo } from "./GetTraceResponseBodyDataBrokerInfo";
import { GetTraceResponseBodyDataConsumerInfos } from "./GetTraceResponseBodyDataConsumerInfos";
import { GetTraceResponseBodyDataMessageInfo } from "./GetTraceResponseBodyDataMessageInfo";
import { GetTraceResponseBodyDataProducerInfo } from "./GetTraceResponseBodyDataProducerInfo";


export class GetTraceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The broker trace.
   */
  brokerInfo?: GetTraceResponseBodyDataBrokerInfo;
  /**
   * @remarks
   * Consumer trace info.
   */
  consumerInfos?: GetTraceResponseBodyDataConsumerInfos[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The message information.
   */
  messageInfo?: GetTraceResponseBodyDataMessageInfo;
  /**
   * @remarks
   * The producer trace.
   */
  producerInfo?: GetTraceResponseBodyDataProducerInfo;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      brokerInfo: 'brokerInfo',
      consumerInfos: 'consumerInfos',
      instanceId: 'instanceId',
      messageInfo: 'messageInfo',
      producerInfo: 'producerInfo',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerInfo: GetTraceResponseBodyDataBrokerInfo,
      consumerInfos: { 'type': 'array', 'itemType': GetTraceResponseBodyDataConsumerInfos },
      instanceId: 'string',
      messageInfo: GetTraceResponseBodyDataMessageInfo,
      producerInfo: GetTraceResponseBodyDataProducerInfo,
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    if(this.brokerInfo && typeof (this.brokerInfo as any).validate === 'function') {
      (this.brokerInfo as any).validate();
    }
    if(Array.isArray(this.consumerInfos)) {
      $dara.Model.validateArray(this.consumerInfos);
    }
    if(this.messageInfo && typeof (this.messageInfo as any).validate === 'function') {
      (this.messageInfo as any).validate();
    }
    if(this.producerInfo && typeof (this.producerInfo as any).validate === 'function') {
      (this.producerInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

