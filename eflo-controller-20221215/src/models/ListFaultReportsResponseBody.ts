// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFaultReportsResponseBodyReports extends $dara.Model {
  /**
   * @remarks
   * The time when the fault report was created. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-11-07 17:41:33
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the fault report.
   * 
   * @example
   * GPU 0 reporting XID 79 (fallen off bus)
   */
  description?: string;
  /**
   * @remarks
   * The diagnosis type.
   * 
   * @example
   * QUICK
   */
  diagnosisType?: string;
  /**
   * @remarks
   * The time when the fault report was resolved. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-11-07 17:41:33
   */
  finishTime?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-3A244BE3
   */
  nodeId?: string;
  /**
   * @remarks
   * The fault report ID.
   * 
   * @example
   * 100184932123
   */
  reportId?: string;
  /**
   * @remarks
   * The status of the fault report.
   * 
   * @example
   * Processing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      diagnosisType: 'DiagnosisType',
      finishTime: 'FinishTime',
      nodeId: 'NodeId',
      reportId: 'ReportId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      diagnosisType: 'string',
      finishTime: 'string',
      nodeId: 'string',
      reportId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaultReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * DA4F08D
   */
  nextToken?: string;
  /**
   * @remarks
   * The fault report details.
   */
  reports?: ListFaultReportsResponseBodyReports[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DA4F08D4-DA54-5407-84B9-108C71D75B17
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      nextToken: 'NextToken',
      reports: 'Reports',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      nextToken: 'string',
      reports: { 'type': 'array', 'itemType': ListFaultReportsResponseBodyReports },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reports)) {
      $dara.Model.validateArray(this.reports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

