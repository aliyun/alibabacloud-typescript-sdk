// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeMetricsByInstanceResponseBodyDataInstanceComputeMetrics extends $dara.Model {
  /**
   * @remarks
   * The end time of the job execution.
   * 
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @remarks
   * The job(instance) ID.
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
   * Specifications Type, specifies the resource package that you select when you purchase the MaxCompute service.
   * - OdpsStandard: the pay-as-you-go resource package.
   * 
   * - OdpsSpot: the pay-as-you-go spot resource package.
   * 
   * @example
   * OdpsStandard
   */
  specCode?: string;
  /**
   * @remarks
   * The submission time of the job.
   * 
   * @example
   * 1610432000000
   */
  submitTime?: number;
  /**
   * @remarks
   * Metering types.
   * - ComputationSql: the metering data of SQL jobs that involve internal tables.
   * 
   * - ComputationSqlOTS: the metering data of SQL jobs that involve Tablestore external tables.
   * 
   * - ComputationSqlOSS: the metering data of SQL jobs that involve OSS external tables.
   * 
   * - MapReduce: the metering data of MapReduce jobs.
   * 
   * - spark: the metering data of Spark jobs.
   * 
   * - mars: the metering data of Mars jobs.
   * 
   * @example
   * ComputationSql
   */
  type?: string;
  /**
   * @remarks
   * The unit of computing resource usage
   * 
   * @example
   * GB
   */
  unit?: string;
  /**
   * @remarks
   * The computing resource usage is calculated based on the following items:
   * 
   * - Amount of scanned data in the unit of GB. For the jobs whose metering types are ComputationSql, ComputationSqlOTS, or ComputationSqlOSS, they are billed based on the amount of scanned data. The computing resource usage of such a job is calculated by using the following formula: Amount of scanned data × Complexity. The complexity is fixed at 1 for the jobs whose metering types are ComputationSqlOTS or ComputationSqlOSS.
   * 
   * - CU-hours. For the jobs whose metering types are MapReduce, spark, or mars, they are billed based on CU-hours.
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
   * List of pay-as-you-go job compute usage.
   */
  instanceComputeMetrics?: ListComputeMetricsByInstanceResponseBodyDataInstanceComputeMetrics[];
  /**
   * @remarks
   * The current page number.
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
   * The total number of results returned.
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
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * - 4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc059b717363029839908920ea631
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListComputeMetricsByInstanceResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
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

