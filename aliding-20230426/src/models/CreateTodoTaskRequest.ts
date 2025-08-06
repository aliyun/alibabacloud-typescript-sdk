// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTodoTaskRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 1
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

export class CreateTodoTaskRequestActionListParam extends $dara.Model {
  body?: string;
  header?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      header: 'header',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      header: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.header) {
      $dara.Model.validateMap(this.header);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskRequestActionList extends $dara.Model {
  actionKey?: string;
  actionType?: number;
  buttonStyleType?: number;
  param?: CreateTodoTaskRequestActionListParam;
  pcUrl?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      actionKey: 'actionKey',
      actionType: 'actionType',
      buttonStyleType: 'buttonStyleType',
      param: 'param',
      pcUrl: 'pcUrl',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionKey: 'string',
      actionType: 'number',
      buttonStyleType: 'number',
      param: CreateTodoTaskRequestActionListParam,
      pcUrl: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskRequestContentFieldList extends $dara.Model {
  /**
   * @remarks
   * fieldKey
   * 
   * @example
   * fieldKey
   */
  fieldKey?: string;
  /**
   * @remarks
   * fieldValue
   * 
   * @example
   * fieldValue
   */
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'fieldKey',
      fieldValue: 'fieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      fieldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskRequestDetailUrl extends $dara.Model {
  /**
   * @example
   * https://www.dingtalk.com
   */
  appUrl?: string;
  /**
   * @example
   * https://www.dingtalk.com
   */
  pcUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'appUrl',
      pcUrl: 'pcUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      pcUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskRequestNotifyConfigs extends $dara.Model {
  /**
   * @example
   * 1
   */
  dingNotify?: string;
  /**
   * @example
   * true
   */
  sendAssistantChat?: string;
  /**
   * @example
   * true
   */
  sendTodoApn?: string;
  static names(): { [key: string]: string } {
    return {
      dingNotify: 'dingNotify',
      sendAssistantChat: 'sendAssistantChat',
      sendTodoApn: 'sendTodoApn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingNotify: 'string',
      sendAssistantChat: 'string',
      sendTodoApn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskRequestRemindNotifyConfigs extends $dara.Model {
  /**
   * @example
   * 1
   */
  dingNotify?: string;
  /**
   * @example
   * true
   */
  sendTodoApn?: string;
  static names(): { [key: string]: string } {
    return {
      dingNotify: 'dingNotify',
      sendTodoApn: 'sendTodoApn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingNotify: 'string',
      sendTodoApn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoTaskRequest extends $dara.Model {
  tenantContext?: CreateTodoTaskRequestTenantContext;
  actionList?: CreateTodoTaskRequestActionList[];
  contentFieldList?: CreateTodoTaskRequestContentFieldList[];
  /**
   * @example
   * PUoiinWIpa2yH2ymhiiGiP6g
   */
  creatorId?: string;
  /**
   * @example
   * 应用可以调用该接口发起一个钉钉待办任务，该待办事项会出现在钉钉客户端“待办”页面，需要注意的是，通过开放接口发起的待办，目前仅支持直接跳转ISV应用详情页（ISV在调该接口时需传入自身应用详情页链接）。
   */
  description?: string;
  detailUrl?: CreateTodoTaskRequestDetailUrl;
  /**
   * @example
   * 1617675000000
   */
  dueTime?: number;
  executorIds?: string[];
  /**
   * @example
   * true
   */
  isOnlyShowExecutor?: boolean;
  notifyConfigs?: CreateTodoTaskRequestNotifyConfigs;
  /**
   * @example
   * 12345
   */
  operatorId?: string;
  participantIds?: string[];
  /**
   * @example
   * 20
   */
  priority?: number;
  remindNotifyConfigs?: CreateTodoTaskRequestRemindNotifyConfigs;
  /**
   * @example
   * 1754364432000
   */
  reminderTimeStamp?: number;
  /**
   * @example
   * isv_dingtalkTodo1
   */
  sourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 接入钉钉待办
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      actionList: 'actionList',
      contentFieldList: 'contentFieldList',
      creatorId: 'creatorId',
      description: 'description',
      detailUrl: 'detailUrl',
      dueTime: 'dueTime',
      executorIds: 'executorIds',
      isOnlyShowExecutor: 'isOnlyShowExecutor',
      notifyConfigs: 'notifyConfigs',
      operatorId: 'operatorId',
      participantIds: 'participantIds',
      priority: 'priority',
      remindNotifyConfigs: 'remindNotifyConfigs',
      reminderTimeStamp: 'reminderTimeStamp',
      sourceId: 'sourceId',
      subject: 'subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: CreateTodoTaskRequestTenantContext,
      actionList: { 'type': 'array', 'itemType': CreateTodoTaskRequestActionList },
      contentFieldList: { 'type': 'array', 'itemType': CreateTodoTaskRequestContentFieldList },
      creatorId: 'string',
      description: 'string',
      detailUrl: CreateTodoTaskRequestDetailUrl,
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      isOnlyShowExecutor: 'boolean',
      notifyConfigs: CreateTodoTaskRequestNotifyConfigs,
      operatorId: 'string',
      participantIds: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      remindNotifyConfigs: CreateTodoTaskRequestRemindNotifyConfigs,
      reminderTimeStamp: 'number',
      sourceId: 'string',
      subject: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(Array.isArray(this.actionList)) {
      $dara.Model.validateArray(this.actionList);
    }
    if(Array.isArray(this.contentFieldList)) {
      $dara.Model.validateArray(this.contentFieldList);
    }
    if(this.detailUrl && typeof (this.detailUrl as any).validate === 'function') {
      (this.detailUrl as any).validate();
    }
    if(Array.isArray(this.executorIds)) {
      $dara.Model.validateArray(this.executorIds);
    }
    if(this.notifyConfigs && typeof (this.notifyConfigs as any).validate === 'function') {
      (this.notifyConfigs as any).validate();
    }
    if(Array.isArray(this.participantIds)) {
      $dara.Model.validateArray(this.participantIds);
    }
    if(this.remindNotifyConfigs && typeof (this.remindNotifyConfigs as any).validate === 'function') {
      (this.remindNotifyConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

