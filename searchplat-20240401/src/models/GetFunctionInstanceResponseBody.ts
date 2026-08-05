// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFunctionInstanceResponseBodyResultBelongs extends $dara.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * ""
   */
  category?: string;
  /**
   * @remarks
   * The industry type.
   * 
   * @example
   * ""
   */
  domain?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      domain: 'domain',
      language: 'language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      domain: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionInstanceResponseBodyResultCreateParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionInstanceResponseBodyResultTask extends $dara.Model {
  /**
   * @remarks
   * The task status. Valid values:
   * - success: Succeeded.
   * - failed: Failed.
   * - untrained: Pending training.
   * - pending: Scheduling.
   * - running: Training in progress.
   * 
   * @example
   * success
   */
  dagStatus?: string;
  /**
   * @remarks
   * The last training time.
   * 
   * @example
   * 1724998630466
   */
  lastRunTime?: number;
  static names(): { [key: string]: string } {
    return {
      dagStatus: 'dagStatus',
      lastRunTime: 'lastRunTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagStatus: 'string',
      lastRunTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ownership information.
   */
  belongs?: GetFunctionInstanceResponseBodyResultBelongs;
  /**
   * @remarks
   * The specific configuration items.
   */
  createParameters?: GetFunctionInstanceResponseBodyResultCreateParameters[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1724998630466
   */
  createTime?: number;
  /**
   * @remarks
   * The cron expression for the timed scheduling task.
   * 
   * @example
   * ""
   */
  cron?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * ""
   */
  extendInfo?: string;
  /**
   * @remarks
   * The configuration type. Valid values:
   * - nl2sql
   * - embedding-tuning
   * - deployment
   * - notebook.
   * 
   * @example
   * nl2sql
   */
  functionName?: string;
  /**
   * @remarks
   * The configuration type. PAAS (default): requires training before use.
   * 
   * @example
   * PAAS
   */
  functionType?: string;
  /**
   * @remarks
   * The configuration name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The model type. The valid values vary based on the configuration type (functionName):
   * 
   * - ops-query-analyze-nl2sql-001 (nl2sql)
   * - ops-embedding-dim-reduction-001 (embedding-tuning)
   * - native (deployment)
   * - dsw (notebook).
   * 
   * @example
   * dsw
   */
  modelType?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * user
   */
  source?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - available
   * - unavailable.
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The task information.
   */
  task?: GetFunctionInstanceResponseBodyResultTask;
  /**
   * @remarks
   * The training version ID.
   * 
   * @example
   * 21
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      belongs: 'belongs',
      createParameters: 'createParameters',
      createTime: 'createTime',
      cron: 'cron',
      description: 'description',
      extendInfo: 'extendInfo',
      functionName: 'functionName',
      functionType: 'functionType',
      instanceName: 'instanceName',
      modelType: 'modelType',
      source: 'source',
      status: 'status',
      task: 'task',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongs: GetFunctionInstanceResponseBodyResultBelongs,
      createParameters: { 'type': 'array', 'itemType': GetFunctionInstanceResponseBodyResultCreateParameters },
      createTime: 'number',
      cron: 'string',
      description: 'string',
      extendInfo: 'string',
      functionName: 'string',
      functionType: 'string',
      instanceName: 'string',
      modelType: 'string',
      source: 'string',
      status: 'string',
      task: GetFunctionInstanceResponseBodyResultTask,
      versionId: 'number',
    };
  }

  validate() {
    if(this.belongs && typeof (this.belongs as any).validate === 'function') {
      (this.belongs as any).validate();
    }
    if(Array.isArray(this.createParameters)) {
      $dara.Model.validateArray(this.createParameters);
    }
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * not found
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed.
   * 
   * @example
   * 11.627
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * "xx not found"
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C56462F4-CCB3-10BF-A3D8-FEE53C72B65C
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: GetFunctionInstanceResponseBodyResult;
  /**
   * @remarks
   * The request status.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpCode: 'httpCode',
      latency: 'latency',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: GetFunctionInstanceResponseBodyResult,
      status: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

