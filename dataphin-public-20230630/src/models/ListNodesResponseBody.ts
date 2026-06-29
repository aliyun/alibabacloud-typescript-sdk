// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesResponseBodyPageResultNodeListCreator extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 23222
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

export class ListNodesResponseBodyPageResultNodeListModifier extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 311131
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

export class ListNodesResponseBodyPageResultNodeListOwnerList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 23222
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

export class ListNodesResponseBodyPageResultNodeListProjectInfo extends $dara.Model {
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1121321
   */
  id?: string;
  /**
   * @remarks
   * The project name.
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

export class ListNodesResponseBodyPageResultNodeList extends $dara.Model {
  /**
   * @remarks
   * The name of the business unit to which the node belongs.
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
   * 2024-05-30 16:47:13
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   */
  creator?: ListNodesResponseBodyPageResultNodeListCreator;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * xx test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {"xx":"zz"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * DATA_PROCESS
   */
  from?: string;
  /**
   * @remarks
   * Indicates whether a development environment exists.
   * 
   * @example
   * true
   */
  hasDev?: boolean;
  /**
   * @remarks
   * Indicates whether a production environment exists.
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
   * n_31111
   */
  id?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2024-05-30 16:47:13
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The user who last modified the node.
   */
  modifier?: ListNodesResponseBodyPageResultNodeListModifier;
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
   * The owner.
   */
  ownerList?: ListNodesResponseBodyPageResultNodeListOwnerList[];
  /**
   * @remarks
   * The priority.
   */
  priorityList?: string[];
  /**
   * @remarks
   * The project to which the node belongs.
   */
  projectInfo?: ListNodesResponseBodyPageResultNodeListProjectInfo;
  /**
   * @remarks
   * Indicates whether scheduling is paused.
   * 
   * @example
   * true
   */
  schedulePaused?: boolean;
  /**
   * @remarks
   * The scheduling period.
   */
  schedulePeriodList?: string[];
  /**
   * @remarks
   * The sub-business types. Valid values:
   * - MAX_COMPUTE_SQL
   * - HIVE_SQL
   * - SHELL
   * - PYTHON
   * - ONE_SERVICE_SQL
   * - DATABASE_SQL.
   * 
   * @example
   * SHELL
   */
  subDetailType?: string;
  /**
   * @remarks
   * The node type.
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
  /**
   * @remarks
   * The list of nodes on the current page.
   */
  nodeList?: ListNodesResponseBodyPageResultNodeList[];
  /**
   * @remarks
   * The total number of records.
   * 
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
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The paging query result.
   */
  pageResult?: ListNodesResponseBodyPageResult;
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

