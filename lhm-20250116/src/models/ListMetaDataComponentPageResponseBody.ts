// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaDataComponentPageResponseBodyDataProfilingJob extends $dara.Model {
  /**
   * @remarks
   * The component ID, which is the primary key of the data source component.
   * 
   * @example
   * 12345
   */
  componentId?: number;
  /**
   * @remarks
   * The creation time of the table or partition.
   * 
   * @example
   * 2026-01-16T10:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The primary key ID that uniquely identifies a record.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The description of the profiling task.
   * 
   * @example
   * Profiling task description
   */
  jobDesc?: string;
  /**
   * @remarks
   * The name of the profiling task.
   * 
   * @example
   * job_name
   */
  jobName?: string;
  /**
   * @remarks
   * The ID of the most recent profiling task batch.
   * 
   * @example
   * 20001
   */
  lastBatchId?: string;
  /**
   * @remarks
   * The profiling task status. Valid values:
   * - 0: Not started.
   * - 1: Running.
   * - 2: Stopped.
   * 
   * @example
   * 1
   */
  profilingEnable?: number;
  /**
   * @remarks
   * The profiling permission. Valid values:
   * - 0: read-only link
   * - 1: client
   * 
   * @example
   * 0
   */
  profilingPermission?: number;
  /**
   * @remarks
   * The cron expression for scheduled profiling. This parameter takes effect only when profilingType is set to CRON.
   * 
   * @example
   * 0 0 2 * * ?
   */
  profilingRule?: string;
  /**
   * @remarks
   * The profiling policy (scheduling type). Valid values:
   * - 0: daily
   * - 1: CRON
   * 
   * @example
   * 0
   */
  profilingType?: number;
  /**
   * @remarks
   * The scheduling ID, which uniquely identifies the profiling task on the scheduling side.
   * 
   * @example
   * 12345
   */
  schedulerToken?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'componentId',
      createTime: 'createTime',
      id: 'id',
      jobDesc: 'jobDesc',
      jobName: 'jobName',
      lastBatchId: 'lastBatchId',
      profilingEnable: 'profilingEnable',
      profilingPermission: 'profilingPermission',
      profilingRule: 'profilingRule',
      profilingType: 'profilingType',
      schedulerToken: 'schedulerToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'number',
      createTime: 'string',
      id: 'number',
      jobDesc: 'string',
      jobName: 'string',
      lastBatchId: 'string',
      profilingEnable: 'number',
      profilingPermission: 'number',
      profilingRule: 'string',
      profilingType: 'number',
      schedulerToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDataComponentPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The entry component type. In some operations, this parameter is used as a backward compatible field for version 1.1.0. Valid values:
   * - 0: source
   * - 1: destination
   * 
   * @example
   * 0
   */
  componentType?: number;
  /**
   * @remarks
   * The creation time of the table or partition.
   * 
   * @example
   * 2026-01-16T10:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The datasource config in JSON string format. The structure is defined by each dsType. Parse the JSON string before use. Sensitive fields such as tokens are masked in the response.
   * 
   * @example
   * {"endpoint":"...","token":"******"}
   */
  dsConfig?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * Data source description
   */
  dsDesc?: string;
  /**
   * @remarks
   * The business ID of the data source (external ID, which may be the same as the primary key ID).
   * 
   * @example
   * 290
   */
  dsId?: string;
  /**
   * @remarks
   * The data source name. Exact match and fuzzy match are supported.
   * 
   * @example
   * test_ds318_hangzhou_0428
   */
  dsName?: string;
  /**
   * @remarks
   * The connectivity status of the data source. Valid values:
   * - 0: Not tested.
   * - 1: Connected.
   * - 2: Connection failed.
   * - -1: Connectivity test not supported.
   * 
   * @example
   * 1
   */
  dsStatus?: number;
  /**
   * @remarks
   * The data source type, such as Hive or MaxCompute.
   * 
   * @example
   * Hive
   */
  dsType?: string;
  /**
   * @remarks
   * The version number of the data source.
   * 
   * @example
   * 3.2.0
   */
  dsVersion?: string;
  /**
   * @remarks
   * Indicates whether the data source has expired. Valid values:
   * - true: Expired.
   * - false: Not expired.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The primary key ID that uniquely identifies a record.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The profiling task information, including the task status, scheduling ID, profiling rule, and profiling type. This field is empty if the data source is not associated with a profiling task.
   */
  profilingJob?: ListMetaDataComponentPageResponseBodyDataProfilingJob;
  static names(): { [key: string]: string } {
    return {
      componentType: 'componentType',
      createTime: 'createTime',
      dsConfig: 'dsConfig',
      dsDesc: 'dsDesc',
      dsId: 'dsId',
      dsName: 'dsName',
      dsStatus: 'dsStatus',
      dsType: 'dsType',
      dsVersion: 'dsVersion',
      expired: 'expired',
      id: 'id',
      profilingJob: 'profilingJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'number',
      createTime: 'string',
      dsConfig: 'string',
      dsDesc: 'string',
      dsId: 'string',
      dsName: 'string',
      dsStatus: 'number',
      dsType: 'string',
      dsVersion: 'string',
      expired: 'boolean',
      id: 'number',
      profilingJob: ListMetaDataComponentPageResponseBodyDataProfilingJob,
    };
  }

  validate() {
    if(this.profilingJob && typeof (this.profilingJob as any).validate === 'function') {
      (this.profilingJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDataComponentPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list returned by the operation. For the structure of each element, see the child parameters.
   */
  data?: ListMetaDataComponentPageResponseBodyData[];
  /**
   * @remarks
   * The error code. An empty string is returned if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size, which is the number of records returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: Successful.
   * - false: Failed. Check errCode and errMessage for details.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that meet the query conditions. This parameter is used for pagination.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListMetaDataComponentPageResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
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

