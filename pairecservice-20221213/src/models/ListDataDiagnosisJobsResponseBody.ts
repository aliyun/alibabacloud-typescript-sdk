// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataDiagnosisJobsResponseBodyDataDiagnosisJobs extends $dara.Model {
  /**
   * @remarks
   * The business date.
   * 
   * @example
   * 2023-05-28
   */
  bizDate?: string;
  /**
   * @remarks
   * The job configuration.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The data diagnosis configuration ID.
   * 
   * @example
   * 3
   */
  dataDiagnosisConfigId?: string;
  /**
   * @remarks
   * The data diagnosis configuration name.
   * 
   * @example
   * 异常行为分析-xxx
   */
  dataDiagnosisConfigName?: string;
  /**
   * @remarks
   * The data diagnosis job ID.
   * 
   * @example
   * 3
   */
  dataDiagnosisJobId?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the job started.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * The job source. Valid values:
   * 
   * - Rerun: A manual rerun.
   * 
   * - Cycle: A periodic run.
   * 
   * - ByInitializing: Generated during initialization.
   * 
   * @example
   * Cycle
   */
  jobSource?: string;
  /**
   * @remarks
   * The log messages.
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
   * The data diagnosis type.
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
   * The returned data diagnosis jobs.
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
   * The total number of entries.
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

