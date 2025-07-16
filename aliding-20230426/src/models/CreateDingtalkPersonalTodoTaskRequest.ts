// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDingtalkPersonalTodoTaskRequestNotifyConfigs extends $dara.Model {
  /**
   * @example
   * 1
   */
  dingNotify?: string;
  static names(): { [key: string]: string } {
    return {
      dingNotify: 'DingNotify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingNotify: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDingtalkPersonalTodoTaskRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDingtalkPersonalTodoTaskRequest extends $dara.Model {
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
  notifyConfigs?: CreateDingtalkPersonalTodoTaskRequestNotifyConfigs;
  /**
   * @example
   * [ "012345" ]
   */
  participantIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 待办标题
   */
  subject?: string;
  tenantContext?: CreateDingtalkPersonalTodoTaskRequestTenantContext;
  /**
   * @example
   * 用户token
   */
  userToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dueTime: 'DueTime',
      executorIds: 'ExecutorIds',
      notifyConfigs: 'NotifyConfigs',
      participantIds: 'ParticipantIds',
      subject: 'Subject',
      tenantContext: 'TenantContext',
      userToken: 'UserToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      notifyConfigs: CreateDingtalkPersonalTodoTaskRequestNotifyConfigs,
      participantIds: { 'type': 'array', 'itemType': 'string' },
      subject: 'string',
      tenantContext: CreateDingtalkPersonalTodoTaskRequestTenantContext,
      userToken: 'string',
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

