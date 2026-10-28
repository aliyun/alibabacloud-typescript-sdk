// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsHiveWorkloadResponseBodyApsWorkload extends $dara.Model {
  /**
   * @remarks
   * The advanced configurations.
   * 
   * @example
   * test.adv.config=value
   */
  advancedConfig?: string;
  /**
   * @remarks
   * The handling strategy when a database or table with the same name exists at the destination.
   * 
   * @example
   * Intercept
   */
  conflictStrategy?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * -
   */
  createTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-*******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 8
   */
  datasourceId?: number;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * sls-******
   */
  datasourceName?: string;
  /**
   * @remarks
   * The EMR cluster ID.
   * 
   * @example
   * -
   */
  emrClusterId?: string;
  /**
   * @remarks
   * The number of ACUs required for migration.
   * 
   * @example
   * 16
   */
  fullComputeUnit?: string;
  /**
   * @remarks
   * The Hive metastore URL.
   * 
   * @example
   * -
   */
  metaStoreUri?: string;
  /**
   * @remarks
   * The OSS address.
   * 
   * @example
   * oss://******
   */
  ossLocation?: string;
  /**
   * @remarks
   * The degree of parallelism.
   * 
   * @example
   * 2
   */
  parallelism?: number;
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
   * The resource pool to which the SQL statement belongs.
   * 
   * @example
   * test
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * COMPLETED
   */
  state?: string;
  /**
   * @remarks
   * The whitelist expression for manually matching source databases and tables.
   * 
   * @example
   * abc
   */
  syncAllowExpression?: string;
  /**
   * @remarks
   * The blacklist expression for manually matching source databases and tables.
   * 
   * @example
   * def
   */
  syncDenyExpression?: string;
  /**
   * @remarks
   * The destination type.
   * 
   * @example
   * OSS
   */
  targetType?: string;
  /**
   * @remarks
   * The vSwitch name.
   * 
   * @example
   * vsw-******
   */
  vswitch?: string;
  /**
   * @remarks
   * The data link task ID.
   * 
   * @example
   * aps-******
   */
  workloadId?: string;
  /**
   * @remarks
   * The workload name.
   * 
   * @example
   * test
   */
  workloadName?: string;
  /**
   * @remarks
   * The workload name.
   * 
   * @example
   * test
   */
  workloadTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      advancedConfig: 'AdvancedConfig',
      conflictStrategy: 'ConflictStrategy',
      createTime: 'CreateTime',
      DBClusterId: 'DBClusterId',
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      emrClusterId: 'EmrClusterId',
      fullComputeUnit: 'FullComputeUnit',
      metaStoreUri: 'MetaStoreUri',
      ossLocation: 'OssLocation',
      parallelism: 'Parallelism',
      regionId: 'RegionId',
      resourceGroup: 'ResourceGroup',
      state: 'State',
      syncAllowExpression: 'SyncAllowExpression',
      syncDenyExpression: 'SyncDenyExpression',
      targetType: 'TargetType',
      vswitch: 'Vswitch',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
      workloadTypeName: 'WorkloadTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedConfig: 'string',
      conflictStrategy: 'string',
      createTime: 'string',
      DBClusterId: 'string',
      datasourceId: 'number',
      datasourceName: 'string',
      emrClusterId: 'string',
      fullComputeUnit: 'string',
      metaStoreUri: 'string',
      ossLocation: 'string',
      parallelism: 'number',
      regionId: 'string',
      resourceGroup: 'string',
      state: 'string',
      syncAllowExpression: 'string',
      syncDenyExpression: 'string',
      targetType: 'string',
      vswitch: 'string',
      workloadId: 'string',
      workloadName: 'string',
      workloadTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsHiveWorkloadResponseBody extends $dara.Model {
  /**
   * @remarks
   * The workload information.
   * 
   * @example
   * -
   */
  apsWorkload?: DescribeApsHiveWorkloadResponseBodyApsWorkload;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 86F92D26-B774-5FA1-8E53-******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apsWorkload: 'ApsWorkload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsWorkload: DescribeApsHiveWorkloadResponseBodyApsWorkload,
      requestId: 'string',
    };
  }

  validate() {
    if(this.apsWorkload && typeof (this.apsWorkload as any).validate === 'function') {
      (this.apsWorkload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

