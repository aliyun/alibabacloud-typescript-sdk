// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkDomainRequestProxies extends $dara.Model {
  /**
   * @remarks
   * The address of the proxy server.
   * 
   * @example
   * ``47.104.**.**``
   */
  address?: string;
  /**
   * @remarks
   * The node type of the proxy server. Valid values:
   * 
   * - Master: primary proxy server.
   * - Slave: secondary proxy server.
   * 
   * @example
   * Master
   */
  nodeType?: string;
  /**
   * @remarks
   * The Base64-encoded password of the proxy server account.
   * 
   * @example
   * UWdi******Ng==
   */
  password?: string;
  /**
   * @remarks
   * The Server Port of the proxy server.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The proxy type. Valid values:
   * - SSHProxy: SSH proxy.
   * - HTTPProxy: HTTP proxy.
   * - Socks5Proxy: SOCKS proxy.
   * 
   * @example
   * SSHProxy
   */
  proxyType?: string;
  /**
   * @remarks
   * The account of the proxy server.
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
   * The description of the network domain. The description can be up to 500 characters in length.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance for which you want to create a network domain.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-lbj3bw4ma02
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the network domain to create. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * SSH Proxy
   */
  networkDomainName?: string;
  /**
   * @remarks
   * The type of the network domain to create. Valid values:
   * - Direct: direct connection. Bastionhost is directly connected to the asset network without an intermediate proxy server.
   * - Proxy: proxy connection. If the network where the assets reside is not connected to the Bastionhost network, you can use a proxy server to forward network requests and manage assets in different network environments.
   * 
   * This parameter is required.
   * 
   * @example
   * Proxy
   */
  networkDomainType?: string;
  /**
   * @remarks
   * The project ID.
   */
  projectId?: number;
  /**
   * @remarks
   * The proxy server information.
   */
  proxies?: CreateNetworkDomainRequestProxies[];
  /**
   * @remarks
   * The region ID of the Bastionhost instance for which you want to create a network domain.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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
      projectId: 'ProjectId',
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
      projectId: 'number',
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

