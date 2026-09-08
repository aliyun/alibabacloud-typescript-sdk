// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenInterRegionTrafficQosPolicyRequestTrafficQosQueues extends $dara.Model {
  /**
   * @remarks
   * The absolute bandwidth value that the queue can use for inter-region traffic, in Mbit/s.
   * 
   * A traffic scheduling policy supports up to 10 queues, and each queue can be assigned an absolute bandwidth value.
   * 
   * For example, if you enter 1, traffic that matches the queue can use up to 1 Mbit/s of inter-region bandwidth.
   * 
   * > The sum of absolute bandwidth values of all allocated queues in a traffic scheduling policy cannot exceed the inter-region bandwidth value.
   * 
   * @example
   * 1
   */
  bandwidth?: string;
  /**
   * @remarks
   * The DSCP values that the queue matches.
   * 
   * A traffic scheduling policy supports up to 3 queues, and each queue can match up to 60 DSCP values. Separate multiple DSCP values with commas (,).
   */
  dscps?: number[];
  /**
   * @remarks
   * The description of the queue.
   * 
   * A traffic scheduling policy supports up to 10 queues, and each queue can have a description.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  qosQueueDescription?: string;
  /**
   * @remarks
   * The name of the queue.
   * 
   * A traffic scheduling policy supports up to 3 queues, and each queue can be assigned a name.
   * 
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  qosQueueName?: string;
  /**
   * @remarks
   * The percentage of inter-region bandwidth that the queue can use.
   * 
   * A traffic scheduling policy supports up to 10 queues, and each queue can be assigned a percentage of inter-region bandwidth.
   * 
   * For example, if you enter **1**, traffic that matches the queue can use up to 1% of the inter-region bandwidth.
   * 
   * > The sum of bandwidth percentages of all queues in a traffic scheduling policy cannot exceed 100%.
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
   * The bandwidth guarantee mode. You can configure QoS queues based on absolute bandwidth values or bandwidth percentages. Valid values:
   * 
   * - **byBandwidth**: configures QoS queues based on absolute bandwidth values.
   * 
   * - **byBandwidthPercent** (default): configures QoS queues based on bandwidth percentages.
   * 
   * @example
   * byBandwidthPercent
   */
  bandwidthGuaranteeMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and business restrictions. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the cross-region traffic scheduling policy is created.
   * 
   * @example
   * false
   */
  consoleDryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and business restrictions. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the traffic scheduling policy is created.
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
   * The description of the traffic scheduling policy.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  trafficQosPolicyDescription?: string;
  /**
   * @remarks
   * The name of the traffic scheduling policy.
   * 
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  trafficQosPolicyName?: string;
  /**
   * @remarks
   * The queue information of the traffic scheduling policy.
   * 
   * You can create up to 3 queues. To create more queues, call CreateCenInterRegionTrafficQosQueue.
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
   * The ID of the transit router instance.
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

