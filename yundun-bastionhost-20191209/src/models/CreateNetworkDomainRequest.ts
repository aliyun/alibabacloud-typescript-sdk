// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetworkDomainRequestProxies } from "./CreateNetworkDomainRequestProxies";


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

