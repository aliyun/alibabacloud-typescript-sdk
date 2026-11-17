// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonBandwidthPackagesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * A tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * ValueTest
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

export class DescribeCommonBandwidthPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance.
   * 
   * @example
   * cbwp-2ze2ic1xd2qeqk145****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: sends a check request and does not query instance information. The check items include whether required parameters are specified, the request format, and the instance status. If the check fails, an error is returned. If the check succeeds, `DryRunOperation` is returned.
   * 
   * - **false** (default): sends a normal request. If the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to include inactive subscription data. Valid values:
   * - **false** (default): Does not include inactive subscription data.
   * - **true**: Includes inactive subscription data.
   * 
   * @example
   * false
   */
  includeReservationData?: boolean;
  /**
   * @remarks
   * The name of the Internet Shared Bandwidth instance.
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test123
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the Internet Shared Bandwidth instance. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable Anti-DDoS (Enhanced). Valid values:
   * - **false**: disables Anti-DDoS (Enhanced).
   * - **true**: enables Anti-DDoS (Enhanced).
   * 
   * > **[Deprecated]** This parameter is deprecated.
   * 
   * @example
   * false
   */
  securityProtectionEnabled?: boolean;
  /**
   * @remarks
   * The tags of the Internet Shared Bandwidth instance.
   */
  tag?: DescribeCommonBandwidthPackagesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      dryRun: 'DryRun',
      includeReservationData: 'IncludeReservationData',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityProtectionEnabled: 'SecurityProtectionEnabled',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      dryRun: 'boolean',
      includeReservationData: 'boolean',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityProtectionEnabled: 'boolean',
      tag: { 'type': 'array', 'itemType': DescribeCommonBandwidthPackagesRequestTag },
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

