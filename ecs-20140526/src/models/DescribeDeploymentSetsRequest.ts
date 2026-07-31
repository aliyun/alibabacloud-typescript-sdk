// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeploymentSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of deployment sets. The value can be a JSON array that consists of multiple deployment set IDs in the format of `["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]`. A maximum of 100 IDs are supported. Separate multiple IDs with commas (,).
   * 
   * @example
   * ["ds-bp67acfmxazb4ph****", "ds-bp67acfmxazb4pi****", … "ds-bp67acfmxazb4pj****"]
   */
  deploymentSetIds?: string;
  /**
   * @remarks
   * The name of the deployment set. The name must be 2 to 128 characters in length and can contain characters that are categorized as letter in Unicode, including English letters, Chinese characters, and digits. The name can also contain colons (:), underscores (_), periods (.), or hyphens (-).
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
   * The page number of the deployment set list.
   * 
   * Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query.
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
   * 
   * - Availability: high availability.
   * - AvailabilityGroup: high availability for deployment set groups.
   * - LowLatency: low network latency.
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

