// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySyncResultResponseBodyDeptStats extends $dara.Model {
  /**
   * @remarks
   * The total number of external departments.
   * 
   * @example
   * 1
   */
  created?: number;
  /**
   * @remarks
   * The number of user groups marked for deletion.
   * 
   * @example
   * 1
   */
  deleted?: number;
  /**
   * @remarks
   * The number of moved user groups.
   * 
   * @example
   * 1
   */
  moved?: number;
  /**
   * @remarks
   * The number of renamed user groups.
   * 
   * @example
   * 1
   */
  renamed?: number;
  /**
   * @remarks
   * The number of skipped user groups.
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * The total number of external departments.
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
   * The number of failed members.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * The number of added member relationships.
   * 
   * @example
   * 1
   */
  relationshipAdded?: number;
  /**
   * @remarks
   * The number of removed member relationships.
   * 
   * @example
   * 1
   */
  relationshipRemoved?: number;
  /**
   * @remarks
   * The total number of external members.
   * 
   * @example
   * 1
   */
  totalExternal?: number;
  /**
   * @remarks
   * The number of unchanged member relationships.
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
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The time when the task was completed (ISO 8601 format).
   * 
   * @example
   * string_value
   */
  completedAt?: string;
  /**
   * @remarks
   * The enterprise identifier.
   * 
   * @example
   * exampleCorpId
   */
  corpId?: string;
  /**
   * @remarks
   * The department synchronization statistics. This field has a value when the task is completed.
   */
  deptStats?: QuerySyncResultResponseBodyDeptStats;
  /**
   * @remarks
   * The execution duration, in seconds.
   * 
   * @example
   * 1
   */
  durationSeconds?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * string_value
   */
  errorMessage?: string;
  /**
   * @remarks
   * The member synchronization statistics. This field has a value when syncMembers is set to true and the task is completed.
   */
  memberStats?: QuerySyncResultResponseBodyMemberStats;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The platform type.
   * 
   * @example
   * string_value
   */
  platformType?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the task started (ISO 8601 format).
   * 
   * @example
   * string_value
   */
  startedAt?: string;
  /**
   * @remarks
   * The task status. Valid values: PENDING, RUNNING, COMPLETED, FAILED, TIMEOUT, and CANCELED.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The time when the task was submitted (ISO 8601 format).
   * 
   * @example
   * string_value
   */
  submittedAt?: string;
  /**
   * @remarks
   * The intelligent meeting summary content.
   * 
   * @example
   * string_value
   */
  summary?: string;
  /**
   * @remarks
   * The task ID.
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

