// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenInterRegionTrafficQosQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum inter-region bandwidth that the queue can use when bandwidth is allocated by absolute value. Unit: Mbit/s.
   * 
   * - The bandwidth value is calculated as an absolute value. For example, if you enter 20, the queue can use up to 20 Mbit/s of inter-region bandwidth.
   * 
   * - The sum of the bandwidth values of all queues under an inter-region connection cannot exceed the inter-region bandwidth value.
   * 
   * @example
   * 20
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **RequestId** value as the **ClientToken** value. The **RequestId** value of each API request is different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the queue is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The DSCP values to be matched by the queue.
   * 
   * You can specify up to 20 DSCP values at a time. Separate multiple DSCP values with commas (,).
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
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  qosQueueName?: string;
  /**
   * @remarks
   * The maximum inter-region bandwidth that the queue can use when bandwidth is allocated by percentage.
   * 
   * - The bandwidth value is calculated as a percentage. For example, if you enter 20, the queue can use up to 20% of the inter-region bandwidth.
   * 
   * - The sum of the bandwidth percentages of all queues under an inter-region connection cannot exceed 100%.
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

