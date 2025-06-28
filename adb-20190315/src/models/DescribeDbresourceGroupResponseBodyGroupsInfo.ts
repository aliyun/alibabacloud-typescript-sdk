// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBResourceGroupResponseBodyGroupsInfo extends $dara.Model {
  /**
   * @remarks
   * The working mode of the resource group. Valid values:
   * 
   * *   **Disable** (default)
   * *   **AutoScale**
   * 
   * @example
   * AutoScale
   */
  clusterMode?: string;
  /**
   * @remarks
   * The resource specifications of a single compute cluster. Unit: ACU.
   * 
   * @example
   * 16ACU
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * The endpoint of the resource group.
   * 
   * >  This parameter is returned only when the value of Engine is SparkWarehouse.
   * 
   * @example
   * amv-bp1nw64y******.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The time when the resource group was created.
   * 
   * @example
   * 2022-10-09 16:57:35.241
   */
  createTime?: string;
  /**
   * @remarks
   * The minimum amount of elastic computing resources. Unit: ACU.
   * 
   * @example
   * 16ACU
   */
  elasticMinComputeResource?: string;
  /**
   * @remarks
   * The engine of the resource group. Valid values:
   * 
   * *   **AnalyticDB** (default)
   * *   **SparkWarehouse**
   * 
   * @example
   * AnalyticDB
   */
  engine?: string;
  /**
   * @remarks
   * The Spark application configuration parameters that can be applied to all Spark jobs executed in the resource group. If you want to configure parameters for a specific Spark job, you can specify values for the parameters in the code editor when you submit the job.
   * 
   * @example
   * {\\"spark.adb.version\\":\\"3.5\\"}
   */
  engineParams?: { [key: string]: any };
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * USER_DEFAULT
   */
  groupName?: string;
  /**
   * @remarks
   * The query execution mode. Valid values:
   * 
   * *   **interactive** (default)
   * *   **batch**
   * *   **job**
   * 
   * @example
   * interactive
   */
  groupType?: string;
  /**
   * @remarks
   * The database accounts that are associated with the resource group.
   */
  groupUserList?: string[];
  /**
   * @remarks
   * The database accounts that are associated with the resource group. Multiple database accounts are separated by commas (,).
   * 
   * @example
   * testb,testc
   */
  groupUsers?: string;
  /**
   * @remarks
   * The maximum number of compute clusters that are allowed in the resource group. Maximum value: 10.
   * 
   * @example
   * 4
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum amount of reserved computing resources, which refers to the amount of resources that are not allocated in the cluster. Unit: ACU.
   * 
   * *   If the value of GroupType is **interactive**, the amount of reserved computing resources that are not allocated in the cluster is returned in increments of 16ACU.
   * *   If the value of GroupType is **job**, the amount of reserved computing resources that are not allocated in the cluster is returned in increments of 8ACU.
   * 
   * @example
   * 32ACU
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * The minimum number of compute clusters that are required in the resource group. Minimum value: 1.
   * 
   * @example
   * 1
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum amount of reserved computing resources. Unit: AnalyticDB compute unit (ACU).
   * 
   * *   If the value of GroupType is **interactive**, 16ACU is returned.
   * *   If the value of GroupType is **job**, 0ACU is returned.
   * 
   * @example
   * 0ACU
   */
  minComputeResource?: string;
  /**
   * @remarks
   * The number of nodes. Each node provides 16 cores and 64 GB memory.
   * 
   * @example
   * 2
   */
  nodeNum?: number;
  /**
   * @remarks
   * The port number of the resource group.
   * 
   * >  This parameter is returned only when the value of Engine is SparkWarehouse.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The number of compute clusters running in the resource group.
   * 
   * @example
   * 2
   */
  runningClusterCount?: number;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   **Pending**
   * *   **Running**
   * *   **Scaling**
   * *   **Deleting**
   * *   **Deleted**
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the resource group was updated.
   * 
   * @example
   * 2022-11-09 16:57:35.241
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      connectionString: 'ConnectionString',
      createTime: 'CreateTime',
      elasticMinComputeResource: 'ElasticMinComputeResource',
      engine: 'Engine',
      engineParams: 'EngineParams',
      groupName: 'GroupName',
      groupType: 'GroupType',
      groupUserList: 'GroupUserList',
      groupUsers: 'GroupUsers',
      maxClusterCount: 'MaxClusterCount',
      maxComputeResource: 'MaxComputeResource',
      minClusterCount: 'MinClusterCount',
      minComputeResource: 'MinComputeResource',
      nodeNum: 'NodeNum',
      port: 'Port',
      runningClusterCount: 'RunningClusterCount',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterMode: 'string',
      clusterSizeResource: 'string',
      connectionString: 'string',
      createTime: 'string',
      elasticMinComputeResource: 'string',
      engine: 'string',
      engineParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      groupName: 'string',
      groupType: 'string',
      groupUserList: { 'type': 'array', 'itemType': 'string' },
      groupUsers: 'string',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      minClusterCount: 'number',
      minComputeResource: 'string',
      nodeNum: 'number',
      port: 'string',
      runningClusterCount: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.engineParams) {
      $dara.Model.validateMap(this.engineParams);
    }
    if(Array.isArray(this.groupUserList)) {
      $dara.Model.validateArray(this.groupUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

