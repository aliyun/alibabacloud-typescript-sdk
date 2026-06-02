// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobsResponseBodyJobsListContacts extends $dara.Model {
  /**
   * @example
   * db3db762-e421-44c9-9a01-cb423470757c
   */
  contactId?: string;
  contactName?: string;
  honorific?: string;
  /**
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5b160
   */
  jobId?: string;
  /**
   * @example
   * 135****8888
   */
  phoneNumber?: string;
  /**
   * @example
   * 2fa6bac3-06da-4315-82ab-72d6fd3a6f34
   */
  referenceId?: string;
  /**
   * @example
   * *
   */
  role?: string;
  /**
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
   * @example
   * djrq
   */
  key?: string;
  /**
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
   * @example
   * {}
   */
  category?: string;
  /**
   * @example
   * 5
   */
  content?: string;
  /**
   * @example
   * 098b9b09-9223-4a8b-a422-99726f0457f3
   */
  conversationDetailId?: string;
  /**
   * @example
   * ba1ba502-d044-48c0-b710-0f1f840a7c53
   */
  groupId?: string;
  /**
   * @example
   * 994b8baf-7ef8-480c-b141-b7b6db77c4df
   */
  jobId?: string;
  /**
   * @example
   * dc67d544-df06-4625-ae48-13e3c9f72d8a
   */
  summaryId?: string;
  /**
   * @example
   * score
   */
  summaryName?: string;
  /**
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
  tagGroup?: string;
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
   * @example
   * db3db762-e421-44c9-9a01-cb423470757c
   */
  contactId?: string;
  contactName?: string;
  honorific?: string;
  /**
   * @example
   * b72425bd-7871-4050-838e-033d80d754b7
   */
  jobId?: string;
  /**
   * @example
   * 135****8888
   */
  phoneNumber?: string;
  /**
   * @example
   * 2fa6bac3-06da-4315-82ab-72d6fd3a6f34
   */
  referenceId?: string;
  /**
   * @example
   * *
   */
  role?: string;
  /**
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
   * @example
   * 1579068424883
   */
  actualTime?: number;
  /**
   * @example
   * 1
   */
  brief?: string;
  /**
   * @example
   * 1528189846043
   */
  callId?: string;
  /**
   * @example
   * 135****8888
   */
  calledNumber?: string;
  /**
   * @example
   * 0571****3106
   */
  callingNumber?: string;
  /**
   * @example
   * 1234
   */
  chatbotId?: string;
  contact?: QueryJobsResponseBodyJobsListTasksContact;
  /**
   * @example
   * 120
   */
  duration?: number;
  /**
   * @example
   * b72425bd-7871-4050-838e-033d80d754b7
   */
  jobId?: string;
  /**
   * @example
   * 1579068424883
   */
  planedTime?: number;
  /**
   * @example
   * ade80092-03d9-4f4d-ad4f-ab8a247d3150
   */
  scenarioId?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
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
  callingNumbers?: string[];
  contacts?: QueryJobsResponseBodyJobsListContacts[];
  extras?: QueryJobsResponseBodyJobsListExtras[];
  /**
   * @example
   * NoAnswer
   */
  failureReason?: string;
  /**
   * @example
   * fce6c599-8ede-40e3-9f78-0928eda7b4e8
   */
  jobGroupId?: string;
  /**
   * @example
   * fce6c599-8ede-40e3-9f78-0928eda7b4e8
   */
  jobId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * d5971d98-7312-4f0e-a918-a17d67133e28
   */
  referenceId?: string;
  /**
   * @example
   * ade80092-03d9-4f4d-ad4f-ab8a247d3150
   */
  scenarioId?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * c8a2b7f2-ad1a-4865-b872-d0080d9802d9
   */
  strategyId?: string;
  summary?: QueryJobsResponseBodyJobsListSummary[];
  tagHits?: QueryJobsResponseBodyJobsListTagHits[];
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
  list?: QueryJobsResponseBodyJobsList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  jobs?: QueryJobsResponseBodyJobs;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
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

