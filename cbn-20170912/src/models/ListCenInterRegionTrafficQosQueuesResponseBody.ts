// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCenInterRegionTrafficQosQueuesResponseBodyTrafficQosQueues extends $dara.Model {
  /**
   * @remarks
   * The inter-region bandwidth allocated to the current queue when the bandwidth guarantee type is set to absolute value mode.
   * 
   * For example, a value of **1** indicates that traffic packets matching the current queue can use up to 1 Mbit/s of inter-region bandwidth.
   * 
   * @example
   * 1
   */
  bandwidth?: string;
  /**
   * @remarks
   * The DSCP values matched by the current queue.
   */
  dscps?: number[];
  /**
   * @remarks
   * The actual effective bandwidth value of the current queue.
   * 
   * @example
   * 1.35
   */
  effectiveBandwidth?: string;
  /**
   * @remarks
   * The percentage of inter-region bandwidth that the current queue can use when the bandwidth guarantee type is set to percentage mode.
   * 
   * For example, a value of **1** indicates that traffic packets matching the current queue can use up to 1% of the inter-region bandwidth.
   * 
   * @example
   * 1
   */
  remainBandwidthPercent?: number;
  /**
   * @remarks
   * The status of the queue. Valid values:
   * 
   * - **Creating**: The queue is being created.
   * - **Active**: The queue is running.
   * - **Deleting**: The queue is being deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the traffic scheduling policy.
   * 
   * @example
   * qos-fv2qq9yqrsjowp****
   */
  trafficQosPolicyId?: string;
  /**
   * @remarks
   * The description of the traffic scheduling policy queue.
   * 
   * @example
   * qosQueueDescription
   */
  trafficQosQueueDescription?: string;
  /**
   * @remarks
   * The ID of the traffic scheduling policy queue.
   * 
   * @example
   * qos-queue-siakjb2nn9gz5z****
   */
  trafficQosQueueId?: string;
  /**
   * @remarks
   * The name of the traffic scheduling policy queue.
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
   * The ID of the transit router instance.
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
   * The token that determines the start point of the next query. Valid values:
   * 
   * - If **NextToken** is empty, no next query exists.
   * - If a value is returned for **NextToken**, the value indicates the token that is used for the next query.
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
   * The queue information of the traffic scheduling policy.
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

