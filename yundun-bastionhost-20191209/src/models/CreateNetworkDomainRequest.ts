// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkDomainRequestProxies extends $dara.Model {
  /**
   * @remarks
   * The IP address of the proxy server.
   * 
   * @example
   * ``47.104.**.**``
   */
  address?: string;
  /**
   * @remarks
   * The node type of the proxy server. Valid values:
   * 
   * - **Master**: primary proxy server.
   * - **Slave**: secondary proxy server.
   * 
   * @example
   * Master
   */
  nodeType?: string;
  /**
   * @remarks
   * The Base64-encoded password of the proxy server.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * The port of the proxy server.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The proxy type. Valid values:
   * 
   * - **SSHProxy**
   * - **HTTPProxy**
   * - **Socks5Proxy**
   * 
   * @example
   * SSHProxy
   */
  proxyType?: string;
  /**
   * @remarks
   * The username of the proxy server.
   * 
   * @example
   * root
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      nodeType: 'NodeType',
      password: 'Password',
      port: 'Port',
      proxyType: 'ProxyType',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      nodeType: 'string',
      password: 'string',
      port: 'number',
      proxyType: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks of the network domain. The remarks can be up to 500 characters in length.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the bastion host for which you want to create a network domain.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-lbj3bw4ma02
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the network domain that you want to create. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   */
  networkDomainName?: string;
  /**
   * @remarks
   * The connection mode of the network domain to be created. Valid values:
   * 
   * *   Direct
   * *   Proxy
   * 
   * This parameter is required.
   * 
   * @example
   * Proxy
   */
  networkDomainType?: string;
  /**
   * @remarks
   * The information about the proxy servers.
   */
  proxies?: CreateNetworkDomainRequestProxies[];
  /**
   * @remarks
   * The region ID of the bastion host for which you want to create a network domain.
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
      instanceId: 'InstanceId',
      networkDomainName: 'NetworkDomainName',
      networkDomainType: 'NetworkDomainType',
      proxies: 'Proxies',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceId: 'string',
      networkDomainName: 'string',
      networkDomainType: 'string',
      proxies: { 'type': 'array', 'itemType': CreateNetworkDomainRequestProxies },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.proxies)) {
      $dara.Model.validateArray(this.proxies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

