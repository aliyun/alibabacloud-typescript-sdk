// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyNetworkDomainRequestProxies } from "./ModifyNetworkDomainRequestProxies";


export class ModifyNetworkDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The new remarks of the network domain.
   * 
   * @example
   * xxx
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the bastion host to which the network domain to modify belongs.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-x0r3hyr3f09
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the network domain to modify.
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
   * The new connection mode of the network domain. Valid values:
   * 
   * *   **Direct**
   * *   **Proxy**
   * 
   * @example
   * Proxy
   */
  networkDomainType?: string;
  /**
   * @remarks
   * The information about the proxy servers in the network domain.
   */
  proxies?: ModifyNetworkDomainRequestProxies[];
  /**
   * @remarks
   * The region ID of the bastion host to which the network domain to modify belongs.
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
      networkDomainId: 'NetworkDomainId',
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
      networkDomainId: 'string',
      networkDomainName: 'string',
      networkDomainType: 'string',
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

