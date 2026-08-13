// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySyncResultResponseBodyDeptStats extends $dara.Model {
  /**
   * @remarks
   * 新增的用户组数
   * 
   * @example
   * 1
   */
  created?: number;
  /**
   * @remarks
   * 标记删除的用户组数
   * 
   * @example
   * 1
   */
  deleted?: number;
  /**
   * @remarks
   * 移动的用户组数
   * 
   * @example
   * 1
   */
  moved?: number;
  /**
   * @remarks
   * 更名的用户组数
   * 
   * @example
   * 1
   */
  renamed?: number;
  /**
   * @remarks
   * 跳过的用户组数
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 外部部门总数
   * 
   * @example
   * 1
   */
  totalExternal?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      deleted: 'deleted',
      moved: 'moved',
      renamed: 'renamed',
      skipped: 'skipped',
      totalExternal: 'totalExternal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      deleted: 'number',
      moved: 'number',
      renamed: 'number',
      skipped: 'number',
      totalExternal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySyncResultResponseBodyMemberStats extends $dara.Model {
  /**
   * @remarks
   * 失败的成员数
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 新增的成员关系数
   * 
   * @example
   * 1
   */
  relationshipAdded?: number;
  /**
   * @remarks
   * 移除的成员关系数
   * 
   * @example
   * 1
   */
  relationshipRemoved?: number;
  /**
   * @remarks
   * 外部成员总数
   * 
   * @example
   * 1
   */
  totalExternal?: number;
  /**
   * @remarks
   * 未变更的成员关系数
   * 
   * @example
   * 1
   */
  unchanged?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'failed',
      relationshipAdded: 'relationshipAdded',
      relationshipRemoved: 'relationshipRemoved',
      totalExternal: 'totalExternal',
      unchanged: 'unchanged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      relationshipAdded: 'number',
      relationshipRemoved: 'number',
      totalExternal: 'number',
      unchanged: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySyncResultResponseBody extends $dara.Model {
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
   * 任务完成时间（ISO 8601）
   * 
   * @example
   * string_value
   */
  completedAt?: string;
  /**
   * @remarks
   * 企业标识
   * 
   * @example
   * exampleCorpId
   */
  corpId?: string;
  /**
   * @remarks
   * 部门同步统计（完成时有值）
   */
  deptStats?: QuerySyncResultResponseBodyDeptStats;
  /**
   * @remarks
   * 执行时长（秒）
   * 
   * @example
   * 1
   */
  durationSeconds?: number;
  /**
   * @remarks
   * 错误信息（失败时有值）
   * 
   * @example
   * string_value
   */
  errorMessage?: string;
  /**
   * @remarks
   * 成员同步统计（syncMembers=true 且完成时有值）
   */
  memberStats?: QuerySyncResultResponseBodyMemberStats;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 平台类型
   * 
   * @example
   * string_value
   */
  platformType?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 任务开始执行时间（ISO 8601）
   * 
   * @example
   * string_value
   */
  startedAt?: string;
  /**
   * @remarks
   * 任务状态: PENDING / RUNNING / COMPLETED / FAILED / TIMEOUT / CANCELED
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * 任务提交时间（ISO 8601）
   * 
   * @example
   * string_value
   */
  submittedAt?: string;
  /**
   * @remarks
   * 执行摘要（人可读）
   * 
   * @example
   * string_value
   */
  summary?: string;
  /**
   * @remarks
   * 任务 ID
   * 
   * @example
   * 1
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      completedAt: 'completedAt',
      corpId: 'corpId',
      deptStats: 'deptStats',
      durationSeconds: 'durationSeconds',
      errorMessage: 'errorMessage',
      memberStats: 'memberStats',
      message: 'message',
      platformType: 'platformType',
      requestId: 'requestId',
      startedAt: 'startedAt',
      status: 'status',
      submittedAt: 'submittedAt',
      summary: 'summary',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completedAt: 'string',
      corpId: 'string',
      deptStats: QuerySyncResultResponseBodyDeptStats,
      durationSeconds: 'number',
      errorMessage: 'string',
      memberStats: QuerySyncResultResponseBodyMemberStats,
      message: 'string',
      platformType: 'string',
      requestId: 'string',
      startedAt: 'string',
      status: 'string',
      submittedAt: 'string',
      summary: 'string',
      taskId: 'number',
    };
  }

  validate() {
    if(this.deptStats && typeof (this.deptStats as any).validate === 'function') {
      (this.deptStats as any).validate();
    }
    if(this.memberStats && typeof (this.memberStats as any).validate === 'function') {
      (this.memberStats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

