// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsDhcpOptions extends $dara.Model {
  /**
   * @remarks
   * The suffix of the hostname.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The IP address of the DNS server.
   * 
   * @example
   * 192.168.XX.XX
   */
  domainNameServers?: string;
  /**
   * @remarks
   * The lease time of the IPv6 DHCP options set.
   * 
   * *   If you use hours as the unit, Unit: h. Valid values are **24h to 1176h** and **87600h to 175200h**. Default value: **24h**.
   * 
   * *   If you use days as the unit, Unit: d. Valid values are **1d to 49d** and **3650d to 7300d**. Default value: **1d**.
   * 
   * @example
   * 3650d
   */
  ipv6LeaseTime?: string;
  /**
   * @remarks
   * The lease time of the IPv4 addresses for the DHCP options set.
   * 
   * *   If you use hours as the unit, valid values are **24h to 1176h** and **87600h to 175200h**. Default value: **87600h**.
   * *   If you use days as the unit, valid values are **1d to 49d** and **3650d to 7300d**. Default value: **3650d**.
   * 
   * @example
   * 3650d
   */
  leaseTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainNameServers: 'DomainNameServers',
      ipv6LeaseTime: 'Ipv6LeaseTime',
      leaseTime: 'LeaseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainNameServers: 'string',
      ipv6LeaseTime: 'string',
      leaseTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N added to the resource.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N added to the resource.
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

export class ListDhcpOptionsSetsResponseBodyDhcpOptionsSets extends $dara.Model {
  /**
   * @remarks
   * The number of VPCs with which the DHCP options set is associated.
   * 
   * @example
   * 2
   */
  associateVpcCount?: number;
  /**
   * @remarks
   * The creation time of the DHCP options sets.
   * 
   * @example
   * 2025-08-21 ***
   */
  creationTime?: string;
  /**
   * @remarks
   * The details of DHCP options.
   */
  dhcpOptions?: ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsDhcpOptions;
  /**
   * @remarks
   * The description of the DHCP options set.
   * 
   * @example
   * test
   */
  dhcpOptionsSetDescription?: string;
  /**
   * @remarks
   * The ID of the DHCP options set.
   * 
   * @example
   * dopt-o6w0df4epg9zo8isy****
   */
  dhcpOptionsSetId?: string;
  /**
   * @remarks
   * The name of the DHCP options set.
   * 
   * @example
   * test
   */
  dhcpOptionsSetName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the DHCP options set belongs.
   * 
   * @example
   * 253460731706911258
   */
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group to which the DHCP options set belongs.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the DHCP options set. Valid values:
   * 
   * *   **Available**
   * *   **InUse**
   * *   **Pending**
   * *   **Deleted**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsTags[];
  static names(): { [key: string]: string } {
    return {
      associateVpcCount: 'AssociateVpcCount',
      creationTime: 'CreationTime',
      dhcpOptions: 'DhcpOptions',
      dhcpOptionsSetDescription: 'DhcpOptionsSetDescription',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      dhcpOptionsSetName: 'DhcpOptionsSetName',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateVpcCount: 'number',
      creationTime: 'string',
      dhcpOptions: ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsDhcpOptions,
      dhcpOptionsSetDescription: 'string',
      dhcpOptionsSetId: 'string',
      dhcpOptionsSetName: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsTags },
    };
  }

  validate() {
    if(this.dhcpOptions && typeof (this.dhcpOptions as any).validate === 'function') {
      (this.dhcpOptions as any).validate();
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

export class ListDhcpOptionsSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the DHCP options sets.
   */
  dhcpOptionsSets?: ListDhcpOptionsSetsResponseBodyDhcpOptionsSets[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is used to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd********
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      dhcpOptionsSets: 'DhcpOptionsSets',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dhcpOptionsSets: { 'type': 'array', 'itemType': ListDhcpOptionsSetsResponseBodyDhcpOptionsSets },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dhcpOptionsSets)) {
      $dara.Model.validateArray(this.dhcpOptionsSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

