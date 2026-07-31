// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeploymentSetRequest extends $dara.Model {
  /**
   * @remarks
   * The affinity level of the deployment set. Instances in the deployment set are distributed based on this affinity level. Valid values: 1 to 10. Default value: 1.
   * 
   * @example
   * 3
   */
  affinity?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests.
   * 
   * ClientToken supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the deployment set. The name must be 2 to 128 characters in length and must start with a letter. It cannot start with `http://` or `https://`. The name can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testDeploymentSetName
   */
  deploymentSetName?: string;
  /**
   * @remarks
   * The description of the deployment set. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * > This parameter is deprecated.
   * 
   * @example
   * null
   */
  domain?: string;
  /**
   * @remarks
   * > This parameter is deprecated.
   * 
   * @example
   * null
   */
  granularity?: string;
  /**
   * @remarks
   * The number of groups for the high availability group strategy. Valid values: 1 to 7.
   * 
   * Default value: 3.
   * 
   * > This parameter takes effect only when `Strategy=AvailabilityGroup`.
   * 
   * @example
   * 1
   */
  groupCount?: number;
  /**
   * @remarks
   * The emergency solution to use when an instance in the deployment set cannot be evenly distributed to available inventory after a failover. Valid values: 
   *          
   * - CancelMembershipAndStart: Removes the instance from the deployment set and starts the instance immediately after the failover.
   * - KeepStopped: Keeps the deployment set attributes of the instance and leaves the instance in the Stopped state.
   * 
   * Default value: CancelMembershipAndStart.
   * 
   * @example
   * CancelMembershipAndStart
   */
  onUnableToRedeployFailedInstance?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the deployment set. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The deployment strategy. Valid values:
   * - Availability: High availability strategy.
   * - AvailabilityGroup: High availability group strategy.
   * - LowLatency: Low network latency strategy.
   * 
   * Default value: Availability.
   * 
   * @example
   * Availability
   */
  strategy?: string;
  /**
   * @remarks
   * The deployment type. Valid values:
   * - host: physical server
   * - sw: vSwitch
   * - rack: rack
   * 
   * Default value: host.
   * 
   * @example
   * host
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      affinity: 'Affinity',
      clientToken: 'ClientToken',
      deploymentSetName: 'DeploymentSetName',
      description: 'Description',
      domain: 'Domain',
      granularity: 'Granularity',
      groupCount: 'GroupCount',
      onUnableToRedeployFailedInstance: 'OnUnableToRedeployFailedInstance',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      strategy: 'Strategy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affinity: 'number',
      clientToken: 'string',
      deploymentSetName: 'string',
      description: 'string',
      domain: 'string',
      granularity: 'string',
      groupCount: 'number',
      onUnableToRedeployFailedInstance: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      strategy: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

