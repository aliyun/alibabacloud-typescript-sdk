// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalInstanceResponseBodyInstanceNodeInfoCreator extends $dara.Model {
  /**
   * @example
   * 2323111
   */
  id?: string;
  /**
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
   * @example
   * 2323111
   */
  id?: string;
  /**
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
   * @example
   * 2323111
   */
  id?: string;
  /**
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
   * @example
   * xx
   */
  bizUnitName?: string;
  /**
   * @example
   * 2023-02-02 23:53:17
   */
  createTime?: string;
  creator?: GetPhysicalInstanceResponseBodyInstanceNodeInfoCreator;
  description?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * DATA_PROCESS
   */
  from?: string;
  /**
   * @example
   * true
   */
  hasDev?: boolean;
  /**
   * @example
   * true
   */
  hasProd?: boolean;
  /**
   * @example
   * n_3232312
   */
  id?: string;
  /**
   * @example
   * 2024-02-02 23:53:17
   */
  lastModifiedTime?: string;
  modifier?: GetPhysicalInstanceResponseBodyInstanceNodeInfoModifier;
  name?: string;
  ownerList?: GetPhysicalInstanceResponseBodyInstanceNodeInfoOwnerList[];
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
   * @example
   * 2023-06-25
   */
  bizDate?: string;
  /**
   * @example
   * 2023-06-27 00:30:00
   */
  dueTime?: string;
  /**
   * @example
   * 3600s
   */
  duration?: string;
  /**
   * @example
   * 2023-06-27 02:30:00
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
  nodeInfo?: GetPhysicalInstanceResponseBodyInstanceNodeInfo;
  /**
   * @example
   * 2023-06-27 01:30:00
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  instance?: GetPhysicalInstanceResponseBodyInstance;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
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

