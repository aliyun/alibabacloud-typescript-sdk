// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigLayer7RuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * ddoscoo-cn-XXXXXX
   */
  instanceIds?: string[];
  /**
   * @example
   * [{"ProxyPorts":[80,8080],"ProxyType":"http"},{"ProxyPorts":[443],"ProxyType":"https"}]rts\\":[443],\\"ProxyType\\":\\"https\\"}]
   */
  proxyTypeList?: string;
  /**
   * @example
   * [{"ProxyPorts":[80,8080],"ProxyType":"http"},{"ProxyPorts":[443],"ProxyType":"https"}]rts\\":[443],\\"ProxyType\\":\\"https\\"}]
   */
  proxyTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.1.1.1
   */
  realServers?: string[];
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceIds: 'InstanceIds',
      proxyTypeList: 'ProxyTypeList',
      proxyTypes: 'ProxyTypes',
      realServers: 'RealServers',
      resourceGroupId: 'ResourceGroupId',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      proxyTypeList: 'string',
      proxyTypes: { 'type': 'array', 'itemType': 'string' },
      realServers: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      rsType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.proxyTypes)) {
      $dara.Model.validateArray(this.proxyTypes);
    }
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

