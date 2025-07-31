// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyPageResultDataNodeInfoCreator extends $dara.Model {
  /**
   * @example
   * 21313112
   */
  id?: string;
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
   * @example
   * 21313112
   */
  id?: string;
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
   * @example
   * 21313112
   */
  id?: string;
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
  bizUnitName?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  createTime?: string;
  creator?: ListInstancesResponseBodyPageResultDataNodeInfoCreator;
  description?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * DATA_PROCES
   */
  from?: string;
  /**
   * @example
   * false
   */
  hasDev?: boolean;
  /**
   * @example
   * true
   */
  hasProd?: boolean;
  /**
   * @example
   * n_132331
   */
  id?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  lastModifiedTime?: string;
  modifier?: ListInstancesResponseBodyPageResultDataNodeInfoModifier;
  name?: string;
  ownerList?: ListInstancesResponseBodyPageResultDataNodeInfoOwnerList[];
  priorityList?: string[];
  resourceGroupList?: string[];
  /**
   * @example
   * false
   */
  schedulePaused?: boolean;
  schedulePeriodList?: string[];
  /**
   * @example
   * SHELL
   */
  subDetailType?: string;
  /**
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
   * @example
   * 2024-05-30
   */
  bizDate?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  dueTime?: string;
  /**
   * @example
   * 60s
   */
  duration?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  endExecuteTime?: number;
  /**
   * @example
   * xx
   */
  extendInfo?: string;
  /**
   * @example
   * t_23231
   */
  id?: string;
  /**
   * @example
   * 1
   */
  index?: number;
  nodeInfo?: ListInstancesResponseBodyPageResultDataNodeInfo;
  /**
   * @example
   * 2024-05-30 16:46:13
   */
  startExecuteTime?: number;
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
  data?: ListInstancesResponseBodyPageResultData[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListInstancesResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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

