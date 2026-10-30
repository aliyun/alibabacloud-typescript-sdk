// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenInterRegionTrafficQosPolicyRequestTrafficQosQueues extends $dara.Model {
  /**
   * @remarks
   * The absolute value of the inter-region bandwidth that the queue can use. Unit: Mbit/s.
   * 
   * You can create up to 10 queues in a traffic QoS policy and specify the inter-region bandwidth that each queue can use.
   * 
   * For example, if you enter 1, packets that match the queue can use up to 1 Mbit/s of the inter-region bandwidth.
   * 
   * > The sum of the absolute values of the inter-region bandwidth allocated to all queues in a traffic QoS policy cannot exceed the total inter-region bandwidth.
   * 
   * @example
   * 1
   */
  bandwidth?: string;
  /**
   * @remarks
   * The DSCP values that match the queue.
   * 
   * You can create up to three queues in a traffic QoS policy. Each queue can match up to 60 DSCP values. Separate multiple DSCP values with commas (,).
   */
  dscps?: number[];
  /**
   * @remarks
   * The description of the queue.
   * 
   * You can create up to 10 queues in a traffic QoS policy and add a description to each queue.
   * 
   * The description must be 1 to 256 characters in length, and can be left empty. It cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  qosQueueDescription?: string;
  /**
   * @remarks
   * The name of the queue.
   * 
   * You can create up to three queues in a traffic QoS policy and specify a name for each queue.
   * 
   * The name must be 1 to 128 characters in length, and can be left empty. It cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  qosQueueName?: string;
  /**
   * @remarks
   * The percentage of the inter-region bandwidth that the queue can use.
   * 
   * You can create up to 10 queues in a traffic QoS policy and specify the percentage of the inter-region bandwidth that each queue can use.
   * 
   * For example, if you enter **1**, packets that match the queue can use up to 1% of the inter-region bandwidth.
   * 
   * > The sum of the inter-region bandwidth percentages of all queues in a traffic QoS policy cannot exceed 100%.
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
   * The bandwidth guarantee mode. You can specify an absolute bandwidth value or a bandwidth percentage. Valid values:
   * 
   * - **byBandwidth**: configures the QoS queue based on an absolute bandwidth value.
   * 
   * - **byBandwidthPercent** (default): configures the QoS queue based on a bandwidth percentage.
   * 
   * @example
   * byBandwidthPercent
   */
  bandwidthGuaranteeMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: prechecks the request without creating the inter-region traffic QoS policy. The system checks whether required parameters are specified, the request format, and service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): sends the request. If the request passes the precheck, the inter-region traffic QoS policy is created.
   * 
   * @example
   * false
   */
  consoleDryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: prechecks the request without creating the traffic QoS policy. The system checks whether required parameters are specified, the request format, and service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): sends the request. If the request passes the precheck, the traffic QoS policy is created.
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
   * The description of the traffic QoS policy.
   * 
   * The description must be 1 to 256 characters in length, and can be left empty. It cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  trafficQosPolicyDescription?: string;
  /**
   * @remarks
   * The name of the traffic QoS policy.
   * 
   * The name must be 1 to 128 characters in length, and can be left empty. It cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  trafficQosPolicyName?: string;
  /**
   * @remarks
   * The information about the queues in the traffic QoS policy.
   * 
   * You can create up to three queues. To create more queues, call the CreateCenInterRegionTrafficQosQueue operation.
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
   * The transit router instance ID, which is used for forward and routing.
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
      consoleDryRun: 'ConsoleDryRun',
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
      consoleDryRun: 'boolean',
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

