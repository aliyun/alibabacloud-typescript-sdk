// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListFromLeManagerList extends $dara.Model {
  aliyunId?: string;
  pk?: string;
  pkEncoded?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      pk: 'Pk',
      pkEncoded: 'PkEncoded',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      pk: 'string',
      pkEncoded: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListFromLe extends $dara.Model {
  ecId?: string;
  leId?: string;
  licenseNumber?: string;
  manageableAccountCount?: number;
  managedAccountCount?: number;
  managerList?: EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListFromLeManagerList[];
  nbId?: string;
  subjectName?: string;
  subjectType?: string;
  static names(): { [key: string]: string } {
    return {
      ecId: 'EcId',
      leId: 'LeId',
      licenseNumber: 'LicenseNumber',
      manageableAccountCount: 'ManageableAccountCount',
      managedAccountCount: 'ManagedAccountCount',
      managerList: 'ManagerList',
      nbId: 'NbId',
      subjectName: 'SubjectName',
      subjectType: 'SubjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecId: 'string',
      leId: 'string',
      licenseNumber: 'string',
      manageableAccountCount: 'number',
      managedAccountCount: 'number',
      managerList: { 'type': 'array', 'itemType': EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListFromLeManagerList },
      nbId: 'string',
      subjectName: 'string',
      subjectType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.managerList)) {
      $dara.Model.validateArray(this.managerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListProcessList extends $dara.Model {
  aliyunId?: string;
  auditTime?: number;
  ecId?: string;
  leId?: string;
  nbId?: string;
  pk?: string;
  remark?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      auditTime: 'AuditTime',
      ecId: 'EcId',
      leId: 'LeId',
      nbId: 'NbId',
      pk: 'Pk',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      auditTime: 'number',
      ecId: 'string',
      leId: 'string',
      nbId: 'string',
      pk: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListToLeManagerList extends $dara.Model {
  aliyunId?: string;
  pk?: string;
  pkEncoded?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      pk: 'Pk',
      pkEncoded: 'PkEncoded',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      pk: 'string',
      pkEncoded: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListToLe extends $dara.Model {
  ecId?: string;
  leId?: string;
  licenseNumber?: string;
  manageableAccountCount?: number;
  managedAccountCount?: number;
  managerList?: EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListToLeManagerList[];
  nbId?: string;
  subjectName?: string;
  subjectType?: string;
  static names(): { [key: string]: string } {
    return {
      ecId: 'EcId',
      leId: 'LeId',
      licenseNumber: 'LicenseNumber',
      manageableAccountCount: 'ManageableAccountCount',
      managedAccountCount: 'ManagedAccountCount',
      managerList: 'ManagerList',
      nbId: 'NbId',
      subjectName: 'SubjectName',
      subjectType: 'SubjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecId: 'string',
      leId: 'string',
      licenseNumber: 'string',
      manageableAccountCount: 'number',
      managedAccountCount: 'number',
      managerList: { 'type': 'array', 'itemType': EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListToLeManagerList },
      nbId: 'string',
      subjectName: 'string',
      subjectType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.managerList)) {
      $dara.Model.validateArray(this.managerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoList extends $dara.Model {
  aliyunId?: string;
  applicantAliyunId?: string;
  applicantPk?: string;
  applyRemark?: string;
  applyTime?: number;
  auditorAliyunId?: string;
  auditorPk?: string;
  auditorStatus?: string;
  canceledTime?: number;
  closed?: boolean;
  currAuditor?: boolean;
  fromLe?: EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListFromLe;
  pk?: string;
  processList?: EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListProcessList[];
  status?: string;
  timeoutTime?: number;
  toLe?: EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListToLe;
  toLeAudit?: boolean;
  todoId?: string;
  todoType?: string;
  todoView?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      applicantAliyunId: 'ApplicantAliyunId',
      applicantPk: 'ApplicantPk',
      applyRemark: 'ApplyRemark',
      applyTime: 'ApplyTime',
      auditorAliyunId: 'AuditorAliyunId',
      auditorPk: 'AuditorPk',
      auditorStatus: 'AuditorStatus',
      canceledTime: 'CanceledTime',
      closed: 'Closed',
      currAuditor: 'CurrAuditor',
      fromLe: 'FromLe',
      pk: 'Pk',
      processList: 'ProcessList',
      status: 'Status',
      timeoutTime: 'TimeoutTime',
      toLe: 'ToLe',
      toLeAudit: 'ToLeAudit',
      todoId: 'TodoId',
      todoType: 'TodoType',
      todoView: 'TodoView',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      applicantAliyunId: 'string',
      applicantPk: 'string',
      applyRemark: 'string',
      applyTime: 'number',
      auditorAliyunId: 'string',
      auditorPk: 'string',
      auditorStatus: 'string',
      canceledTime: 'number',
      closed: 'boolean',
      currAuditor: 'boolean',
      fromLe: EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListFromLe,
      pk: 'string',
      processList: { 'type': 'array', 'itemType': EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListProcessList },
      status: 'string',
      timeoutTime: 'number',
      toLe: EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListToLe,
      toLeAudit: 'boolean',
      todoId: 'string',
      todoType: 'string',
      todoView: 'string',
    };
  }

  validate() {
    if(this.fromLe && typeof (this.fromLe as any).validate === 'function') {
      (this.fromLe as any).validate();
    }
    if(Array.isArray(this.processList)) {
      $dara.Model.validateArray(this.processList);
    }
    if(this.toLe && typeof (this.toLe as any).validate === 'function') {
      (this.toLe as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseTodoQueryAccountTodoListResponseBodyData extends $dara.Model {
  count?: number;
  todoList?: EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoList[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      todoList: 'TodoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      todoList: { 'type': 'array', 'itemType': EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoList },
    };
  }

  validate() {
    if(Array.isArray(this.todoList)) {
      $dara.Model.validateArray(this.todoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseTodoQueryAccountTodoListResponseBody extends $dara.Model {
  code?: string;
  data?: EnterpriseTodoQueryAccountTodoListResponseBodyData;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EnterpriseTodoQueryAccountTodoListResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

