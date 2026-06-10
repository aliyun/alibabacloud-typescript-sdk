// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsByGroupResponseBodyJobsListContacts extends $dara.Model {
  /**
   * @remarks
   * Contact ID (system-generated)
   * 
   * @example
   * db3db762-e421-44c9-9a01-cb423470757c
   */
  contactId?: string;
  /**
   * @remarks
   * Contact name
   * 
   * @example
   * 张三
   */
  contactName?: string;
  /**
   * @remarks
   * Honorific (same as contact name)
   * 
   * @example
   * 张先生
   */
  honorific?: string;
  /**
   * @remarks
   * Job ID (deprecated)
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5b160
   */
  jobId?: string;
  /**
   * @remarks
   * Phone number
   * 
   * @example
   * 134********
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Contact third-party system ID (uploaded by customer)
   * 
   * @example
   * 2fa6bac3-06da-4315-82ab-72d6fd3a6f34
   */
  referenceId?: string;
  /**
   * @remarks
   * Deprecated
   * 
   * @example
   * *
   */
  role?: string;
  /**
   * @remarks
   * Deprecated
   * 
   * @example
   * Available
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBodyJobsListExtras extends $dara.Model {
  /**
   * @remarks
   * Business parameter name
   * 
   * @example
   * 性别
   */
  key?: string;
  /**
   * @remarks
   * Business parameter value
   * 
   * @example
   * 男
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListJobsByGroupResponseBodyJobsListSummary extends $dara.Model {
  /**
   * @remarks
   * Conversation summary category
   * 
   * @example
   * {}
   */
  category?: string;
  /**
   * @remarks
   * Conversation summary content
   * 
   * @example
   * 5
   */
  content?: string;
  /**
   * @remarks
   * Call record ID
   * 
   * @example
   * 62a860f5-a8b3-4b75-9512-c7e04bb7c8bc
   */
  conversationDetailId?: string;
  /**
   * @remarks
   * Job group ID
   * 
   * @example
   * 88e56cfb-33f8-477a-907c-0fe83292d924
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * f102a853-5f5a-47fb-8869-b31ea74a9620
   */
  jobId?: string;
  /**
   * @remarks
   * Summary ID
   * 
   * @example
   * 680f1905-81ae-4aab-99dd-2964dfb767fa
   */
  summaryId?: string;
  /**
   * @remarks
   * Summary name
   * 
   * @example
   * score
   */
  summaryName?: string;
  /**
   * @remarks
   * Call ID
   * 
   * @example
   * b0f35dd1-0337-402e-9c4f-3a6c2426950a
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      conversationDetailId: 'ConversationDetailId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      summaryId: 'SummaryId',
      summaryName: 'SummaryName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      conversationDetailId: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      summaryId: 'string',
      summaryName: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBodyJobsList extends $dara.Model {
  /**
   * @remarks
   * Caller number list
   */
  callingNumbers?: string[];
  /**
   * @remarks
   * Contact list
   */
  contacts?: ListJobsByGroupResponseBodyJobsListContacts[];
  /**
   * @remarks
   * Business data
   * 
   * > TenantId and ServiceId are system-generated. All other parameters are custom.
   */
  extras?: ListJobsByGroupResponseBodyJobsListExtras[];
  /**
   * @remarks
   * The failure reason.
   * 
   * - Unknown: An unknown error occurred.
   * 
   * - NoAnswer: The call was not answered.
   * 
   * - InvalidStrategy: The policy is invalid or incorrectly configured.
   * 
   * - TimeUp: The task timed out during scheduling.
   * 
   * - NoStrategy: The policy is empty or was not found.
   * 
   * - CallFailed: The call failed.
   * 
   * - PerDayCallCountLimit: The daily call limit for the phone number was reached.
   * 
   * - ContactBlockList: The phone number is on the blocklist.
   * 
   * - EmptyNumber: The phone number is nonexistent.
   * 
   * - JobPerDayCallCountLimit: The daily call limit for the phone number within the job was reached.
   * 
   * - VerificationCancelled: The call was canceled because it failed pre-call validation.
   * 
   * - ContactSuspended: Calling to the contact is suspended.
   * 
   * - InArrears: The account has an overdue payment.
   * 
   * - OutOfService: The phone number is out of service.
   * 
   * - NoneRepeatableJobMaxAttemptCountLimit: The non-repeatable job reached the maximum number of attempts.
   * 
   * @example
   * NoAnswer
   */
  failureReason?: string;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * fce6c599-8ede-40e3-9f78-0928eda7b4e8
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * b72425bd-7871-4050-838e-033d80d754b7
   */
  jobId?: string;
  /**
   * @remarks
   * Priority
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * Third-party system ID
   * 
   * @example
   * d5971d98-7312-4f0e-a918-a17d67133e28
   */
  referenceId?: string;
  /**
   * @remarks
   * Scenario ID (legacy parameter)
   * 
   * @example
   * ade80092-03d9-4f4d-ad4f-ab8a247d3150
   */
  scenarioId?: string;
  /**
   * @remarks
   * Job status
   * 
   * - Scheduling (0)
   * 
   * - Executing (1)
   * 
   * - Succeeded (2)
   * 
   * - Paused (3)
   * 
   * - Failed (4)
   * 
   * - Cancelled (5)
   * 
   * - Drafted (6)
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * Strategy ID
   * 
   * @example
   * c8a2b7f2-ad1a-4865-b872-d0080d9802d9
   */
  strategyId?: string;
  /**
   * @remarks
   * Conversation summary (deprecated)
   * 
   * > Use the DescribeJob API to retrieve this data.
   */
  summary?: ListJobsByGroupResponseBodyJobsListSummary[];
  /**
   * @remarks
   * System priority
   * 
   * @example
   * 1
   */
  systemPriority?: number;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      contacts: 'Contacts',
      extras: 'Extras',
      failureReason: 'FailureReason',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      priority: 'Priority',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      status: 'Status',
      strategyId: 'StrategyId',
      summary: 'Summary',
      systemPriority: 'SystemPriority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsListContacts },
      extras: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsListExtras },
      failureReason: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      priority: 'number',
      referenceId: 'string',
      scenarioId: 'string',
      status: 'string',
      strategyId: 'string',
      summary: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsListSummary },
      systemPriority: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.callingNumbers)) {
      $dara.Model.validateArray(this.callingNumbers);
    }
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    if(Array.isArray(this.extras)) {
      $dara.Model.validateArray(this.extras);
    }
    if(Array.isArray(this.summary)) {
      $dara.Model.validateArray(this.summary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * Job list
   */
  list?: ListJobsByGroupResponseBodyJobsList[];
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 18
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Job array
   */
  jobs?: ListJobsByGroupResponseBodyJobs;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobs: 'Jobs',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobs: ListJobsByGroupResponseBodyJobs,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.jobs && typeof (this.jobs as any).validate === 'function') {
      (this.jobs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

