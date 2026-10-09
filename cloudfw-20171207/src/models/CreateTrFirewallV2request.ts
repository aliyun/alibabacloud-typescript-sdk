// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrFirewallV2Request extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance. Create a CEN instance in the CEN console first and make sure that an Enterprise Edition transit router has been created.
   * 
   * > Note: Although this parameter is marked as not required in the schema, it is actually required. If this parameter is not specified, the ErrorParameters (400) error is returned.
   * 
   * @example
   * cen-4xbjup276au29r****
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
   * The name of the Cloud Firewall instance.
   * 
   * @example
   * vpc-firewall-test
   */
  firewallName?: string;
  /**
   * @remarks
   * The deployment mode of the firewall service. Valid values:
   * 
   * - **PrimaryStandby**: Primary/standby mode.
   * - **MultiPrimary**: Active-active mode.
   * 
   * > If this parameter is not specified, the system automatically selects a deployment mode based on the capabilities of the transit router. If an invalid value is specified, the ErrorFwServiceMode (-360437) error is returned. The MultiPrimary mode does not support specifying zones.
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
   * The subnet CIDR block used to store the firewall elastic network interface (ENI) in the firewall VPC in automatic mode.
   * 
   * @example
   * 10.0.1.0/24
   * 
   * @deprecated
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
   * The language of the response. Valid values:
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
   * The region ID of the Enterprise Edition transit router.
   * 
   * > Note: Although this parameter is marked as not required in the schema, it is actually required. If this parameter is not specified, the ErrorParameters (400) error is returned.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The routing mode. Valid values: managed (automatic mode) and manual (manual mode). In managed mode, only FirewallVpcCidr is required. The FirewallSubnetCidr, TrAttachmentSlaveCidr, and TrAttachmentMasterCidr parameters are deprecated and do not need to be specified. In manual mode, specify FirewallVpcId, FirewallVswitchId, TrAttachmentSlaveZone, and TrAttachmentMasterZone.
   * 
   * > Note: Although this parameter is marked as not required in the schema, it is actually required. If this parameter is not specified, the ErrorParameters (400) error is returned.
   * 
   * @example
   * managed
   */
  routeMode?: string;
  /**
   * @remarks
   * The primary subnet CIDR block used to connect to the TR in the firewall VPC in automatic mode.
   * 
   * @example
   * 10.0.3.0/24
   * 
   * @deprecated
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
   * The secondary subnet CIDR block used to connect to the TR in the firewall VPC in automatic mode.
   * 
   * @example
   * 10.0.0.16/28
   * 
   * @deprecated
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
   * The list of zone IDs used by the TR connection.
   */
  trAttachmentZones?: string[];
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router instance. The transit router must belong to the CEN instance specified by CenId.
   * 
   * > Note: Although this parameter is marked as not required in the schema, it is actually required. If this parameter is not specified, the ErrorParameters (400) error is returned.
   * 
   * @example
   * tr-m5etmb2q7e0mxcur****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      firewallAttachmentZone: 'FirewallAttachmentZone',
      firewallDescription: 'FirewallDescription',
      firewallName: 'FirewallName',
      firewallServiceMode: 'FirewallServiceMode',
      firewallServiceZones: 'FirewallServiceZones',
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
      trAttachmentZones: 'TrAttachmentZones',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      firewallAttachmentZone: 'string',
      firewallDescription: 'string',
      firewallName: 'string',
      firewallServiceMode: 'string',
      firewallServiceZones: { 'type': 'array', 'itemType': 'string' },
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
      trAttachmentZones: { 'type': 'array', 'itemType': 'string' },
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

