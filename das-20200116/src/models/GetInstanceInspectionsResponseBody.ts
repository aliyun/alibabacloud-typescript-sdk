// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceInspectionsResponseBodyDataListAutoFunction extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the feature of automatically creating and deleting indexes is enabled. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * *   **2**: not supported.
   * 
   * @example
   * 2
   */
  autoIndex?: number;
  /**
   * @remarks
   * Indicates whether the automatic throttling feature is enabled. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * *   **2**: not supported.
   * 
   * @example
   * 2
   */
  autoLimitedSql?: number;
  /**
   * @remarks
   * Indicates whether the automatic fragment recycling feature is enabled. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * *   **2**: not supported.
   * 
   * @example
   * 0
   */
  autoResourceOptimize?: number;
  /**
   * @remarks
   * Indicates whether the auto scaling feature is enabled. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * *   **2**: not supported.
   * 
   * @example
   * 0
   */
  autoScale?: number;
  /**
   * @remarks
   * Indicates whether the event subscription feature is enabled. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * *   **2**: not supported.
   * 
   * @example
   * 0
   */
  eventSubscription?: number;
  static names(): { [key: string]: string } {
    return {
      autoIndex: 'AutoIndex',
      autoLimitedSql: 'AutoLimitedSql',
      autoResourceOptimize: 'AutoResourceOptimize',
      autoScale: 'AutoScale',
      eventSubscription: 'EventSubscription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIndex: 'number',
      autoLimitedSql: 'number',
      autoResourceOptimize: 'number',
      autoScale: 'number',
      eventSubscription: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionsResponseBodyDataListInstance extends $dara.Model {
  /**
   * @remarks
   * The account ID. You can view the ID of the logon account by moving the pointer over the profile in the Alibaba Cloud management console.
   * 
   * @example
   * 108398049688****
   */
  accountId?: string;
  /**
   * @remarks
   * The connection mode of the instance. Valid values:
   * 
   * *   **standard**: standard mode.
   * *   **safe**: database proxy mode.
   * 
   * @example
   * standard
   */
  category?: string;
  /**
   * @remarks
   * The CPU specification of the instance. For example, if a value of 8 is returned, the instance has eight CPU cores.
   * 
   * @example
   * 8
   */
  cpu?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **Redis**
   * *   **PolarDBMySQL**
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The version number of the database engine.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test-01
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The type of the instance on which the database is deployed. Valid values:
   * 
   * *   **RDS**: an Alibaba Cloud database instance.
   * *   **ECS**: an Elastic Compute Service (ECS) instance on which a self-managed database is deployed.
   * *   **IDC**: a self-managed database instance that is not deployed on Alibaba Cloud.
   * 
   * >  The value IDC indicates that the instance is deployed in a data center.
   * 
   * @example
   * RDS
   */
  instanceArea?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * rds.mysql.s2.xlarge
   */
  instanceClass?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp10usoc1erj7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The memory capacity of the database that is deployed on the instance. Unit: MB.
   * 
   * @example
   * 32768
   */
  memory?: number;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the node on the instance.
   * 
   * @example
   * rm-bp10usoc1erj7****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The storage space of the instance. Unit: GB.
   * 
   * @example
   * 150
   */
  storage?: number;
  /**
   * @remarks
   * The unique identifier of the instance.
   * 
   * @example
   * hdm_3063db6792965c080a4bcb6e6304****
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the instance is deployed.
   * 
   * @example
   * vpc-bp1knt7m55z9exoo7****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      category: 'Category',
      cpu: 'Cpu',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceAlias: 'InstanceAlias',
      instanceArea: 'InstanceArea',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      memory: 'Memory',
      networkType: 'NetworkType',
      nodeId: 'NodeId',
      region: 'Region',
      storage: 'Storage',
      uuid: 'Uuid',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      category: 'string',
      cpu: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceAlias: 'string',
      instanceArea: 'string',
      instanceClass: 'string',
      instanceId: 'string',
      memory: 'number',
      networkType: 'string',
      nodeId: 'string',
      region: 'string',
      storage: 'number',
      uuid: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the autonomy service is enabled.
   */
  autoFunction?: GetInstanceInspectionsResponseBodyDataListAutoFunction;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * "data": { "hasDeadLock": false, "exceptionTableMap": {}, "bigTransactionCount": 0, "cpu": 4, "isRds": true, "rdsEnable": true, "enable": false, "activeSessions": [], "bigTransactionList": [], "bigSessionList": [ { "blockDuration": 0, "active": false, "Time": 0, "db": "" },
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether DAS Enterprise Edition is enabled. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * *   **2**: not supported.
   * 
   * @example
   * 0
   */
  enableDasPro?: number;
  /**
   * @remarks
   * The end time of the inspection and scoring task. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The end time must be later than the start time.
   * 
   * @example
   * 1608888296001
   */
  endTime?: number;
  /**
   * @remarks
   * The time when the task was created. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1603247192000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The information about the instance.
   */
  instance?: GetInstanceInspectionsResponseBodyDataListInstance;
  /**
   * @remarks
   * The inspection score of the instance.
   * 
   * @example
   * 100
   */
  score?: number;
  /**
   * @remarks
   * The scores that are deducted for the instance.
   */
  scoreMap?: { [key: string]: any };
  /**
   * @remarks
   * The start time of the inspection and scoring task. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1608888296000
   */
  startTime?: number;
  /**
   * @remarks
   * The state of the inspection and scoring task. Valid values:
   * 
   * *   **0**: The task is waiting for execution.
   * *   **1**: The task is in progress.
   * *   **2**: The task is complete.
   * 
   * @example
   * 2
   */
  state?: number;
  /**
   * @remarks
   * The mode in which the inspection and scoring task was initiated. Valid values:
   * 
   * *   **0**: automatic mode.
   * *   **1**: manual mode.
   * 
   * @example
   * 0
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      autoFunction: 'AutoFunction',
      data: 'Data',
      enableDasPro: 'EnableDasPro',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      instance: 'Instance',
      score: 'Score',
      scoreMap: 'ScoreMap',
      startTime: 'StartTime',
      state: 'State',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoFunction: GetInstanceInspectionsResponseBodyDataListAutoFunction,
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      enableDasPro: 'number',
      endTime: 'number',
      gmtCreate: 'number',
      instance: GetInstanceInspectionsResponseBodyDataListInstance,
      score: 'number',
      scoreMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      startTime: 'number',
      state: 'number',
      taskType: 'number',
    };
  }

  validate() {
    if(this.autoFunction && typeof (this.autoFunction as any).validate === 'function') {
      (this.autoFunction as any).validate();
    }
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    if(this.scoreMap) {
      $dara.Model.validateMap(this.scoreMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The detailed information.
   */
  list?: GetInstanceInspectionsResponseBodyDataList[];
  /**
   * @remarks
   * The page number. The value returned is a positive integer. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
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
   * 4
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetInstanceInspectionsResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details.
   */
  data?: GetInstanceInspectionsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, Successful is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInstanceInspectionsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

