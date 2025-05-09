// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrFirewallV2Request extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-4xbjup276au29r****
   */
  cenId?: string;
  /**
   * @remarks
   * The description of the firewall.
   * 
   * @example
   * vfw-sz
   */
  firewallDescription?: string;
  /**
   * @remarks
   * The name of the firewall.
   * 
   * @example
   * cfw_test2
   */
  firewallName?: string;
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
   * The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode.
   * 
   * @example
   * 10.0.0.0/16
   */
  firewallVpcCidr?: string;
  /**
   * @remarks
   * The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode.
   * 
   * @example
   * vpc-wz9r5qvryn0lg3atb****
   */
  firewallVpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch that is used to create the ENI in manual mode.
   * 
   * @example
   * vsw-uf6ydz3vqj77mr5l6****
   */
  firewallVswitchId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID of the route router.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
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
   * 10.0.3.0/24
   */
  trAttachmentMasterCidr?: string;
  /**
   * @remarks
   * The primary zone for the vSwitch.
   * 
   * @example
   * cn-chengdu-a
   */
  trAttachmentMasterZone?: string;
  /**
   * @remarks
   * The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
   * 
   * @example
   * 10.0.0.16/28
   */
  trAttachmentSlaveCidr?: string;
  /**
   * @remarks
   * The secondary zone for the vSwitch.
   * 
   * @example
   * cn-chengdu-b
   */
  trAttachmentSlaveZone?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-m5etmb2q7e0mxcur****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      firewallDescription: 'FirewallDescription',
      firewallName: 'FirewallName',
      firewallSubnetCidr: 'FirewallSubnetCidr',
      firewallVpcCidr: 'FirewallVpcCidr',
      firewallVpcId: 'FirewallVpcId',
      firewallVswitchId: 'FirewallVswitchId',
      lang: 'Lang',
      regionNo: 'RegionNo',
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
      firewallName: 'string',
      firewallSubnetCidr: 'string',
      firewallVpcCidr: 'string',
      firewallVpcId: 'string',
      firewallVswitchId: 'string',
      lang: 'string',
      regionNo: 'string',
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

