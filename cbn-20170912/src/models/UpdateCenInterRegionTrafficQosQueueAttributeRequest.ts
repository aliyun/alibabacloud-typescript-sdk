// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCenInterRegionTrafficQosQueueAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The absolute value of the cross-region bandwidth that can be used by the current queue when bandwidth is allocated by absolute value. Unit: Mbit/s. Enter a number without the unit.
   * 
   * @example
   * 1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the token value on the client side. Ensure that the token is unique across different requests and does not exceed 64 ASCII characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - **true**: performs a dry run. The system checks the request for required parameters, request format, and service limits, but does not modify the queue configuration. If the request fails the check, an error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a standard request. If the request passes the check, the queue configuration is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The DSCP values of the traffic packets to be matched by the current queue.
   */
  dscps?: number[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The new description of the queue. The description can be empty or 1 to 256 characters in length. It cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  qosQueueDescription?: string;
  /**
   * @remarks
   * The ID of the queue.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-queue-nv2vfzqkewhk4t****
   */
  qosQueueId?: string;
  /**
   * @remarks
   * The new name of the queue. The name can be empty or 1 to 128 characters in length. It cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  qosQueueName?: string;
  /**
   * @remarks
   * The percentage of the cross-region bandwidth that can be used by the current queue when bandwidth is allocated by percentage. Enter a number without the percent sign (%).
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

