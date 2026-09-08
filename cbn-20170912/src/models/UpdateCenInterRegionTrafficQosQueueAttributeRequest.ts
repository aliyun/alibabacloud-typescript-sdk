// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCenInterRegionTrafficQosQueueAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The absolute value of cross-region bandwidth that the current queue can use when bandwidth is allocated by absolute value. Unit: Mbit/s.
   * 
   * Enter a number only. Do not include the unit.
   * 
   * @example
   * 1
   */
  bandwidth?: number;
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
   * - **true**: performs a dry run without modifying the queue configurations. The system checks the required parameters, request format, and business restrictions. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - **false** (default): performs a dry run and then modifies the queue configurations after the check succeeds.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The DSCP values of traffic packets to be matched by the current queue.
   */
  dscps?: number[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The new description of the queue.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  qosQueueDescription?: string;
  /**
   * @remarks
   * The QoS queue ID.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-queue-nv2vfzqkewhk4t****
   */
  qosQueueId?: string;
  /**
   * @remarks
   * The new name of the queue.
   * 
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  qosQueueName?: string;
  /**
   * @remarks
   * The percentage of cross-region bandwidth that the current queue can use when bandwidth is allocated by percentage.
   * 
   * Enter a number only. Do not include the percent sign (%).
   * 
   * @example
   * 1
   */
  remainBandwidthPercent?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      dscps: 'Dscps',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosQueueDescription: 'QosQueueDescription',
      qosQueueId: 'QosQueueId',
      qosQueueName: 'QosQueueName',
      remainBandwidthPercent: 'RemainBandwidthPercent',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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
      qosQueueId: 'string',
      qosQueueName: 'string',
      remainBandwidthPercent: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

