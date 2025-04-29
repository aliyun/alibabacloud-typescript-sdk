// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeploymentSetRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the deployment set. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the deployment set. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain digits, letters, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testDeploymentSetName
   */
  deploymentSetName?: string;
  /**
   * @remarks
   * The emergency solution to use in the situation where instances in the deployment set cannot be evenly distributed to different zones due to resource insufficiency after the instances failover. Valid values:
   * 
   * *   CancelMembershipAndStart: removes the instances from the deployment set and starts the instances immediately after they are failed over.
   * *   KeepStopped: leaves the instances in the Stopped state and starts them after resources are replenished.
   * 
   * Default value: CancelMembershipAndStart.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * >  This parameter is deprecated.
   * 
   * @example
   * Default
   */
  domain?: string;
  /**
   * @remarks
   * >  This parameter is deprecated.
   * 
   * @example
   * host
   */
  granularity?: string;
  /**
   * @remarks
   * The deployment strategy. Valid values:
   * 
   * *   Availability: high availability strategy.
   * *   AvailabilityGroup: high availability group strategy.
   * 
   * Default value: Availability.
   * 
   * @example
   * 1
   */
  groupCount?: number;
  /**
   * @remarks
   * The region ID of the deployment set. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent list of regions.
   * 
   * @example
   * CancelMembershipAndStart
   */
  onUnableToRedeployFailedInstance?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Creates a deployment set in a specific region.
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
   * 
   * *   Availability: high availability strategy
   * *   AvailabilityGroup: high availability group strategy
   * *   LowLatency: low latency strategy
   * 
   * Default value: Availability.
   * 
   * @example
   * Availability
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
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
    };
  }

  static types(): { [key: string]: any } {
    return {
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

