// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHostRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the host. The description can be up to 500 characters in length.
   * 
   * @example
   * Host for test.
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the host.
   * 
   * > You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to query the ID of the host.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * The new name of the host. The name can be up to 128 characters.
   * 
   * @example
   * TestHost
   */
  hostName?: string;
  /**
   * @remarks
   * The new internal endpoint of the host. You can set this parameter to a domain name or an IP address.
   * 
   * @example
   * 193.168.XX.XX
   */
  hostPrivateAddress?: string;
  /**
   * @remarks
   * The new public endpoint of the host. You can set this parameter to a domain name or an IP address.
   * 
   * @example
   * 200.1.XX.XX
   */
  hostPublicAddress?: string;
  /**
   * @remarks
   * The ID of the bastion host on which you want to modify the information about the host.
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
   * @remarks
   * The ID of the new network domain to which the host belongs.
   * 
   * > You can call the [ListNetworkDomains](https://help.aliyun.com/document_detail/2758827.html) operation to query the network domain ID.
   * 
   * @example
   * 1
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The new operating system of the host. Valid values:
   * 
   * *   **Linux**
   * *   **Windows**
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * The preferred key exchange algorithm of the host. If you set OSType to Linux, you can modify this parameter. Valid values:
   * 
   * *   **default**
   * *   **diffie-hellman-group1-sha1**
   * *   **diffie-hellman-group14-sha1**
   * *   **diffie-hellman-group-exchange-sha1**
   * 
   * @example
   * default
   */
  prefKex?: string;
  /**
   * @remarks
   * The region ID of the bastion host on which you want to modify the information about the host.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      hostId: 'HostId',
      hostName: 'HostName',
      hostPrivateAddress: 'HostPrivateAddress',
      hostPublicAddress: 'HostPublicAddress',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      OSType: 'OSType',
      prefKex: 'PrefKex',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      hostId: 'string',
      hostName: 'string',
      hostPrivateAddress: 'string',
      hostPublicAddress: 'string',
      instanceId: 'string',
      networkDomainId: 'string',
      OSType: 'string',
      prefKex: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

