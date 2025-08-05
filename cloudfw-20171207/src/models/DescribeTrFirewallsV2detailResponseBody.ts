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
   * The description of the VPC firewall.
   * 
   * @example
   * VPC Firewall
   */
  firewallDescription?: string;
  /**
   * @remarks
   * The ID of the Elastic Network Interface (ENI) with which the VPC firewall is associated.
   * 
   * @example
   * eni-uf621u00nafypeex****
   */
  firewallEniId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the ENI is attached.
   * 
   * @example
   * vpc-2zeppcci782zeh2bk****
   */
  firewallEniVpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the ENI is associated.
   * 
   * @example
   * vsw-uf6ptq1kl1c1d9pw9****
   */
  firewallEniVswitchId?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-9c7c711abdfa4d80****
   */
  firewallId?: string;
  /**
   * @remarks
   * The name of the VPC firewall.
   * 
   * @example
   * cloudfirewall-manual
   */
  firewallName?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   Creating
   * *   Deleting
   * *   Ready
   * 
   * @example
   * Ready
   */
  firewallStatus?: string;
  /**
   * @remarks
   * The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode.
   * 
   * @example
   * 10.0.1.0/24
   */
  firewallSubnetCidr?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   **opened**: The VPC firewall is enabled.
   * *   **closed**: The VPC firewall is disabled.
   * *   **notconfigured**: The VPC firewall is not created.
   * *   **configured**: The VPC firewall is created but is not enabled.
   * *   **creating**: The VPC firewall is being created.
   * *   **opening**: The VPC firewall is being enabled.
   * *   **deleting**: The VPC firewall is being deleted.
   * 
   * > If you do not specify this parameter, VPC firewalls in all states are queried.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode.
   * 
   * @example
   * 10.0.0.0/16
   */
  firewallVpcCidr?: string;
  /**
   * @remarks
   * The region ID of the transit router.
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
   * The routing mode of the VPC firewall. Valid values:
   * 
   * *   **managed**: automatic mode
   * *   **manual**: manual mode
   * 
   * @example
   * managed
   */
  routeMode?: string;
  /**
   * @remarks
   * The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
   * 
   * @example
   * 10.0.2.0/24
   */
  trAttachmentMasterCidr?: string;
  /**
   * @remarks
   * In automatic mode, the primary availability zone of the subnet in the firewall VPC used for connecting to TR.
   * 
   * @example
   * cn-hangzhou-h
   */
  trAttachmentMasterZone?: string;
  /**
   * @remarks
   * The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
   * 
   * @example
   * 10.0.3.0/24
   */
  trAttachmentSlaveCidr?: string;
  /**
   * @remarks
   * In automatic mode, the backup availability zone for the subnet used to connect TR in the firewall VPC.
   * 
   * @example
   * cn-hangzhou-i
   */
  trAttachmentSlaveZone?: string;
  /**
   * @remarks
   * The ID of the transit router.
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

