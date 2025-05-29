// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPoliciesTrafficQosQueues } from "./ListCenInterRegionTrafficQosPoliciesResponseBodyTrafficQosPoliciesTrafficQosQueues";


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

