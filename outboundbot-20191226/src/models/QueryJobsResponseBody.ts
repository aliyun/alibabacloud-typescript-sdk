// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobsResponseBodyJobsListContacts extends $dara.Model {
  /**
   * @remarks
   * Contact ID.
   * 
   * @example
   * db3db762-e421-44c9-9a01-cb423470757c
   */
  contactId?: string;
  /**
   * @remarks
   * Contact name.
   * 
   * @example
   * 张三
   */
  contactName?: string;
  /**
   * @remarks
   * Honorific.
   * 
   * @example
   * 张先生
   */
  honorific?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * fce6c599-8ede-40e3-9f78-0928eda7b4e8
   */
  jobId?: string;
  /**
   * @remarks
   * Phone number.
   * 
   * @example
   * 135****8888
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Associated business ID.
   * 
   * @example
   * 2fa6bac3-06da-4315-82ab-72d6fd3a6f34
   */
  referenceId?: string;
  /**
   * @remarks
   * Role.
   * 
   * @example
   * *
   */
  role?: string;
  /**
   * @remarks
   * Status.
   * 
   * - Available
   * 
   * - WrongNumber
   * 
   * - DoesNotExist
   * 
   * - Suspended
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
   * Business data key.
   * 
   * @example
   * djrq
   */
  key?: string;
  /**
   * @remarks
   * Business data value.
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
   * Category.
   * 
   * @example
   * {}
   */
  category?: string;
  /**
   * @remarks
   * Content.
   * 
   * @example
   * 5
   */
  content?: string;
  /**
   * @remarks
   * Call record ID.
   * 
   * @example
   * 098b9b09-9223-4a8b-a422-99726f0457f3
   */
  conversationDetailId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * ba1ba502-d044-48c0-b710-0f1f840a7c53
   */
  groupId?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * b72425bd-7871-4050-838e-033d80d754b7
   */
  jobId?: string;
  /**
   * @remarks
   * Summary ID.
   * 
   * @example
   * dc67d544-df06-4625-ae48-13e3c9f72d8a
   */
  summaryId?: string;
  /**
   * @remarks
   * Summary name.
   * 
   * @example
   * score
   */
  summaryName?: string;
  /**
   * @remarks
   * Call ID.
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
   * Tag group name.
   * 
   * @example
   * 意向收集
   */
  tagGroup?: string;
  /**
   * @remarks
   * Tag name.
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
   * Contact ID.
   * 
   * @example
   * db3db762-e421-44c9-9a01-cb423470757c
   */
  contactId?: string;
  /**
   * @remarks
   * Contact name.
   * 
   * @example
   * 张三
   */
  contactName?: string;
  /**
   * @remarks
   * Honorific.
   * 
   * @example
   * 张先生
   */
  honorific?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * b72425bd-7871-4050-838e-033d80d754b7
   */
  jobId?: string;
  /**
   * @remarks
   * Contact phone number.
   * 
   * @example
   * 135****8888
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Business association ID.
   * 
   * @example
   * 2fa6bac3-06da-4315-82ab-72d6fd3a6f34
   */
  referenceId?: string;
  /**
   * @remarks
   * Role.
   * 
   * @example
   * *
   */
  role?: string;
  /**
   * @remarks
   * Status.
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
   * Actual call time.
   * 
   * @example
   * 1579068424883
   */
  actualTime?: number;
  /**
   * @remarks
   * Summary. This field is deprecated.
   * 
   * @example
   * 1
   */
  brief?: string;
  /**
   * @remarks
   * SIP call ID.
   * 
   * @example
   * 1528189846043
   */
  callId?: string;
  /**
   * @remarks
   * Callee number.
   * 
   * @example
   * 135****8888
   */
  calledNumber?: string;
  /**
   * @remarks
   * Caller number.
   * 
   * @example
   * 0571****3106
   */
  callingNumber?: string;
  /**
   * @remarks
   * Chatbot ID.
   * 
   * @example
   * 1234
   */
  chatbotId?: string;
  /**
   * @remarks
   * Contact information.
   */
  contact?: QueryJobsResponseBodyJobsListTasksContact;
  /**
   * @remarks
   * Call duration in seconds.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * b72425bd-7871-4050-838e-033d80d754b7
   */
  jobId?: string;
  /**
   * @remarks
   * Scheduled call time.
   * 
   * @example
   * 1579068424883
   */
  planedTime?: number;
  /**
   * @remarks
   * Scenario ID.
   * 
   * @example
   * ade80092-03d9-4f4d-ad4f-ab8a247d3150
   */
  scenarioId?: string;
  /**
   * @remarks
   * The status of the task. Valid values are described below. Note that the Succeeded status is subdivided by reason. The generic Succeeded: 1 (Connected) status is no longer returned, and a specific success reason is provided instead.
   * 
   * - Executing: 0 (Calling).
   * 
   * - Succeeded: 1 (Connected).
   * 
   * - NoAnswer: 2 (Not connected – No answer).
   * 
   * - NotExist: 3 (Not connected – Nonexistent number).
   * 
   * - Busy: 4 (Not connected – Line busy).
   * 
   * - Cancelled: 5 (Not dialed – Task stopped).
   * 
   * - Failed: 6 (Failed).
   * 
   * - NotConnected: 7 (Not connected – Unreachable).
   * 
   * - PoweredOff: 8 (Not connected – Powered off).
   * 
   * - OutOfService: 9 (Not connected – Service suspended).
   * 
   * - InArrears: 10 (Not connected – Account has an overdue payment).
   * 
   * - EmptyNumber: 11 (Not dialed – Invalid number).
   * 
   * - PerDayCallCountLimit: 12 (Not dialed – Daily call limit exceeded).
   * 
   * - ContactBlockList: 13 (Not dialed – Number on blocklist).
   * 
   * - CallerNotRegistered: 14 (Not dialed – Caller ID not registered).
   * 
   * - Terminated: 15 (Not dialed – Terminated).
   * 
   * - VerificationCancelled: 16 (Not dialed – Canceled due to pre-call validation failure).
   * 
   * - OutOfServiceNoCall: 17 (Not dialed – Service suspended).
   * 
   * - InArrearsNoCall: 18 (Not dialed – Account has an overdue payment).
   * 
   * - CallingNumberNotExist: 19 (Not dialed – Caller ID does not exist).
   * 
   * - SucceededFinish: 20 (Connected – Completed normally).
   * 
   * - SucceededChatbotHangUpAfterNoAnswer: 21 (Connected – Bot hung up due to unrecognized input).
   * 
   * - SucceededChatbotHangUpAfterSilence: 22 (Connected – Bot hung up due to a silence timeout).
   * 
   * - SucceededClientHangUpAfterNoAnswer: 23 (Connected – User hung up due to unrecognized input).
   * 
   * - SucceededClientHangUp: 24 (Connected – User hung up).
   * 
   * - SucceededTransferByIntent: 25 (Connected – Transferred to an agent based on an intent match).
   * 
   * - SucceededTransferAfterNoAnswer: 26 (Connected – Transferred to an agent due to unrecognized input).
   * 
   * - SucceededInoInterAction: 27 (Connected – No user interaction).
   * 
   * - SucceededError: 28 (Connected – Call interrupted by a system error).
   * 
   * - SucceededSpecialInterceptVoiceAssistant: 29 (Connected – Intercepted by a voice assistant).
   * 
   * - SucceededSpecialInterceptExtensionNumberTransfer: 30 (Connected – Intercepted due to an extension transfer).
   * 
   * - SucceededSpecialInterceptCustomSpecialIntercept: 31 (Connected – Intercepted by a custom rule).
   * 
   * - HighRiskSipCode: 32 (Not dialed – High-risk number).
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * Call ID.
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
   * Caller number list.
   */
  callingNumbers?: string[];
  /**
   * @remarks
   * Contact information. This parameter is deprecated.
   * 
   * > Use the DescribeJob operation instead.
   */
  contacts?: QueryJobsResponseBodyJobsListContacts[];
  /**
   * @remarks
   * Business data. Shows tag collection status for Large Language Model (LLM) scenarios.
   * 
   * > Keys TenantId and ServiceId are system parameters.
   */
  extras?: QueryJobsResponseBodyJobsListExtras[];
  /**
   * @remarks
   * Failure reason.
   * 
   * - Unknown
   * 
   * - NoAnswer
   * 
   * - InvalidStrategy
   * 
   * - TimeUp
   * 
   * - NoStrategy
   * 
   * - CallFailed
   * 
   * - PerDayCallCountLimit
   * 
   * - ContactBlockList
   * 
   * - EmptyNumber
   * 
   * - JobPerDayCallCountLimit
   * 
   * - VerificationCancelled
   * 
   * - ContactSuspended
   * 
   * - InArrears
   * 
   * - OutOfService
   * 
   * @example
   * NoAnswer
   */
  failureReason?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * fce6c599-8ede-40e3-9f78-0928eda7b4e8
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * fce6c599-8ede-40e3-9f78-0928eda7b4e8
   */
  jobId?: string;
  /**
   * @remarks
   * Priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * Associated business ID.
   * 
   * @example
   * d5971d98-7312-4f0e-a918-a17d67133e28
   */
  referenceId?: string;
  /**
   * @remarks
   * Scenario ID. This parameter is deprecated.
   * 
   * @example
   * ade80092-03d9-4f4d-ad4f-ab8a247d3150
   */
  scenarioId?: string;
  /**
   * @remarks
   * Job status.
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
   * Strategy ID.
   * 
   * @example
   * c8a2b7f2-ad1a-4865-b872-d0080d9802d9
   */
  strategyId?: string;
  /**
   * @remarks
   * Conversation summary. This field is deprecated.
   */
  summary?: QueryJobsResponseBodyJobsListSummary[];
  /**
   * @remarks
   * Tags hit in small model scenarios.
   */
  tagHits?: QueryJobsResponseBodyJobsListTagHits[];
  /**
   * @remarks
   * Call list. This parameter is deprecated.
   * 
   * > Use the searchTask operation instead.
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
   * Job array.
   */
  list?: QueryJobsResponseBodyJobsList[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records.
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
   * HTTP status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Job data.
   */
  jobs?: QueryJobsResponseBodyJobs;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded.
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

