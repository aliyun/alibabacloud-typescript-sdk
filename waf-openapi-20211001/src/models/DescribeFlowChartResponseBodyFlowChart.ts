// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowChartResponseBodyFlowChart extends $dara.Model {
  /**
   * @remarks
   * The number of requests that are blocked by custom access control list (ACL) rules.
   * 
   * @example
   * 0
   */
  aclCustomBlockSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored by custom ACL rules.
   * 
   * @example
   * 0
   */
  aclCustomReportsSum?: number;
  /**
   * @remarks
   * The number of requests that are blocked by scan protection rules.
   * 
   * @example
   * 0
   */
  antiScanBlockSum?: number;
  /**
   * @remarks
   * The number of requests that are blocked by bot management rules.
   * 
   * @example
   * 0
   */
  antibotBlockSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored by bot management rules.
   * 
   * @example
   * 0
   */
  antibotReportSum?: string;
  /**
   * @remarks
   * The number of requests that are monitored by scan protection rules.
   * 
   * @example
   * 0
   */
  antiscanReportsSum?: number;
  /**
   * @remarks
   * The number of requests that are blocked by the IP address blacklist.
   * 
   * @example
   * 0
   */
  blacklistBlockSum?: string;
  /**
   * @remarks
   * The number of requests that are monitored by the IP address blacklist.
   * 
   * @example
   * 0
   */
  blacklistReportsSum?: number;
  /**
   * @remarks
   * The number of requests that are blocked by custom HTTP flood protection rules.
   * 
   * @example
   * 0
   */
  ccCustomBlockSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored by custom HTTP flood protection rules.
   * 
   * @example
   * 0
   */
  ccCustomReportsSum?: number;
  /**
   * @remarks
   * The number of requests that are blocked by HTTP flood protection rules created by the system.
   * 
   * @example
   * 0
   */
  ccSystemBlocksSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored by HTTP flood protection rules created by the system.
   * 
   * @example
   * 0
   */
  ccSystemReportsSum?: number;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 2932
   */
  count?: number;
  /**
   * @remarks
   * The total number of requests that are redirected to the WAF instance.
   * 
   * @example
   * 121645464
   */
  inBytes?: number;
  /**
   * @remarks
   * The serial number of the time interval. The serial numbers are arranged in chronological order.
   * 
   * @example
   * 10
   */
  index?: number;
  /**
   * @remarks
   * The peak traffic.
   * 
   * @example
   * 2932
   */
  maxPv?: number;
  /**
   * @remarks
   * The total number of requests that are forwarded by the WAF instance.
   * 
   * @example
   * 1200540464
   */
  outBytes?: number;
  /**
   * @remarks
   * The number of requests that are blocked by rate limiting rules.
   * 
   * @example
   * 0
   */
  ratelimitBlockSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored by rate limiting rules.
   * 
   * @example
   * 0
   */
  ratelimitReportSum?: number;
  /**
   * @remarks
   * The number of requests that are blocked by region blacklist rules.
   * 
   * @example
   * 0
   */
  regionBlockBlocksSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored by region blacklist rules.
   * 
   * @example
   * 0
   */
  regionBlockReportsSum?: number;
  /**
   * @remarks
   * The total number of bot requests.
   * 
   * @example
   * 1110
   */
  robotCount?: number;
  /**
   * @remarks
   * The number of requests that are blocked by basic protection rules.
   * 
   * @example
   * 0
   */
  wafBlockSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored by basic protection rules.
   * 
   * @example
   * 0
   */
  wafReportSum?: string;
  static names(): { [key: string]: string } {
    return {
      aclCustomBlockSum: 'AclCustomBlockSum',
      aclCustomReportsSum: 'AclCustomReportsSum',
      antiScanBlockSum: 'AntiScanBlockSum',
      antibotBlockSum: 'AntibotBlockSum',
      antibotReportSum: 'AntibotReportSum',
      antiscanReportsSum: 'AntiscanReportsSum',
      blacklistBlockSum: 'BlacklistBlockSum',
      blacklistReportsSum: 'BlacklistReportsSum',
      ccCustomBlockSum: 'CcCustomBlockSum',
      ccCustomReportsSum: 'CcCustomReportsSum',
      ccSystemBlocksSum: 'CcSystemBlocksSum',
      ccSystemReportsSum: 'CcSystemReportsSum',
      count: 'Count',
      inBytes: 'InBytes',
      index: 'Index',
      maxPv: 'MaxPv',
      outBytes: 'OutBytes',
      ratelimitBlockSum: 'RatelimitBlockSum',
      ratelimitReportSum: 'RatelimitReportSum',
      regionBlockBlocksSum: 'RegionBlockBlocksSum',
      regionBlockReportsSum: 'RegionBlockReportsSum',
      robotCount: 'RobotCount',
      wafBlockSum: 'WafBlockSum',
      wafReportSum: 'WafReportSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclCustomBlockSum: 'number',
      aclCustomReportsSum: 'number',
      antiScanBlockSum: 'number',
      antibotBlockSum: 'number',
      antibotReportSum: 'string',
      antiscanReportsSum: 'number',
      blacklistBlockSum: 'string',
      blacklistReportsSum: 'number',
      ccCustomBlockSum: 'number',
      ccCustomReportsSum: 'number',
      ccSystemBlocksSum: 'number',
      ccSystemReportsSum: 'number',
      count: 'number',
      inBytes: 'number',
      index: 'number',
      maxPv: 'number',
      outBytes: 'number',
      ratelimitBlockSum: 'number',
      ratelimitReportSum: 'number',
      regionBlockBlocksSum: 'number',
      regionBlockReportsSum: 'number',
      robotCount: 'number',
      wafBlockSum: 'number',
      wafReportSum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

