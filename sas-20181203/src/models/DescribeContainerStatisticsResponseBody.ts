// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerStatisticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of alerts with the **Reminder** risk level.
   * 
   * @example
   * 1
   */
  remindAlarmCount?: number;
  /**
   * @remarks
   * The number of alerts with the **Urgent** risk level.
   * 
   * @example
   * 2
   */
  seriousAlarmCount?: number;
  /**
   * @remarks
   * The number of alerts with the **Suspicious** risk level.
   * 
   * @example
   * 3
   */
  suspiciousAlarmCount?: number;
  /**
   * @remarks
   * The total number of security alerts in the container cluster.
   * 
   * @example
   * 6
   */
  totalAlarmCount?: number;
  /**
   * @remarks
   * The total number of nodes in the container cluster.
   * 
   * @example
   * 12
   */
  totalNode?: number;
  /**
   * @remarks
   * The number of nodes that have alerts in the container cluster.
   * 
   * @example
   * 4
   */
  hasRiskNode?: number;
  static names(): { [key: string]: string } {
    return {
      remindAlarmCount: 'RemindAlarmCount',
      seriousAlarmCount: 'SeriousAlarmCount',
      suspiciousAlarmCount: 'SuspiciousAlarmCount',
      totalAlarmCount: 'TotalAlarmCount',
      totalNode: 'TotalNode',
      hasRiskNode: 'hasRiskNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindAlarmCount: 'number',
      seriousAlarmCount: 'number',
      suspiciousAlarmCount: 'number',
      totalAlarmCount: 'number',
      totalNode: 'number',
      hasRiskNode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed alert statistics of container assets.
   */
  data?: DescribeContainerStatisticsResponseBodyData;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request, which can be used for troubleshooting and diagnostics.
   * 
   * @example
   * 21DA46CA-2DCE-4FF6-907D-D5DBBB7518C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeContainerStatisticsResponseBodyData,
      requestId: 'string',
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

