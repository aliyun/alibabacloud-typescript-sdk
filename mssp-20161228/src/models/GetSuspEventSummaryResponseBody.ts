// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTOTrendList extends $dara.Model {
  /**
   * @remarks
   * Date.
   * 
   * @example
   * 202409或20240901
   */
  date?: string;
  /**
   * @remarks
   * DDoS count.
   * 
   * @example
   * 10
   */
  ddosCount?: number;
  /**
   * @remarks
   * EIP count.
   * 
   * @example
   * 10
   */
  eipCount?: number;
  /**
   * @remarks
   * WAF count.
   * 
   * @example
   * 10
   */
  wafCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      ddosCount: 'DdosCount',
      eipCount: 'EipCount',
      wafCount: 'WafCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      ddosCount: 'number',
      eipCount: 'number',
      wafCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTO extends $dara.Model {
  /**
   * @remarks
   * Collection of trend nodes for each attack item.
   */
  trendList?: GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTOTrendList[];
  static names(): { [key: string]: string } {
    return {
      trendList: 'TrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trendList: { 'type': 'array', 'itemType': GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTOTrendList },
    };
  }

  validate() {
    if(Array.isArray(this.trendList)) {
      $dara.Model.validateArray(this.trendList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventDealSummaryDTO extends $dara.Model {
  /**
   * @remarks
   * Completed.
   * 
   * @example
   * 20
   */
  completedCount?: number;
  /**
   * @remarks
   * In progress.
   * 
   * @example
   * 5
   */
  handingCount?: number;
  /**
   * @remarks
   * Alert handling rate.
   * 
   * @example
   * 90
   */
  handingRate?: string;
  /**
   * @remarks
   * Total number of alerts.
   * 
   * @example
   * 35
   */
  totalCount?: number;
  /**
   * @remarks
   * Year-over-year comparison of alerts.
   * 
   * @example
   * 10
   */
  totalGrowthRate?: string;
  /**
   * @remarks
   * Number of unhandled alerts.
   * 
   * @example
   * 10
   */
  waitHandleCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedCount: 'CompletedCount',
      handingCount: 'HandingCount',
      handingRate: 'HandingRate',
      totalCount: 'TotalCount',
      totalGrowthRate: 'TotalGrowthRate',
      waitHandleCount: 'WaitHandleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedCount: 'number',
      handingCount: 'number',
      handingRate: 'string',
      totalCount: 'number',
      totalGrowthRate: 'string',
      waitHandleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventTopDTOSuspEventList extends $dara.Model {
  /**
   * @remarks
   * Alert name.
   * 
   * @example
   * 主动外连风险 IP
   */
  eventName?: string;
  /**
   * @remarks
   * Count.
   * 
   * @example
   * 7
   */
  taskCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      taskCount: 'TaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      taskCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventTopDTO extends $dara.Model {
  /**
   * @remarks
   * Top 10 before handling alarms
   */
  suspEventList?: GetSuspEventSummaryResponseBodyDataSuspEventTopDTOSuspEventList[];
  static names(): { [key: string]: string } {
    return {
      suspEventList: 'SuspEventList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suspEventList: { 'type': 'array', 'itemType': GetSuspEventSummaryResponseBodyDataSuspEventTopDTOSuspEventList },
    };
  }

  validate() {
    if(Array.isArray(this.suspEventList)) {
      $dara.Model.validateArray(this.suspEventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventTrendDTOTrendList extends $dara.Model {
  /**
   * @remarks
   * Time point.
   * 
   * @example
   * 202405或者20240501
   */
  date?: string;
  /**
   * @remarks
   * Number of handled alerts.
   * 
   * @example
   * 10
   */
  dealCount?: number;
  /**
   * @remarks
   * Number of discovered alerts.
   * 
   * @example
   * 15
   */
  findCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dealCount: 'DealCount',
      findCount: 'FindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dealCount: 'number',
      findCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyDataSuspEventTrendDTO extends $dara.Model {
  /**
   * @remarks
   * Trend of alerts.
   */
  trendList?: GetSuspEventSummaryResponseBodyDataSuspEventTrendDTOTrendList[];
  static names(): { [key: string]: string } {
    return {
      trendList: 'TrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trendList: { 'type': 'array', 'itemType': GetSuspEventSummaryResponseBodyDataSuspEventTrendDTOTrendList },
    };
  }

  validate() {
    if(Array.isArray(this.trendList)) {
      $dara.Model.validateArray(this.trendList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Network attack trend.
   */
  networkAttackTrendDTO?: GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTO;
  /**
   * @remarks
   * Overview of alert handling.
   */
  suspEventDealSummaryDTO?: GetSuspEventSummaryResponseBodyDataSuspEventDealSummaryDTO;
  /**
   * @remarks
   * Top 10 alerts before handling.
   */
  suspEventTopDTO?: GetSuspEventSummaryResponseBodyDataSuspEventTopDTO;
  /**
   * @remarks
   * Trend of alert responses.
   */
  suspEventTrendDTO?: GetSuspEventSummaryResponseBodyDataSuspEventTrendDTO;
  static names(): { [key: string]: string } {
    return {
      networkAttackTrendDTO: 'NetworkAttackTrendDTO',
      suspEventDealSummaryDTO: 'SuspEventDealSummaryDTO',
      suspEventTopDTO: 'SuspEventTopDTO',
      suspEventTrendDTO: 'SuspEventTrendDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAttackTrendDTO: GetSuspEventSummaryResponseBodyDataNetworkAttackTrendDTO,
      suspEventDealSummaryDTO: GetSuspEventSummaryResponseBodyDataSuspEventDealSummaryDTO,
      suspEventTopDTO: GetSuspEventSummaryResponseBodyDataSuspEventTopDTO,
      suspEventTrendDTO: GetSuspEventSummaryResponseBodyDataSuspEventTrendDTO,
    };
  }

  validate() {
    if(this.networkAttackTrendDTO && typeof (this.networkAttackTrendDTO as any).validate === 'function') {
      (this.networkAttackTrendDTO as any).validate();
    }
    if(this.suspEventDealSummaryDTO && typeof (this.suspEventDealSummaryDTO as any).validate === 'function') {
      (this.suspEventDealSummaryDTO as any).validate();
    }
    if(this.suspEventTopDTO && typeof (this.suspEventTopDTO as any).validate === 'function') {
      (this.suspEventTopDTO as any).validate();
    }
    if(this.suspEventTrendDTO && typeof (this.suspEventTrendDTO as any).validate === 'function') {
      (this.suspEventTrendDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspEventSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetSuspEventSummaryResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the returned result.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9B2DAE9B-B901-5818-AFEF-E5637D938280
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * - true: Call succeeded.
   * - false: Call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSuspEventSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

