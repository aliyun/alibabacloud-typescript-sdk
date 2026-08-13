// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 任务创建时间，ISO8601
   * 
   * @example
   * string_value
   */
  createdAt?: string;
  /**
   * @remarks
   * 错误码，仅 Failed 时返回
   * 
   * @example
   * string_value
   */
  errorCode?: string;
  /**
   * @remarks
   * 错误描述，仅 Failed 时返回
   * 
   * @example
   * string_value
   */
  errorMessage?: string;
  /**
   * @remarks
   * 任务结束时间，ISO8601；仅终态（Succeeded/Failed/Cancelled）有值
   * 
   * @example
   * string_value
   */
  finishedAt?: string;
  logs?: { [key: string]: any }[];
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 进度百分比（仅 Running 时有意义）
   * 
   * @example
   * 1
   */
  progress?: number;
  /**
   * @remarks
   * 进度描述
   * 
   * @example
   * string_value
   */
  progressMessage?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  result?: { [key: string]: any };
  /**
   * @remarks
   * 异步任务 ID
   * 
   * @example
   * exampleRunId
   */
  runId?: string;
  /**
   * @remarks
   * 技能编码
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * 技能名称
   * 
   * @example
   * string_value
   */
  skillName?: string;
  /**
   * @remarks
   * 任务开始执行时间，ISO8601
   * 
   * @example
   * string_value
   */
  startedAt?: string;
  /**
   * @remarks
   * 执行状态：Running / Succeeded / Failed / Cancelled
   * 
   * @example
   * READY
   */
  status?: string;
  usage?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      createdAt: 'createdAt',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      finishedAt: 'finishedAt',
      logs: 'logs',
      message: 'message',
      progress: 'progress',
      progressMessage: 'progressMessage',
      requestId: 'requestId',
      result: 'result',
      runId: 'runId',
      skillCode: 'skillCode',
      skillName: 'skillName',
      startedAt: 'startedAt',
      status: 'status',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createdAt: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      finishedAt: 'string',
      logs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      progress: 'number',
      progressMessage: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      runId: 'string',
      skillCode: 'string',
      skillName: 'string',
      startedAt: 'string',
      status: 'string',
      usage: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    if(this.usage) {
      $dara.Model.validateMap(this.usage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

