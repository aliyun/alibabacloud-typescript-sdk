// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDhcpOptionsSetRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be at most 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the DHCP options set.
   * 
   * The description must be 1 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * description
   */
  dhcpOptionsSetDescription?: string;
  /**
   * @remarks
   * The name of the DHCP options set.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * name
   */
  dhcpOptionsSetName?: string;
  /**
   * @remarks
   * The root domain. For example, you can set the value to example.com.
   * 
   * After a DHCP options set is associated with a virtual private cloud (VPC), the root domain in the DHCP options set is automatically synchronized with the ECS instances in the VPC.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The IP address of the DNS server. You can enter at most four DNS server IP addresses. Separate IP addresses with commas (,).
   * 
   * >  If no IP address is specified, the Elastic Compute Service (ECS) instance uses the IP addresses 100.100.2.136 and 100.100.2.138, which are provided by Alibaba Cloud by default.
   * 
   * @example
   * 192.XX.XX.123
   */
  domainNameServers?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request.
   * 
   * **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * **false** (default): performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The lease time of the IPv6 addresses for the DHCP options set.
   * 
   * *   If you use hours as the unit, valid values are **24h to 1176h** and **87600h to 175200h**. Default value: **87600h**.
   * *   If you use days as the unit, valid values are **1d to 49d** and **3650d to 7300d**. Default value: **3650d**.
   * 
   * >  When you enter a value, you must also specify the unit.
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
   * >  When you enter a value, you must also specify the unit.
   * 
   * @example
   * 3650d
   */
  leaseTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region to which the DHCP options set belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * The tag of the resource.
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

