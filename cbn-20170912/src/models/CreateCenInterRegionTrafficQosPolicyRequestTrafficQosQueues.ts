// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenInterRegionTrafficQosPolicyRequestTrafficQosQueues extends $dara.Model {
  /**
   * @remarks
   * The absolute bandwidth that can be consumed by the QoS queue. Unit: Mbit/s.
   * 
   * Each QoS policy supports at most 10 queues. You can specify a valid bandwidth value for each queue.
   * 
   * For example, a value of 1 specifies that the queue can consume 1 Mbit/s of the inter-region bandwidth.
   * 
   * >  The sum of the absolute bandwidth values of all the queues in a QoS policy cannot exceed the total bandwidth of the inter-region connection.
   * 
   * @example
   * 1
   */
  bandwidth?: string;
  /**
   * @remarks
   * The Differentiated Services Code Point (DSCP) value that matches the current queue.
   * 
   * Each QoS policy supports at most three queues. You can specify at most 60 DSCP values for each queue. Separate multiple DCSP values with commas (,).
   */
  dscps?: number[];
  /**
   * @remarks
   * The description of the current queue.
   * 
   * Each QoS policy supports at most 10 queues. You can specify a description for each queue.
   * 
   * This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  qosQueueDescription?: string;
  /**
   * @remarks
   * The name of the current queue.
   * 
   * Each QoS policy supports at most three queues. You can specify a name for each queue.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  qosQueueName?: string;
  /**
   * @remarks
   * The percentage of the inter-region bandwidth that can be used by the queue.
   * 
   * Each QoS policy supports at most 10 queues. You can specify a valid percentage for each queue.
   * 
   * For example, a value of **1** specifies that the queue can consume 1% of the inter-region bandwidth.
   * 
   * >  The sum of the percentage values of all the queues in a QoS policy cannot exceed 100%.
   * 
   * @example
   * 1
   */
  remainBandwidthPercent?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      dscps: 'Dscps',
      qosQueueDescription: 'QosQueueDescription',
      qosQueueName: 'QosQueueName',
      remainBandwidthPercent: 'RemainBandwidthPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      dscps: { 'type': 'array', 'itemType': 'number' },
      qosQueueDescription: 'string',
      qosQueueName: 'string',
      remainBandwidthPercent: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dscps)) {
      $dara.Model.validateArray(this.dscps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

