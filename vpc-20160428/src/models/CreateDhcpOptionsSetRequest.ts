// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDhcpOptionsSetRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
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

export class CreateDhcpOptionsSetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the DHCP options set. 
   * 
   * The description can be empty or 1 to 256 characters in length. It must start with a letter or Chinese character and cannot start with `http://` or `https://`.
   * 
   * @example
   * description
   */
  dhcpOptionsSetDescription?: string;
  /**
   * @remarks
   * The name of the DHCP options set.
   * 
   * The name must be 1 to 128 characters in length and must start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
   * 
   * @example
   * name
   */
  dhcpOptionsSetName?: string;
  /**
   * @remarks
   * The hostname suffix. Example: example.com.
   * 
   * After the DHCP options set is used to associate VPC, the hostname suffix is automatically synchronized to the ECS instances in the VPC.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The IP addresses of DNS servers. You can specify up to four DNS server IP addresses. Separate multiple IP addresses with commas (,).
   * 
   * >If you do not specify DNS server IP addresses, ECS instances use the DNS server IP addresses provided by Alibaba Cloud (100.100.2.136 and 100.100.2.138) by default.
   * 
   * @example
   * 192.XX.XX.123
   */
  domainNameServers?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * **false** (default): performs a dry run and sends the request. If the request passes the dry run, an HTTP 2xx status code is returned and the DHCP options set is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The lease time of the IPv6 DHCP options set.
   * 
   * - If the lease time is in hours, the unit is h. Valid values: **24h to 1176h** and **87600h to 175200h**. Default value: **24h**.
   * 
   * - If the lease time is in days, the unit is d. Valid values: **1d to 49d** and **3650d to 7300d**. Default value: **1d**.
   * 
   * > You must include the unit when specifying the value.
   * 
   * @example
   * 3650d
   */
  ipv6LeaseTime?: string;
  /**
   * @remarks
   * The lease time of the IPv4 DHCP options set.
   * 
   * - If the lease time is in hours, the unit is h. Valid values: **24h to 1176h** and **87600h to 175200h**. Default value: **87600h**.
   * 
   * - If the lease time is in days, the unit is d. Valid values: **1d to 49d** and **3650d to 7300d**. Default value: **3650d**.
   * 
   * > You must include the unit when specifying the value.
   * 
   * @example
   * 3650d
   */
  leaseTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region in which the DHCP options set resides.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the DHCP options set belongs.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: CreateDhcpOptionsSetRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dhcpOptionsSetDescription: 'DhcpOptionsSetDescription',
      dhcpOptionsSetName: 'DhcpOptionsSetName',
      domainName: 'DomainName',
      domainNameServers: 'DomainNameServers',
      dryRun: 'DryRun',
      ipv6LeaseTime: 'Ipv6LeaseTime',
      leaseTime: 'LeaseTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dhcpOptionsSetDescription: 'string',
      dhcpOptionsSetName: 'string',
      domainName: 'string',
      domainNameServers: 'string',
      dryRun: 'boolean',
      ipv6LeaseTime: 'string',
      leaseTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateDhcpOptionsSetRequestTag },
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

