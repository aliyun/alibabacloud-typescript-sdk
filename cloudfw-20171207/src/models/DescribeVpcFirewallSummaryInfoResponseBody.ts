// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallSummaryInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The remaining available quota for VPC firewalls.
   * 
   * @example
   * 4
   */
  availableVpcFirewallQuota?: number;
  /**
   * @remarks
   * The number of VPCs connected through Cloud Enterprise Network (CEN).
   * 
   * @example
   * 7
   */
  cenExpressConnectVpcCount?: number;
  /**
   * @remarks
   * The number of CEN VPCs.
   * 
   * @example
   * 10
   */
  cenFirewallVpcCount?: number;
  /**
   * @remarks
   * The total number of VPCs connected through CEN transit routers.
   * 
   * @example
   * 13
   */
  cenTrVpcCount?: number;
  /**
   * @remarks
   * The number of configured but disabled CEN firewalls.
   * 
   * @example
   * 1
   */
  closedCenFirewallCount?: number;
  /**
   * @remarks
   * The number of configured but disabled Express Connect firewalls.
   * 
   * @example
   * 10
   */
  closedExpressConnectFirewallCount?: number;
  /**
   * @remarks
   * The number of all configured but disabled VPC firewalls.
   * 
   * @example
   * 5
   */
  closedVpcFirewallCount?: number;
  /**
   * @remarks
   * The number of configured CEN Basic Edition firewall instances.
   * 
   * @example
   * 5
   */
  configuredCenFirewallCount?: number;
  /**
   * @remarks
   * The number of configured CEN regions.
   * 
   * @example
   * 2
   */
  configuredCenFirewallRegionCount?: number;
  /**
   * @remarks
   * The number of configured CEN VPCs.
   * 
   * @example
   * 18
   */
  configuredCenFirewallVpcCount?: number;
  /**
   * @remarks
   * The number of configured CEN transit router firewall instances.
   * 
   * @example
   * 2
   */
  configuredCenTrFirewallCount?: number;
  /**
   * @remarks
   * The number of configured Express Connect circuits.
   * 
   * @example
   * 2
   */
  configuredExpressConnectFirewallCount?: number;
  /**
   * @remarks
   * The number of configured Express Connect VPCs.
   * 
   * @example
   * 2
   */
  configuredExpressConnectVpcCount?: number;
  /**
   * @remarks
   * The number of all configured VPC firewalls.
   * 
   * @example
   * 5
   */
  configuredVpcFirewallCount?: number;
  /**
   * @remarks
   * The number of VPCs with firewalls configured.
   * 
   * @example
   * 1
   */
  configuredVpcFirewallVpcCount?: number;
  /**
   * @remarks
   * The number of Express Connect VPCs.
   * 
   * @example
   * 2
   */
  expressConnectVpcCount?: number;
  /**
   * @remarks
   * The number of unconfigured CEN firewalls.
   * 
   * @example
   * 0
   */
  notConfiguredCenFirewallCount?: number;
  /**
   * @remarks
   * The number of unconfigured CEN transit router firewall instances.
   * 
   * @example
   * 6
   */
  notConfiguredCenTrFirewallCount?: number;
  /**
   * @remarks
   * The number of unconfigured Express Connect firewalls.
   * 
   * @example
   * 7
   */
  notConfiguredExpressConnectFirewallCount?: number;
  /**
   * @remarks
   * The number of all unconfigured VPC firewalls.
   * 
   * @example
   * 12
   */
  notConfiguredVpcFirewallCount?: number;
  /**
   * @remarks
   * The number of enabled and active VPC connections.
   * 
   * @example
   * 10
   */
  openedCenExpressConnectVpcCount?: number;
  /**
   * @remarks
   * The number of enabled CEN firewalls.
   * 
   * @example
   * 4
   */
  openedCenFirewallCount?: number;
  /**
   * @remarks
   * The number of VPCs protected by CEN firewalls.
   * 
   * @example
   * 0
   */
  openedCenFirewallVpcCount?: number;
  /**
   * @remarks
   * The number of VPCs protected by CEN transit router firewalls.
   * 
   * @example
   * 4
   */
  openedCenTrFirewallVpcCount?: number;
  /**
   * @remarks
   * The number of CEN Express Connect Router (ECR) instances.
   * 
   * @example
   * 0
   */
  openedEcrCount?: number;
  /**
   * @remarks
   * The number of enabled Express Connect firewalls.
   * 
   * @example
   * 15
   */
  openedExpressConnectFirewallCount?: number;
  /**
   * @remarks
   * The number of VPCs protected by Express Connect firewalls.
   * 
   * @example
   * 2
   */
  openedExpressConnectVpcCount?: number;
  /**
   * @remarks
   * The number of protected inter-region connections through CEN transit routers.
   * 
   * @example
   * 3
   */
  openedPeerTrCount?: number;
  /**
   * @remarks
   * The total number of protected Virtual Border Routers (VBRs) through CEN transit routers.
   * 
   * @example
   * 0
   */
  openedVbrCount?: number;
  /**
   * @remarks
   * The total number of protected VPCs.
   * 
   * @example
   * 17
   */
  openedVpcCount?: number;
  /**
   * @remarks
   * The number of all enabled VPC firewalls.
   * 
   * @example
   * 9
   */
  openedVpcFirewallCount?: number;
  /**
   * @remarks
   * The total number of protected VPN connections through CEN transit routers.
   * 
   * @example
   * 6
   */
  openedVpnCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8AABEF64-7ABF-52CB-BA6C-0598E3DB****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of ECR instances.
   * 
   * @example
   * 2
   */
  totalEcrCount?: number;
  /**
   * @remarks
   * The total number of inter-region connections through CEN transit routers.
   * 
   * @example
   * 6
   */
  totalPeerTrCount?: number;
  /**
   * @remarks
   * The total number of VBRs through CEN transit routers.
   * 
   * @example
   * 5
   */
  totalVbrCount?: number;
  /**
   * @remarks
   * The total number of interconnected VPCs.
   * 
   * @example
   * 2
   */
  totalVpcCount?: number;
  /**
   * @remarks
   * The total VPC firewall quota.
   * 
   * @example
   * 5
   */
  totalVpcFirewallQuota?: number;
  /**
   * @remarks
   * The total number of VPN connections through CEN transit routers.
   * 
   * @example
   * 1
   */
  totalVpnCount?: number;
  static names(): { [key: string]: string } {
    return {
      availableVpcFirewallQuota: 'AvailableVpcFirewallQuota',
      cenExpressConnectVpcCount: 'CenExpressConnectVpcCount',
      cenFirewallVpcCount: 'CenFirewallVpcCount',
      cenTrVpcCount: 'CenTrVpcCount',
      closedCenFirewallCount: 'ClosedCenFirewallCount',
      closedExpressConnectFirewallCount: 'ClosedExpressConnectFirewallCount',
      closedVpcFirewallCount: 'ClosedVpcFirewallCount',
      configuredCenFirewallCount: 'ConfiguredCenFirewallCount',
      configuredCenFirewallRegionCount: 'ConfiguredCenFirewallRegionCount',
      configuredCenFirewallVpcCount: 'ConfiguredCenFirewallVpcCount',
      configuredCenTrFirewallCount: 'ConfiguredCenTrFirewallCount',
      configuredExpressConnectFirewallCount: 'ConfiguredExpressConnectFirewallCount',
      configuredExpressConnectVpcCount: 'ConfiguredExpressConnectVpcCount',
      configuredVpcFirewallCount: 'ConfiguredVpcFirewallCount',
      configuredVpcFirewallVpcCount: 'ConfiguredVpcFirewallVpcCount',
      expressConnectVpcCount: 'ExpressConnectVpcCount',
      notConfiguredCenFirewallCount: 'NotConfiguredCenFirewallCount',
      notConfiguredCenTrFirewallCount: 'NotConfiguredCenTrFirewallCount',
      notConfiguredExpressConnectFirewallCount: 'NotConfiguredExpressConnectFirewallCount',
      notConfiguredVpcFirewallCount: 'NotConfiguredVpcFirewallCount',
      openedCenExpressConnectVpcCount: 'OpenedCenExpressConnectVpcCount',
      openedCenFirewallCount: 'OpenedCenFirewallCount',
      openedCenFirewallVpcCount: 'OpenedCenFirewallVpcCount',
      openedCenTrFirewallVpcCount: 'OpenedCenTrFirewallVpcCount',
      openedEcrCount: 'OpenedEcrCount',
      openedExpressConnectFirewallCount: 'OpenedExpressConnectFirewallCount',
      openedExpressConnectVpcCount: 'OpenedExpressConnectVpcCount',
      openedPeerTrCount: 'OpenedPeerTrCount',
      openedVbrCount: 'OpenedVbrCount',
      openedVpcCount: 'OpenedVpcCount',
      openedVpcFirewallCount: 'OpenedVpcFirewallCount',
      openedVpnCount: 'OpenedVpnCount',
      requestId: 'RequestId',
      totalEcrCount: 'TotalEcrCount',
      totalPeerTrCount: 'TotalPeerTrCount',
      totalVbrCount: 'TotalVbrCount',
      totalVpcCount: 'TotalVpcCount',
      totalVpcFirewallQuota: 'TotalVpcFirewallQuota',
      totalVpnCount: 'TotalVpnCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableVpcFirewallQuota: 'number',
      cenExpressConnectVpcCount: 'number',
      cenFirewallVpcCount: 'number',
      cenTrVpcCount: 'number',
      closedCenFirewallCount: 'number',
      closedExpressConnectFirewallCount: 'number',
      closedVpcFirewallCount: 'number',
      configuredCenFirewallCount: 'number',
      configuredCenFirewallRegionCount: 'number',
      configuredCenFirewallVpcCount: 'number',
      configuredCenTrFirewallCount: 'number',
      configuredExpressConnectFirewallCount: 'number',
      configuredExpressConnectVpcCount: 'number',
      configuredVpcFirewallCount: 'number',
      configuredVpcFirewallVpcCount: 'number',
      expressConnectVpcCount: 'number',
      notConfiguredCenFirewallCount: 'number',
      notConfiguredCenTrFirewallCount: 'number',
      notConfiguredExpressConnectFirewallCount: 'number',
      notConfiguredVpcFirewallCount: 'number',
      openedCenExpressConnectVpcCount: 'number',
      openedCenFirewallCount: 'number',
      openedCenFirewallVpcCount: 'number',
      openedCenTrFirewallVpcCount: 'number',
      openedEcrCount: 'number',
      openedExpressConnectFirewallCount: 'number',
      openedExpressConnectVpcCount: 'number',
      openedPeerTrCount: 'number',
      openedVbrCount: 'number',
      openedVpcCount: 'number',
      openedVpcFirewallCount: 'number',
      openedVpnCount: 'number',
      requestId: 'string',
      totalEcrCount: 'number',
      totalPeerTrCount: 'number',
      totalVbrCount: 'number',
      totalVpcCount: 'number',
      totalVpcFirewallQuota: 'number',
      totalVpnCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

