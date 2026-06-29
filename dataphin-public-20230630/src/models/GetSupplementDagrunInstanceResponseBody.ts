// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoCreator extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1001012
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx测试
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

export class GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoModifier extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1001012
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx测试
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

export class GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoOwnerList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1001012
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx测试
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

export class GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The business unit.
   * 
   * @example
   * xx测试
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-30 10:08:49
   */
  createTime?: string;
  /**
   * @remarks
   * The creator of the node.
   */
  creator?: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoCreator;
  /**
   * @remarks
   * The node description.
   * 
   * @example
   * xx测试
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the node is a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The source business system. Valid values:
   * 
   * - DATA_PROCESS: code development.
   * - BLACK_BOX: black box.
   * - ONE_ID: extraction.
   * - PIPELINE: pipeline.
   * 
   * @example
   * DATA_PROCESS
   */
  from?: string;
  /**
   * @remarks
   * Indicates whether the node exists in the development environment.
   * 
   * @example
   * true
   */
  hasDev?: boolean;
  /**
   * @remarks
   * Indicates whether the node exists in the production environment.
   * 
   * @example
   * true
   */
  hasProd?: boolean;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * n_239496
   */
  id?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2024-01-30 10:08:49
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The modifier.
   */
  modifier?: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoModifier;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * The owners of the node.
   */
  ownerList?: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoOwnerList[];
  /**
   * @remarks
   * The priority. Valid values:
   * 
   * - HIGHEST
   * - HIGH
   * - MIDDLE
   * - LOW
   * - LOWEST.
   */
  priorityList?: string[];
  /**
   * @remarks
   * The schedule resource groups.
   */
  resourceGroupList?: string[];
  /**
   * @remarks
   * Indicates whether the node is paused.
   * 
   * @example
   * true
   */
  schedulePaused?: boolean;
  /**
   * @remarks
   * The scheduling period. Valid values:
   * 
   * - MINUTELY
   * - HOURLY
   * - DAILY
   * - WEEKLY
   * - MONTHLY
   * - QUARTERLY.
   */
  schedulePeriodList?: string[];
  /**
   * @remarks
   * The node subtype.
   * 
   * @example
   * SHELL
   */
  subDetailType?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * - DATA_PROCESS: code node.
   * - BBOX_LOGIC_TABLE_NODE: black box logical table node.
   * - ONE_ID_LABEL: extraction label node.
   * - ONE_ID_RULE: extraction label node.
   * - PIPELINE_NODE: pipeline node.
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
      creator: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoCreator,
      description: 'string',
      dryRun: 'boolean',
      from: 'string',
      hasDev: 'boolean',
      hasProd: 'boolean',
      id: 'string',
      lastModifiedTime: 'string',
      modifier: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoModifier,
      name: 'string',
      ownerList: { 'type': 'array', 'itemType': GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoOwnerList },
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

export class GetSupplementDagrunInstanceResponseBodyInstanceList extends $dara.Model {
  /**
   * @remarks
   * The business date.
   * 
   * @example
   * 2024-04-01
   */
  bizDate?: number;
  /**
   * @remarks
   * The scheduled date.
   * 
   * @example
   * 2024-04-02
   */
  dueTime?: number;
  /**
   * @remarks
   * The execution duration. Unit: seconds.
   * 
   * @example
   * 60
   */
  duration?: string;
  /**
   * @remarks
   * The end time of the execution.
   * 
   * @example
   * 2024-04-12 00:25:02
   */
  endExecuteTime?: number;
  /**
   * @remarks
   * The extended information. This field contains information specific to instances of different business systems, such as the fileId of a pipeline, whether a logical table is a hierarchy dimension table, mid-node information, and instance output names.
   * 
   * @example
   * {"a":"b"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * t_239496_20210411_246982077481
   */
  id?: string;
  /**
   * @remarks
   * The sequence number of the hourly or minutely instance.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The details of the node associated with the instance.
   */
  nodeInfo?: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfo;
  /**
   * @remarks
   * The start time of the execution.
   * 
   * @example
   * 2024-04-12 00:00:00
   */
  startExecuteTime?: number;
  /**
   * @remarks
   * The list of instance statuses. A physical instance list contains only one status. Valid values:
   * 
   * - NIT: init.
   * - WATING: waiting.
   * - RUNNING: running.
   * - SUCCESS: succeeded.
   * - FAILED: failed.
   */
  statusList?: string[];
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - NORMAL: periodic instance.
   * - SUPPLEMENT: data backfill instance.
   * - MANUAL: manual instance.
   * 
   * @example
   * SUPPLEMENT
   */
  type?: string;
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
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'number',
      dueTime: 'number',
      duration: 'string',
      endExecuteTime: 'number',
      extendInfo: 'string',
      id: 'string',
      index: 'number',
      nodeInfo: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfo,
      startExecuteTime: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
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

export class GetSupplementDagrunInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of instances.
   */
  instanceList?: GetSupplementDagrunInstanceResponseBodyInstanceList[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
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
      instanceList: 'InstanceList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceList: { 'type': 'array', 'itemType': GetSupplementDagrunInstanceResponseBodyInstanceList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

