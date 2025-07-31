// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoCreator extends $dara.Model {
  /**
   * @example
   * 1001012
   */
  id?: string;
  /**
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
   * @example
   * 1001012
   */
  id?: string;
  /**
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
   * @example
   * 1001012
   */
  id?: string;
  /**
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
   * @example
   * xx测试
   */
  bizUnitName?: string;
  /**
   * @example
   * 2024-01-30 10:08:49
   */
  createTime?: string;
  creator?: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoCreator;
  /**
   * @example
   * xx测试
   */
  description?: string;
  /**
   * @example
   * true
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
   * n_239496
   */
  id?: string;
  /**
   * @example
   * 2024-01-30 10:08:49
   */
  lastModifiedTime?: string;
  modifier?: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoModifier;
  /**
   * @example
   * xx测试
   */
  name?: string;
  ownerList?: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoOwnerList[];
  priorityList?: string[];
  resourceGroupList?: string[];
  /**
   * @example
   * true
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
   * @example
   * 2024-04-01
   */
  bizDate?: number;
  /**
   * @example
   * 2024-04-02
   */
  dueTime?: number;
  /**
   * @example
   * 60
   */
  duration?: string;
  /**
   * @example
   * 2024-04-12 00:25:02
   */
  endExecuteTime?: number;
  /**
   * @example
   * {"a":"b"}
   */
  extendInfo?: string;
  /**
   * @example
   * t_239496_20210411_246982077481
   */
  id?: string;
  /**
   * @example
   * 1
   */
  index?: number;
  nodeInfo?: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfo;
  /**
   * @example
   * 2024-04-12 00:00:00
   */
  startExecuteTime?: number;
  statusList?: string[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  instanceList?: GetSupplementDagrunInstanceResponseBodyInstanceList[];
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

