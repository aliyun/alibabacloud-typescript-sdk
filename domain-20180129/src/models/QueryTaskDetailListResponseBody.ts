// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskDetailListResponseBodyDataTaskDetail extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2018-01-25 20:46:57
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
   * The error message returned when the task failed.
   * 
   * @example
   * The operation is successful.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The cause of a domain name task failure.
   * 
   * @example
   * Purchase record exists for the domain name in Aliyun
   */
  failReason?: string;
  /**
   * @remarks
   * The instance ID of the domain name.
   * 
   * @example
   * S20179H1BBI9test
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the task details.
   * 
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskDetailNo?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 60d6e201-8ee5-47ab-8fdc-test
   */
  taskNo?: string;
  /**
   * @remarks
   * The result of the task.
   * 
   * @example
   * 12345
   */
  taskResult?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   **WAITING_EXECUTE**: To be executed
   * *   **EXECUTING**: being executed
   * *   **EXECUTE_SUCCESS**: successful
   * *   **EXECUTE_FAILURE**: failed
   * 
   * @example
   * EXECUTE_SUCCESS
   */
  taskStatus?: string;
  /**
   * @remarks
   * The status code of the task. Valid values:
   * 
   * *   **0**: waiting for execution
   * *   **1**: being executed
   * *   **2**: successful
   * *   **3**: failed
   * 
   * @example
   * 2
   */
  taskStatusCode?: number;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   **CHG_HOLDER**: The task is run to modify the domain name registrant.
   * *   **CHG_DNS**: The task is run to change the Domain Name System (DNS) servers.
   * *   **SET_WHOIS_PROTECT**: The task is run to configure privacy protection for the domain name.
   * *   **UPDATE_ADMIN_CONTACT**: The task is run to modify the information about the administrator of the domain name.
   * *   **UPDATE_BILLING_CONTACT**: The task is run to modify the information about the payer for the domain name.
   * *   **UPDATE_TECH_CONTACT**: The task is run to modify the information about the technical support for the domain name.
   * *   **SET_UPDATE_PROHIBITED**: The task is run to configure the security lock for the domain name.
   * *   **SET_TRANSFER_PROHIBITED**: The task is run to configure the transfer lock for the domain name.
   * *   **ORDER_ACTIVATE**: The task is run to create a registration order for the domain name.
   * *   **ORDER_RENEW**: The task is run to create a renewal order for the domain name.
   * *   **ORDER_REDEEM**: The task is run to create a redemption order for the domain name.
   * *   **CREATE_DNSHOST**: The task is run to create a DNS server for the domain name.
   * *   **UPDATE_DNSHOST**: The task is run to update the information about a DNS server for the domain name.
   * *   **SYNC_DNSHOST**: The task is run to synchronize a DNS server for the domain name.
   * 
   * @example
   * ORDER_RENEW
   */
  taskType?: string;
  /**
   * @remarks
   * The description of the task type.
   */
  taskTypeDescription?: string;
  /**
   * @remarks
   * The number of times the task was retried.
   * 
   * @example
   * 0
   */
  tryCount?: number;
  /**
   * @remarks
   * The last time when the task was run.
   * 
   * @example
   * 2018-01-25 20:47:01
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      failReason: 'FailReason',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
      taskResult: 'TaskResult',
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
      failReason: 'string',
      instanceId: 'string',
      taskDetailNo: 'string',
      taskNo: 'string',
      taskResult: 'string',
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

export class QueryTaskDetailListResponseBodyData extends $dara.Model {
  taskDetail?: QueryTaskDetailListResponseBodyDataTaskDetail[];
  static names(): { [key: string]: string } {
    return {
      taskDetail: 'TaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskDetail: { 'type': 'array', 'itemType': QueryTaskDetailListResponseBodyDataTaskDetail },
    };
  }

  validate() {
    if(Array.isArray(this.taskDetail)) {
      $dara.Model.validateArray(this.taskDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  currentPageNum?: number;
  /**
   * @remarks
   * The tasks.
   */
  data?: QueryTaskDetailListResponseBodyData;
  /**
   * @remarks
   * Indicates whether the current page is followed by a page.
   * 
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the current page is preceded by a page.
   * 
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A2320E4-D870-49C9-A6DC-test
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalItemNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryTaskDetailListResponseBodyData,
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
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

