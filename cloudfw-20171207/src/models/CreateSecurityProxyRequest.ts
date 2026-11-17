// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityProxyRequestNatRouteEntryList extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the default route.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The next hop ID of the original NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-bp1okz6******
   */
  nextHopId?: string;
  /**
   * @remarks
   * The network type of the next hop. Valid values: NatGateway.
   * 
   * This parameter is required.
   * 
   * @example
   * NatGateway
   */
  nextHopType?: string;
  /**
   * @remarks
   * The ID of the route table to which the default route of the NAT gateway belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-2ze1******
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      routeTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityProxyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the basic protection policies of the IPS. If this parameter is not specified, the system default (enabled) is used. Valid values:
   * 
   * - **0**: disabled.
   * - **1**: enabled.
   * 
   * @example
   * 1
   */
  basicDefenseEnabled?: string;
  /**
   * @remarks
   * The deployment mode of the firewall service. Valid values:
   * 
   * - **PrimaryStandby**: primary/secondary mode.
   * - **MultiPrimary**: active-active mode.
   * 
   * @example
   * PrimaryStandby
   */
  firewallServiceMode?: string;
  /**
   * @remarks
   * The list of zone IDs used by the firewall service.
   */
  firewallServiceZones?: string[];
  /**
   * @remarks
   * The security protection switch. Valid values:
   * 
   * - **open**: enabled.
   * - **close**: disabled.
   * 
   * @example
   * close
   */
  firewallSwitch?: string;
  /**
   * @remarks
   * The zone of the firewall vSwitch.
   * 
   * @example
   * cn-beijing-b
   */
  fwVswitchZoneId?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The vSwitch CIDR block of the GWLB endpoint (GWLBe) in the active zone. This parameter applies only to NAT firewalls that use the GWLB architecture. For the GWLB architecture, this parameter is required along with MasterZoneId, StandbyZoneId, and StandbyVSwitchCidr. If any of these parameters is missing, ErrorParameters is returned. The vSwitch is created by the firewall creation node based on this vSwitch CIDR block. This parameter is not read for the ENI architecture.
   * 
   * @example
   * 192.168.0.0/24
   */
  masterVSwitchCidr?: string;
  /**
   * @remarks
   * The ID of the primary zone. This parameter applies only to NAT firewalls that use the GWLB architecture. For the GWLB architecture, this parameter is required along with MasterVSwitchCidr, StandbyZoneId, and StandbyVSwitchCidr. If any of these parameters is missing, ErrorParameters is returned. The value must be the same as the zone where the NAT gateway resides. This parameter is not read for the ENI architecture.
   * 
   * @example
   * cn-hangzhou-h
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-bp1okz6k7******
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The architecture type of the NAT firewall. Valid values: **eni** (traditional ENI architecture) and **gwlb** (new GWLB architecture). If this parameter is omitted or left empty, the firewall is created by using the ENI architecture, and no implicit selection is performed on the server side. You can obtain the recommended architecture from the response of the DescribeNatFirewallArchitecture operation and pass it back when you create the firewall.
   * 
   * @example
   * gwlb
   */
  natMode?: string;
  /**
   * @remarks
   * The list of routes to be switched for the NAT gateway.
   */
  natRouteEntryList?: CreateSecurityProxyRequestNatRouteEntryList[];
  /**
   * @remarks
   * The name of the NAT firewall. The name must be 4 to 50 characters in length and can contain uppercase and lowercase letters, Chinese characters, digits, and underscores (_). It cannot start with an underscore.
   * 
   * This parameter is required.
   * 
   * @example
   * nat-firewall
   */
  proxyName?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * > For more information about the regions supported by Cloud Firewall, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The level of the IPS rule group. This parameter is valid only in block mode. If this parameter is not specified, the system default (medium) is used. Valid values:
   * 
   * - **0**: none. The value is forced to 0 in monitor mode.
   * - **1**: loose.
   * - **2**: medium.
   * - **3**: strict.
   * 
   * @example
   * 2
   */
  ruleClass?: string;
  /**
   * @remarks
   * The IPS defense mode. This parameter is supported only by NAT firewalls that use the GWLB architecture. If this parameter is not specified, the system default (Block Mode) is used. Valid values:
   * 
   * - **0**: monitor mode. Only alerting is triggered, and traffic is not blocked.
   * - **1**: Block Mode.
   * 
   * @example
   * 1
   */
  runMode?: string;
  /**
   * @remarks
   * The vSwitch CIDR block of the GWLBe in the standby zone. This parameter applies only to NAT firewalls that use the GWLB architecture. For the GWLB architecture, this parameter is required along with MasterZoneId, MasterVSwitchCidr, and StandbyZoneId. If any of these parameters is missing, ErrorParameters is returned. The vSwitch is created by the firewall creation node based on this vSwitch CIDR block. This parameter is not read for the ENI architecture.
   * 
   * @example
   * 192.168.1.0/24
   */
  standbyVSwitchCidr?: string;
  /**
   * @remarks
   * The ID of the secondary zone. This parameter applies only to NAT firewalls that use the GWLB architecture. For the GWLB architecture, this parameter is required along with MasterZoneId, MasterVSwitchCidr, and StandbyVSwitchCidr. If any of these parameters is missing, ErrorParameters is returned. The value cannot be the same as MasterZoneId. If they are the same, ErrorZoneIdInvalid is returned. This parameter is not read for the ENI architecture.
   * 
   * @example
   * cn-hangzhou-i
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * Specifies whether to enable strict mode. Valid values:
   * 
   * - **1**: enables strict mode.
   * - **0**: disables strict mode.
   * 
   * @example
   * 0
   */
  strictMode?: number;
  /**
   * @remarks
   * Specifies whether to enable the threat intelligence rules of the IPS. If this parameter is not specified, the system default (enabled) is used. Valid values:
   * 
   * - **0**: disabled.
   * - **1**: enabled.
   * 
   * @example
   * 1
   */
  threatIntelEnabled?: string;
  /**
   * @remarks
   * Specifies whether to enable the Virtual Patches of the IPS. If this parameter is not specified, the system default (enabled) is used. Valid values:
   * 
   * - **0**: disabled.
   * - **1**: enabled.
   * 
   * @example
   * 1
   */
  virtualPatchEnabled?: string;
  /**
   * @remarks
   * The instance ID of the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf6b5lyul0x******
   */
  vpcId?: string;
  /**
   * @remarks
   * Specifies whether to use the automatic mode for the vSwitch. Valid values:
   * 
   * - **true**: automatic mode.
   * - **false**: manual mode.
   * 
   * > Default value: **true**. If VswitchAuto is set to true, VswitchCidr is required and must be a valid CIDR block. If VswitchAuto is set to false, VswitchId is required.
   * 
   * @example
   * true
   */
  vswitchAuto?: string;
  /**
   * @remarks
   * The CIDR block of the vSwitch. This parameter is required when the automatic mode is used for the vSwitch.
   * 
   * @example
   * 0.0.0.0/0
   */
  vswitchCidr?: string;
  /**
   * @remarks
   * The ID of the vSwitch. This parameter is required when the manual mode is used for the vSwitch.
   * 
   * @example
   * vsw-bp1sqg9w******
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      basicDefenseEnabled: 'BasicDefenseEnabled',
      firewallServiceMode: 'FirewallServiceMode',
      firewallServiceZones: 'FirewallServiceZones',
      firewallSwitch: 'FirewallSwitch',
      fwVswitchZoneId: 'FwVswitchZoneId',
      lang: 'Lang',
      masterVSwitchCidr: 'MasterVSwitchCidr',
      masterZoneId: 'MasterZoneId',
      natGatewayId: 'NatGatewayId',
      natMode: 'NatMode',
      natRouteEntryList: 'NatRouteEntryList',
      proxyName: 'ProxyName',
      regionNo: 'RegionNo',
      ruleClass: 'RuleClass',
      runMode: 'RunMode',
      standbyVSwitchCidr: 'StandbyVSwitchCidr',
      standbyZoneId: 'StandbyZoneId',
      strictMode: 'StrictMode',
      threatIntelEnabled: 'ThreatIntelEnabled',
      virtualPatchEnabled: 'VirtualPatchEnabled',
      vpcId: 'VpcId',
      vswitchAuto: 'VswitchAuto',
      vswitchCidr: 'VswitchCidr',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicDefenseEnabled: 'string',
      firewallServiceMode: 'string',
      firewallServiceZones: { 'type': 'array', 'itemType': 'string' },
      firewallSwitch: 'string',
      fwVswitchZoneId: 'string',
      lang: 'string',
      masterVSwitchCidr: 'string',
      masterZoneId: 'string',
      natGatewayId: 'string',
      natMode: 'string',
      natRouteEntryList: { 'type': 'array', 'itemType': CreateSecurityProxyRequestNatRouteEntryList },
      proxyName: 'string',
      regionNo: 'string',
      ruleClass: 'string',
      runMode: 'string',
      standbyVSwitchCidr: 'string',
      standbyZoneId: 'string',
      strictMode: 'number',
      threatIntelEnabled: 'string',
      virtualPatchEnabled: 'string',
      vpcId: 'string',
      vswitchAuto: 'string',
      vswitchCidr: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallServiceZones)) {
      $dara.Model.validateArray(this.firewallServiceZones);
    }
    if(Array.isArray(this.natRouteEntryList)) {
      $dara.Model.validateArray(this.natRouteEntryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

