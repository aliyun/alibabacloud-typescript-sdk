// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDhcpOptionsSetAttributeRequest extends $dara.Model {
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
   * The description can be empty or 2 to 256 characters in length. It must start with a letter or Chinese character and cannot start with `http://` or `https://`.
   * 
   * @example
   * description
   */
  dhcpOptionsSetDescription?: string;
  /**
   * @remarks
   * The ID of the DHCP options set to modify.
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
   * The name must be 2 to 128 characters in length and must start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
   * 
   * @example
   * name
   */
  dhcpOptionsSetName?: string;
  /**
   * @remarks
   * The hostname suffix, such as example.com.
   * 
   * After you attach the DHCP options set to an associate VPC, the hostname suffix is automatically synchronized to ECS instances in the VPC.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The IP addresses of DNS servers. You can specify up to four DNS server IP addresses, separated by commas (,).
   * 
   * >If you do not specify any DNS server IP addresses, ECS instances use the DNS server IP addresses provided by Alibaba Cloud (100.100.2.136 and 100.100.2.138) by default.
   * 
   * @example
   * 192.XX.XX.123
   */
  domainNameServers?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * **true**: performs a dry run without modifying the DHCP options set configuration. The system checks the required parameters, request format, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * **false** (default): performs a dry run and sends the request. If the request passes the dry run, an HTTP 2xx status code is returned and the DHCP options set configuration is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The lease time of the IPv6 DHCP options set.
   * 
   * - If the lease time is set in hours, the unit is h. Valid values: **24h to 1176h** and **87600h to 175200h**. Default value: **24h**.
   * 
   * - If the lease time is set in days, the unit is d. Valid values: **1d to 49d** and **3650d to 7300d**. Default value: **1d**.
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
   * - If the lease time is set in hours, the unit is h. Valid values: **24h to 1176h** and **87600h to 175200h**. Default value: **87600h**.
   * 
   * - If the lease time is set in days, the unit is d. Valid values: **1d to 49d** and **3650d to 7300d**. Default value: **3650d**.
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
   * The region ID of the DHCP options set to modify. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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

