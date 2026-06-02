// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobResponseBodyJobContacts extends $dara.Model {
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
   * 1358****8888
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

export class DescribeJobResponseBodyJobExtras extends $dara.Model {
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

export class DescribeJobResponseBodyJobScript extends $dara.Model {
  /**
   * @example
   * {\\"AppKey\\":\\"3GHttnsvir1FeWWb\\"}
   */
  asrConfig?: string;
  /**
   * @example
   * chatbot-cn-EJfqqa***
   */
  chatbotId?: string;
  /**
   * @example
   * DRAFTED
   */
  debugStatus?: string;
  industry?: string;
  /**
   * @example
   * true
   */
  isDebugDrafted?: boolean;
  /**
   * @example
   * true
   */
  isDrafted?: boolean;
  /**
   * @example
   * true
   */
  miniPlaybackConfigEnabled?: boolean;
  name?: string;
  scene?: string;
  scriptDescription?: string;
  /**
   * @example
   * 810b5872-57f0-4b27-80ab-7b3f4d8a6374
   */
  scriptId?: string;
  /**
   * @example
   * DRAFTED
   */
  status?: string;
  /**
   * @example
   * {\\"voice\\":\\"xiaobei\\",\\"volume\\":\\"50\\",\\"speechRate\\":\\"-150\\",\\"pitchRate\\":\\"0\\"}
   */
  ttsConfig?: string;
  /**
   * @example
   * 1578881227000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      asrConfig: 'AsrConfig',
      chatbotId: 'ChatbotId',
      debugStatus: 'DebugStatus',
      industry: 'Industry',
      isDebugDrafted: 'IsDebugDrafted',
      isDrafted: 'IsDrafted',
      miniPlaybackConfigEnabled: 'MiniPlaybackConfigEnabled',
      name: 'Name',
      scene: 'Scene',
      scriptDescription: 'ScriptDescription',
      scriptId: 'ScriptId',
      status: 'Status',
      ttsConfig: 'TtsConfig',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrConfig: 'string',
      chatbotId: 'string',
      debugStatus: 'string',
      industry: 'string',
      isDebugDrafted: 'boolean',
      isDrafted: 'boolean',
      miniPlaybackConfigEnabled: 'boolean',
      name: 'string',
      scene: 'string',
      scriptDescription: 'string',
      scriptId: 'string',
      status: 'string',
      ttsConfig: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyJobSummary extends $dara.Model {
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

export class DescribeJobResponseBodyJobTasksContact extends $dara.Model {
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
   * 1351****8888
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

export class DescribeJobResponseBodyJobTasksConversationSummary extends $dara.Model {
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

export class DescribeJobResponseBodyJobTasksConversation extends $dara.Model {
  /**
   * @example
   * Broadcast
   */
  action?: string;
  /**
   * @example
   * {}
   */
  actionParams?: string;
  script?: string;
  /**
   * @example
   * fd279983-93b9-b13b-9a34-64e5df473225
   */
  sequenceId?: string;
  /**
   * @example
   * Robot
   */
  speaker?: string;
  /**
   * @example
   * []
   */
  summary?: DescribeJobResponseBodyJobTasksConversationSummary[];
  /**
   * @example
   * 1579068424883
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      script: 'Script',
      sequenceId: 'SequenceId',
      speaker: 'Speaker',
      summary: 'Summary',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      script: 'string',
      sequenceId: 'string',
      speaker: 'string',
      summary: { 'type': 'array', 'itemType': DescribeJobResponseBodyJobTasksConversationSummary },
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

export class DescribeJobResponseBodyJobTasks extends $dara.Model {
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
  /**
   * @example
   * {}
   */
  contact?: DescribeJobResponseBodyJobTasksContact;
  /**
   * @example
   * []
   */
  conversation?: DescribeJobResponseBodyJobTasksConversation[];
  /**
   * @example
   * 120
   */
  duration?: number;
  /**
   * @example
   * FINISHED
   */
  endReason?: string;
  /**
   * @example
   * 1579068424883
   */
  endTime?: number;
  /**
   * @example
   * client
   */
  hangUpDirection?: string;
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
  realRingingDuration?: number;
  /**
   * @example
   * 25
   */
  ringingDuration?: number;
  /**
   * @example
   * ade80092-03d9-4f4d-ad4f-ab8a247d3150
   */
  scenarioId?: string;
  /**
   * @example
   * 200
   */
  sipCode?: string;
  sipDuration?: number;
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
  /**
   * @example
   * 10
   */
  totalDuration?: number;
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
      endReason: 'EndReason',
      endTime: 'EndTime',
      hangUpDirection: 'HangUpDirection',
      jobId: 'JobId',
      planedTime: 'PlanedTime',
      realRingingDuration: 'RealRingingDuration',
      ringingDuration: 'RingingDuration',
      scenarioId: 'ScenarioId',
      sipCode: 'SipCode',
      sipDuration: 'SipDuration',
      status: 'Status',
      taskId: 'TaskId',
      totalDuration: 'TotalDuration',
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
      contact: DescribeJobResponseBodyJobTasksContact,
      conversation: { 'type': 'array', 'itemType': DescribeJobResponseBodyJobTasksConversation },
      duration: 'number',
      endReason: 'string',
      endTime: 'number',
      hangUpDirection: 'string',
      jobId: 'string',
      planedTime: 'number',
      realRingingDuration: 'number',
      ringingDuration: 'number',
      scenarioId: 'string',
      sipCode: 'string',
      sipDuration: 'number',
      status: 'string',
      taskId: 'string',
      totalDuration: 'number',
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

export class DescribeJobResponseBodyJob extends $dara.Model {
  /**
   * @example
   * 1640068026385
   */
  actualTime?: number;
  /**
   * @example
   * 137****7777
   */
  calledNumber?: string;
  /**
   * @example
   * ["057126883106"]
   */
  callingNumbers?: string[];
  /**
   * @example
   * []
   */
  contacts?: DescribeJobResponseBodyJobContacts[];
  /**
   * @example
   * -
   */
  dsReport?: string;
  /**
   * @example
   * 1
   */
  endReason?: number;
  /**
   * @example
   * []
   */
  extras?: DescribeJobResponseBodyJobExtras[];
  /**
   * @example
   * NoAnswer
   */
  failureReason?: string;
  /**
   * @example
   * d5971d98-7312-4f0e-a918-a17d67133e28
   */
  instanceId?: string;
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
   * 1640068026385
   */
  nextExecutionTime?: number;
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
   * ade80092-03d9-4f4d-ad4f-ab8a247d3150
   */
  scenarioId?: string;
  script?: DescribeJobResponseBodyJobScript;
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
  /**
   * @example
   * []
   */
  summary?: DescribeJobResponseBodyJobSummary[];
  /**
   * @example
   * 1
   */
  systemPriority?: number;
  /**
   * @example
   * []
   */
  tasks?: DescribeJobResponseBodyJobTasks[];
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      calledNumber: 'CalledNumber',
      callingNumbers: 'CallingNumbers',
      contacts: 'Contacts',
      dsReport: 'DsReport',
      endReason: 'EndReason',
      extras: 'Extras',
      failureReason: 'FailureReason',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      nextExecutionTime: 'NextExecutionTime',
      priority: 'Priority',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      script: 'Script',
      status: 'Status',
      strategyId: 'StrategyId',
      summary: 'Summary',
      systemPriority: 'SystemPriority',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      calledNumber: 'string',
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': DescribeJobResponseBodyJobContacts },
      dsReport: 'string',
      endReason: 'number',
      extras: { 'type': 'array', 'itemType': DescribeJobResponseBodyJobExtras },
      failureReason: 'string',
      instanceId: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      nextExecutionTime: 'number',
      priority: 'number',
      referenceId: 'string',
      scenarioId: 'string',
      script: DescribeJobResponseBodyJobScript,
      status: 'string',
      strategyId: 'string',
      summary: { 'type': 'array', 'itemType': DescribeJobResponseBodyJobSummary },
      systemPriority: 'number',
      tasks: { 'type': 'array', 'itemType': DescribeJobResponseBodyJobTasks },
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
    if(this.script && typeof (this.script as any).validate === 'function') {
      (this.script as any).validate();
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

export class DescribeJobResponseBody extends $dara.Model {
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
  /**
   * @example
   * {}
   */
  job?: DescribeJobResponseBodyJob;
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
      job: 'Job',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      job: DescribeJobResponseBodyJob,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

