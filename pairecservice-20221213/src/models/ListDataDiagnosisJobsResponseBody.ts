// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataDiagnosisJobsResponseBodyDataDiagnosisJobs extends $dara.Model {
  /**
   * @remarks
   * The business date. The format is YYYY-MM-DD.
   * 
   * @example
   * 2023-05-28
   */
  bizDate?: string;
  /**
   * @remarks
   * The task configuration.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The ID of the data diagnostic configuration.
   * 
   * @example
   * 3
   */
  dataDiagnosisConfigId?: string;
  /**
   * @remarks
   * The name of the data diagnostic configuration.
   * 
   * @example
   * Abnormal behavior analysis-xxx
   */
  dataDiagnosisConfigName?: string;
  /**
   * @remarks
   * The ID of the data diagnostic task.
   * 
   * @example
   * 3
   */
  dataDiagnosisJobId?: string;
  /**
   * @remarks
   * The creation time. The format is ISO 8601 and includes the time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The execution time. The format is ISO 8601 and includes the time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * The task source. Valid values:
   * 
   * - Rerun: Manual rerun.
   * 
   * - Cycle: Periodic generation.
   * 
   * - ByInitializing: Initialization generation.
   * 
   * @example
   * Cycle
   */
  jobSource?: string;
  /**
   * @remarks
   * The list of log information.
   */
  logs?: string[];
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Initializing
   */
  status?: string;
  /**
   * @remarks
   * The data diagnostic type.
   * 
   * @example
   * ChangeRate
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      config: 'Config',
      dataDiagnosisConfigId: 'DataDiagnosisConfigId',
      dataDiagnosisConfigName: 'DataDiagnosisConfigName',
      dataDiagnosisJobId: 'DataDiagnosisJobId',
      gmtCreateTime: 'GmtCreateTime',
      gmtStartTime: 'GmtStartTime',
      jobSource: 'JobSource',
      logs: 'Logs',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      config: 'string',
      dataDiagnosisConfigId: 'string',
      dataDiagnosisConfigName: 'string',
      dataDiagnosisJobId: 'string',
      gmtCreateTime: 'string',
      gmtStartTime: 'string',
      jobSource: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDiagnosisJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of data diagnostic tasks.
   */
  dataDiagnosisJobs?: ListDataDiagnosisJobsResponseBodyDataDiagnosisJobs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the list.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiagnosisJobs: 'DataDiagnosisJobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiagnosisJobs: { 'type': 'array', 'itemType': ListDataDiagnosisJobsResponseBodyDataDiagnosisJobs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataDiagnosisJobs)) {
      $dara.Model.validateArray(this.dataDiagnosisJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

