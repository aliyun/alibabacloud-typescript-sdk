// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHostRequest extends $dara.Model {
  /**
   * @remarks
   * The address type of the host. Valid values:
   * 
   * - **Public**: a public address
   * 
   * - **Private**: a private address
   * 
   * This parameter is required.
   * 
   * @example
   * Public
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The comment for the host. The comment can be up to 500 characters in length.
   * 
   * @example
   * Local Host
   */
  comment?: string;
  /**
   * @remarks
   * The name of the host. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * host01
   */
  hostName?: string;
  /**
   * @remarks
   * The private address of the host. You can use a domain name or an IP address.
   * 
   * > This parameter is required when **ActiveAddressType** is set to **Private**.
   * 
   * @example
   * 192.168.XX.XX
   */
  hostPrivateAddress?: string;
  /**
   * @remarks
   * The public address of the host. You can use a domain name or an IP address.
   * 
   * > This parameter is required when **ActiveAddressType** is set to **Public**.
   * 
   * @example
   * 172.16.XX.XX
   */
  hostPublicAddress?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance where you want to create the host.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the ECS instance belongs.
   * 
   * @example
   * 1605494xxxx
   */
  instanceMemberId?: number;
  /**
   * @remarks
   * The region ID of the ECS instance or the host in the dedicated cluster.
   * 
   * > This parameter is required when **Source** is set to **Ecs** or **Rds**.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegionId?: string;
  /**
   * @remarks
   * The ID of the network domain to which the host belongs.
   * 
   * > Call the [ListNetworkDomains ](https://help.aliyun.com/document_detail/2758827.html)operation to obtain this parameter.
   * 
   * @example
   * 1
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The operating system of the host. Valid values:
   * 
   * - **Linux**
   * 
   * - **Windows**
   * 
   * This parameter is required.
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance where you want to create the host.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The source of the host. Valid values:
   * 
   * - **Local**: a local host
   * 
   * - **Ecs**: an ECS instance
   * 
   * - **Rds**: a host in an ApsaraDB RDS dedicated cluster
   * 
   * This parameter is required.
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The ID of the ECS instance or the host in the dedicated cluster.
   * 
   * > This parameter is required when **Source** is set to **Ecs** or **Rds**.
   * 
   * @example
   * i-dfabfda
   */
  sourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      hostName: 'HostName',
      hostPrivateAddress: 'HostPrivateAddress',
      hostPublicAddress: 'HostPublicAddress',
      instanceId: 'InstanceId',
      instanceMemberId: 'InstanceMemberId',
      instanceRegionId: 'InstanceRegionId',
      networkDomainId: 'NetworkDomainId',
      OSType: 'OSType',
      regionId: 'RegionId',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      hostName: 'string',
      hostPrivateAddress: 'string',
      hostPublicAddress: 'string',
      instanceId: 'string',
      instanceMemberId: 'number',
      instanceRegionId: 'string',
      networkDomainId: 'string',
      OSType: 'string',
      regionId: 'string',
      source: 'string',
      sourceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

