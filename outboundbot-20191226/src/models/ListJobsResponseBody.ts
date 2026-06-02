// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsResponseBodyJobsContacts extends $dara.Model {
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

export class ListJobsResponseBodyJobsExtras extends $dara.Model {
  /**
   * @example
   * name
   */
  key?: string;
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

export class ListJobsResponseBodyJobsSummary extends $dara.Model {
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
   * score
   */
  summaryName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      summaryName: 'SummaryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      summaryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsTasksContact extends $dara.Model {
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

export class ListJobsResponseBodyJobsTasksConversationSummary extends $dara.Model {
  category?: string;
  content?: string;
  summaryName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      summaryName: 'SummaryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      summaryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsTasksConversation extends $dara.Model {
  script?: string;
  /**
   * @example
   * Robot
   */
  speaker?: string;
  summary?: ListJobsResponseBodyJobsTasksConversationSummary[];
  /**
   * @example
   * 1579068424883
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      script: 'Script',
      speaker: 'Speaker',
      summary: 'Summary',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      script: 'string',
      speaker: 'string',
      summary: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsTasksConversationSummary },
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.summary)) {
      $dara.Model.validateArray(this.summary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsTasks extends $dara.Model {
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
  contact?: ListJobsResponseBodyJobsTasksContact;
  conversation?: ListJobsResponseBodyJobsTasksConversation[];
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
      conversation: 'Conversation',
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
      contact: ListJobsResponseBodyJobsTasksContact,
      conversation: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsTasksConversation },
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
    if(Array.isArray(this.conversation)) {
      $dara.Model.validateArray(this.conversation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobs extends $dara.Model {
  callingNumbers?: string[];
  contacts?: ListJobsResponseBodyJobsContacts[];
  extras?: ListJobsResponseBodyJobsExtras[];
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
   * b72425bd-7871-4050-838e-033d80d754b7
   */
  jobId?: string;
  /**
   * @example
   * 5
   */
  priority?: number;
  /**
   * @example
   * d5971d98-7312-4f0e-a918-a17d67133e28
   */
  referenceId?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
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
  summary?: ListJobsResponseBodyJobsSummary[];
  /**
   * @example
   * 1
   */
  systemPriority?: number;
  tasks?: ListJobsResponseBodyJobsTasks[];
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
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsContacts },
      extras: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsExtras },
      failureReason: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      priority: 'number',
      referenceId: 'string',
      scenarioId: 'string',
      status: 'string',
      strategyId: 'string',
      summary: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsSummary },
      systemPriority: 'number',
      tasks: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsTasks },
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
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $dara.Model {
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
  jobs?: ListJobsResponseBodyJobs[];
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
      jobs: { 'type': 'array', 'itemType': ListJobsResponseBodyJobs },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

