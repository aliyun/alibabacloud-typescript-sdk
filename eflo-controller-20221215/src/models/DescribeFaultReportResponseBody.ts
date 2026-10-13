// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaultReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The time when the fault report was created. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-11-06 17:31:33
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
   * The error message.
   * 
   * @example
   * Resource Not Found
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the fault report was processed. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-11-07 17:41:33
   */
  finishTime?: string;
  /**
   * @remarks
   * The report ID.
   * 
   * @example
   * 100184932123
   */
  reportId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DA4F08D4-DA54-5407-84B9-108C71D75B17
   */
  requestId?: string;
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
      accessDeniedDetail: 'AccessDeniedDetail',
      createTime: 'CreateTime',
      description: 'Description',
      diagnosisType: 'DiagnosisType',
      errorMessage: 'ErrorMessage',
      finishTime: 'FinishTime',
      reportId: 'ReportId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      createTime: 'string',
      description: 'string',
      diagnosisType: 'string',
      errorMessage: 'string',
      finishTime: 'string',
      reportId: 'string',
      requestId: 'string',
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

