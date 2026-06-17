// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallSummaryInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The remaining quota for VPC firewalls.
   * 
   * @example
   * 4
   */
  availableVpcFirewallQuota?: number;
  /**
   * @remarks
   * The number of VPCs connected using Cloud Enterprise Network (CEN) and Express Connect.
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
   * The number of VPCs on the CEN transit router.
   * 
   * @example
   * 13
   */
  cenTrVpcCount?: number;
  /**
   * @remarks
   * The number of configured CEN firewalls that are disabled.
   * 
   * @example
   * 1
   */
  closedCenFirewallCount?: number;
  /**
   * @remarks
   * The number of configured Express Connect firewalls that are disabled.
   * 
   * @example
   * 10
   */
  closedExpressConnectFirewallCount?: number;
  /**
   * @remarks
   * The number of configured VPC firewalls that are disabled.
   * 
   * @example
   * 5
   */
  closedVpcFirewallCount?: number;
  /**
   * @remarks
   * The number of configured CEN firewall instances of the Basic Edition.
   * 
   * @example
   * 5
   */
  configuredCenFirewallCount?: number;
  /**
   * @remarks
   * The number of regions where CEN firewalls are configured.
   * 
   * @example
   * 2
   */
  configuredCenFirewallRegionCount?: number;
  /**
   * @remarks
   * The number of VPCs for which CEN firewalls are configured.
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
   * The number of VPCs for which Express Connect firewalls are configured.
   * 
   * @example
   * 2
   */
  configuredExpressConnectVpcCount?: number;
  /**
   * @remarks
   * The number of configured VPC firewalls.
   * 
   * @example
   * 5
   */
  configuredVpcFirewallCount?: number;
  /**
   * @remarks
   * The number of VPCs for which VPC firewalls are configured.
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
   * The number of CEN firewalls that are not configured.
   * 
   * @example
   * 0
   */
  notConfiguredCenFirewallCount?: number;
  /**
   * @remarks
   * The number of CEN transit router firewall instances that are not configured.
   * 
   * @example
   * 6
   */
  notConfiguredCenTrFirewallCount?: number;
  /**
   * @remarks
   * The number of Express Connect firewalls that are not configured.
   * 
   * @example
   * 7
   */
  notConfiguredExpressConnectFirewallCount?: number;
  /**
   * @remarks
   * The number of VPC firewalls that are not configured.
   * 
   * @example
   * 12
   */
  notConfiguredVpcFirewallCount?: number;
  /**
   * @remarks
   * The number of VPCs that are connected using CEN and Express Connect and have the firewall enabled.
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
   * The number of VPCs protected by the CEN transit router firewall.
   * 
   * @example
   * 4
   */
  openedCenTrFirewallVpcCount?: number;
  /**
   * @remarks
   * The number of enabled CEN Express Connect Routers (ECRs).
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
   * The number of inter-region connections protected by the CEN transit router firewall.
   * 
   * @example
   * 3
   */
  openedPeerTrCount?: number;
  /**
   * @remarks
   * The number of Virtual Border Routers (VBRs) protected by the CEN transit router firewall.
   * 
   * @example
   * 0
   */
  openedVbrCount?: number;
  /**
   * @remarks
   * The number of protected VPCs.
   * 
   * @example
   * 17
   */
  openedVpcCount?: number;
  /**
   * @remarks
   * The number of enabled VPC firewalls.
   * 
   * @example
   * 9
   */
  openedVpcFirewallCount?: number;
  /**
   * @remarks
   * The number of VPN gateways protected by the CEN transit router firewall.
   * 
   * @example
   * 6
   */
  openedVpnCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8AABEF64-7ABF-52CB-BA6C-0598E3DB****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of ECRs.
   * 
   * @example
   * 2
   */
  totalEcrCount?: number;
  /**
   * @remarks
   * The number of inter-region connections on the CEN transit router.
   * 
   * @example
   * 6
   */
  totalPeerTrCount?: number;
  /**
   * @remarks
   * The number of VBRs on the CEN transit router.
   * 
   * @example
   * 5
   */
  totalVbrCount?: number;
  /**
   * @remarks
   * The number of interconnected VPCs.
   * 
   * @example
   * 2
   */
  totalVpcCount?: number;
  /**
   * @remarks
   * The total quota for VPC firewalls.
   * 
   * @example
   * 5
   */
  totalVpcFirewallQuota?: number;
  /**
   * @remarks
   * The number of VPN gateways on the CEN transit router.
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

