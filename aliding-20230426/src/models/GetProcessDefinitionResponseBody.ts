// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProcessDefinitionResponseBodyOriginatorMasterDataDepartments extends $dara.Model {
  /**
   * @example
   * 开发部
   */
  deptName?: string;
  /**
   * @example
   * development department
   */
  deptNameInEnglish?: string;
  /**
   * @example
   * develop-A
   */
  deptNo?: string;
  /**
   * @example
   * 总部-开发部
   */
  deptPath?: string;
  /**
   * @example
   * xxafafaf
   */
  humanSourceGroupOrderNumber?: string;
  /**
   * @example
   * 123311221
   */
  humanSourceGroupWorkNo?: string;
  /**
   * @example
   * 12345
   */
  id?: number;
  /**
   * @example
   * 1732245789
   */
  masterWorkNo?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'DeptName',
      deptNameInEnglish: 'DeptNameInEnglish',
      deptNo: 'DeptNo',
      deptPath: 'DeptPath',
      humanSourceGroupOrderNumber: 'HumanSourceGroupOrderNumber',
      humanSourceGroupWorkNo: 'HumanSourceGroupWorkNo',
      id: 'Id',
      masterWorkNo: 'MasterWorkNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      deptNameInEnglish: 'string',
      deptNo: 'string',
      deptPath: 'string',
      humanSourceGroupOrderNumber: 'string',
      humanSourceGroupWorkNo: 'string',
      id: 'number',
      masterWorkNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProcessDefinitionResponseBodyOriginator extends $dara.Model {
  /**
   * @example
   * 开发部成立于2000年
   */
  departmentDescription?: string;
  /**
   * @example
   * ZhangSan
   */
  displayEnName?: string;
  /**
   * @example
   * 测试应用
   */
  displayName?: string;
  masterDataDepartments?: GetProcessDefinitionResponseBodyOriginatorMasterDataDepartments[];
  /**
   * @example
   * o-YDJKINSxxx
   */
  orderNumber?: string;
  /**
   * @example
   * https://abc.com/a.png
   */
  personalPhoto?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * wang123
   */
  tbWang?: string;
  /**
   * @example
   * manager123
   */
  userId?: string;
  /**
   * @example
   * 张三
   */
  userInfo?: string;
  static names(): { [key: string]: string } {
    return {
      departmentDescription: 'DepartmentDescription',
      displayEnName: 'DisplayEnName',
      displayName: 'DisplayName',
      masterDataDepartments: 'MasterDataDepartments',
      orderNumber: 'OrderNumber',
      personalPhoto: 'PersonalPhoto',
      status: 'Status',
      tbWang: 'TbWang',
      userId: 'UserId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentDescription: 'string',
      displayEnName: 'string',
      displayName: 'string',
      masterDataDepartments: { 'type': 'array', 'itemType': GetProcessDefinitionResponseBodyOriginatorMasterDataDepartments },
      orderNumber: 'string',
      personalPhoto: 'string',
      status: 'string',
      tbWang: 'string',
      userId: 'string',
      userInfo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.masterDataDepartments)) {
      $dara.Model.validateArray(this.masterDataDepartments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProcessDefinitionResponseBodyOwnersMasterDataDepartments extends $dara.Model {
  /**
   * @example
   * 开发部
   */
  deptName?: string;
  /**
   * @example
   * development department
   */
  deptNameInEnglish?: string;
  /**
   * @example
   * develop-A
   */
  deptNo?: string;
  /**
   * @example
   * 总部-开发部
   */
  deptPath?: string;
  /**
   * @example
   * xxafafaf
   */
  humanSourceGroupOrderNumber?: string;
  /**
   * @example
   * 123311221
   */
  humanSourceGroupWorkNo?: string;
  /**
   * @example
   * 12345
   */
  id?: number;
  /**
   * @example
   * 1732245789
   */
  masterWorkNo?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'DeptName',
      deptNameInEnglish: 'DeptNameInEnglish',
      deptNo: 'DeptNo',
      deptPath: 'DeptPath',
      humanSourceGroupOrderNumber: 'HumanSourceGroupOrderNumber',
      humanSourceGroupWorkNo: 'HumanSourceGroupWorkNo',
      id: 'Id',
      masterWorkNo: 'MasterWorkNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      deptNameInEnglish: 'string',
      deptNo: 'string',
      deptPath: 'string',
      humanSourceGroupOrderNumber: 'string',
      humanSourceGroupWorkNo: 'string',
      id: 'number',
      masterWorkNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProcessDefinitionResponseBodyOwners extends $dara.Model {
  /**
   * @example
   * 开发部成立于2000年
   */
  departmentDescription?: string;
  /**
   * @example
   * ZhangSan
   */
  displayEnName?: string;
  /**
   * @example
   * 测试应用
   */
  displayName?: string;
  masterDataDepartments?: GetProcessDefinitionResponseBodyOwnersMasterDataDepartments[];
  /**
   * @example
   * o-YDJKINSxxx
   */
  orderNumber?: string;
  /**
   * @example
   * https://abc.com/a.png
   */
  personalPhoto?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * wang123
   */
  tbWang?: string;
  /**
   * @example
   * manager123
   */
  userId?: string;
  /**
   * @example
   * 张三
   */
  userInfo?: string;
  static names(): { [key: string]: string } {
    return {
      departmentDescription: 'DepartmentDescription',
      displayEnName: 'DisplayEnName',
      displayName: 'DisplayName',
      masterDataDepartments: 'MasterDataDepartments',
      orderNumber: 'OrderNumber',
      personalPhoto: 'PersonalPhoto',
      status: 'Status',
      tbWang: 'TbWang',
      userId: 'UserId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentDescription: 'string',
      displayEnName: 'string',
      displayName: 'string',
      masterDataDepartments: { 'type': 'array', 'itemType': GetProcessDefinitionResponseBodyOwnersMasterDataDepartments },
      orderNumber: 'string',
      personalPhoto: 'string',
      status: 'string',
      tbWang: 'string',
      userId: 'string',
      userInfo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.masterDataDepartments)) {
      $dara.Model.validateArray(this.masterDataDepartments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProcessDefinitionResponseBodyTasksActivity extends $dara.Model {
  /**
   * @example
   * act-xxaanfaf
   */
  activityId?: string;
  /**
   * @example
   * running
   */
  activityInstanceStatus?: string;
  /**
   * @example
   * activity-124
   */
  activityName?: string;
  /**
   * @example
   * redirect task
   */
  activityNameInEnglish?: string;
  /**
   * @example
   * 12345
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityInstanceStatus: 'ActivityInstanceStatus',
      activityName: 'ActivityName',
      activityNameInEnglish: 'ActivityNameInEnglish',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      activityInstanceStatus: 'string',
      activityName: 'string',
      activityNameInEnglish: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProcessDefinitionResponseBodyTasks extends $dara.Model {
  /**
   * @example
   * manager123
   */
  actionerId?: string;
  activity?: GetProcessDefinitionResponseBodyTasksActivity;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * 792
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      actionerId: 'ActionerId',
      activity: 'Activity',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionerId: 'string',
      activity: GetProcessDefinitionResponseBodyTasksActivity,
      status: 'string',
      taskId: 'number',
    };
  }

  validate() {
    if(this.activity && typeof (this.activity as any).validate === 'function') {
      (this.activity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProcessDefinitionResponseBody extends $dara.Model {
  /**
   * @example
   * FORM-EF6Y4xxx
   */
  formUuid?: string;
  originator?: GetProcessDefinitionResponseBodyOriginator;
  /**
   * @example
   * agree
   */
  outResult?: string;
  owners?: GetProcessDefinitionResponseBodyOwners[];
  /**
   * @example
   * proc-123
   */
  processId?: string;
  /**
   * @example
   * f30233fb-72e1-4xxx
   */
  processInstanceId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * running
   */
  status?: string;
  tasks?: GetProcessDefinitionResponseBodyTasks[];
  /**
   * @example
   * 李四发起的请购单
   */
  title?: string;
  variables?: { [key: string]: any };
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      formUuid: 'formUuid',
      originator: 'originator',
      outResult: 'outResult',
      owners: 'owners',
      processId: 'processId',
      processInstanceId: 'processInstanceId',
      requestId: 'requestId',
      status: 'status',
      tasks: 'tasks',
      title: 'title',
      variables: 'variables',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formUuid: 'string',
      originator: GetProcessDefinitionResponseBodyOriginator,
      outResult: 'string',
      owners: { 'type': 'array', 'itemType': GetProcessDefinitionResponseBodyOwners },
      processId: 'string',
      processInstanceId: 'string',
      requestId: 'string',
      status: 'string',
      tasks: { 'type': 'array', 'itemType': GetProcessDefinitionResponseBodyTasks },
      title: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.originator && typeof (this.originator as any).validate === 'function') {
      (this.originator as any).validate();
    }
    if(Array.isArray(this.owners)) {
      $dara.Model.validateArray(this.owners);
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

