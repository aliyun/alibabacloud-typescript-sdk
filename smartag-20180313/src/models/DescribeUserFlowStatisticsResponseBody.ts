// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserFlowStatisticsResponseBodySagStatisticsStatistics extends $dara.Model {
  totalBytes?: string;
  totalLeaveBytes?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      totalBytes: 'TotalBytes',
      totalLeaveBytes: 'TotalLeaveBytes',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalBytes: 'string',
      totalLeaveBytes: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowStatisticsResponseBodySagStatistics extends $dara.Model {
  statistics?: DescribeUserFlowStatisticsResponseBodySagStatisticsStatistics[];
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: { 'type': 'array', 'itemType': DescribeUserFlowStatisticsResponseBodySagStatisticsStatistics },
    };
  }

  validate() {
    if(Array.isArray(this.statistics)) {
      $dara.Model.validateArray(this.statistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9552AD68-18EA-4074-B27D-40040FBA9683
   */
  requestId?: string;
  sagStatistics?: DescribeUserFlowStatisticsResponseBodySagStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sagStatistics: 'SagStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sagStatistics: DescribeUserFlowStatisticsResponseBodySagStatistics,
    };
  }

  validate() {
    if(this.sagStatistics && typeof (this.sagStatistics as any).validate === 'function') {
      (this.sagStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

