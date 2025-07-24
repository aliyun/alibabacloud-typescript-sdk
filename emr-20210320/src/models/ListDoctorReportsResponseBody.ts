// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorReportsResponseBodyDataSummaryReport extends $dara.Model {
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 88
   */
  score?: number;
  /**
   * @remarks
   * The optimization suggestion.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The summary of the report.
   * 
   * @example
   * eastbuy-mse-plugin-auth
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      suggestion: 'Suggestion',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      suggestion: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorReportsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The component types.
   * 
   * Valid values:
   * 
   * *   compute
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   hive
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   hdfs
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   yarn
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   oss
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   hbase
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * null
   */
  componentTypes?: string[];
  /**
   * @remarks
   * The date on which the report was generated.
   * 
   * @example
   * 2023-06-29
   */
  dateTime?: string;
  /**
   * @remarks
   * The summary of the report.
   */
  summaryReport?: ListDoctorReportsResponseBodyDataSummaryReport;
  static names(): { [key: string]: string } {
    return {
      componentTypes: 'ComponentTypes',
      dateTime: 'DateTime',
      summaryReport: 'SummaryReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentTypes: { 'type': 'array', 'itemType': 'string' },
      dateTime: 'string',
      summaryReport: ListDoctorReportsResponseBodyDataSummaryReport,
    };
  }

  validate() {
    if(Array.isArray(this.componentTypes)) {
      $dara.Model.validateArray(this.componentTypes);
    }
    if(this.summaryReport && typeof (this.summaryReport as any).validate === 'function') {
      (this.summaryReport as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The reports.
   */
  data?: ListDoctorReportsResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDoctorReportsResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

