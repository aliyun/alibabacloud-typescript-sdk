// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesResponseBodyPageResultNodeListCreator extends $dara.Model {
  /**
   * @example
   * 23222
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

export class ListNodesResponseBodyPageResultNodeListModifier extends $dara.Model {
  /**
   * @example
   * 311131
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

export class ListNodesResponseBodyPageResultNodeListOwnerList extends $dara.Model {
  /**
   * @example
   * 23222
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

export class ListNodesResponseBodyPageResultNodeListProjectInfo extends $dara.Model {
  /**
   * @example
   * 1121321
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

export class ListNodesResponseBodyPageResultNodeList extends $dara.Model {
  bizUnitName?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  createTime?: string;
  creator?: ListNodesResponseBodyPageResultNodeListCreator;
  /**
   * @example
   * xx test
   */
  description?: string;
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @example
   * {"xx":"zz"}
   */
  extendInfo?: string;
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
   * n_31111
   */
  id?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  lastModifiedTime?: string;
  modifier?: ListNodesResponseBodyPageResultNodeListModifier;
  name?: string;
  ownerList?: ListNodesResponseBodyPageResultNodeListOwnerList[];
  priorityList?: string[];
  projectInfo?: ListNodesResponseBodyPageResultNodeListProjectInfo;
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
      extendInfo: 'ExtendInfo',
      from: 'From',
      hasDev: 'HasDev',
      hasProd: 'HasProd',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      modifier: 'Modifier',
      name: 'Name',
      ownerList: 'OwnerList',
      priorityList: 'PriorityList',
      projectInfo: 'ProjectInfo',
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
      creator: ListNodesResponseBodyPageResultNodeListCreator,
      description: 'string',
      dryRun: 'boolean',
      extendInfo: 'string',
      from: 'string',
      hasDev: 'boolean',
      hasProd: 'boolean',
      id: 'string',
      lastModifiedTime: 'string',
      modifier: ListNodesResponseBodyPageResultNodeListModifier,
      name: 'string',
      ownerList: { 'type': 'array', 'itemType': ListNodesResponseBodyPageResultNodeListOwnerList },
      priorityList: { 'type': 'array', 'itemType': 'string' },
      projectInfo: ListNodesResponseBodyPageResultNodeListProjectInfo,
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
    if(this.projectInfo && typeof (this.projectInfo as any).validate === 'function') {
      (this.projectInfo as any).validate();
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

export class ListNodesResponseBodyPageResult extends $dara.Model {
  nodeList?: ListNodesResponseBodyPageResultNodeList[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodeList: 'NodeList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeList: { 'type': 'array', 'itemType': ListNodesResponseBodyPageResultNodeList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodeList)) {
      $dara.Model.validateArray(this.nodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $dara.Model {
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
  pageResult?: ListNodesResponseBodyPageResult;
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
      pageResult: ListNodesResponseBodyPageResult,
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

