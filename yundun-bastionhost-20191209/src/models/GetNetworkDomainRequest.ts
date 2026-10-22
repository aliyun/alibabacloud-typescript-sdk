// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkDomainRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to immediately re-check the proxy server status. Valid values:
   * 
   * - **true**: Immediately re-checks the proxy server status and returns the latest ProxyState/ProxyStateErrorCode.
   * 
   * - **false**: Default value. Does not re-check the proxy server status and directly returns the currently recorded status.
   * 
   * @example
   * false
   */
  checkProxyState?: string;
  /**
   * @remarks
   * The instance ID of the bastion host.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-i7m2btk6g48
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the network domain to query.
   * > You can call the [ListNetworkDomains](https://help.aliyun.com/document_detail/2758827.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  networkDomainId?: string;
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
   * The region ID of the bastion host.
   * 
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      checkProxyState: 'CheckProxyState',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkProxyState: 'string',
      instanceId: 'string',
      networkDomainId: 'string',
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

