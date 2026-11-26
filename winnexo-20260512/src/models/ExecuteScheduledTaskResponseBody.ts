// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteScheduledTaskResponseBodyTaskExecution extends $dara.Model {
  /**
   * @remarks
   * 任务 AUTO 偏好：none=默认、performance=效果优先、credit=成本优先
   * 
   * @example
   * none
   */
  autoPreference?: string;
  /**
   * @example
   * BL-10000-0123456789abcdef0123456789abcdef
   */
  billingId?: string;
  /**
   * @example
   * exampleCollaborationGroupId
   */
  collaborationGroupId?: string;
  enableWebSearch?: boolean;
  /**
   * @example
   * exampleExecutionId
   */
  executionId?: string;
  /**
   * @remarks
   * 执行模型档位
   * 
   * @example
   * auto
   */
  model?: string;
  operatingObjectName?: string[];
  skillCodes?: string[];
  /**
   * @example
   * exampleTaskId
   */
  taskId?: string;
  /**
   * @example
   * 每日销售数据汇总
   */
  taskName?: string;
  /**
   * @example
   * 每日汇总销售数据并生成报告
   */
  taskUnderstand?: string;
  /**
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @example
   * 10001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPreference: 'autoPreference',
      billingId: 'billingId',
      collaborationGroupId: 'collaborationGroupId',
      enableWebSearch: 'enableWebSearch',
      executionId: 'executionId',
      model: 'model',
      operatingObjectName: 'operatingObjectName',
      skillCodes: 'skillCodes',
      taskId: 'taskId',
      taskName: 'taskName',
      taskUnderstand: 'taskUnderstand',
      tenantId: 'tenantId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPreference: 'string',
      billingId: 'string',
      collaborationGroupId: 'string',
      enableWebSearch: 'boolean',
      executionId: 'string',
      model: 'string',
      operatingObjectName: { 'type': 'array', 'itemType': 'string' },
      skillCodes: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      taskName: 'string',
      taskUnderstand: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operatingObjectName)) {
      $dara.Model.validateArray(this.operatingObjectName);
    }
    if(Array.isArray(this.skillCodes)) {
      $dara.Model.validateArray(this.skillCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteScheduledTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 执行记录 ID
   * 
   * @example
   * exampleExecutionId
   */
  executionId?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  taskExecution?: ExecuteScheduledTaskResponseBodyTaskExecution;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      executionId: 'executionId',
      message: 'message',
      requestId: 'requestId',
      taskExecution: 'taskExecution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      executionId: 'string',
      message: 'string',
      requestId: 'string',
      taskExecution: ExecuteScheduledTaskResponseBodyTaskExecution,
    };
  }

  validate() {
    if(this.taskExecution && typeof (this.taskExecution as any).validate === 'function') {
      (this.taskExecution as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

