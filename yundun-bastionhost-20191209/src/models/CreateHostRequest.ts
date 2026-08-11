// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHostRequest extends $dara.Model {
  /**
   * @remarks
   * The address type of the host to create. Valid values:
   * - **Public**: public address.
   * - **Private**: private network address.
   * 
   * This parameter is required.
   * 
   * @example
   * Public
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The description of the host. The description can be up to 500 characters in length.
   * 
   * @example
   * Local Host
   */
  comment?: string;
  /**
   * @remarks
   * The name of the host to create. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * host01
   */
  hostName?: string;
  /**
   * @remarks
   * The private network address of the host to create. You can specify a domain name or an IP address.
   * > This parameter is required if **ActiveAddressType** is set to **Private**.
   * 
   * @example
   * 192.168.XX.XX
   */
  hostPrivateAddress?: string;
  /**
   * @remarks
   * The public address of the host to create. You can specify a domain name or an IP address.
   * > This parameter is required if **ActiveAddressType** is set to **Public**.
   * 
   * @example
   * 172.16.XX.XX
   */
  hostPublicAddress?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance where you want to create the host.
   * > You can call [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) to query the instance ID.
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
   * The region ID of the ECS instance or dedicated cluster host.  
   * > This parameter is required if **Source** is set to **Ecs** or **Rds**.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegionId?: string;
  /**
   * @remarks
   * The ID of the network domain to which the host to create belongs.
   * > You can call [ListNetworkDomains](https://help.aliyun.com/document_detail/2758827.html) to query the network domain ID.
   * 
   * @example
   * 1
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The operating system of the host to create. Valid values:
   * - **Linux**
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
   * The project ID.
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance where you want to create the host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The source of the host to create. Valid values:
   * - **Local**: on-premises host.
   * - **Ecs**: ECS instance.
   * - **Rds**: ApsaraDB RDS dedicated cluster host.
   * 
   * This parameter is required.
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The instance ID of the ECS instance or dedicated cluster host.  
   * > This parameter is required if **Source** is set to **Ecs** or **Rds**.
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
      projectId: 'ProjectId',
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
      projectId: 'number',
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

