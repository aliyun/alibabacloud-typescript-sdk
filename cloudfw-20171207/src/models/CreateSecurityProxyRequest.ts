// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSecurityProxyRequestNatRouteEntryList } from "./CreateSecurityProxyRequestNatRouteEntryList";


export class CreateSecurityProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the NAT firewall. Valid values:
   * 
   * *   **open**: enabled
   * *   **close**: disabled
   * 
   * @example
   * close
   */
  firewallSwitch?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-bp1okz6k7s4n4mnk5f1g3
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The routes to be switched to the NAT gateway.
   * 
   * This parameter is required.
   */
  natRouteEntryList?: CreateSecurityProxyRequestNatRouteEntryList[];
  /**
   * @remarks
   * The name of the NAT firewall. The name must be 4 to 50 characters in length, and can contain letters, digits, and underscores (_). However, it cannot start with an underscore.
   * 
   * This parameter is required.
   * 
   * @example
   * nat-idmp-fir
   */
  proxyName?: string;
  /**
   * @remarks
   * The region ID of the virtual private cloud (VPC).
   * 
   * >  For more information about Cloud Firewall supported regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * Specifies whether to enable the strict mode. Valid values:
   * 
   * *   1: yes
   * *   0: no
   * 
   * @example
   * 0
   */
  strictMode?: number;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf6b5lyul0xfgv74i01ph
   */
  vpcId?: string;
  /**
   * @remarks
   * The mode of the vSwitch that you want to use. Valid values:
   * 
   * *   **true**: automatic
   * *   **false**: manual
   * 
   * @example
   * true
   */
  vswitchAuto?: string;
  /**
   * @remarks
   * The CIDR block of the vSwitch.
   * 
   * @example
   * 0.0.0.0/0
   */
  vswitchCidr?: string;
  /**
   * @remarks
   * The ID of the vSwitch. This parameter is required if you set the VswitchAuto parameter to true.
   * 
   * @example
   * vsw-bp1sqg9wms9w9y1uxcs1x
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallSwitch: 'FirewallSwitch',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      natRouteEntryList: 'NatRouteEntryList',
      proxyName: 'ProxyName',
      regionNo: 'RegionNo',
      strictMode: 'StrictMode',
      vpcId: 'VpcId',
      vswitchAuto: 'VswitchAuto',
      vswitchCidr: 'VswitchCidr',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallSwitch: 'string',
      lang: 'string',
      natGatewayId: 'string',
      natRouteEntryList: { 'type': 'array', 'itemType': CreateSecurityProxyRequestNatRouteEntryList },
      proxyName: 'string',
      regionNo: 'string',
      strictMode: 'number',
      vpcId: 'string',
      vswitchAuto: 'string',
      vswitchCidr: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.natRouteEntryList)) {
      $dara.Model.validateArray(this.natRouteEntryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

