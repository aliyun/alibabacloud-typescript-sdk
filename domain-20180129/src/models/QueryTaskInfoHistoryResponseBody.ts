// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskInfoHistoryResponseBodyCurrentPageCursor extends $dara.Model {
  /**
   * @remarks
   * User IP address when the job was submitted.
   * 
   * @example
   * 127.0.0.1
   */
  clientip?: string;
  /**
   * @remarks
   * Job creation time.
   * 
   * @example
   * 2017-11-01 17:22:51
   */
  createTime?: string;
  /**
   * @remarks
   * Job creation UNIX timestamp.
   * 
   * @example
   * 1509528171000
   */
  createTimeLong?: number;
  /**
   * @remarks
   * Job number.
   * 
   * @example
   * aa634d3f-927e-4d17-9d2c-test
   */
  taskNo?: string;
  /**
   * @remarks
   * Number of domain names included in the job.
   * 
   * @example
   * 1
   */
  taskNum?: number;
  /**
   * @remarks
   * Task Status. Valid values:
   * - **WAITING_EXECUTE**: Waiting for execution;
   * - **EXECUTING**: Executing;
   * - **COMPLETE**: Execution completed.
   * 
   * @example
   * COMPLETE
   */
  taskStatus?: string;
  /**
   * @remarks
   * Job status code. Valid values:  
   * - **1**: Waiting for execution  
   * - **2**: Executing  
   * - **3**: Execution completed
   * 
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @remarks
   * Job type. Valid values:  
   * - **CHG_HOLDER**: Modify registrant information  
   * - **CHG_DNS**: Modify DNS  
   * - **SET_WHOIS_PROTECT**: Enable privacy protection  
   * - **UPDATE_ADMIN_CONTACT**: Modify administrator contact information  
   * - **UPDATE_BILLING_CONTACT**: Modify billing contact information  
   * - **UPDATE_TECH_CONTACT**: Modify technical contact information  
   * - **SET_UPDATE_PROHIBITED**: Enable domain name edit lock  
   * - **SET_TRANSFER_PROHIBITED**: Enable domain name transfer lock  
   * - **ORDER_ACTIVATE**: Create registration order  
   * - **ORDER_RENEW**: Create renewal order  
   * - **ORDER_REDEEM**: Create redemption order  
   * - **CREATE_DNSHOST**: Create DNS host  
   * - **UPDATE_DNSHOST**: Update DNS host  
   * - **UPDATE_REGISTRANT_CONTACT**: Modify registrant contact  
   * - **DELETE_DOMAIN**: Delete domain name  
   * - **SYNC_DNSHOST**: Synchronize DNS host
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
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      createTimeLong: 'number',
      taskNo: 'string',
      taskNum: 'number',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBodyNextPageCursor extends $dara.Model {
  /**
   * @remarks
   * User IP address when the job was submitted.
   * 
   * @example
   * 127.0.0.1
   */
  clientip?: string;
  /**
   * @remarks
   * Creation Time of the job.
   * 
   * @example
   * 2017-10-27 13:07:07
   */
  createTime?: string;
  /**
   * @remarks
   * Creation Time of the job.
   * 
   * @example
   * 1509080827000
   */
  createTimeLong?: number;
  /**
   * @remarks
   * Job number.
   * 
   * @example
   * 8f112aa1-98be-48c3-82f8-test
   */
  taskNo?: string;
  /**
   * @remarks
   * Number of domain names included in the job.
   * 
   * @example
   * 15
   */
  taskNum?: number;
  /**
   * @remarks
   * Task Status. Valid values:  
   * - **WAITING_EXECUTE**: Waiting to execute;  
   * - **EXECUTING**: Executing;  
   * - **COMPLETE**: Execution completed.
   * 
   * @example
   * COMPLETE
   */
  taskStatus?: string;
  /**
   * @remarks
   * Job status code. Valid values:  
   * - **1**: Waiting to execute;  
   * - **2**: Executing;  
   * - **3**: Execution completed.
   * 
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @remarks
   * Task Type. Valid values:  
   * - **CHG_HOLDER**: Modify registrant information;  
   * - **CHG_DNS**: Modify DNS;  
   * - **SET_WHOIS_PROTECT**: Enable privacy protection;  
   * - **UPDATE_ADMIN_CONTACT**: Modify administrative contact information;  
   * - **UPDATE_BILLING_CONTACT**: Modify billing contact information;  
   * - **UPDATE_TECH_CONTACT**: Modify technical contact information;  
   * - **SET_UPDATE_PROHIBITED**: Enable domain name Edit Lock;  
   * - **SET_TRANSFER_PROHIBITED**: Enable domain name transfer lock;  
   * - **ORDER_ACTIVATE**: Create a registration order;  
   * - **ORDER_RENEW**: Create a renewal order;  
   * - **ORDER_REDEEM**: Create a redemption order;  
   * - **CREATE_DNSHOST**: Create a DNS host;  
   * - **UPDATE_DNSHOST**: Update a DNS host;  
   * - **UPDATE_REGISTRANT_CONTACT**: Modify registrant contact information;  
   * - **DELETE_DOMAIN**: Delete a domain name;  
   * - **SYNC_DNSHOST**: Synchronize DNS host.
   * 
   * @example
   * CHG_DNS
   */
  taskType?: string;
  /**
   * @remarks
   * Task type description.
   * 
   * @example
   * 修改DNS
   */
  taskTypeDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      createTimeLong: 'number',
      taskNo: 'string',
      taskNum: 'number',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBodyObjects extends $dara.Model {
  /**
   * @remarks
   * User IP address when submitting the task.
   * 
   * @example
   * 127.0.0.1
   */
  clientip?: string;
  /**
   * @remarks
   * Task creation time.
   * 
   * @example
   * 2017-11-01 17:22:51
   */
  createTime?: string;
  /**
   * @remarks
   * Task creation time.
   * 
   * @example
   * 1509528171000
   */
  createTimeLong?: number;
  /**
   * @remarks
   * Job number.
   * 
   * @example
   * aa634d3f-927e-4d17-9d2c-test
   */
  taskNo?: string;
  /**
   * @remarks
   * Number of domain names included in the job.
   * 
   * @example
   * 1
   */
  taskNum?: number;
  /**
   * @remarks
   * Task status. Valid values:
   * - **WAITING_EXECUTE**: Waiting for execution;
   * - **EXECUTING**: Executing;
   * - **COMPLETE**: Execution completed.
   * 
   * @example
   * COMPLETE
   */
  taskStatus?: string;
  /**
   * @remarks
   * Task status code. Valid values:
   * - **1**: Waiting for execution;
   * - **2**: Executing;
   * - **3**: Execution completed.
   * 
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @remarks
   * Task Type. Valid values:
   * - **CHG_HOLDER**: Modify owner information;
   * - **CHG_DNS**: Modify DNS;
   * - **SET_WHOIS_PROTECT**: Enable privacy protection;
   * - **UPDATE_ADMIN_CONTACT**: Modify administrative contact information;
   * - **UPDATE_BILLING_CONTACT**: Modify billing contact information;
   * - **UPDATE_TECH_CONTACT**: Modify technical contact information;
   * - **SET_UPDATE_PROHIBITED**: Enable domain name edit lock;
   * - **SET_TRANSFER_PROHIBITED**: Enable domain name transfer lock;
   * - **ORDER_ACTIVATE**: Create a registration order;
   * - **ORDER_RENEW**: Create a renewal order;
   * - **ORDER_REDEEM**: Create a redemption order;
   * - **CREATE_DNSHOST**: Create a DNS host;
   * - **UPDATE_DNSHOST**: Update a DNS host;
   * - **UPDATE_REGISTRANT_CONTACT**: Modify registrant contact information;
   * - **DELETE_DOMAIN**: Delete a domain name;
   * - **SYNC_DNSHOST**: Synchronize a DNS host.
   * 
   * @example
   * CHG_DNS
   */
  taskType?: string;
  /**
   * @remarks
   * Task type description.
   * 
   * @example
   * 修改DNS
   */
  taskTypeDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      createTimeLong: 'number',
      taskNo: 'string',
      taskNum: 'number',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBodyPrePageCursor extends $dara.Model {
  /**
   * @remarks
   * User IP address when submitting the job.
   * 
   * @example
   * 127.0.0.1
   */
  clientip?: string;
  /**
   * @remarks
   * Job creation time.
   * 
   * @example
   * 2017-11-01 17:19:47
   */
  createTime?: string;
  /**
   * @remarks
   * Job creation time.
   * 
   * @example
   * 1509527987000
   */
  createTimeLong?: number;
  /**
   * @remarks
   * Task number.
   * 
   * @example
   * f9baa3d5-33b9-4c81-8847-test
   */
  taskNo?: string;
  /**
   * @remarks
   * Number of domain names included in the job.
   * 
   * @example
   * 15
   */
  taskNum?: number;
  /**
   * @remarks
   * Task Status. Valid values:  
   * - **WAITING_EXECUTE**: Waiting for execution;  
   * - **EXECUTING**: Executing;  
   * - **COMPLETE**: Execution completed.
   * 
   * @example
   * COMPLETE
   */
  taskStatus?: string;
  /**
   * @remarks
   * Task status code. Valid values:  
   * - **1**: Waiting for execution;  
   * - **2**: Executing;  
   * - **3**: Execution completed.
   * 
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @remarks
   * Task Type. Valid values:  
   * - **CHG_HOLDER**: Modify registrant information;  
   * - **CHG_DNS**: Modify DNS;  
   * - **SET_WHOIS_PROTECT**: Enable privacy protection;  
   * - **UPDATE_ADMIN_CONTACT**: Update administrative contact;  
   * - **UPDATE_BILLING_CONTACT**: Update billing contact;  
   * - **UPDATE_TECH_CONTACT**: Update technical contact;  
   * - **SET_UPDATE_PROHIBITED**: Enable domain name edit lock;  
   * - **SET_TRANSFER_PROHIBITED**: Enable domain name transfer lock;  
   * - **ORDER_ACTIVATE**: Create a registration order;  
   * - **ORDER_RENEW**: Create a renewal order;  
   * - **ORDER_REDEEM**: Create a redemption order;  
   * - **CREATE_DNSHOST**: Create a DNS host;  
   * - **UPDATE_DNSHOST**: Update a DNS host;  
   * - **UPDATE_REGISTRANT_CONTACT**: Update registrant contact;  
   * - **DELETE_DOMAIN**: Delete a domain name;  
   * - **SYNC_DNSHOST**: Synchronize DNS host.
   * 
   * @example
   * CHG_DNS
   */
  taskType?: string;
  /**
   * @remarks
   * Task type description.
   * 
   * @example
   * 修改DNS
   */
  taskTypeDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      createTimeLong: 'number',
      taskNo: 'string',
      taskNum: 'number',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cursor for the current page.
   */
  currentPageCursor?: QueryTaskInfoHistoryResponseBodyCurrentPageCursor;
  /**
   * @remarks
   * Cursor for the next page.
   */
  nextPageCursor?: QueryTaskInfoHistoryResponseBodyNextPageCursor;
  /**
   * @remarks
   * Job information.
   */
  objects?: QueryTaskInfoHistoryResponseBodyObjects[];
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * Cursor for the previous page.
   */
  prePageCursor?: QueryTaskInfoHistoryResponseBodyPrePageCursor;
  /**
   * @remarks
   * Unique request access token.
   * 
   * @example
   * EB3FCCBA-CA1F-4D31-9F34-test
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
      currentPageCursor: QueryTaskInfoHistoryResponseBodyCurrentPageCursor,
      nextPageCursor: QueryTaskInfoHistoryResponseBodyNextPageCursor,
      objects: { 'type': 'array', 'itemType': QueryTaskInfoHistoryResponseBodyObjects },
      pageSize: 'number',
      prePageCursor: QueryTaskInfoHistoryResponseBodyPrePageCursor,
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

