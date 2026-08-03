// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobsResponseBodyJobsListContacts extends $dara.Model {
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * db3db762-e421-44c9-9a01-cb423470757c
   */
  contactId?: string;
  /**
   * @remarks
   * The contact name.
   * 
   * @example
   * 张三
   */
  contactName?: string;
  /**
   * @remarks
   * The honorific title.
   * 
   * @example
   * 张先生
   */
  honorific?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * fce6c599-8ede-40e3-9f78-0928eda7b4e8
   */
  jobId?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 135****8888
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The associated business ID.
   * 
   * @example
   * 2fa6bac3-06da-4315-82ab-72d6fd3a6f34
   */
  referenceId?: string;
  /**
   * @remarks
   * The role.
   * 
   * @example
   * *
   */
  role?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - Available: Normal.
   * - WrongNumber: Wrong number.
   * - DoesNotExist: Nonexistent number.
   * - Suspended: Call suspended.
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

export class QueryJobsResponseBodyJobsListExtras extends $dara.Model {
  /**
   * @remarks
   * The business data key.
   * 
   * @example
   * djrq
   */
  key?: string;
  /**
   * @remarks
   * The business data value.
   * 
   * @example
   * 2019-08-21 09:49:59.0
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

export class QueryJobsResponseBodyJobsListSummary extends $dara.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * {}
   */
  category?: string;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * 5
   */
  content?: string;
  /**
   * @remarks
   * The call record ID.
   * 
   * @example
   * 098b9b09-9223-4a8b-a422-99726f0457f3
   */
  conversationDetailId?: string;
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * ba1ba502-d044-48c0-b710-0f1f840a7c53
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * b72425bd-7871-4050-838e-033d80d754b7
   */
  jobId?: string;
  /**
   * @remarks
   * The summary ID.
   * 
   * @example
   * dc67d544-df06-4625-ae48-13e3c9f72d8a
   */
  summaryId?: string;
  /**
   * @remarks
   * The summary name.
   * 
   * @example
   * score
   */
  summaryName?: string;
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * 9fdf7a81-6781-4ab8-92fb-1d4231ef365e
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      conversationDetailId: 'ConversationDetailId',
      groupId: 'GroupId',
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
      groupId: 'string',
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

export class QueryJobsResponseBodyJobsListTagHits extends $dara.Model {
  /**
   * @remarks
   * The tag group name.
   * 
   * @example
   * 意向收集
   */
  tagGroup?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 有意向
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagGroup: 'TagGroup',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagGroup: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsResponseBodyJobsListTasksContact extends $dara.Model {
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * db3db762-e421-44c9-9a01-cb423470757c
   */
  contactId?: string;
  /**
   * @remarks
   * The contact name.
   * 
   * @example
   * 张三
   */
  contactName?: string;
  /**
   * @remarks
   * The honorific title.
   * 
   * @example
   * 张先生
   */
  honorific?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * b72425bd-7871-4050-838e-033d80d754b7
   */
  jobId?: string;
  /**
   * @remarks
   * The contact phone number.
   * 
   * @example
   * 135****8888
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The associated business ID.
   * 
   * @example
   * 2fa6bac3-06da-4315-82ab-72d6fd3a6f34
   */
  referenceId?: string;
  /**
   * @remarks
   * The role.
   * 
   * @example
   * *
   */
  role?: string;
  /**
   * @remarks
   * The status.
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

export class QueryJobsResponseBodyJobsListTasks extends $dara.Model {
  /**
   * @remarks
   * The actual outbound call time.
   * 
   * @example
   * 1579068424883
   */
  actualTime?: number;
  /**
   * @remarks
   * The summary. This is a legacy field and is no longer in use.
   * 
   * @example
   * 1
   */
  brief?: string;
  /**
   * @remarks
   * SIP call ID。
   * 
   * @example
   * 1528189846043
   */
  callId?: string;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 135****8888
   */
  calledNumber?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 0571****3106
   */
  callingNumber?: string;
  /**
   * @remarks
   * The chatbot ID.
   * 
   * @example
   * 1234
   */
  chatbotId?: string;
  /**
   * @remarks
   * The contact information.
   */
  contact?: QueryJobsResponseBodyJobsListTasksContact;
  /**
   * @remarks
   * The call duration.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * b72425bd-7871-4050-838e-033d80d754b7
   */
  jobId?: string;
  /**
   * @remarks
   * The planned outbound call time.
   * 
   * @example
   * 1579068424883
   */
  planedTime?: number;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * ade80092-03d9-4f4d-ad4f-ab8a247d3150
   */
  scenarioId?: string;
  /**
   * @remarks
   * The task status. Note: The Succeeded status has been subdivided into specific reason types. The Succeeded:1 (Connected) status is no longer returned. Instead, the specific sub-reason type is returned. Valid values:
   * 
   * - Executing: 0 (Dialing).
   * - Succeeded: 1 (Connected).
   * - NoAnswer: 2 (Not connected - No answer).
   * 
   * - NotExist: 3 (Not connected - Nonexistent number).
   * 
   * - Busy: 4 (Not connected - Busy).
   * 
   * - Cancelled: 5 (Not dialed - Task stopped).
   * 
   * - Failed: 6 (Failed).
   * 
   * - NotConnected: 7 (Not connected - Unreachable).
   * 
   * - PoweredOff: 8 (Not connected - Powered off).
   * 
   * - OutOfService: 9 (Not connected - Called party out of service).
   * 
   * - InArrears: 10 (Not connected - Called party has overdue payment).
   * 
   * - EmptyNumber: 11 (Not dialed - Nonexistent number).
   * 
   * - PerDayCallCountLimit: 12 (Not dialed - Daily limit exceeded).
   * 
   * - ContactBlockList: 13 (Not dialed - Blocked list).
   * 
   * - CallerNotRegistered: 14 (Not dialed - Caller number not registered).
   * 
   * - Terminated: 15 (Not dialed - Terminated).
   * 
   * - VerificationCancelled: 16 (Not dialed - Pre-call verification failed).
   * 
   * - OutOfServiceNoCall: 17 (Not dialed - Called party out of service).
   * 
   * - InArrearsNoCall: 18 (Not dialed - Called party has overdue payment).
   * 
   * - CallingNumberNotExist: 19 (Not dialed - Caller number does not exist).
   * - SucceededFinish: 20 (Connected - Completed normally).
   * 
   * - SucceededChatbotHangUpAfterNoAnswer: 21 (Connected - Robot hung up after no recognition).
   * 
   * - SucceededChatbotHangUpAfterSilence: 22 (Connected - Silence timeout hang-up).
   * 
   * - SucceededClientHangUpAfterNoAnswer: 23 (Connected - User hung up after no recognition).
   * 
   * - SucceededClientHangUp: 24 (Connected - User hung up without reason).
   * 
   * - SucceededTransferByIntent: 25 (Connected - Transferred to agent by intent).
   * 
   * - SucceededTransferAfterNoAnswer: 26 (Connected - Transferred to agent after no recognition).
   * 
   * - SucceededInoInterAction: 27 (Connected - No interaction from user side).
   * 
   * - SucceededError: 28 (Connected - System exception interruption).
   * 
   * - SucceededSpecialInterceptVoiceAssistant: 29 (Connected - Special intercept - Voice assistant).
   * 
   * - SucceededSpecialInterceptExtensionNumberTransfer: 30 (Connected - Special intercept - Extension number transfer).
   * - SucceededSpecialInterceptCustomSpecialIntercept: 31 (Connected - Special intercept - Custom intercept).
   * - HighRiskSipCode: 32 (Not dialed - High risk).
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * ff44709e-39a6-43ba-959b-20fcabe3e496
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      brief: 'Brief',
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      chatbotId: 'ChatbotId',
      contact: 'Contact',
      duration: 'Duration',
      jobId: 'JobId',
      planedTime: 'PlanedTime',
      scenarioId: 'ScenarioId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      brief: 'string',
      callId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      chatbotId: 'string',
      contact: QueryJobsResponseBodyJobsListTasksContact,
      duration: 'number',
      jobId: 'string',
      planedTime: 'number',
      scenarioId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.contact && typeof (this.contact as any).validate === 'function') {
      (this.contact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsResponseBodyJobsList extends $dara.Model {
  /**
   * @remarks
   * The list of calling numbers.
   */
  callingNumbers?: string[];
  /**
   * @remarks
   * The contact information. This parameter has been deprecated.
   * 
   * > You can retrieve this information by calling the DescribeJob operation.
   */
  contacts?: QueryJobsResponseBodyJobsListContacts[];
  /**
   * @remarks
   * The business data. Displays tag collection results for large language model scenarios.
   * 
   * > Keys equal to TenantId or ServiceId are system parameters.
   */
  extras?: QueryJobsResponseBodyJobsListExtras[];
  /**
   * @remarks
   * The failure reason. Valid values:
   * - Unknown: Unknown error.  
   * - NoAnswer: No answer.
   * - InvalidStrategy: Invalid strategy. The strategy configuration is incorrect.
   * - TimeUp: Timeout detected during scheduling.
   * - NoStrategy: The strategy is empty or not found.
   * - CallFailed: Call failed.
   * - PerDayCallCountLimit: Daily call count limit for the number reached.
   * - ContactBlockList: The number is on the blocked list.
   * - EmptyNumber: Nonexistent number. No further outbound calls.
   * - JobPerDayCallCountLimit: Daily call count limit for the number reached.
   * - VerificationCancelled: Pre-call verification failed. The call was cancelled.
   * - ContactSuspended: Call suspended.
   * - InArrears: Overdue payment.
   * - OutOfService: Out of service.
   * 
   * @example
   * NoAnswer
   */
  failureReason?: string;
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * fce6c599-8ede-40e3-9f78-0928eda7b4e8
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * fce6c599-8ede-40e3-9f78-0928eda7b4e8
   */
  jobId?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The associated business ID.
   * 
   * @example
   * d5971d98-7312-4f0e-a918-a17d67133e28
   */
  referenceId?: string;
  /**
   * @remarks
   * The scenario ID. This is a legacy parameter and has been deprecated.
   * 
   * @example
   * ade80092-03d9-4f4d-ad4f-ab8a247d3150
   */
  scenarioId?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * - Scheduling(0): Scheduling.
   * - Executing(1): Executing.
   * - Succeeded(2): Completed - Reached.
   * - Paused(3): Paused.
   * - Failed(4): Completed - Not reached.
   * - Cancelled(5): Cancelled - Manual intervention.
   * - Drafted(6): Draft.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The strategy ID.
   * 
   * @example
   * c8a2b7f2-ad1a-4865-b872-d0080d9802d9
   */
  strategyId?: string;
  /**
   * @remarks
   * The conversation summary. This is a legacy field and is no longer in use. Deprecated.
   */
  summary?: QueryJobsResponseBodyJobsListSummary[];
  /**
   * @remarks
   * The tag hit information in small model scenarios.
   */
  tagHits?: QueryJobsResponseBodyJobsListTagHits[];
  /**
   * @remarks
   * The call list. This parameter has been deprecated.
   * 
   * > You can retrieve this information by calling the searchTask operation.
   */
  tasks?: QueryJobsResponseBodyJobsListTasks[];
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
      tagHits: 'TagHits',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': QueryJobsResponseBodyJobsListContacts },
      extras: { 'type': 'array', 'itemType': QueryJobsResponseBodyJobsListExtras },
      failureReason: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      priority: 'number',
      referenceId: 'string',
      scenarioId: 'string',
      status: 'string',
      strategyId: 'string',
      summary: { 'type': 'array', 'itemType': QueryJobsResponseBodyJobsListSummary },
      tagHits: { 'type': 'array', 'itemType': QueryJobsResponseBodyJobsListTagHits },
      tasks: { 'type': 'array', 'itemType': QueryJobsResponseBodyJobsListTasks },
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
    if(Array.isArray(this.tagHits)) {
      $dara.Model.validateArray(this.tagHits);
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The list of jobs.
   */
  list?: QueryJobsResponseBodyJobsList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
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
      list: { 'type': 'array', 'itemType': QueryJobsResponseBodyJobsList },
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

export class QueryJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The job data.
   */
  jobs?: QueryJobsResponseBodyJobs;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      jobs: QueryJobsResponseBodyJobs,
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

