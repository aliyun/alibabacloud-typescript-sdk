// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyPageResultDataNodeInfoCreator extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 21313112
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx_test
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

export class ListInstancesResponseBodyPageResultDataNodeInfoModifier extends $dara.Model {
  /**
   * @remarks
   * The username.
   * 
   * @example
   * 21313112
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx_test
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

export class ListInstancesResponseBodyPageResultDataNodeInfoOwnerList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 21313112
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx_test
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

export class ListInstancesResponseBodyPageResultDataNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The business unit.
   * 
   * @example
   * xx_test
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-05-30 16:47:13
   */
  createTime?: string;
  /**
   * @remarks
   * The creator of the node.
   */
  creator?: ListInstancesResponseBodyPageResultDataNodeInfoCreator;
  /**
   * @remarks
   * The description of the node.
   * 
   * @example
   * xx test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the node is a dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The source of the node.
   * 
   * @example
   * DATA_PROCES
   */
  from?: string;
  /**
   * @remarks
   * Indicates whether the node has a development environment.
   * 
   * @example
   * false
   */
  hasDev?: boolean;
  /**
   * @remarks
   * Indicates whether the node has a production environment.
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
   * n_132331
   */
  id?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2024-05-30 16:47:13
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The modifier of the node.
   */
  modifier?: ListInstancesResponseBodyPageResultDataNodeInfoModifier;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * xx_test
   */
  name?: string;
  /**
   * @remarks
   * The owner.
   */
  ownerList?: ListInstancesResponseBodyPageResultDataNodeInfoOwnerList[];
  /**
   * @remarks
   * The priority. Valid values:
   * - HIGHEST
   * - HIGH
   * - MIDDLE
   * - LOW
   * - LOWEST
   */
  priorityList?: string[];
  /**
   * @remarks
   * The schedule resource groups for execution.
   */
  resourceGroupList?: string[];
  /**
   * @remarks
   * Specifies whether scheduling is paused.
   * 
   * @example
   * false
   */
  schedulePaused?: boolean;
  /**
   * @remarks
   * The scheduling period.
   */
  schedulePeriodList?: string[];
  /**
   * @remarks
   * The sub-business type. Valid values:
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
   * The business type of the node. Valid values:
   * - SCRIPT: script.
   * - LOGICAL_TABLE: logical table.
   * 
   * @example
   * DATA_PROCES
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
      creator: ListInstancesResponseBodyPageResultDataNodeInfoCreator,
      description: 'string',
      dryRun: 'boolean',
      from: 'string',
      hasDev: 'boolean',
      hasProd: 'boolean',
      id: 'string',
      lastModifiedTime: 'string',
      modifier: ListInstancesResponseBodyPageResultDataNodeInfoModifier,
      name: 'string',
      ownerList: { 'type': 'array', 'itemType': ListInstancesResponseBodyPageResultDataNodeInfoOwnerList },
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

export class ListInstancesResponseBodyPageResultData extends $dara.Model {
  /**
   * @remarks
   * The business date.
   * 
   * @example
   * 2024-05-30
   */
  bizDate?: string;
  /**
   * @remarks
   * The scheduling time.
   * 
   * @example
   * 2024-05-30 16:47:13
   */
  dueTime?: string;
  /**
   * @remarks
   * The execution duration. Unit: seconds.
   * 
   * @example
   * 60s
   */
  duration?: string;
  /**
   * @remarks
   * The execution end time.
   * 
   * @example
   * 2024-05-30 16:47:13
   */
  endExecuteTime?: number;
  /**
   * @remarks
   * The extended node information, which contains properties specific to different business system instances, such as the fileId of a pipeline, whether a logical table uses hierarchy dimensions, mid node information, and instance output names.
   * 
   * @example
   * xx
   */
  extendInfo?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * t_23231
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
   * The node details.
   */
  nodeInfo?: ListInstancesResponseBodyPageResultDataNodeInfo;
  /**
   * @remarks
   * The execution start time.
   * 
   * @example
   * 2024-05-30 16:46:13
   */
  startExecuteTime?: number;
  /**
   * @remarks
   * The instance status.
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
      nodeInfo: ListInstancesResponseBodyPageResultDataNodeInfo,
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

export class ListInstancesResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The paginated records.
   */
  data?: ListInstancesResponseBodyPageResultData[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 107
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListInstancesResponseBodyPageResultData },
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

export class ListInstancesResponseBody extends $dara.Model {
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
   * The error message returned if the request failed.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The paginated result.
   */
  pageResult?: ListInstancesResponseBodyPageResult;
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
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListInstancesResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

