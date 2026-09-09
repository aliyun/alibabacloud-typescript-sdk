// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeMetricsByInstanceResponseBodyDataInstanceComputeMetrics extends $dara.Model {
  /**
   * @remarks
   * The job completion time, as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 20240730****ddlr
   */
  instanceId?: string;
  /**
   * @remarks
   * The owner of the job.
   * 
   * @example
   * ALIYUN$7632***@aliyun.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * odps_porject
   */
  projectName?: string;
  /**
   * @remarks
   * The signature of the SQL job.
   * 
   * @example
   * pqrs12345tuv
   */
  signature?: string;
  /**
   * @remarks
   * The specification type.
   * 
   * - `OdpsStandard`: Standard pay-as-you-go specification.
   * 
   * - `OdpsSpot`: Spot pay-as-you-go specification.
   * 
   * @example
   * OdpsStandard
   */
  specCode?: string;
  /**
   * @remarks
   * The job submission time, as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1610432000000
   */
  submitTime?: number;
  /**
   * @remarks
   * The metering type.
   * 
   * - `ComputationSql`: Metrics for SQL jobs on internal tables.
   * 
   * - `ComputationSqlOTS`: Metrics for SQL jobs on Tablestore external tables.
   * 
   * - `ComputationSqlOSS`: Metrics for SQL jobs on OSS external tables.
   * 
   * - `MapReduce`: Metrics for MapReduce jobs.
   * 
   * - `spark`: Metrics for Spark jobs.
   * 
   * - `mars`: Metrics for Mars jobs.
   * 
   * @example
   * ComputationSql
   */
  type?: string;
  /**
   * @remarks
   * The unit of compute usage.
   * 
   * @example
   * GB
   */
  unit?: string;
  /**
   * @remarks
   * The compute usage.
   * 
   * - For jobs billed by the amount of data scanned, such as `ComputationSql`, `ComputationSqlOTS`, and `ComputationSqlOSS` jobs, the unit is GB. The usage is calculated as: Amount of scanned data × Complexity. The complexity factor for `ComputationSqlOTS` and `ComputationSqlOSS` jobs is 1.
   * 
   * - For jobs billed by CU-hours (such as `MapReduce`, `spark`, and `mars` jobs), the unit is CU-hour.
   * 
   * @example
   * 1024
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      projectName: 'projectName',
      signature: 'signature',
      specCode: 'specCode',
      submitTime: 'submitTime',
      type: 'type',
      unit: 'unit',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      projectName: 'string',
      signature: 'string',
      specCode: 'string',
      submitTime: 'number',
      type: 'string',
      unit: 'string',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeMetricsByInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Usage metrics for pay-as-you-go jobs.
   */
  instanceComputeMetrics?: ListComputeMetricsByInstanceResponseBodyDataInstanceComputeMetrics[];
  /**
   * @remarks
   * The returned page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 64
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceComputeMetrics: 'instanceComputeMetrics',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceComputeMetrics: { 'type': 'array', 'itemType': ListComputeMetricsByInstanceResponseBodyDataInstanceComputeMetrics },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceComputeMetrics)) {
      $dara.Model.validateArray(this.instanceComputeMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeMetricsByInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListComputeMetricsByInstanceResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: Informational - The request has been received and is being processed.
   * 
   * - 2xx: Success - The request was successfully received, understood, and accepted.
   * 
   * - 3xx: Redirection - Further action is required to complete the request.
   * 
   * - 4xx: Client Error - The request contains invalid syntax or cannot be fulfilled.
   * 
   * - 5xx: Server Error - The server failed to fulfill a valid request.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc059b717363029839908920ea631
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListComputeMetricsByInstanceResponseBodyData,
      httpCode: 'number',
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

