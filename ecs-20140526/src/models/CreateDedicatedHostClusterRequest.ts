// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDedicatedHostClusterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the dedicated host cluster. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the dedicated host cluster. Valid values of N: 1 to 20. The tag value cannot be an empty string. The tag value can be up to 64 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dedicated host cluster. The name must be 2 to 128 characters in length and can contain letters, digits, and Unicode characters that are categorized as letter characters. The name can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * Default value: null.
   * 
   * @example
   * myDDHCluster
   */
  dedicatedHostClusterName?: string;
  /**
   * @remarks
   * The description of the dedicated host cluster. The description must be 2 to 256 characters in length. The description cannot start with `http://` or `https://`.
   * 
   * Default value: null.
   * 
   * @example
   * This-is-my-DDHCluster
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - true: sends a check request without querying resource status. The system checks the request for potential issues, including invalid AccessKey pairs, the authorization status of the Resource Access Management (RAM) user, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - false: sends a Normal request. If the request passes the check, a 2XX HTTP status code is returned and the resource status is queried.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the dedicated host cluster. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the dedicated host cluster belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateDedicatedHostClusterRequestTag[];
  /**
   * @remarks
   * The zone ID of the dedicated host cluster. You can call [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to query the zones in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostClusterName: 'DedicatedHostClusterName',
      description: 'Description',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostClusterName: 'string',
      description: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateDedicatedHostClusterRequestTag },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

