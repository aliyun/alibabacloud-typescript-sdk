// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDhcpOptionsSetResponseBodyAssociateVpcs extends $dara.Model {
  /**
   * @remarks
   * The status of the VPC that is associated with the DHCP options set. Valid values:
   * 
   * *   **InUse**: in use
   * *   **Pending**: being configured
   * 
   * @example
   * InUse
   */
  associateStatus?: string;
  /**
   * @remarks
   * The ID of the VPC that is associated with the DHCP options set.
   * 
   * @example
   * vpc-eb3b54r6otues4tjj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      associateStatus: 'AssociateStatus',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateStatus: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDhcpOptionsSetResponseBodyDhcpOptions extends $dara.Model {
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
   * 192.XX.XX.123
   */
  domainNameServers?: string;
  /**
   * @remarks
   * The lease time of the IPv6 addresses for the DHCP options set.
   * 
   * *   If you use hours as the unit, Valid values are **24h to 1176h** and **87600h to 175200h**. Default value: **87600h**.
   * *   If you use days as the unit, Valid values are **1d to 49d** and **3650d to 7300d**. Default value: **3650d**.
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

export class GetDhcpOptionsSetResponseBodyTags extends $dara.Model {
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

export class GetDhcpOptionsSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the virtual private cloud (VPC) that is associated with the DHCP options set.
   */
  associateVpcs?: GetDhcpOptionsSetResponseBodyAssociateVpcs[];
  creationTime?: string;
  /**
   * @remarks
   * The configuration information about the DHCP options set.
   */
  dhcpOptions?: GetDhcpOptionsSetResponseBodyDhcpOptions;
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
   * 283117732402483989
   */
  ownerId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the DHCP options set. Valid values:
   * 
   * *   **Available**: available
   * *   **InUse**: in use
   * *   **Deleted**: deleted
   * *   **Pending**: being configured
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: GetDhcpOptionsSetResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      associateVpcs: 'AssociateVpcs',
      creationTime: 'CreationTime',
      dhcpOptions: 'DhcpOptions',
      dhcpOptionsSetDescription: 'DhcpOptionsSetDescription',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      dhcpOptionsSetName: 'DhcpOptionsSetName',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateVpcs: { 'type': 'array', 'itemType': GetDhcpOptionsSetResponseBodyAssociateVpcs },
      creationTime: 'string',
      dhcpOptions: GetDhcpOptionsSetResponseBodyDhcpOptions,
      dhcpOptionsSetDescription: 'string',
      dhcpOptionsSetId: 'string',
      dhcpOptionsSetName: 'string',
      ownerId: 'number',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetDhcpOptionsSetResponseBodyTags },
    };
  }

  validate() {
    if(Array.isArray(this.associateVpcs)) {
      $dara.Model.validateArray(this.associateVpcs);
    }
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

