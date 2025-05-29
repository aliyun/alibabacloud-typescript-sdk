// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCenInterRegionTrafficQosQueuesResponseBodyTrafficQosQueues extends $dara.Model {
  /**
   * @remarks
   * The absolute bandwidth value that can be allocated to the current queue.
   * 
   * A value of **1** indicates that the QoS queue can consume at most 1 Mbit/s of inter-region bandwidth.
   * 
   * @example
   * 1
   */
  bandwidth?: string;
  /**
   * @remarks
   * The Differentiated Services Code Point (DSCP) value that matches the current QoS queue.
   */
  dscps?: number[];
  /**
   * @remarks
   * The actual bandwidth of the current queue.
   * 
   * @example
   * 1.35
   */
  effectiveBandwidth?: string;
  /**
   * @remarks
   * The percentage of bandwidth that can be allocated to the current queue.
   * 
   * A value of **1** indicates that the QoS queue can consume at most 1% of the inter-region bandwidth.
   * 
   * @example
   * 1
   */
  remainBandwidthPercent?: number;
  /**
   * @remarks
   * The status of the QoS queue. Valid values:
   * 
   * *   **Creating**
   * *   **Active**
   * *   **Deleting**
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * @example
   * qos-fv2qq9yqrsjowp****
   */
  trafficQosPolicyId?: string;
  /**
   * @remarks
   * The description of the QoS queue.
   * 
   * @example
   * qosQueueDescription
   */
  trafficQosQueueDescription?: string;
  /**
   * @remarks
   * The ID of the QoS queue.
   * 
   * @example
   * qos-queue-siakjb2nn9gz5z****
   */
  trafficQosQueueId?: string;
  /**
   * @remarks
   * The name of the QoS queue.
   * 
   * @example
   * qosQueueName
   */
  trafficQosQueueName?: string;
  /**
   * @remarks
   * The ID of the inter-region connection.
   * 
   * @example
   * tr-attach-nzrcv25d7ezt23****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-p0wwagjv6fvxt4b7y****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      dscps: 'Dscps',
      effectiveBandwidth: 'EffectiveBandwidth',
      remainBandwidthPercent: 'RemainBandwidthPercent',
      status: 'Status',
      trafficQosPolicyId: 'TrafficQosPolicyId',
      trafficQosQueueDescription: 'TrafficQosQueueDescription',
      trafficQosQueueId: 'TrafficQosQueueId',
      trafficQosQueueName: 'TrafficQosQueueName',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      dscps: { 'type': 'array', 'itemType': 'number' },
      effectiveBandwidth: 'string',
      remainBandwidthPercent: 'number',
      status: 'string',
      trafficQosPolicyId: 'string',
      trafficQosQueueDescription: 'string',
      trafficQosQueueId: 'string',
      trafficQosQueueName: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
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

