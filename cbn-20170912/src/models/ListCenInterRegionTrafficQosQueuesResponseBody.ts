// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCenInterRegionTrafficQosQueuesResponseBodyTrafficQosQueues extends $dara.Model {
  /**
   * @remarks
   * The bandwidth allocated to the queue. This parameter is returned only if you allocate bandwidth to the queue by absolute value.
   * 
   * For example, a value of **1** indicates that traffic that matches the queue can use up to 1 Mbit/s of the inter-region connection bandwidth.
   * 
   * @example
   * 1
   */
  bandwidth?: string;
  /**
   * @remarks
   * The Differentiated Services Code Point (DSCP) values that are matched by the queue.
   */
  dscps?: number[];
  /**
   * @remarks
   * The actual bandwidth of the queue.
   * 
   * @example
   * 1.35
   */
  effectiveBandwidth?: string;
  /**
   * @remarks
   * The percentage of the inter-region connection bandwidth that can be used by the queue. This parameter is returned only if you allocate bandwidth to the queue by percentage.
   * 
   * For example, a value of **1** indicates that traffic that matches the queue can use up to 1% of the inter-region connection bandwidth.
   * 
   * @example
   * 1
   */
  remainBandwidthPercent?: number;
  /**
   * @remarks
   * The status of the queue.
   * 
   * - **Creating**: The queue is being created.
   * 
   * - **Active**: The queue is running.
   * 
   * - **Deleting**: The queue is being deleted.
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
   * The description of the queue in the QoS policy.
   * 
   * @example
   * qosQueueDescription
   */
  trafficQosQueueDescription?: string;
  /**
   * @remarks
   * The ID of the queue in the QoS policy.
   * 
   * @example
   * qos-queue-siakjb2nn9gz5z****
   */
  trafficQosQueueId?: string;
  /**
   * @remarks
   * The name of the queue in the QoS policy.
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

export class ListCenInterRegionTrafficQosQueuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It is used in the next request to retrieve a new page of results. Valid values:
   * 
   * - If **NextToken** is empty, no more results are returned.
   * 
   * - If NextToken is not empty, the value of **NextToken** is used for the next query.
   * 
   * @example
   * 0151fa6aa1ed****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1D1E15D2-416D-54F3-BDD9-BC27DE4C6352
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the queues of the QoS policy.
   */
  trafficQosQueues?: ListCenInterRegionTrafficQosQueuesResponseBodyTrafficQosQueues[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      trafficQosQueues: 'TrafficQosQueues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      trafficQosQueues: { 'type': 'array', 'itemType': ListCenInterRegionTrafficQosQueuesResponseBodyTrafficQosQueues },
    };
  }

  validate() {
    if(Array.isArray(this.trafficQosQueues)) {
      $dara.Model.validateArray(this.trafficQosQueues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

