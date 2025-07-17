// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPagedInstanceResponseBodyDataInstance extends $dara.Model {
  /**
   * @example
   * 2023-05-14 16:00:57
   */
  businessTime?: string;
  /**
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @example
   * 33753
   */
  dagId?: number;
  /**
   * @example
   * false
   */
  delete?: string;
  /**
   * @example
   * 2023-04-23 10:23:20
   */
  endTime?: string;
  /**
   * @example
   * 2023-03-28 10:50:45
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-04-18 15:28:16
   */
  gmtModified?: string;
  /**
   * @example
   * 6851
   */
  historyDagId?: number;
  /**
   * @example
   * 24271
   */
  id?: number;
  /**
   * @example
   * {”nodes":[11694,11695]"}
   */
  lastRunningContext?: string;
  msg?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  taskType?: number;
  /**
   * @example
   * 3406
   */
  tenantId?: string;
  /**
   * @example
   * 1
   */
  triggerType?: number;
  /**
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      businessTime: 'BusinessTime',
      checkStatus: 'CheckStatus',
      dagId: 'DagId',
      delete: 'Delete',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      historyDagId: 'HistoryDagId',
      id: 'Id',
      lastRunningContext: 'LastRunningContext',
      msg: 'Msg',
      status: 'Status',
      taskType: 'TaskType',
      tenantId: 'TenantId',
      triggerType: 'TriggerType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTime: 'string',
      checkStatus: 'number',
      dagId: 'number',
      delete: 'string',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      historyDagId: 'number',
      id: 'number',
      lastRunningContext: 'string',
      msg: 'string',
      status: 'number',
      taskType: 'number',
      tenantId: 'string',
      triggerType: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPagedInstanceResponseBodyData extends $dara.Model {
  instance?: GetPagedInstanceResponseBodyDataInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': GetPagedInstanceResponseBodyDataInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPagedInstanceResponseBody extends $dara.Model {
  data?: GetPagedInstanceResponseBodyData;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 7FAD400F-7A5C-4193-8F9A-39D86C4F0231
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2
   */
  total?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0a06e1e316757357507896067d3780
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPagedInstanceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
      traceId: 'string',
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

