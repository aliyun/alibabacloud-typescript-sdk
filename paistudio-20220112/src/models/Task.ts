// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Action } from "./Action";
import { Rules } from "./Rules";


export class Task extends $dara.Model {
  actions?: Action[];
  description?: string;
  gmtActivatedTime?: string;
  gmtCreatedTime?: string;
  gmtModifiedTime?: string;
  gmtStoppedTime?: string;
  quotaId?: string;
  rules?: Rules;
  status?: string;
  taskId?: string;
  taskName?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      description: 'Description',
      gmtActivatedTime: 'GmtActivatedTime',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStoppedTime: 'GmtStoppedTime',
      quotaId: 'QuotaId',
      rules: 'Rules',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': Action },
      description: 'string',
      gmtActivatedTime: 'string',
      gmtCreatedTime: 'string',
      gmtModifiedTime: 'string',
      gmtStoppedTime: 'string',
      quotaId: 'string',
      rules: Rules,
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

