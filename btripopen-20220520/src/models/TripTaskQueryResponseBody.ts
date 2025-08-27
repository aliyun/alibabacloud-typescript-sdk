// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TripTaskQueryResponseBodyModuleRecordTasks extends $dara.Model {
  /**
   * @example
   * 123
   */
  actioner?: string;
  attributes?: string;
  /**
   * @example
   * 1525104000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1525104000
   */
  gmtFinished?: number;
  /**
   * @example
   * 34360
   */
  id?: number;
  /**
   * @example
   * 575003
   */
  nodeId?: string;
  /**
   * @example
   * agree
   */
  outResult?: string;
  /**
   * @example
   * 123
   */
  owner?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      actioner: 'actioner',
      attributes: 'attributes',
      gmtCreate: 'gmt_create',
      gmtFinished: 'gmt_finished',
      id: 'id',
      nodeId: 'node_id',
      outResult: 'out_result',
      owner: 'owner',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actioner: 'string',
      attributes: 'string',
      gmtCreate: 'number',
      gmtFinished: 'number',
      id: 'number',
      nodeId: 'string',
      outResult: 'string',
      owner: 'string',
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

export class TripTaskQueryResponseBodyModuleRunningTasks extends $dara.Model {
  /**
   * @example
   * 123
   */
  actioner?: string;
  attributes?: string;
  /**
   * @example
   * 1525104000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1525104000
   */
  gmtFinished?: number;
  /**
   * @example
   * 34360
   */
  id?: number;
  /**
   * @example
   * 575003
   */
  nodeId?: string;
  /**
   * @example
   * agree
   */
  outResult?: string;
  /**
   * @example
   * 123
   */
  owner?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      actioner: 'actioner',
      attributes: 'attributes',
      gmtCreate: 'gmt_create',
      gmtFinished: 'gmt_finished',
      id: 'id',
      nodeId: 'node_id',
      outResult: 'out_result',
      owner: 'owner',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actioner: 'string',
      attributes: 'string',
      gmtCreate: 'number',
      gmtFinished: 'number',
      id: 'number',
      nodeId: 'string',
      outResult: 'string',
      owner: 'string',
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

export class TripTaskQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * true
   */
  needRefresh?: boolean;
  recordTasks?: TripTaskQueryResponseBodyModuleRecordTasks[];
  runningTasks?: TripTaskQueryResponseBodyModuleRunningTasks[];
  static names(): { [key: string]: string } {
    return {
      needRefresh: 'needRefresh',
      recordTasks: 'record_tasks',
      runningTasks: 'running_tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRefresh: 'boolean',
      recordTasks: { 'type': 'array', 'itemType': TripTaskQueryResponseBodyModuleRecordTasks },
      runningTasks: { 'type': 'array', 'itemType': TripTaskQueryResponseBodyModuleRunningTasks },
    };
  }

  validate() {
    if(Array.isArray(this.recordTasks)) {
      $dara.Model.validateArray(this.recordTasks);
    }
    if(Array.isArray(this.runningTasks)) {
      $dara.Model.validateArray(this.runningTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TripTaskQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module。
   */
  module?: TripTaskQueryResponseBodyModule;
  /**
   * @example
   * 2FB0D7A8-BA41-5D04-BEFC-CADA5481AC53
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: TripTaskQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

