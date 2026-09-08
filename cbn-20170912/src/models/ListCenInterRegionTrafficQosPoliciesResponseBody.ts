// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPoliciesTrafficQosQueues extends $dara.Model {
  /**
   * @remarks
   * The inter-region bandwidth allocated to the current queue when the bandwidth guarantee type is set to the absolute value mode.
   * 
   * @example
   * 1
   */
  bandwidth?: string;
  /**
   * @remarks
   * The DSCP values of the traffic packets to be matched by the current queue.
   */
  dscps?: number[];
  /**
   * @remarks
   * The actual effective bandwidth of the current queue.
   * 
   * @example
   * 1.35
   */
  effectiveBandwidth?: string;
  /**
   * @remarks
   * The description of the queue.
   * 
   * @example
   * desctest
   */
  qosQueueDescription?: string;
  /**
   * @remarks
   * The ID of the queue.
   * 
   * @example
   * qos-queue-njcrmr9fiu1jii****
   */
  qosQueueId?: string;
  /**
   * @remarks
   * The name of the queue.
   * 
   * @example
   * namtest
   */
  qosQueueName?: string;
  /**
   * @remarks
   * The percentage of inter-region bandwidth occupied by the current queue when the bandwidth guarantee type is set to the percentage mode.
   * 
   * @example
   * 1
   */
  remainBandwidthPercent?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      dscps: 'Dscps',
      effectiveBandwidth: 'EffectiveBandwidth',
      qosQueueDescription: 'QosQueueDescription',
      qosQueueId: 'QosQueueId',
      qosQueueName: 'QosQueueName',
      remainBandwidthPercent: 'RemainBandwidthPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      dscps: { 'type': 'array', 'itemType': 'number' },
      effectiveBandwidth: 'string',
      qosQueueDescription: 'string',
      qosQueueId: 'string',
      qosQueueName: 'string',
      remainBandwidthPercent: 'number',
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

export class ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPolicies extends $dara.Model {
  /**
   * @remarks
   * The bandwidth guarantee type. Valid values:
   * - **byBandwidth**: configures QoS queues by absolute bandwidth value.
   * - **byBandwidthPercent**: configures QoS queues by bandwidth percentage.
   * 
   * @example
   * byBandwidthPercent
   */
  bandwidthGuaranteeMode?: string;
  /**
   * @remarks
   * The description of the traffic scheduling policy.
   * 
   * @example
   * desctest
   */
  trafficQosPolicyDescription?: string;
  /**
   * @remarks
   * The ID of the traffic scheduling policy.
   * 
   * @example
   * qos-rnghap5gc8155x****
   */
  trafficQosPolicyId?: string;
  /**
   * @remarks
   * The name of the traffic scheduling policy.
   * 
   * @example
   * nametest
   */
  trafficQosPolicyName?: string;
  /**
   * @remarks
   * The status of the traffic scheduling policy.
   * 
   * - **Creating**: being created.
   * - **Active**: active.
   * - **Modifying**: being modified.
   * - **Deleting**: being deleted.
   * 
   * @example
   * Creating
   */
  trafficQosPolicyStatus?: string;
  /**
   * @remarks
   * The list of queues.
   */
  trafficQosQueues?: ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPoliciesTrafficQosQueues[];
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * @example
   * tr-attach-q7ct7c06jpw***
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The transit router instance ID.
   * 
   * @example
   * tr-2ze4ta4v32umj0rb***
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthGuaranteeMode: 'BandwidthGuaranteeMode',
      trafficQosPolicyDescription: 'TrafficQosPolicyDescription',
      trafficQosPolicyId: 'TrafficQosPolicyId',
      trafficQosPolicyName: 'TrafficQosPolicyName',
      trafficQosPolicyStatus: 'TrafficQosPolicyStatus',
      trafficQosQueues: 'TrafficQosQueues',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthGuaranteeMode: 'string',
      trafficQosPolicyDescription: 'string',
      trafficQosPolicyId: 'string',
      trafficQosPolicyName: 'string',
      trafficQosPolicyStatus: 'string',
      trafficQosQueues: { 'type': 'array', 'itemType': ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPoliciesTrafficQosQueues },
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
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

export class ListCenInterRegionTrafficQosPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 113BFD47-63DF-5D9D-972C-033FB9C360CD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of traffic scheduling policies.
   */
  trafficQosPolicies?: ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPolicies[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficQosPolicies: 'TrafficQosPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      trafficQosPolicies: { 'type': 'array', 'itemType': ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPolicies },
    };
  }

  validate() {
    if(Array.isArray(this.trafficQosPolicies)) {
      $dara.Model.validateArray(this.trafficQosPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

