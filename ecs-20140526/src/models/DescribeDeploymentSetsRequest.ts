// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeploymentSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of deployment sets. The value can be a JSON array that consists of deployment set IDs in the format of `["ds-xxxxxxxxx", "ds-yyyyyyyyy", ... "ds-zzzzzzzzz"]`. You can specify up to 100 deployment set IDs in each request. Separate the deployment set IDs with commas (,).
   * 
   * @example
   * ["ds-bp67acfmxazb4ph****", "ds-bp67acfmxazb4pi****", … "ds-bp67acfmxazb4pj****"]
   */
  deploymentSetIds?: string;
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
   * >  This parameter is deprecated.
   * 
   * @example
   * null
   */
  domain?: string;
  /**
   * @remarks
   * >  This parameter is deprecated.
   * 
   * @example
   * null
   */
  granularity?: string;
  /**
   * @remarks
   * >  This parameter is deprecated.
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
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the deployment set. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * 
   * @example
   * Availability
   */
  strategy?: string;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

