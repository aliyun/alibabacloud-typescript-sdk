// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Action } from "./Action";
import { Rules } from "./Rules";


export class Task extends $dara.Model {
  /**
   * @remarks
   * The actions performed by the task.
   */
  actions?: Action[];
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * this is a test quota
   */
  description?: string;
  /**
   * @remarks
   * The time when the task was activated.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtActivatedTime?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The time when the task was updated.
   * 
   * @example
   * 2024-07-10T11:49:47Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The time when the task was stopped.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtStoppedTime?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * quotad2kd8ljpsno
   */
  quotaId?: string;
  /**
   * @remarks
   * The execution rules of the task.
   */
  rules?: Rules;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * Activated
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * taskxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * test
   */
  taskName?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
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

