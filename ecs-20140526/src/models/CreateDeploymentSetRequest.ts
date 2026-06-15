// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeploymentSetRequest extends $dara.Model {
  /**
   * @remarks
   * The affinity level of the deployment set. This level determines how instances are distributed within the set. The value must be an integer from 1 to 10. Default value: 1.
   * 
   * @example
   * 3
   */
  affinity?: number;
  /**
   * @remarks
   * A client-generated token that you can use to ensure request idempotence. The token must be unique across requests.
   * 
   * The **ClientToken** value must be an ASCII string of up to 64 characters. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the deployment set. The name must be 2 to 128 characters long and start with a letter. It can contain digits, colons (:), underscores (_), and hyphens (-). The name cannot start with `http://` or `https://`.
   * 
   * @example
   * testDeploymentSetName
   */
  deploymentSetName?: string;
  /**
   * @remarks
   * The description of the deployment set. The description must be 2 to 256 characters long and cannot start with `http://` or `https://`.
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
   * The number of partitions in the deployment set group. Valid values: 1 to 7.
   * 
   * Default value: 3.
   * 
   * > This parameter is valid only when `Strategy` is set to `AvailabilityGroup`.
   * 
   * @example
   * 1
   */
  groupCount?: number;
  /**
   * @remarks
   * The policy for an instance that fails to be redeployed after a failover due to insufficient resources. Valid values:
   * 
   * - CancelMembershipAndStart: Removes the instance from the deployment set and starts the instance immediately after failover.
   * 
   * - KeepStopped: Keeps the instance in the deployment set and in the Stopped state.
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
   * The ID of the region for the deployment set. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to view the latest list of Alibaba Cloud regions.
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
   * - Availability: High availability strategy.
   * 
   * - AvailabilityGroup: High availability strategy for deployment set groups.
   * 
   * - LowLatency: Low-latency strategy.
   * 
   * Default value: Availability.
   * 
   * @example
   * Availability
   */
  strategy?: string;
  /**
   * @remarks
   * The deployment granularity. Valid values:
   * 
   * - host: Spreads instances across different hosts.
   * 
   * - sw: Spreads instances across different switches.
   * 
   * - rack: Spreads instances across different racks.
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

