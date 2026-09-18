// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeMetricsByInstanceResponseBodyDataInstanceComputeMetrics extends $dara.Model {
  /**
   * @remarks
   * The job end time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 20240730****ddlr
   */
  instanceId?: string;
  /**
   * @remarks
   * The job owner.
   * 
   * @example
   * ALIYUN$7632***@aliyun.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * odps_porject
   */
  projectName?: string;
  /**
   * @remarks
   * The SQL job signature.
   * 
   * @example
   * pqrs12345tuv
   */
  signature?: string;
  /**
   * @remarks
   * The specification type. Valid values:
   * - OdpsStandard: the pay-as-you-go billing method Standard Edition.
   * - OdpsSpot: the pay-as-you-go billing method Off-peak Edition.
   * 
   * @example
   * OdpsStandard
   */
  specCode?: string;
  /**
   * @remarks
   * The job submit time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1610432000000
   */
  submitTime?: number;
  /**
   * @remarks
   * The metering type. Valid values:
   * 
   * - ComputationSql: metering data of SQL jobs that operate on internal tables.
   * 
   * - ComputationSqlOTS: metering data of SQL jobs that operate on OTS external tables.
   * 
   * - ComputationSqlOSS: metering data of SQL jobs that operate on OSS external tables.
   * 
   * - MapReduce: metering data of MapReduce jobs.
   * 
   * - spark: metering data of Spark jobs.
   * 
   * - mars: metering data of Mars jobs.
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
   * - For scan-based billing types, the unit is GB. This includes the ComputationSql, ComputationSqlOTS, and ComputationSqlOSS billing types, which are billed based on the amount of data scanned. The compute usage is calculated as the scan volume × complexity for each job. The complexity for ComputationSqlOTS and ComputationSqlOSS types is fixed at 1.
   * 
   * - For CU-hour-based billing types, the unit is CU-hours. This includes the MapReduce, spark, and mars billing types, which are billed based on CU-hours.
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
   * The list of pay-as-you-go job compute usage.
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
   * The response data.
   */
  data?: ListComputeMetricsByInstanceResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * - 1xx: Informational response. The request has been received and is being processed.
   * - 2xx: Success. The request has been successfully received, understood, and accepted by the server.
   * - 3xx: Redirection. The request is redirected, and further action is required to complete the request.
   * - 4xx: Client error. The request contains invalid parameters, bad syntax, or specific request conditions cannot be fulfilled.
   * - 5xx: Server error. The server cannot fulfill the request due to other reasons.
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

