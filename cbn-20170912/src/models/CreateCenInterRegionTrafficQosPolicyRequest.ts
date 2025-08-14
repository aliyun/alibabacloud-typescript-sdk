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

export class CreateCenInterRegionTrafficQosPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The allocation mode of the guaranteed bandwidth. You can specify an absolute bandwidth value or a bandwidth percentage. Valid values:
   * 
   * *   **byBandwidth**: allocates an absolute bandwidth value for the QoS queue.
   * *   **byBandwidthPercent** (default): allocates a bandwidth percentage for the OoS queue.
   * 
   * @example
   * byBandwidthPercent
   */
  bandwidthGuaranteeMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether only to precheck the API request. Valid values:
   * 
   * *   **true**: prechecks the request but does not create the QoS policy. The system checks the required parameters, the request format, and the service limits. If the request fails the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * *   **false**: sends the API request. If the request passes the precheck, the QoS policy is created. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The description of the QoS policy.
   * 
   * This parameter is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  trafficQosPolicyDescription?: string;
  /**
   * @remarks
   * The name of the QoS policy.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  trafficQosPolicyName?: string;
  /**
   * @remarks
   * The information about the QoS queue.
   * 
   * You can add at most three QoS queues in a QoS policy by calling this operation. To add more QoS queues, call the CreateCenInterRegionTrafficQosQueue operation.
   */
  trafficQosQueues?: CreateCenInterRegionTrafficQosPolicyRequestTrafficQosQueues[];
  /**
   * @remarks
   * The ID of the inter-region connection.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-attach-r6g0m3epjehw57****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-8vbuqeo5h5pu3m01d****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthGuaranteeMode: 'BandwidthGuaranteeMode',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficQosPolicyDescription: 'TrafficQosPolicyDescription',
      trafficQosPolicyName: 'TrafficQosPolicyName',
      trafficQosQueues: 'TrafficQosQueues',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthGuaranteeMode: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficQosPolicyDescription: 'string',
      trafficQosPolicyName: 'string',
      trafficQosQueues: { 'type': 'array', 'itemType': CreateCenInterRegionTrafficQosPolicyRequestTrafficQosQueues },
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

