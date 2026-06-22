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
   * <h3>Compute health score: 88. The cluster is in healthy state. Keep it up.</h3><ul><li><strong>Compute task scan</strong><ul><li>Scanned 1518 compute tasks in the cluster: <span style=\\"color: #D93026;\\">209 tasks in unhealthy state</span>, <span style=\\"color: #F1A600;\\">596 tasks in sub-healthy state</span>, <span style=\\"color: #1E8E3E;\\">713 tasks in healthy state</span>.</li></ul><ul><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1518 Tez tasks with a weighted average score of 88. Memory usage accounts for 100.0% of the cluster, CPU usage accounts for 100.0% of the cluster. 209 tasks are in unhealthy state, 596 tasks are in sub-healthy state.</li></ul><ul>Click \\"View Details\\" in the task detail list below to view specific issues and solutions. The \\"Low-Score Task Compute Memory Time (GB*Sec) Top 20\\" table is sorted by memory time usage. Large tasks may have a greater impact on the overall cluster, so prioritize them.</ul><li><strong><span style=\\"color: #D93026;\\">Low memory utilization</span></strong><ul><li>Overall cluster memory utilization is 47.8%, which is relatively low. Compute resources are being wasted. Prioritize optimizing TOP tasks with high memory compute time but low memory utilization.</li></ul><ul><li>Tez jobs have an average memory utilization of 47.8%.</li></ul></li></ul>
   */
  suggestion?: string;
  /**
   * @remarks
   * The summary of the report.
   * 
   * @example
   * <h4>[Compute Check] Compute health score: 88. Good health. Keep it up.</h4><p style=\\"text-indent:2em\\">Most tasks in the cluster are in healthy state.</p><p style=\\"text-indent:2em\\">Cluster memory utilization: 47.8%, relatively low.</p>
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
   * - compute
   * 
   *   <!-- -->
   * 
   *   <!-- -->
   * 
   *   <!-- -->
   * 
   * - hive
   * 
   *   <!-- -->
   * 
   *   <!-- -->
   * 
   *   <!-- -->
   * 
   * - hdfs
   * 
   *   <!-- -->
   * 
   *   <!-- -->
   * 
   *   <!-- -->
   * 
   * - yarn
   * 
   *   <!-- -->
   * 
   *   <!-- -->
   * 
   *   <!-- -->
   * 
   * - oss
   * 
   *   <!-- -->
   * 
   *   <!-- -->
   * 
   *   <!-- -->
   * 
   * - hbase
   * 
   *   <!-- -->
   * 
   *   <!-- -->
   * 
   *   <!-- -->
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

