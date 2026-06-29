// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalInstanceResponseBodyInstanceNodeInfoCreator extends $dara.Model {
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 2323111
   */
  id?: string;
  /**
   * @remarks
   * Username
   * 
   * @example
   * zhangsan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceResponseBodyInstanceNodeInfoModifier extends $dara.Model {
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 2323111
   */
  id?: string;
  /**
   * @remarks
   * Username
   * 
   * @example
   * zhangsan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceResponseBodyInstanceNodeInfoOwnerList extends $dara.Model {
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 2323111
   */
  id?: string;
  /**
   * @remarks
   * Username
   * 
   * @example
   * zhangsan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceResponseBodyInstanceNodeInfo extends $dara.Model {
  /**
   * @remarks
   * Business unit name
   * 
   * @example
   * xx
   */
  bizUnitName?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2023-02-02 23:53:17
   */
  createTime?: string;
  /**
   * @remarks
   * Creator
   */
  creator?: GetPhysicalInstanceResponseBodyInstanceNodeInfoCreator;
  /**
   * @remarks
   * Description
   * 
   * @example
   * xx 测试
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether this is a dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Source system of the node
   * 
   * @example
   * DATA_PROCESS
   */
  from?: string;
  /**
   * @remarks
   * Indicates whether the development environment exists.
   * 
   * @example
   * true
   */
  hasDev?: boolean;
  /**
   * @remarks
   * Indicates whether the production environment exists.
   * 
   * @example
   * true
   */
  hasProd?: boolean;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * n_3232312
   */
  id?: string;
  /**
   * @remarks
   * Last modified time
   * 
   * @example
   * 2024-02-02 23:53:17
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * Modifier
   */
  modifier?: GetPhysicalInstanceResponseBodyInstanceNodeInfoModifier;
  /**
   * @remarks
   * Node name
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * Owner list
   */
  ownerList?: GetPhysicalInstanceResponseBodyInstanceNodeInfoOwnerList[];
  /**
   * @remarks
   * Priority
   * - HIGHEST
   * - HIGH
   * - MIDDLE
   * - LOW
   * - LOWEST
   */
  priorityList?: string[];
  /**
   * @remarks
   * Resource group list
   */
  resourceGroupList?: string[];
  /**
   * @remarks
   * Indicates whether scheduling is paused.
   * 
   * @example
   * false
   */
  schedulePaused?: boolean;
  /**
   * @remarks
   * Scheduling period
   * - YEARLY
   * - MONTHLY
   * - WEEKLY
   * - DAILY
   * - HOURLY
   * - MINUTELY
   */
  schedulePeriodList?: string[];
  /**
   * @remarks
   * Sub-business type
   * - MAX_COMPUTE_SQL
   * - HIVE_SQL
   * - SHELL
   * - PYTHON
   * - ONE_SERVICE_SQL
   * - DATABASE_SQL
   * 
   * @example
   * SHELL
   */
  subDetailType?: string;
  /**
   * @remarks
   * Node type
   * - BBOX_LOGIC_TABLE_NODE: Logical table node
   * - BBOX_LOGIC_FIELD_NODE: Logical field node
   * - BBOX_LOGIC_FIELD_GROUP_NODE: Field group node
   * - BBOX_INNER_TEMP_NODE: Logical table temp node
   * - DATA_PROCESS: Code task
   * - STREAM_TASK_NODE: Real-time task
   * - PIPELINE_NODE: Pipeline node
   * - FLINK_BATCH: Flink batch task
   * - ODM_NODE: ODM node
   * 
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitName: 'BizUnitName',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      dryRun: 'DryRun',
      from: 'From',
      hasDev: 'HasDev',
      hasProd: 'HasProd',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      modifier: 'Modifier',
      name: 'Name',
      ownerList: 'OwnerList',
      priorityList: 'PriorityList',
      resourceGroupList: 'ResourceGroupList',
      schedulePaused: 'SchedulePaused',
      schedulePeriodList: 'SchedulePeriodList',
      subDetailType: 'SubDetailType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitName: 'string',
      createTime: 'string',
      creator: GetPhysicalInstanceResponseBodyInstanceNodeInfoCreator,
      description: 'string',
      dryRun: 'boolean',
      from: 'string',
      hasDev: 'boolean',
      hasProd: 'boolean',
      id: 'string',
      lastModifiedTime: 'string',
      modifier: GetPhysicalInstanceResponseBodyInstanceNodeInfoModifier,
      name: 'string',
      ownerList: { 'type': 'array', 'itemType': GetPhysicalInstanceResponseBodyInstanceNodeInfoOwnerList },
      priorityList: { 'type': 'array', 'itemType': 'string' },
      resourceGroupList: { 'type': 'array', 'itemType': 'string' },
      schedulePaused: 'boolean',
      schedulePeriodList: { 'type': 'array', 'itemType': 'string' },
      subDetailType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.modifier && typeof (this.modifier as any).validate === 'function') {
      (this.modifier as any).validate();
    }
    if(Array.isArray(this.ownerList)) {
      $dara.Model.validateArray(this.ownerList);
    }
    if(Array.isArray(this.priorityList)) {
      $dara.Model.validateArray(this.priorityList);
    }
    if(Array.isArray(this.resourceGroupList)) {
      $dara.Model.validateArray(this.resourceGroupList);
    }
    if(Array.isArray(this.schedulePeriodList)) {
      $dara.Model.validateArray(this.schedulePeriodList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * Business date
   * 
   * @example
   * 2023-06-25
   */
  bizDate?: string;
  /**
   * @remarks
   * Scheduled time
   * 
   * @example
   * 2023-06-27 00:30:00
   */
  dueTime?: string;
  /**
   * @remarks
   * Execution duration
   * 
   * @example
   * 3600s
   */
  duration?: string;
  /**
   * @remarks
   * End execution time
   * 
   * @example
   * 2023-06-27 02:30:00
   */
  endExecuteTime?: number;
  /**
   * @remarks
   * Extended information
   * 
   * @example
   * xx
   */
  extendInfo?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * t_23231
   */
  id?: string;
  /**
   * @remarks
   * Running instance index
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Node details
   */
  nodeInfo?: GetPhysicalInstanceResponseBodyInstanceNodeInfo;
  /**
   * @remarks
   * Start execution time
   * 
   * @example
   * 2023-06-27 01:30:00
   */
  startExecuteTime?: number;
  /**
   * @remarks
   * Status list
   */
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      dueTime: 'DueTime',
      duration: 'Duration',
      endExecuteTime: 'EndExecuteTime',
      extendInfo: 'ExtendInfo',
      id: 'Id',
      index: 'Index',
      nodeInfo: 'NodeInfo',
      startExecuteTime: 'StartExecuteTime',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      dueTime: 'string',
      duration: 'string',
      endExecuteTime: 'number',
      extendInfo: 'string',
      id: 'string',
      index: 'number',
      nodeInfo: GetPhysicalInstanceResponseBodyInstanceNodeInfo,
      startExecuteTime: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.nodeInfo && typeof (this.nodeInfo as any).validate === 'function') {
      (this.nodeInfo as any).validate();
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Instance details
   */
  instance?: GetPhysicalInstanceResponseBodyInstance;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instance: 'Instance',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instance: GetPhysicalInstanceResponseBodyInstance,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

