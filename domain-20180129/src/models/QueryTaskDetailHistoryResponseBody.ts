// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskDetailHistoryResponseBodyCurrentPageCursor extends $dara.Model {
  /**
   * @remarks
   * Job Creation Time.
   * 
   * @example
   * 2019-07-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Result of task execution.
   * 
   * @example
   * 执行成功
   */
  errorMsg?: string;
  /**
   * @remarks
   * Domain instance ID.
   * 
   * @example
   * S1234456789
   */
  instanceId?: string;
  /**
   * @remarks
   * Task detail ID.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-2342
   */
  taskDetailNo?: string;
  /**
   * @remarks
   * Job number.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @remarks
   * Task Status. Valid values:  
   * - **WAITING_EXECUTE**: Waiting for execution.  
   * - **EXECUTING**: Executing.  
   * - **EXECUTE_SUCCESS**: Execution succeeded.  
   * - **EXECUTE_FAILURE**: Execution failed.
   * 
   * @example
   * EXECUTE_SUCCESS
   */
  taskStatus?: string;
  /**
   * @remarks
   * Job Status code. Valid values:  
   * - **0**: Waiting to execute.  
   * - **1**: Executing.  
   * - **2**: Succeeded.  
   * - **3**: Failed.
   * 
   * @example
   * 2
   */
  taskStatusCode?: number;
  /**
   * @remarks
   * Task Type. Valid values:  
   * - **CHG_HOLDER**: Modify registrant information.  
   * - **CHG_DNS**: Modify DNS.  
   * - **SET_WHOIS_PROTECT**: Enable privacy protection.  
   * - **UPDATE_ADMIN_CONTACT**: Modify administrative contact information.  
   * - **UPDATE_BILLING_CONTACT**: Modify billing contact information.  
   * - **UPDATE_TECH_CONTACT**: Modify technical contact information.  
   * - **SET_UPDATE_PROHIBITED**: Enable domain name edit lock.  
   * - **SET_TRANSFER_PROHIBITED**: Enable domain name transfer lock.  
   * - **ORDER_ACTIVATE**: Create a registration order.  
   * - **ORDER_RENEW**: Create a renewal order.  
   * - **ORDER_REDEEM**: Create a redemption order.  
   * - **CREATE_DNSHOST**: Create a DNS host.  
   * - **UPDATE_DNSHOST**: Update a DNS host.  
   * - **SYNC_DNSHOST**: Synchronize a DNS host.
   * 
   * @example
   * CHG_DNS
   */
  taskType?: string;
  /**
   * @remarks
   * Description of the task type.
   * 
   * @example
   * 修改DNS
   */
  taskTypeDescription?: string;
  /**
   * @remarks
   * Retry Count of job details.
   * 
   * @example
   * 0
   */
  tryCount?: number;
  /**
   * @remarks
   * The most recent task execution time.
   * 
   * @example
   * 2019-07-30 00:00:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainName: 'string',
      errorMsg: 'string',
      instanceId: 'string',
      taskDetailNo: 'string',
      taskNo: 'string',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponseBodyNextPageCursor extends $dara.Model {
  /**
   * @remarks
   * Creation time of the job.
   * 
   * @example
   * 2019-07-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Result of task execution.
   * 
   * @example
   * 域名有禁止更新锁
   */
  errorMsg?: string;
  /**
   * @remarks
   * Domain name instance ID.
   * 
   * @example
   * S1234567890
   */
  instanceId?: string;
  /**
   * @remarks
   * Task detail number.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-2424
   */
  taskDetailNo?: string;
  /**
   * @remarks
   * Job number.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @remarks
   * Task Status. Valid values:
   * - **WAITING_EXECUTE**: Waiting for execution.
   * - **EXECUTING**: Executing.
   * - **EXECUTE_SUCCESS**: Succeeded.
   * - **EXECUTE_FAILURE**: Failed.
   * 
   * @example
   * EXECUTE_FAILURE
   */
  taskStatus?: string;
  /**
   * @remarks
   * Task status code. Valid values:
   * - **0**: Waiting for execution.
   * - **1**: Executing.
   * - **2**: Succeeded.
   * - **3**: Failed.
   * 
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @remarks
   * Task Type. Valid values:
   * - **CHG_HOLDER**: Modify registrant information.
   * - **CHG_DNS**: Modify DNS.
   * - **SET_WHOIS_PROTECT**: Enable privacy protection.
   * - **UPDATE_ADMIN_CONTACT**: Modify administrator contact information.
   * - **UPDATE_BILLING_CONTACT**: Modify billing contact information.
   * - **UPDATE_TECH_CONTACT**: Modify technical contact information.
   * - **SET_UPDATE_PROHIBITED**: Enable Edit Lock.
   * - **SET_TRANSFER_PROHIBITED**: Enable transfer lock.
   * - **ORDER_ACTIVATE**: Create a registration order.
   * - **ORDER_RENEW**: Create a renewal order.
   * - **ORDER_REDEEM**: Create a redemption order.
   * - **CREATE_DNSHOST**: Create a DNS host.
   * - **UPDATE_DNSHOST**: Update a DNS host.
   * - **SYNC_DNSHOST**: Synchronize a DNS host.
   * 
   * @example
   * CHG_DNS
   */
  taskType?: string;
  /**
   * @remarks
   * Task Type Description.
   * 
   * @example
   * 修改DNS
   */
  taskTypeDescription?: string;
  /**
   * @remarks
   * Number of retries for the task details.
   * 
   * @example
   * 5
   */
  tryCount?: number;
  /**
   * @remarks
   * The most recent running time of the job details.
   * 
   * @example
   * 2019-07-30 00:00:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainName: 'string',
      errorMsg: 'string',
      instanceId: 'string',
      taskDetailNo: 'string',
      taskNo: 'string',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponseBodyObjects extends $dara.Model {
  /**
   * @remarks
   * The creation time of the job.
   * 
   * @example
   * 2019-07-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The result of the job execution.
   * 
   * @example
   * 域名有禁止更新锁
   */
  errorMsg?: string;
  /**
   * @remarks
   * The instance ID of the domain name.
   * 
   * @example
   * S123456789
   */
  instanceId?: string;
  /**
   * @remarks
   * Task detail number.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-4234
   */
  taskDetailNo?: string;
  /**
   * @remarks
   * The job number.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @remarks
   * Task Status. Valid values:  
   * - **WAITING_EXECUTE**: Waiting for execution.  
   * - **EXECUTING**: Executing.  
   * - **EXECUTE_SUCCESS**: Execution succeeded.  
   * - **EXECUTE_FAILURE**: Execution failed.
   * 
   * @example
   * EXECUTE_FAILURE
   */
  taskStatus?: string;
  /**
   * @remarks
   * The job status code. Valid values:
   * - **0**: Waiting for execution.
   * - **1**: Executing.
   * - **2**: Succeeded.
   * - **3**: Failed.
   * 
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @remarks
   * The task type. Valid values:
   * - **CHG_HOLDER**: Modify registrant information.
   * - **CHG_DNS**: Modify DNS settings.
   * - **SET_WHOIS_PROTECT**: Enable privacy protection.
   * - **UPDATE_ADMIN_CONTACT**: Update administrative contact information.
   * - **UPDATE_BILLING_CONTACT**: Update billing contact information.
   * - **UPDATE_TECH_CONTACT**: Update technical contact information.
   * - **SET_UPDATE_PROHIBITED**: Enable the Edit Lock for the domain name.
   * - **SET_TRANSFER_PROHIBITED**: Enable the transfer lock for the domain name.
   * - **ORDER_ACTIVATE**: Create a registration order.
   * - **ORDER_RENEW**: Create a renewal order.
   * - **ORDER_REDEEM**: Create a redemption order.
   * - **CREATE_DNSHOST**: Create a DNS host.
   * - **UPDATE_DNSHOST**: Update a DNS host.
   * - **SYNC_DNSHOST**: Synchronize a DNS host.
   * 
   * @example
   * CHG_DNS
   */
  taskType?: string;
  /**
   * @remarks
   * Task Type description.
   * 
   * @example
   * 修改DNS
   */
  taskTypeDescription?: string;
  /**
   * @remarks
   * Number of retries for the task detail.
   * 
   * @example
   * 5
   */
  tryCount?: number;
  /**
   * @remarks
   * The running time of the most recent job execution.
   * 
   * @example
   * 2019-07-30 00:00:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainName: 'string',
      errorMsg: 'string',
      instanceId: 'string',
      taskDetailNo: 'string',
      taskNo: 'string',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponseBodyPrePageCursor extends $dara.Model {
  /**
   * @remarks
   * Task creation time.
   * 
   * @example
   * 2019-07-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Result of task execution.
   * 
   * @example
   * 域名有禁止更新锁
   */
  errorMsg?: string;
  /**
   * @remarks
   * Domain instance ID.
   * 
   * @example
   * S123456789
   */
  instanceId?: string;
  /**
   * @remarks
   * Task detail number.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-123
   */
  taskDetailNo?: string;
  /**
   * @remarks
   * Task number.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @remarks
   * Task Status. Valid values:
   * - **WAITING_EXECUTE**: Waiting for execution.
   * - **EXECUTING**: Executing.
   * - **EXECUTE_SUCCESS**: Execution succeeded.
   * - **EXECUTE_FAILURE**: Execution failed.
   * 
   * @example
   * EXECUTE_FAILURE
   */
  taskStatus?: string;
  /**
   * @remarks
   * Task status code. Valid values:  
   * - **0**: Waiting for execution.  
   * - **1**: Executing.  
   * - **2**: Execution succeeded.  
   * - **3**: Execution failed.
   * 
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @remarks
   * Task Type. Valid values:
   * - **CHG_HOLDER**: Modify registrant information.
   * - **CHG_DNS**: Modify DNS.
   * - **SET_WHOIS_PROTECT**: Enable privacy protection.
   * - **UPDATE_ADMIN_CONTACT**: Modify administrative contact information.
   * - **UPDATE_BILLING_CONTACT**: Modify billing contact information.
   * - **UPDATE_TECH_CONTACT**: Modify technical contact information.
   * - **SET_UPDATE_PROHIBITED**: Enable domain name edit lock.
   * - **SET_TRANSFER_PROHIBITED**: Enable domain name transfer lock.
   * - **ORDER_ACTIVATE**: Create a registration order.
   * - **ORDER_RENEW**: Create a renewal order.
   * - **ORDER_REDEEM**: Create a redemption order.
   * - **CREATE_DNSHOST**: Create a DNS host.
   * - **UPDATE_DNSHOST**: Update a DNS host.
   * - **SYNC_DNSHOST**: Synchronize a DNS host.
   * 
   * @example
   * CHG_DNS
   */
  taskType?: string;
  /**
   * @remarks
   * Description of the task type.
   * 
   * @example
   * 修改DNS
   */
  taskTypeDescription?: string;
  /**
   * @remarks
   * Number of retries for the task detail.
   * 
   * @example
   * 5
   */
  tryCount?: number;
  /**
   * @remarks
   * The most recent running time of the task details.
   * 
   * @example
   * 2019-07-30 00:00:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainName: 'string',
      errorMsg: 'string',
      instanceId: 'string',
      taskDetailNo: 'string',
      taskNo: 'string',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
      tryCount: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Current page cursor.
   */
  currentPageCursor?: QueryTaskDetailHistoryResponseBodyCurrentPageCursor;
  /**
   * @remarks
   * Cursor for the next page.
   */
  nextPageCursor?: QueryTaskDetailHistoryResponseBodyNextPageCursor;
  /**
   * @remarks
   * Task detail information.
   */
  objects?: QueryTaskDetailHistoryResponseBodyObjects[];
  /**
   * @remarks
   * Paging size.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * Cursor for the previous page.
   */
  prePageCursor?: QueryTaskDetailHistoryResponseBodyPrePageCursor;
  /**
   * @remarks
   * Unique Request access token.
   * 
   * @example
   * 548CAE74-88F8-402F-8C12-97E747389C51
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPageCursor: 'CurrentPageCursor',
      nextPageCursor: 'NextPageCursor',
      objects: 'Objects',
      pageSize: 'PageSize',
      prePageCursor: 'PrePageCursor',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageCursor: QueryTaskDetailHistoryResponseBodyCurrentPageCursor,
      nextPageCursor: QueryTaskDetailHistoryResponseBodyNextPageCursor,
      objects: { 'type': 'array', 'itemType': QueryTaskDetailHistoryResponseBodyObjects },
      pageSize: 'number',
      prePageCursor: QueryTaskDetailHistoryResponseBodyPrePageCursor,
      requestId: 'string',
    };
  }

  validate() {
    if(this.currentPageCursor && typeof (this.currentPageCursor as any).validate === 'function') {
      (this.currentPageCursor as any).validate();
    }
    if(this.nextPageCursor && typeof (this.nextPageCursor as any).validate === 'function') {
      (this.nextPageCursor as any).validate();
    }
    if(Array.isArray(this.objects)) {
      $dara.Model.validateArray(this.objects);
    }
    if(this.prePageCursor && typeof (this.prePageCursor as any).validate === 'function') {
      (this.prePageCursor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

