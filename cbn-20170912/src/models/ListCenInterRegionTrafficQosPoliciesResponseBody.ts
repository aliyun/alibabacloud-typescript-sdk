// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPoliciesTrafficQosQueues extends $dara.Model {
  /**
   * @remarks
   * If the QoS queues are assigned absolute bandwidth values, this parameter indicates the absolute bandwidth value that is allocated to the queue.
   * 
   * @example
   * 1
   */
  bandwidth?: string;
  /**
   * @remarks
   * The differentiated services code point (DSCP) value that is used to match packets.
   */
  dscps?: number[];
  /**
   * @remarks
   * The actual bandwidth value of the current queue.
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
   * The queue ID.
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
   * If the QoS queues are assigned bandwidth percentages, this parameter indicates the percentage of bandwidth that is allocated to the queue.
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
   * The guaranteed bandwidth mode.
   * 
   * *   **byBandwidth**: allocates absolute bandwidth values to QoS queues.
   * *   **byBandwidthPercent**: assigns bandwidth percentages to QoS queues.
   * 
   * @example
   * byBandwidthPercent
   */
  bandwidthGuaranteeMode?: string;
  /**
   * @remarks
   * The description of the QoS policy.
   * 
   * @example
   * desctest
   */
  trafficQosPolicyDescription?: string;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * @example
   * qos-rnghap5gc8155x****
   */
  trafficQosPolicyId?: string;
  /**
   * @remarks
   * The name of the QoS policy.
   * 
   * @example
   * nametest
   */
  trafficQosPolicyName?: string;
  /**
   * @remarks
   * The status of the QoS policy.
   * 
   * *   **Creating**: The QoS policy is being created.
   * *   **Active**: The QoS policy is available.
   * *   **Modifying**: The policy is being modified.
   * *   **Deleting**: The QoS policy is being deleted.
   * 
   * @example
   * Creating
   */
  trafficQosPolicyStatus?: string;
  /**
   * @remarks
   * A list of queues.
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
   * The ID of the transit router.
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
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the query.
   * 
   * *   If **NextToken** was not returned in the previous query, it indicates that no additional results exist.
   * *   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
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
   * A list of QoS policies.
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

