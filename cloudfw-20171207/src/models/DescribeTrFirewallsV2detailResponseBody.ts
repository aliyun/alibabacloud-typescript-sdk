// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallsV2DetailResponseBodyTrAttachmentZones extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the vSwitch for the transit router connection.
   * 
   * @example
   * 10.0.2.0/24
   */
  vSwitchCidr?: string;
  /**
   * @remarks
   * The zone ID of the vSwitch for the transit router connection.
   * 
   * @example
   * cn-hangzhou-h
   */
  vSwitchZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchCidr: 'VSwitchCidr',
      vSwitchZoneId: 'VSwitchZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchCidr: 'string',
      vSwitchZoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2DetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Cloud Enterprise Network (CEN).
   * 
   * @example
   * cen-37nddhri7jf0d2****
   */
  cenId?: string;
  /**
   * @remarks
   * The zone ID used by the firewall connection.
   * 
   * @example
   * cn-hangzhou-h
   */
  firewallAttachmentZone?: string;
  /**
   * @remarks
   * The description of the firewall.
   * 
   * @example
   * vpc-firewall-description
   */
  firewallDescription?: string;
  /**
   * @remarks
   * The ENI ID of the firewall.
   * 
   * @example
   * eni-uf621u00nafypeex****
   */
  firewallEniId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the firewall ENI belongs.
   * 
   * @example
   * vpc-2zeppcci782zeh2bk****
   */
  firewallEniVpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the firewall ENI belongs.
   * 
   * @example
   * vsw-uf6ptq1kl1c1d9pw9****
   */
  firewallEniVswitchId?: string;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewalls.
   * 
   * @example
   * vfw-tr-9c7c711abdfa4d80****
   */
  firewallId?: string;
  /**
   * @remarks
   * The name of the virtual private cloud (VPC) firewalls instance.
   * 
   * @example
   * cloudfirewall-manual
   */
  firewallName?: string;
  /**
   * @remarks
   * The deployment mode of the TR firewall service. Valid values: **PrimaryStandby** (active/standby mode) and **MultiPrimary** (active-active mode).
   * 
   * @example
   * PrimaryStandby
   */
  firewallServiceMode?: string;
  /**
   * @remarks
   * The list of zone IDs used by the TR firewall service.
   */
  firewallServiceZones?: string[];
  /**
   * @remarks
   * The status of the firewall. Valid values:
   * 
   * - Creating: The firewall is being created.
   * 
   * - Deleting: The firewall is being deleted.
   * 
   * - Ready: The firewall is ready.
   * 
   * @example
   * Ready
   */
  firewallStatus?: string;
  /**
   * @remarks
   * The subnet CIDR block that hosts the firewall ENI in the firewall VPC in automatic mode.
   * 
   * @example
   * 10.0.1.0/24
   */
  firewallSubnetCidr?: string;
  /**
   * @remarks
   * The status of the virtual private cloud (VPC) firewalls. Valid values:
   * 
   * - **opened**: enabled
   * 
   * - **closed**: disabled
   * 
   * - **notconfigured**: The VPC firewall is not configured.
   * 
   * - **configured**: The VPC firewall is configured.
   * 
   * - **creating**: The VPC firewall is being created.
   * 
   * - **opening**: The VPC firewall is being enabled.
   * 
   * - **deleting**: The VPC firewall is being deleted.
   * 
   * 
   * > If this parameter is not specified, virtual private cloud (VPC) firewalls in all states are queried.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The CIDR block of the firewall VPC in automatic mode.
   * 
   * @example
   * 10.0.0.0/16
   */
  firewallVpcCidr?: string;
  /**
   * @remarks
   * The region ID of the transit router instance.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E53A7FB-3EB9-5E33-8E50-B8F417D1E02B
   */
  requestId?: string;
  /**
   * @remarks
   * The routing mode. Valid values:
   * 
   * - **managed**: automatic mode
   * 
   * - **manual**: manual mode
   * 
   * @example
   * managed
   */
  routeMode?: string;
  /**
   * @remarks
   * The attachment ID used to connect to the transit router in the firewall VPC in automatic mode.
   * 
   * @example
   * tr-attach-r1llaxxeha71jsm36v
   */
  trAttachmentId?: string;
  /**
   * @remarks
   * The primary subnet CIDR block used to connect to the transit router in the firewall VPC in automatic mode.
   * 
   * @example
   * 10.0.2.0/24
   * 
   * @deprecated
   */
  trAttachmentMasterCidr?: string;
  /**
   * @remarks
   * The primary zone used to connect to the transit router in the firewall VPC in automatic mode.
   * 
   * @example
   * cn-hangzhou-h
   * 
   * @deprecated
   */
  trAttachmentMasterZone?: string;
  /**
   * @remarks
   * The secondary subnet CIDR block used to connect to the transit router in the firewall VPC in automatic mode.
   * 
   * @example
   * 10.0.3.0/24
   * 
   * @deprecated
   */
  trAttachmentSlaveCidr?: string;
  /**
   * @remarks
   * The secondary zone used to connect to the transit router in the firewall VPC in automatic mode.
   * 
   * @example
   * cn-hangzhou-i
   * 
   * @deprecated
   */
  trAttachmentSlaveZone?: string;
  /**
   * @remarks
   * The list of zones and vSwitch CIDR blocks for the transit router connection.
   */
  trAttachmentZones?: DescribeTrFirewallsV2DetailResponseBodyTrAttachmentZones[];
  /**
   * @remarks
   * The instance ID of the transit router.
   * 
   * @example
   * tr-wz9y8sgug8b1xb416****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      firewallAttachmentZone: 'FirewallAttachmentZone',
      firewallDescription: 'FirewallDescription',
      firewallEniId: 'FirewallEniId',
      firewallEniVpcId: 'FirewallEniVpcId',
      firewallEniVswitchId: 'FirewallEniVswitchId',
      firewallId: 'FirewallId',
      firewallName: 'FirewallName',
      firewallServiceMode: 'FirewallServiceMode',
      firewallServiceZones: 'FirewallServiceZones',
      firewallStatus: 'FirewallStatus',
      firewallSubnetCidr: 'FirewallSubnetCidr',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      firewallVpcCidr: 'FirewallVpcCidr',
      regionNo: 'RegionNo',
      requestId: 'RequestId',
      routeMode: 'RouteMode',
      trAttachmentId: 'TrAttachmentId',
      trAttachmentMasterCidr: 'TrAttachmentMasterCidr',
      trAttachmentMasterZone: 'TrAttachmentMasterZone',
      trAttachmentSlaveCidr: 'TrAttachmentSlaveCidr',
      trAttachmentSlaveZone: 'TrAttachmentSlaveZone',
      trAttachmentZones: 'TrAttachmentZones',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      firewallAttachmentZone: 'string',
      firewallDescription: 'string',
      firewallEniId: 'string',
      firewallEniVpcId: 'string',
      firewallEniVswitchId: 'string',
      firewallId: 'string',
      firewallName: 'string',
      firewallServiceMode: 'string',
      firewallServiceZones: { 'type': 'array', 'itemType': 'string' },
      firewallStatus: 'string',
      firewallSubnetCidr: 'string',
      firewallSwitchStatus: 'string',
      firewallVpcCidr: 'string',
      regionNo: 'string',
      requestId: 'string',
      routeMode: 'string',
      trAttachmentId: 'string',
      trAttachmentMasterCidr: 'string',
      trAttachmentMasterZone: 'string',
      trAttachmentSlaveCidr: 'string',
      trAttachmentSlaveZone: 'string',
      trAttachmentZones: { 'type': 'array', 'itemType': DescribeTrFirewallsV2DetailResponseBodyTrAttachmentZones },
      transitRouterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallServiceZones)) {
      $dara.Model.validateArray(this.firewallServiceZones);
    }
    if(Array.isArray(this.trAttachmentZones)) {
      $dara.Model.validateArray(this.trAttachmentZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

