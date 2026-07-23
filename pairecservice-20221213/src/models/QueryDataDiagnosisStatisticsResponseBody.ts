// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataDiagnosisStatisticsResponseBodyStatistics extends $dara.Model {
  /**
   * @remarks
   * The dates of task failures.
   */
  failedDates?: string[];
  /**
   * @remarks
   * The dates with missing task data.
   */
  noDataDates?: string[];
  static names(): { [key: string]: string } {
    return {
      failedDates: 'FailedDates',
      noDataDates: 'NoDataDates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedDates: { 'type': 'array', 'itemType': 'string' },
      noDataDates: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failedDates)) {
      $dara.Model.validateArray(this.failedDates);
    }
    if(Array.isArray(this.noDataDates)) {
      $dara.Model.validateArray(this.noDataDates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataDiagnosisStatisticsResponseBody extends $dara.Model {
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
   * The statistics for the data diagnosis task.
   */
  statistics?: QueryDataDiagnosisStatisticsResponseBodyStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: QueryDataDiagnosisStatisticsResponseBodyStatistics,
    };
  }

  validate() {
    if(this.statistics && typeof (this.statistics as any).validate === 'function') {
      (this.statistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

