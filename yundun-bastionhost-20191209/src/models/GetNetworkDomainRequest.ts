// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkDomainRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to immediately recheck the status of the proxy server. Valid values:
   * 
   * - **true**: Immediately rechecks the status of the proxy server and returns the latest ProxyState and ProxyStateErrorCode.
   * 
   * - **false**: (Default) Returns the currently recorded status without rechecking the proxy server.
   * 
   * @example
   * false
   */
  checkProxyState?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to get this parameter.
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
   * 
   * > Call the [ListNetworkDomains](https://help.aliyun.com/document_detail/2758827.html) operation to get this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * > For more information about region IDs, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkProxyState: 'string',
      instanceId: 'string',
      networkDomainId: 'string',
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

