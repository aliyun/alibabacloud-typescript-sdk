// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowChartResponseBodyFlowChart extends $dara.Model {
  /**
   * @remarks
   * The number of requests blocked by custom ACL rules.
   * 
   * @example
   * 0
   */
  aclCustomBlockSum?: number;
  /**
   * @remarks
   * The number of monitored hits on custom ACL rules.
   * 
   * @example
   * 0
   */
  aclCustomReportsSum?: number;
  /**
   * @remarks
   * The number of requests blocked by scan protection rules.
   * 
   * @example
   * 0
   */
  antiScanBlockSum?: number;
  /**
   * @remarks
   * The number of requests blocked by bot management rules.
   * 
   * @example
   * 0
   */
  antibotBlockSum?: number;
  /**
   * @remarks
   * The number of monitored hits on bot management rules.
   * 
   * @example
   * 0
   */
  antibotReportSum?: string;
  /**
   * @remarks
   * The number of monitored hits on scan protection rules.
   * 
   * @example
   * 0
   */
  antiscanReportsSum?: number;
  /**
   * @remarks
   * The number of requests blocked by the IP blacklist.
   * 
   * @example
   * 0
   */
  blacklistBlockSum?: string;
  /**
   * @remarks
   * The number of monitored hits on the IP blacklist.
   * 
   * @example
   * 0
   */
  blacklistReportsSum?: number;
  /**
   * @remarks
   * The number of requests blocked by custom HTTP flood mitigation rules.
   * 
   * @example
   * 0
   */
  ccCustomBlockSum?: number;
  /**
   * @remarks
   * The number of monitored hits on custom HTTP flood mitigation rules.
   * 
   * @example
   * 0
   */
  ccCustomReportsSum?: number;
  /**
   * @remarks
   * The number of requests blocked by built-in HTTP flood mitigation rules.
   * 
   * @example
   * 0
   */
  ccSystemBlocksSum?: number;
  /**
   * @remarks
   * The number of monitored hits on built-in HTTP flood mitigation rules.
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
   * The total inbound traffic to WAF.
   * 
   * @example
   * 121645464
   */
  inBytes?: number;
  /**
   * @remarks
   * The time index, sorted in chronological order.
   * 
   * @example
   * 10
   */
  index?: number;
  /**
   * @remarks
   * The peak number of requests.
   * 
   * @example
   * 2932
   */
  maxPv?: number;
  /**
   * @remarks
   * The total outbound traffic from WAF.
   * 
   * @example
   * 1200540464
   */
  outBytes?: number;
  /**
   * @remarks
   * The number of requests blocked by peak traffic throttling rules.
   * 
   * @example
   * 0
   */
  ratelimitBlockSum?: number;
  /**
   * @remarks
   * The number of monitored hits on peak traffic throttling rules.
   * 
   * @example
   * 0
   */
  ratelimitReportSum?: number;
  /**
   * @remarks
   * The number of requests blocked by area blocking rules.
   * 
   * @example
   * 0
   */
  regionBlockBlocksSum?: number;
  /**
   * @remarks
   * The number of monitored hits on area blocking rules.
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
   * The number of requests blocked by basic protection rules.
   * 
   * @example
   * 0
   */
  wafBlockSum?: number;
  /**
   * @remarks
   * The number of monitored hits on basic protection rules.
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

export class DescribeFlowChartResponseBody extends $dara.Model {
  /**
   * @remarks
   * The traffic statistics information.
   */
  flowChart?: DescribeFlowChartResponseBodyFlowChart[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BFA71416-670E-585D-AAE6-E7BBEE248FAB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowChart: 'FlowChart',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowChart: { 'type': 'array', 'itemType': DescribeFlowChartResponseBodyFlowChart },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flowChart)) {
      $dara.Model.validateArray(this.flowChart);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

