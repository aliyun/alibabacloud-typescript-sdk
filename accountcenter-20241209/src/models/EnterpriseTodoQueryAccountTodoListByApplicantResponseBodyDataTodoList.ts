// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyDataTodoListFromLe } from "./EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyDataTodoListFromLe";
import { EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyDataTodoListProcessList } from "./EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyDataTodoListProcessList";
import { EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyDataTodoListToLe } from "./EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyDataTodoListToLe";


export class EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyDataTodoList extends $dara.Model {
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
  fromLe?: EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyDataTodoListFromLe;
  pk?: string;
  processList?: EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyDataTodoListProcessList[];
  status?: string;
  timeoutTime?: number;
  toLe?: EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyDataTodoListToLe;
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
      fromLe: EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyDataTodoListFromLe,
      pk: 'string',
      processList: { 'type': 'array', 'itemType': EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyDataTodoListProcessList },
      status: 'string',
      timeoutTime: 'number',
      toLe: EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyDataTodoListToLe,
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

