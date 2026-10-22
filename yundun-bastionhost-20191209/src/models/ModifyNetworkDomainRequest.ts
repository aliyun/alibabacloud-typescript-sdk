// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNetworkDomainRequestProxies extends $dara.Model {
  /**
   * @remarks
   * The new address of the proxy server.
   * 
   * @example
   * 114.21**.**
   */
  address?: string;
  /**
   * @remarks
   * The type of the proxy server node to be modified. Valid values:
   * 
   * - **Master**: Primary proxy server.
   * - **Slave**: Secondary proxy server.
   * 
   * @example
   * Slave
   */
  nodeType?: string;
  /**
   * @remarks
   * The new password of the proxy server account.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * The new Server Port of the proxy server.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The new proxy type. Valid values:
   * 
   * - **SSHProxy**: SSH proxy.
   * - **HTTPProxy**: HTTP proxy.
   * - **Socks5Proxy**: SOCKS5 proxy.
   * 
   * @example
   * HTTPProxy
   */
  proxyType?: string;
  /**
   * @remarks
   * The new username of the proxy server.
   * 
   * @example
   * test
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

export class ModifyNetworkDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the network domain.
   * 
   * @example
   * xxx
   */
  comment?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance to which the network domain to be modified belongs.
   * 
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the parameter value.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-x0r3hyr3f09
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the network domain to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The new name of the network domain.
   * 
   * @example
   * test
   */
  networkDomainName?: string;
  /**
   * @remarks
   * The new type of the network domain. Valid values:
   * 
   * - **Direct**: Direct connection.
   * - **Proxy**: Proxy.
   * 
   * @example
   * Proxy
   */
  networkDomainType?: string;
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
   * The information about the proxy servers in the network domain.
   */
  proxies?: ModifyNetworkDomainRequestProxies[];
  /**
   * @remarks
   * The region ID of the Bastionhost instance to which the network domain to be modified belongs.
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
      networkDomainId: 'NetworkDomainId',
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
      networkDomainId: 'string',
      networkDomainName: 'string',
      networkDomainType: 'string',
      projectId: 'number',
      proxies: { 'type': 'array', 'itemType': ModifyNetworkDomainRequestProxies },
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

