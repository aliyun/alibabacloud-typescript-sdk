// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-09-02T16:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * 2.0
   */
  cuLimit?: number;
  /**
   * @example
   * 1.0
   */
  cuReserved?: number;
  /**
   * @example
   * 1.5
   */
  cuUsed?: number;
  /**
   * @example
   * 0
   */
  debugMode?: number;
  /**
   * @example
   * INSERT INTO sink_table SELECT * FROM source_table;
   */
  deployedSql?: string;
  /**
   * @example
   * INSERT INTO sink_table SELECT * FROM source_table;
   */
  draftSql?: string;
  /**
   * @example
   * SQL 校验或编译失败：Column \\"xxx\\" not found
   */
  errorMsg?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-09-11T04:33:03Z
   */
  expirationTime?: string;
  /**
   * @example
   * alikafka_streaming-cn-hangzhou-a1b2c3d4
   */
  instanceId?: string;
  /**
   * @example
   * order_enrichment
   */
  jobName?: string;
  /**
   * @example
   * 1234567890123456
   */
  owner?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 订单流实时清洗
   */
  remark?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
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
   * @example
   * 200
   */
  code?: number;
  data?: GetComputeJobResponseBodyData;
  /**
   * @example
   * 062D8E8B-8D47-5DCC-BB12-5A1D93C3A66B
   */
  requestId?: string;
  /**
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

