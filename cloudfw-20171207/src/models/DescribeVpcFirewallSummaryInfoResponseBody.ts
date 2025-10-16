// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallSummaryInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 4
   */
  availableVpcFirewallQuota?: number;
  /**
   * @example
   * 7
   */
  cenExpressConnectVpcCount?: number;
  /**
   * @example
   * 10
   */
  cenFirewallVpcCount?: number;
  /**
   * @example
   * 13
   */
  cenTrVpcCount?: number;
  /**
   * @example
   * 1
   */
  closedCenFirewallCount?: number;
  /**
   * @example
   * 10
   */
  closedExpressConnectFirewallCount?: number;
  /**
   * @example
   * 5
   */
  closedVpcFirewallCount?: number;
  /**
   * @example
   * 5
   */
  configuredCenFirewallCount?: number;
  /**
   * @example
   * 2
   */
  configuredCenFirewallRegionCount?: number;
  /**
   * @example
   * 18
   */
  configuredCenFirewallVpcCount?: number;
  /**
   * @example
   * 2
   */
  configuredCenTrFirewallCount?: number;
  /**
   * @example
   * 2
   */
  configuredExpressConnectFirewallCount?: number;
  /**
   * @example
   * 2
   */
  configuredExpressConnectVpcCount?: number;
  /**
   * @example
   * 5
   */
  configuredVpcFirewallCount?: number;
  /**
   * @example
   * 1
   */
  configuredVpcFirewallVpcCount?: number;
  /**
   * @example
   * 2
   */
  expressConnectVpcCount?: number;
  /**
   * @example
   * 0
   */
  notConfiguredCenFirewallCount?: number;
  /**
   * @example
   * 6
   */
  notConfiguredCenTrFirewallCount?: number;
  /**
   * @example
   * 7
   */
  notConfiguredExpressConnectFirewallCount?: number;
  /**
   * @example
   * 12
   */
  notConfiguredVpcFirewallCount?: number;
  /**
   * @example
   * 10
   */
  openedCenExpressConnectVpcCount?: number;
  /**
   * @example
   * 4
   */
  openedCenFirewallCount?: number;
  /**
   * @example
   * 0
   */
  openedCenFirewallVpcCount?: number;
  /**
   * @example
   * 4
   */
  openedCenTrFirewallVpcCount?: number;
  /**
   * @example
   * 0
   */
  openedEcrCount?: number;
  /**
   * @example
   * 15
   */
  openedExpressConnectFirewallCount?: number;
  /**
   * @example
   * 2
   */
  openedExpressConnectVpcCount?: number;
  /**
   * @example
   * 3
   */
  openedPeerTrCount?: number;
  /**
   * @example
   * 0
   */
  openedVbrCount?: number;
  /**
   * @example
   * 17
   */
  openedVpcCount?: number;
  /**
   * @example
   * 9
   */
  openedVpcFirewallCount?: number;
  /**
   * @example
   * 6
   */
  openedVpnCount?: number;
  /**
   * @example
   * 8AABEF64-7ABF-52CB-BA6C-0598E3DB****
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalEcrCount?: number;
  /**
   * @example
   * 6
   */
  totalPeerTrCount?: number;
  /**
   * @example
   * 5
   */
  totalVbrCount?: number;
  /**
   * @example
   * 2
   */
  totalVpcCount?: number;
  /**
   * @example
   * 5
   */
  totalVpcFirewallQuota?: number;
  /**
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

