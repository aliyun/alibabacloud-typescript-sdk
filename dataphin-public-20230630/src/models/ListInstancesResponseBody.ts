// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyPageResultDataNodeInfoCreator extends $dara.Model {
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 21313112
   */
  id?: string;
  /**
   * @remarks
   * Username
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

export class ListInstancesResponseBodyPageResultDataNodeInfoModifier extends $dara.Model {
  /**
   * @remarks
   * Username
   * 
   * @example
   * 21313112
   */
  id?: string;
  /**
   * @remarks
   * Username
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

export class ListInstancesResponseBodyPageResultDataNodeInfoOwnerList extends $dara.Model {
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 21313112
   */
  id?: string;
  /**
   * @remarks
   * Username
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

export class ListInstancesResponseBodyPageResultDataNodeInfo extends $dara.Model {
  /**
   * @remarks
   * Business Unit
   * 
   * @example
   * xx测试
   */
  bizUnitName?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2024-05-30 16:47:13
   */
  createTime?: string;
  /**
   * @remarks
   * Node Creator
   */
  creator?: ListInstancesResponseBodyPageResultDataNodeInfoCreator;
  /**
   * @remarks
   * Node Description
   * 
   * @example
   * xx 测试
   */
  description?: string;
  /**
   * @remarks
   * Whether to dry run
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Node Source
   * 
   * @example
   * DATA_PROCES
   */
  from?: string;
  /**
   * @remarks
   * Whether a development environment exists
   * 
   * @example
   * false
   */
  hasDev?: boolean;
  /**
   * @remarks
   * Whether a production environment exists
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
   * n_132331
   */
  id?: string;
  /**
   * @remarks
   * Last Modified Time
   * 
   * @example
   * 2024-05-30 16:47:13
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * Modifier
   */
  modifier?: ListInstancesResponseBodyPageResultDataNodeInfoModifier;
  /**
   * @remarks
   * Node Name
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * Owner
   */
  ownerList?: ListInstancesResponseBodyPageResultDataNodeInfoOwnerList[];
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
   * Running Resource Group
   */
  resourceGroupList?: string[];
  /**
   * @remarks
   * Whether scheduling is paused
   * 
   * @example
   * false
   */
  schedulePaused?: boolean;
  /**
   * @remarks
   * Schedule Period
   */
  schedulePeriodList?: string[];
  /**
   * @remarks
   * Sub-business Type
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
   * Node Business Type
   * - SCRIPT: Script
   * - LOGICAL_TABLE: Logical Table
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
   * Business Date
   * 
   * @example
   * 2024-05-30
   */
  bizDate?: string;
  /**
   * @remarks
   * Schedule Time
   * 
   * @example
   * 2024-05-30 16:47:13
   */
  dueTime?: string;
  /**
   * @remarks
   * Running duration, in seconds
   * 
   * @example
   * 60s
   */
  duration?: string;
  /**
   * @remarks
   * Execution End Time
   * 
   * @example
   * 2024-05-30 16:47:13
   */
  endExecuteTime?: number;
  /**
   * @remarks
   * Node extended information: specific information for instances from different business systems, such as pipeline fileId, whether the logical table has hierarchical dimensions, mid node information, and instance output name
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
   * Hourly/Minutely instance sequence number
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Node Details
   */
  nodeInfo?: ListInstancesResponseBodyPageResultDataNodeInfo;
  /**
   * @remarks
   * Execution start time
   * 
   * @example
   * 2024-05-30 16:46:13
   */
  startExecuteTime?: number;
  /**
   * @remarks
   * Instance Status
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
   * Paginated records
   */
  data?: ListInstancesResponseBodyPageResultData[];
  /**
   * @remarks
   * Total number of records
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
   * Request error code. OK indicates a normal request.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Backend response HTTP code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Request error message
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Paginated result
   */
  pageResult?: ListInstancesResponseBodyPageResult;
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
   * Whether the request was successful
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

