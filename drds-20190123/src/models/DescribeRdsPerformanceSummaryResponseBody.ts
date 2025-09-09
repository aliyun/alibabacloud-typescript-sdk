// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsPerformanceSummaryResponseBodyRdsPerformanceInfos extends $dara.Model {
  /**
   * @remarks
   * The number of active sessions of the RDS instance.
   * 
   * @example
   * 0
   */
  activeSessions?: number;
  /**
   * @remarks
   * The CPU utilization of an RDS instance.
   * 
   * @example
   * 0.26
   */
  cpu?: number;
  /**
   * @remarks
   * The IOPS of the RDS instance.
   * 
   * @example
   * 17.62
   */
  iops?: number;
  /**
   * @remarks
   * The ID of an RDS instance.
   * 
   * @example
   * rm-**************
   */
  rdsId?: string;
  /**
   * @remarks
   * The disk usage of apsaradb for RDS. Unit: MB.
   * 
   * @example
   * 4145144777
   */
  spaceUsage?: number;
  /**
   * @remarks
   * The total number of current RDS sessions.
   * 
   * @example
   * 162
   */
  totalSessions?: number;
  static names(): { [key: string]: string } {
    return {
      activeSessions: 'ActiveSessions',
      cpu: 'Cpu',
      iops: 'Iops',
      rdsId: 'RdsId',
      spaceUsage: 'SpaceUsage',
      totalSessions: 'TotalSessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessions: 'number',
      cpu: 'number',
      iops: 'number',
      rdsId: 'string',
      spaceUsage: 'number',
      totalSessions: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsPerformanceSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * A collection of objects.
   */
  rdsPerformanceInfos?: DescribeRdsPerformanceSummaryResponseBodyRdsPerformanceInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6876277-ECFD-4658-AC1E-A7FAD8******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      rdsPerformanceInfos: 'RdsPerformanceInfos',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsPerformanceInfos: { 'type': 'array', 'itemType': DescribeRdsPerformanceSummaryResponseBodyRdsPerformanceInfos },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.rdsPerformanceInfos)) {
      $dara.Model.validateArray(this.rdsPerformanceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

