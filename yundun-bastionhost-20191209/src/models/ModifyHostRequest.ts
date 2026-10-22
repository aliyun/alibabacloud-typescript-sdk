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
   * The ID of the host to be updated.
   * > You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to query the host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * The new name of the host. The name can be up to 128 characters in length.
   * 
   * @example
   * TestHost
   */
  hostName?: string;
  /**
   * @remarks
   * The new private network address of the host. You can specify a domain name or an IP address.
   * 
   * @example
   * 193.168.XX.XX
   */
  hostPrivateAddress?: string;
  /**
   * @remarks
   * The new public address of the host. You can specify a domain name or an IP address.
   * 
   * @example
   * 200.1.XX.XX
   */
  hostPublicAddress?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance to which the host belongs.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the network domain to which the host belongs.
   * > You can call the [ListNetworkDomains](https://help.aliyun.com/document_detail/2758827.html) operation to query the network domain ID.
   * 
   * @example
   * 1
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The new operating system type of the host. Valid values:
   * - **Linux**
   * - **Windows**
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * The preferred key exchange algorithm for the host. You can modify this parameter only when the OSType parameter is set to Linux. Valid values: 
   * - **default**: Default mode.
   * - **diffie-hellman-group1-sha1**: Compatibility mode for the diffie-hellman-group1-sha1 algorithm.
   * - **diffie-hellman-group14-sha1**: Compatibility mode for the diffie-hellman-group14-sha1 algorithm.
   * - **diffie-hellman-group-exchange-sha1**: Compatibility mode for the diffie-hellman-group-exchange-sha1 algorithm.
   * 
   * @example
   * default
   */
  prefKex?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance to which the host belongs.
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
      projectId: 'ProjectId',
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
      projectId: 'number',
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

