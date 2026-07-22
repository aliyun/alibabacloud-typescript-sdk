// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrFirewallV2Request extends $dara.Model {
  /**
   * @remarks
   * The CEN instance ID. This parameter is required when you invoke this operation.
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
   * vpc-firewall-description
   */
  firewallDescription?: string;
  /**
   * @remarks
   * The name of the Cloud Firewall instance.
   * 
   * @example
   * vpc-firewall-test
   */
  firewallName?: string;
  /**
   * @remarks
   * The subnet CIDR block used to store the firewall ENI in the firewall VPC in automatic mode.
   * 
   * @example
   * 10.0.1.0/24
   */
  firewallSubnetCidr?: string;
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
   * The ID of the VPC in which the firewall ENI is created in manual mode.
   * 
   * @example
   * vpc-wz9r5qvryn0lg3atb****
   */
  firewallVpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in which the firewall ENI is created in manual mode.
   * 
   * @example
   * vsw-uf6ydz3vqj77mr5l6****
   */
  firewallVswitchId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID of the transit router instance. This parameter is required in actual calls.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The routing mode. Valid values:
   * 
   * - **managed**: automatic mode.
   * 
   * - **manual**: manual mode.
   * 
   * > This parameter is required in actual calls. If RouteMode is set to managed (automatic), FirewallVpcCidr, FirewallSubnetCidr, TrAttachmentSlaveCidr, and TrAttachmentMasterCidr are required. If RouteMode is set to manual, FirewallVpcId, FirewallVswitchId, TrAttachmentSlaveZone, and TrAttachmentMasterZone are required. Required parameters vary by mode.
   * 
   * @example
   * managed
   */
  routeMode?: string;
  /**
   * @remarks
   * The primary subnet CIDR block used to connect to the transit router in the firewall VPC in automatic mode.
   * 
   * @example
   * 10.0.3.0/24
   */
  trAttachmentMasterCidr?: string;
  /**
   * @remarks
   * The primary zone of the vSwitch.
   * 
   * @example
   * cn-chengdu-a
   */
  trAttachmentMasterZone?: string;
  /**
   * @remarks
   * The secondary subnet CIDR block used to connect to the transit router in the firewall VPC in automatic mode.
   * 
   * @example
   * 10.0.0.16/28
   */
  trAttachmentSlaveCidr?: string;
  /**
   * @remarks
   * The secondary zone of the vSwitch.
   * 
   * @example
   * cn-chengdu-b
   */
  trAttachmentSlaveZone?: string;
  /**
   * @remarks
   * The transit router instance ID. This parameter is required when you invoke this operation.
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

