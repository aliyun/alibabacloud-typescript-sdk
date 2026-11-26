// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-09-02T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The CU limit for the job.
   * 
   * @example
   * 2.0
   */
  cuLimit?: number;
  /**
   * @remarks
   * The reserved CUs for the job.
   * 
   * @example
   * 1.0
   */
  cuReserved?: number;
  /**
   * @remarks
   * The used CUs.
   * 
   * @example
   * 1.5
   */
  cuUsed?: number;
  /**
   * @remarks
   * Indicates whether the job is a debug job. Valid values:
   * - 0: No.
   * - 1: Yes.
   * 
   * @example
   * 0
   */
  debugMode?: number;
  /**
   * @remarks
   * The currently deployed SQL.
   * 
   * @example
   * INSERT INTO sink_table SELECT * FROM source_table;
   */
  deployedSql?: string;
  /**
   * @remarks
   * The Flink SQL draft.
   * 
   * @example
   * INSERT INTO sink_table SELECT * FROM source_table;
   */
  draftSql?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * SQL validation or compilation failed: Column \"xxx\" not found
   */
  errorMsg?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-09-11T04:33:03Z
   */
  expirationTime?: string;
  /**
   * @remarks
   * The compute instance ID.
   * 
   * @example
   * alikafka_streaming-cn-hangzhou-a1b2c3d4
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the compute job.
   * 
   * @example
   * order_enrichment
   */
  jobName?: string;
  /**
   * @remarks
   * The owner of the resource.
   * 
   * @example
   * 1234567890123456
   */
  owner?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remark for the job.
   * 
   * @example
   * Real-time order stream cleansing
   */
  remark?: string;
  /**
   * @remarks
   * The status of the job.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The startup mode, such as savepoint or stateless.
   * 
   * @example
   * savepoint
   */
  upgradeMode?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      cuLimit: 'CuLimit',
      cuReserved: 'CuReserved',
      cuUsed: 'CuUsed',
      debugMode: 'DebugMode',
      deployedSql: 'DeployedSql',
      draftSql: 'DraftSql',
      errorMsg: 'ErrorMsg',
      expirationTime: 'ExpirationTime',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      owner: 'Owner',
      regionId: 'RegionId',
      remark: 'Remark',
      status: 'Status',
      upgradeMode: 'UpgradeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      cuLimit: 'number',
      cuReserved: 'number',
      cuUsed: 'number',
      debugMode: 'number',
      deployedSql: 'string',
      draftSql: 'string',
      errorMsg: 'string',
      expirationTime: 'string',
      instanceId: 'string',
      jobName: 'string',
      owner: 'string',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      upgradeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: GetComputeJobResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 062D8E8B-8D47-5DCC-BB12-5A1D93C3A66B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetComputeJobResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

