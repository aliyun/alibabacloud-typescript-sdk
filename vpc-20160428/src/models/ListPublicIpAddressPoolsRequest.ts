// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicIpAddressPoolsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key to add to the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value to add to the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
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
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * *   **BGP** (default): BGP (Multi-ISP) line
   * *   **BGP_PRO**: BGP (Multi-ISP) Pro line
   * 
   * For more information about the BGP (Multi-ISP) line and BGP (Multi-ISP) Pro line, see the "Line types" section of [What is EIP?](https://help.aliyun.com/document_detail/32321.html)
   * 
   * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
   * 
   * *   **ChinaTelecom**
   * *   **ChinaUnicom**
   * *   **ChinaMobile**
   * *   **ChinaTelecom_L2**
   * *   **ChinaUnicom_L2**
   * *   **ChinaMobile_L2**
   * 
   * If your services are deployed in China East 1 Finance, this parameter is required and you must set the parameter to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  isp?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: **10** to **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the IP address pool.
   * 
   * If you enter a name, the name must be 1 to 128 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * AddressPoolName
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IDs of the IP address pool.
   * 
   * You can enter up to 100 IDs.
   */
  publicIpAddressPoolIds?: string[];
  /**
   * @remarks
   * The ID of the region in which the IP address pool that you want to query resides.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * Specifies whether to enable Anti-DDoS Pro/Premium. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  securityProtectionEnabled?: boolean;
  /**
   * @remarks
   * The status of the IP address pool. Valid values:
   * 
   * *   **Created**
   * *   **Deleting**
   * *   **Modifying**
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The tags to add to the resource.
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

