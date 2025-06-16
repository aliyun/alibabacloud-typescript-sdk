// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDhcpOptionsSetAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Enter a description for the DHCP options set.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`. You can also leave the description empty.
   * 
   * @example
   * description
   */
  dhcpOptionsSetDescription?: string;
  /**
   * @remarks
   * The ID of the DHCP options set.
   * 
   * This parameter is required.
   * 
   * @example
   * dopt-o6w0df4epg9zo8isy****
   */
  dhcpOptionsSetId?: string;
  /**
   * @remarks
   * The name of the DHCP options set.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
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
   * >  If you do not specify a DNS server IP address, Elastic Compute Service (ECS) instances use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
   * 
   * @example
   * 192.XX.XX.123
   */
  domainNameServers?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * **true**: performs a dry run. The system checks the required parameters, request format, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
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
   * >  If you specify a value, you must also specify the unit.
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
   * >  If you specify a value, you must also specify the unit.
   * 
   * @example
   * 3650d
   */
  leaseTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the DHCP options set is deployed. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dhcpOptionsSetDescription: 'DhcpOptionsSetDescription',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      dhcpOptionsSetName: 'DhcpOptionsSetName',
      domainName: 'DomainName',
      domainNameServers: 'DomainNameServers',
      dryRun: 'DryRun',
      ipv6LeaseTime: 'Ipv6LeaseTime',
      leaseTime: 'LeaseTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dhcpOptionsSetDescription: 'string',
      dhcpOptionsSetId: 'string',
      dhcpOptionsSetName: 'string',
      domainName: 'string',
      domainNameServers: 'string',
      dryRun: 'boolean',
      ipv6LeaseTime: 'string',
      leaseTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

