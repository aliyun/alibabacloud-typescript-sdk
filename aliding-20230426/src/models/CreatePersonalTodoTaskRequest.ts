// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePersonalTodoTaskRequestNotifyConfigs } from "./CreatePersonalTodoTaskRequestNotifyConfigs";
import { CreatePersonalTodoTaskRequestTenantContext } from "./CreatePersonalTodoTaskRequestTenantContext";


export class CreatePersonalTodoTaskRequest extends $dara.Model {
  /**
   * @example
   * 待办备注信息
   */
  description?: string;
  /**
   * @example
   * 1703750708595
   */
  dueTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [ "012345" ]
   */
  executorIds?: string[];
  notifyConfigs?: CreatePersonalTodoTaskRequestNotifyConfigs;
  /**
   * @example
   * [ "012345" ]
   */
  participantIds?: string[];
  /**
   * @example
   * 1703750708595
   */
  reminderTimeStamp?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 待办标题
   */
  subject?: string;
  tenantContext?: CreatePersonalTodoTaskRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dueTime: 'DueTime',
      executorIds: 'ExecutorIds',
      notifyConfigs: 'NotifyConfigs',
      participantIds: 'ParticipantIds',
      reminderTimeStamp: 'ReminderTimeStamp',
      subject: 'Subject',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      notifyConfigs: CreatePersonalTodoTaskRequestNotifyConfigs,
      participantIds: { 'type': 'array', 'itemType': 'string' },
      reminderTimeStamp: 'number',
      subject: 'string',
      tenantContext: CreatePersonalTodoTaskRequestTenantContext,
    };
  }

  validate() {
    if(Array.isArray(this.executorIds)) {
      $dara.Model.validateArray(this.executorIds);
    }
    if(this.notifyConfigs && typeof (this.notifyConfigs as any).validate === 'function') {
      (this.notifyConfigs as any).validate();
    }
    if(Array.isArray(this.participantIds)) {
      $dara.Model.validateArray(this.participantIds);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

