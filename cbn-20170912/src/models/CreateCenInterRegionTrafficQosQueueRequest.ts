// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenInterRegionTrafficQosQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum cross-region bandwidth that the queue can use when bandwidth is allocated in absolute value mode. Unit: Mbit/s.
   * 
   * - The bandwidth value is calculated as an absolute value. For example, if you enter 20, the queue can use up to 20 Mbit/s of the cross-region bandwidth.
   * 
   * - The sum of the bandwidth of all queues under a cross-region connection instance cannot exceed the cross-region bandwidth.
   * 
   * @example
   * 20
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a parameter value on your client to ensure that the value is unique across different requests. The client token only supports ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: sends a check request and does not create the queue. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the check, the system returns an error. If the request passes the check, the system returns the `DryRunOperation` error code.
   * - **false** (default): sends a regular request and creates the queue after the request passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The Differentiated Services Code Point (DSCP) values to be matched by the queue.
   * 
   * You can enter up to 20 DSCP values at a time. Separate multiple DSCP values with commas (,).
   * 
   * This parameter is required.
   */
  dscps?: number[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The description of the queue.
   * 
   * The description can be empty or 1 to 256 characters in length. It cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  qosQueueDescription?: string;
  /**
   * @remarks
   * The name of the queue.
   * 
   * The name can be empty or 1 to 128 characters in length. It cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  qosQueueName?: string;
  /**
   * @remarks
   * The maximum cross-region bandwidth that the queue can use when bandwidth is allocated in percentage mode.
   * 
   * - The bandwidth value is calculated as a percentage. For example, if you enter 20, the queue can use up to 20% of the cross-region bandwidth.
   * 
   * - The sum of the bandwidth percentages of all queues under a cross-region connection instance cannot exceed 100%.
   * 
   * @example
   * 20
   */
  remainBandwidthPercent?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the traffic scheduling policy.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-qdvybn468kaoxx****
   */
  trafficQosPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      dscps: 'Dscps',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosQueueDescription: 'QosQueueDescription',
      qosQueueName: 'QosQueueName',
      remainBandwidthPercent: 'RemainBandwidthPercent',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficQosPolicyId: 'TrafficQosPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      dryRun: 'boolean',
      dscps: { 'type': 'array', 'itemType': 'number' },
      ownerAccount: 'string',
      ownerId: 'number',
      qosQueueDescription: 'string',
      qosQueueName: 'string',
      remainBandwidthPercent: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficQosPolicyId: 'string',
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

