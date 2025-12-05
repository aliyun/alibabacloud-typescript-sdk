// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHostRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint type of the host that you want to create. Valid values:
   * 
   * *   **Public**: public endpoint
   * *   **Private**: internal endpoint
   * 
   * This parameter is required.
   * 
   * @example
   * Public
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The description of the host that you want to create. The value can be up to 500 characters in length.
   * 
   * @example
   * Local Host
   */
  comment?: string;
  /**
   * @remarks
   * The name of the host that you want to create. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * host01
   */
  hostName?: string;
  /**
   * @remarks
   * The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
   * 
   * > This parameter is required if the **ActiveAddressType** parameter is set to **Private**.
   * 
   * @example
   * 192.168.XX.XX
   */
  hostPrivateAddress?: string;
  /**
   * @remarks
   * The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
   * 
   * > This parameter is required if the **ActiveAddressType** parameter is set to **Public**.
   * 
   * @example
   * 172.16.XX.XX
   */
  hostPublicAddress?: string;
  /**
   * @remarks
   * The ID of the bastion host in which you want to create the host.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  instanceMemberId?: number;
  /**
   * @remarks
   * The ID of the region to which the ECS instance or the host in an ApsaraDB MyBase dedicated cluster belongs.
   * 
   * > This parameter is required if the **Source** parameter is set to **Ecs** or **Rds**.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegionId?: string;
  /**
   * @remarks
   * The ID of the network domain to which the host to be imported belongs.
   * 
   * > You can call the [ListNetworkDomains](https://help.aliyun.com/document_detail/2758827.html) operation to query the network domain ID.
   * 
   * @example
   * 1
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The operating system of the host that you want to create. Valid values:
   * 
   * *   **Linux**
   * *   **Windows**
   * 
   * This parameter is required.
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * The region ID of the bastion host to which you want to import the host.
   * 
   * > For information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The source of the host that you want to create. Valid values:
   * 
   * *   **Local**: a host in a data center
   * *   **Ecs**: an Elastic Compute Service (ECS) instance
   * *   **Rds**: a host in an ApsaraDB MyBase dedicated cluster
   * 
   * This parameter is required.
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The ID of the ECS instance or the host in an ApsaraDB MyBase dedicated cluster.
   * 
   * > This parameter is required if the **Source** parameter is set to **Ecs** or **Rds**.
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

