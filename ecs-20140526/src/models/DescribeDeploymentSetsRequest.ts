// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeploymentSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the deployment sets. The value can be a JSON array that consists of up to 100 deployment set IDs. Sample format: `["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]`.
   * 
   * @example
   * ["ds-bp67acfmxazb4ph****", "ds-bp67acfmxazb4pi****", … "ds-bp67acfmxazb4pj****"]
   */
  deploymentSetIds?: string;
  /**
   * @remarks
   * The name of the deployment set. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * testDeploymentSetName
   */
  deploymentSetName?: string;
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
   * > This parameter is deprecated.
   * 
   * @example
   * null
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * Starts at 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the deployment set is located. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud regions.
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
   * - Availability: high availability strategy.
   * 
   * - AvailabilityGroup: high availability group strategy.
   * 
   * - LowLatency: low-latency strategy.
   * 
   * @example
   * Availability
   */
  strategy?: string;
  /**
   * @remarks
   * The deployment type. Valid values:
   * 
   * - host: Ensures that the instances in the deployment set are deployed on different hosts.
   * 
   * - sw: Ensures that the instances in the deployment set are deployed on different switches.
   * 
   * - rack: Ensures that the instances in the deployment set are deployed on different racks.
   * 
   * Default value: host.
   * 
   * @example
   * host
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentSetIds: 'DeploymentSetIds',
      deploymentSetName: 'DeploymentSetName',
      domain: 'Domain',
      granularity: 'Granularity',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      strategy: 'Strategy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSetIds: 'string',
      deploymentSetName: 'string',
      domain: 'string',
      granularity: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

