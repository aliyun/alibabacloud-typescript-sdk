// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotfixTaskResponseBodyDataJobs extends $dara.Model {
  /**
   * @remarks
   * The unified error code.
   * 
   * @example
   * INSTANCE_NOT_EXISTS
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified instance does not exist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The hotfix status.
   * 
   * @example
   * CONFLICT
   */
  hotfixStatus?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-2zehme0rs1tc090fdl3n
   */
  instance?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The status of the instance task.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      hotfixStatus: 'hotfixStatus',
      instance: 'instance',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      hotfixStatus: 'string',
      instance: 'string',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotfixTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2026-10-13T08:14:40
   */
  createdAt?: string;
  /**
   * @remarks
   * CVE ID
   * 
   * @example
   * CVE-2026-31431
   */
  cveId?: string;
  /**
   * @remarks
   * The time when the task was completed.
   * 
   * @example
   * 2026-10-13T08:14:40
   */
  finishedAt?: string;
  /**
   * @remarks
   * The list of instance tasks.
   */
  jobs?: GetHotfixTaskResponseBodyDataJobs[];
  /**
   * @remarks
   * The operation type of the task.
   * 
   * @example
   * Install
   */
  operation?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * hotfix-da3dcc0b-5019-4b59-b12f-2e500da9083c
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      cveId: 'cveId',
      finishedAt: 'finishedAt',
      jobs: 'jobs',
      operation: 'operation',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      cveId: 'string',
      finishedAt: 'string',
      jobs: { 'type': 'array', 'itemType': GetHotfixTaskResponseBodyDataJobs },
      operation: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotfixTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - If `code` is `Success`, the authorization is successful.
   * - Other status codes indicate that the authorization failed. If the authorization fails, check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetHotfixTaskResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If `code` is `Success`, this field is empty.
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotfixTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

