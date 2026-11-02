// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicIpAddressPoolsResponseBodyPublicIpAddressPoolListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * FinanceDept
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

export class ListPublicIpAddressPoolsResponseBodyPublicIpAddressPoolList extends $dara.Model {
  /**
   * @remarks
   * The business type of the IP address pool. Valid values:
   * - **CloudBox**: CloudBox. This type is supported only for CloudBox users.
   * - **Default** (default): Default. This indicates a non-special type.
   * 
   * @example
   * CloudBox
   */
  bizType?: string;
  /**
   * @remarks
   * The business status of the IP address pool. Valid values:
   * 
   * - **Normal**: Normal.
   * - **FinancialLocked**: Locked.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The creation time. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-05-10T01:37:38Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the IP address pool.
   * 
   * @example
   * AddressPoolDescription
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether idle IP addresses are available. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  ipAddressRemaining?: boolean;
  /**
   * @remarks
   * The line type.
   * 
   * - **BGP**: BGP (Multi-ISP) line.
   * 
   * - **BGP_PRO**: BGP (Multi-ISP) Pro line.
   * 
   * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro lines, see [EIP line types](https://help.aliyun.com/document_detail/32321.html).
   * 
   * If you are a single-ISP bandwidth whitelist user, the following types may also be returned:
   * - **ChinaTelecom**: China Telecom
   * - **ChinaUnicom**: China Unicom
   * - **ChinaMobile**: China Mobile
   * - **ChinaTelecom_L2**: China Telecom L2
   * - **ChinaUnicom_L2**: China Unicom L2
   * - **ChinaMobile_L2**: China Mobile L2
   * 
   * If you are an Alibaba Finance Cloud user in the China (Hangzhou) region, **BGP_FinanceCloud** is returned.
   * 
   * @example
   * BGP
   */
  isp?: string;
  /**
   * @remarks
   * The name of the IP address pool.
   * 
   * @example
   * AddressPoolName
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account to which the IP address pool belongs.
   * 
   * @example
   * 121012345612*****
   */
  ownerId?: number;
  /**
   * @remarks
   * The instance ID of the IP address pool.
   * 
   * @example
   * pippool-6wetvn6fumkgycssx****
   */
  publicIpAddressPoolId?: string;
  /**
   * @remarks
   * The region ID of the IP address pool.
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
  /**
   * @remarks
   * The security protection level.
   * 
   * - If this parameter is empty, Anti-DDoS Basic is used by default.
   * 
   * - If this parameter is set to **AntiDDoS_Enhanced**, Anti-DDoS (Enhanced) is used.
   */
  securityProtectionTypes?: string[];
  /**
   * @remarks
   * The sharing type of the IP address pool. Valid values:
   * 
   * - **Shared**: The IP address pool is shared.
   * - Empty: The IP address pool is not shared.
   * 
   * @example
   * Shared
   */
  shareType?: string;
  /**
   * @remarks
   * The instance status of the IP address pool. Valid values:
   * - **Created**: available.
   * - **Deleting**: delete in progress.
   * - **Modifying**: modify in progress.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListPublicIpAddressPoolsResponseBodyPublicIpAddressPoolListTags[];
  /**
   * @remarks
   * The total number of available IP addresses in the IP address pool.
   * 
   * @example
   * 100
   */
  totalIpNum?: number;
  /**
   * @remarks
   * The number of used IP addresses in the IP address pool.
   * 
   * @example
   * 20
   */
  usedIpNum?: number;
  /**
   * @remarks
   * The user type. Valid values:
   * - **admin**: administrator. Administrators can delete, modify, and query IP address pools, and allocate Elastic IP Addresses (EIPs) to IP address pools.
   * - **user**: regular user. Regular users can only allocate EIPs to IP address pools and query IP address pools. They cannot modify or delete IP address pools.
   * 
   * @example
   * admin
   */
  userType?: string;
  /**
   * @remarks
   * The zone of the IP address pool.
   * This parameter is returned only when the business type of the IP address pool is CloudBox.
   */
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      businessStatus: 'BusinessStatus',
      creationTime: 'CreationTime',
      description: 'Description',
      ipAddressRemaining: 'IpAddressRemaining',
      isp: 'Isp',
      name: 'Name',
      ownerId: 'OwnerId',
      publicIpAddressPoolId: 'PublicIpAddressPoolId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityProtectionTypes: 'SecurityProtectionTypes',
      shareType: 'ShareType',
      status: 'Status',
      tags: 'Tags',
      totalIpNum: 'TotalIpNum',
      usedIpNum: 'UsedIpNum',
      userType: 'UserType',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      businessStatus: 'string',
      creationTime: 'string',
      description: 'string',
      ipAddressRemaining: 'boolean',
      isp: 'string',
      name: 'string',
      ownerId: 'number',
      publicIpAddressPoolId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityProtectionTypes: { 'type': 'array', 'itemType': 'string' },
      shareType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListPublicIpAddressPoolsResponseBodyPublicIpAddressPoolListTags },
      totalIpNum: 'number',
      usedIpNum: 'number',
      userType: 'string',
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityProtectionTypes)) {
      $dara.Model.validateArray(this.securityProtectionTypes);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicIpAddressPoolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used to retrieve the next page of results. Valid values:
   * - If **NextToken** is empty, no subsequent page exists.
   * - If **NextToken** is returned, the value indicates the token used to start the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of IP address pools.
   */
  publicIpAddressPoolList?: ListPublicIpAddressPoolsResponseBodyPublicIpAddressPoolList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned for the current request.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      publicIpAddressPoolList: 'PublicIpAddressPoolList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      publicIpAddressPoolList: { 'type': 'array', 'itemType': ListPublicIpAddressPoolsResponseBodyPublicIpAddressPoolList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.publicIpAddressPoolList)) {
      $dara.Model.validateArray(this.publicIpAddressPoolList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

