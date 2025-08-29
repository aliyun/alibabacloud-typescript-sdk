// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCalculationJobsResponseBodyCalculationJobs extends $dara.Model {
  /**
   * @example
   * pv
   */
  ABMetricName?: string;
  /**
   * @example
   * 2021-12-15
   */
  bizDate?: string;
  /**
   * @example
   * 2
   */
  calculationJobId?: string;
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtRanTime?: string;
  jobMessage?: string[];
  /**
   * @example
   * CronOffline
   */
  jobSource?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricName: 'ABMetricName',
      bizDate: 'BizDate',
      calculationJobId: 'CalculationJobId',
      config: 'Config',
      gmtRanTime: 'GmtRanTime',
      jobMessage: 'JobMessage',
      jobSource: 'JobSource',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricName: 'string',
      bizDate: 'string',
      calculationJobId: 'string',
      config: 'string',
      gmtRanTime: 'string',
      jobMessage: { 'type': 'array', 'itemType': 'string' },
      jobSource: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobMessage)) {
      $dara.Model.validateArray(this.jobMessage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalculationJobsResponseBody extends $dara.Model {
  calculationJobs?: ListCalculationJobsResponseBodyCalculationJobs[];
  /**
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      calculationJobs: 'CalculationJobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calculationJobs: { 'type': 'array', 'itemType': ListCalculationJobsResponseBodyCalculationJobs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.calculationJobs)) {
      $dara.Model.validateArray(this.calculationJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

