// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallsV2DetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-37nddhri7jf0d2****
   */
  cenId?: string;
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
   * The ID of the elastic network interface (ENI) of the firewall.
   * 
   * @example
   * eni-uf621u00nafypeex****
   */
  firewallEniId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the ENI of the firewall belongs.
   * 
   * @example
   * vpc-2zeppcci782zeh2bk****
   */
  firewallEniVpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the ENI of the firewall belongs.
   * 
   * @example
   * vsw-uf6ptq1kl1c1d9pw9****
   */
  firewallEniVswitchId?: string;
  /**
   * @remarks
   * The ID of the VPC firewall instance.
   * 
   * @example
   * vfw-tr-9c7c711abdfa4d80****
   */
  firewallId?: string;
  /**
   * @remarks
   * The name of the VPC firewall instance.
   * 
   * @example
   * cloudfirewall-manual
   */
  firewallName?: string;
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
   * The CIDR block of the vSwitch that is automatically created in the firewall VPC to host the ENI of the firewall in automatic mode.
   * 
   * @example
   * 10.0.1.0/24
   */
  firewallSubnetCidr?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * - **opened**: The firewall is enabled.
   * 
   * - **closed**: The firewall is disabled.
   * 
   * - **notconfigured**: The firewall is not configured.
   * 
   * - **configured**: The firewall is configured.
   * 
   * - **creating**: The firewall is being created.
   * 
   * - **opening**: The firewall is being enabled.
   * 
   * - **deleting**: The firewall is being deleted.
   * 
   * > If you do not specify this parameter, VPC firewalls in all states are queried.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The CIDR block of the VPC that is automatically created for the firewall in automatic mode.
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
   * The ID of the request.
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
   * The ID of the transit router attachment.
   * 
   * @example
   * tr-attach-r1llaxxeha71jsm36v
   */
  trAttachmentId?: string;
  /**
   * @remarks
   * The primary CIDR block of the vSwitch that is automatically created in the firewall VPC to connect to the transit router in automatic mode.
   * 
   * @example
   * 10.0.2.0/24
   */
  trAttachmentMasterCidr?: string;
  /**
   * @remarks
   * The primary zone of the vSwitch that is automatically created in the firewall VPC to connect to the transit router in automatic mode.
   * 
   * @example
   * cn-hangzhou-h
   */
  trAttachmentMasterZone?: string;
  /**
   * @remarks
   * The secondary CIDR block of the vSwitch that is automatically created in the firewall VPC to connect to the transit router in automatic mode.
   * 
   * @example
   * 10.0.3.0/24
   */
  trAttachmentSlaveCidr?: string;
  /**
   * @remarks
   * The secondary zone of the vSwitch that is automatically created in the firewall VPC to connect to the transit router in automatic mode.
   * 
   * @example
   * cn-hangzhou-i
   */
  trAttachmentSlaveZone?: string;
  /**
   * @remarks
   * The ID of the transit router instance.
   * 
   * @example
   * tr-wz9y8sgug8b1xb416****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      firewallDescription: 'FirewallDescription',
      firewallEniId: 'FirewallEniId',
      firewallEniVpcId: 'FirewallEniVpcId',
      firewallEniVswitchId: 'FirewallEniVswitchId',
      firewallId: 'FirewallId',
      firewallName: 'FirewallName',
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
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      firewallDescription: 'string',
      firewallEniId: 'string',
      firewallEniVpcId: 'string',
      firewallEniVswitchId: 'string',
      firewallId: 'string',
      firewallName: 'string',
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
      transitRouterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

