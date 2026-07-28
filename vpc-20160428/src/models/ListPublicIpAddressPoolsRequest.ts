// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicIpAddressPoolsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
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

export class ListPublicIpAddressPoolsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without querying available IP address pool information. The system checks whether the required parameters are specified, whether the request format is valid, and whether business restrictions are met. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - **false** (default): performs a dry run and sends the request. If the check succeeds, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * - **BGP** (default): BGP (multi-ISP) line.
   * 
   * - **BGP_PRO**: BGP (multi-ISP) Pro line.
   * 
   * For more information about BGP (multi-ISP) lines and BGP (multi-ISP) Pro lines, see [EIP line types](https://help.aliyun.com/document_detail/32321.html).
   * 
   * If you are a whitelist user of single-ISP bandwidth, you can also select the following types:
   * - **ChinaTelecom**: China Telecom
   * - **ChinaUnicom**: China Unicom
   * - **ChinaMobile**: China Mobile
   * - **ChinaTelecom_L2**: China Telecom L2
   * - **ChinaUnicom_L2**: China Unicom L2
   * - **ChinaMobile_L2**: China Mobile L2
   * 
   * If you are a China (Hangzhou) Finance Cloud user, this field is required. Set the value to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  isp?: string;
  /**
   * @remarks
   * The maximum number of entries to return in this request. Valid values: **10** to **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the IP address pool instance.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * AddressPoolName
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - You do not need to specify this parameter for the first request or if no subsequent request is to be sent.
   * - If a subsequent request is to be sent, set the value to the NextToken value returned in the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The list of IP address pool instance IDs.
   * 
   * You can specify up to 100 IP address pool instance IDs.
   */
  publicIpAddressPoolIds?: string[];
  /**
   * @remarks
   * The region ID of the IP address pool that you want to query.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IP address pool belongs.
   * 
   * @example
   * rg-acfmxazb4pcdvf****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable Anti-DDoS (Enhanced). Valid values:
   * - **false**: disabled.
   * - **true**: enabled.
   * 
   * @example
   * true
   */
  securityProtectionEnabled?: boolean;
  /**
   * @remarks
   * The instance status of the IPAM pool. Valid values:
   * - **Created**: active.
   * - **Deleting**: being deleted.
   * - **Modifying**: being modified.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListPublicIpAddressPoolsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      isp: 'Isp',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      publicIpAddressPoolIds: 'PublicIpAddressPoolIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityProtectionEnabled: 'SecurityProtectionEnabled',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      isp: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      publicIpAddressPoolIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityProtectionEnabled: 'boolean',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListPublicIpAddressPoolsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.publicIpAddressPoolIds)) {
      $dara.Model.validateArray(this.publicIpAddressPoolIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

