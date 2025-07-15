// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicIpAddressPoolsResponseBodyPublicIpAddressPoolListTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
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
   * The service type of the IP address pool.
   * 
   * *   **CloudBox** Only cloud box users can select this type.
   * *   **Default** (default)
   * 
   * @example
   * CloudBox
   */
  bizType?: string;
  /**
   * @remarks
   * The status of the IP address pool.
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The time when the IP address pool was created. The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format.
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
   * Indicates whether idle IP addresses exist.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  ipAddressRemaining?: boolean;
  /**
   * @remarks
   * The line type.
   * 
   * *   **BGP**: BGP (Multi-ISP)
   * *   **BGP_PRO**: BGP (Multi-ISP) Pro
   * 
   * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see [EIP line types](https://help.aliyun.com/document_detail/32321.html).
   * 
   * If you are allowed to use single-ISP bandwidth, one of the following values may be returned:
   * 
   * *   **ChinaTelecom**
   * *   **ChinaUnicom**
   * *   **ChinaMobile**
   * *   **ChinaTelecom_L2**
   * *   **ChinaUnicom_L2**
   * *   **ChinaMobile_L2**
   * 
   * If your services are deployed in China East 1 Finance, **BGP_FinanceCloud** is returned.
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
   * 121012345612****
   */
  ownerId?: number;
  /**
   * @remarks
   * The ID of the IP address pool.
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
   * The edition of Anti-DDoS.
   * 
   * *   If you do not set this parameter, Anti-DDoS Origin Basic is used.
   * *   If the value is set to **AntiDDoS_Enhanced**, Anti-DDoS Pro/Premium is used.
   */
  securityProtectionTypes?: string[];
  /**
   * @remarks
   * The sharing type of the IP address pool.
   * 
   * *   If **Shared** is returned, the IP address pool is shared.
   * *   If an empty value is returned, the IP address pool is not shared.
   * 
   * @example
   * Shared
   */
  shareType?: string;
  /**
   * @remarks
   * The status of the IP address pool.
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
   * The tag list.
   */
  tags?: ListPublicIpAddressPoolsResponseBodyPublicIpAddressPoolListTags[];
  /**
   * @remarks
   * The total number of available IP addresses in the public IP address pool.
   * 
   * @example
   * 100
   */
  totalIpNum?: number;
  /**
   * @remarks
   * The number of used IP addresses in the public IP address pool.
   * 
   * @example
   * 20
   */
  usedIpNum?: number;
  /**
   * @remarks
   * The user type. Valid values:
   * 
   * *   **admin**: An administrator can delete, modify, and query IP address pools, and can assign elastic IP addresses (EIPs) to the pool.
   * *   **user**: A user can only assign EIPs to the IP address pool and query the IP address pool, but cannot modify or delete the IP address pool.
   * 
   * @example
   * admin
   */
  userType?: string;
  /**
   * @remarks
   * The zone of the IP address pool. This parameter is returned only when the service type of the IP address pool is CloudBox.
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
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is used to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The IP address pools.
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
   * The total number of entries returned.
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

