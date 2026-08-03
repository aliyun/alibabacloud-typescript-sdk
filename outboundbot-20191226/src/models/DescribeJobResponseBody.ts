// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobResponseBodyJobContacts extends $dara.Model {
  /**
   * @remarks
   * The contact ID. This is system-generated.
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
   * Zhang San.
   */
  contactName?: string;
  /**
   * @remarks
   * The honorific of the contact. This is the same as the contact name.
   * 
   * @example
   * Mr. Zhang.
   */
  honorific?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5b160
   */
  jobId?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 1358****8888
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The business ID of the contact.
   * 
   * @example
   * 2fa6bac3-06da-4315-82ab-72d6fd3a6f34
   */
  referenceId?: string;
  /**
   * @remarks
   * **[Deprecated]** The contact role.
   * 
   * @example
   * *
   */
  role?: string;
  /**
   * @remarks
   * **[Deprecated]** The contact status.
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

export class DescribeJobResponseBodyJobExtras extends $dara.Model {
  /**
   * @remarks
   * The name of the business parameter.
   * 
   * @example
   * djrq
   */
  key?: string;
  /**
   * @remarks
   * The value of the business parameter.
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

export class DescribeJobResponseBodyJobScript extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** The ASR configuration of the script.
   * 
   * @example
   * {\\"AppKey\\":\\"3GHttnsvir1FeWWb\\"}
   */
  asrConfig?: string;
  /**
   * @remarks
   * The chatbot ID.
   * 
   * @example
   * chatbot-cn-EJfqqa***
   */
  chatbotId?: string;
  /**
   * @remarks
   * The debug status.
   * 
   * @example
   * DRAFTED
   */
  debugStatus?: string;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * Finance.
   */
  industry?: string;
  /**
   * @remarks
   * Indicates whether the debug version is in draft state.
   * 
   * @example
   * true
   */
  isDebugDrafted?: boolean;
  /**
   * @remarks
   * Indicates whether the script is in draft state.
   * 
   * @example
   * true
   */
  isDrafted?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Specifies whether the tone continuation feature is enabled. No value is returned.
   * 
   * @example
   * true
   */
  miniPlaybackConfigEnabled?: boolean;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * Collection script.
   */
  name?: string;
  /**
   * @remarks
   * The scene.
   * 
   * @example
   * Collection.
   */
  scene?: string;
  /**
   * @remarks
   * The script description.
   * 
   * @example
   * Collection script.
   */
  scriptDescription?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 810b5872-57f0-4b27-80ab-7b3f4d8a6374
   */
  scriptId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * DRAFTED
   */
  status?: string;
  /**
   * @remarks
   * **[Deprecated]** The TTS configuration of the script.
   * 
   * @example
   * {\\"voice\\":\\"xiaobei\\",\\"volume\\":\\"50\\",\\"speechRate\\":\\"-150\\",\\"pitchRate\\":\\"0\\"}
   */
  ttsConfig?: string;
  /**
   * @remarks
   * The update time.
   * 
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
   * @remarks
   * **[Deprecated]** The conversation summary category. This is a legacy field and is no longer used.
   * 
   * @example
   * {}
   */
  category?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 5
   */
  content?: string;
  /**
   * @remarks
   * The tag name.
   * 
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
   * @remarks
   * The contact ID. This is system-generated.
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
   * Zhang San.
   */
  contactName?: string;
  /**
   * @remarks
   * The honorific of the contact. This is the same as the contact name.
   * 
   * @example
   * Mr. Zhang.
   */
  honorific?: string;
  /**
   * @remarks
   * **[Deprecated]** The job ID.
   * 
   * @example
   * b72425bd-7871-4050-838e-033d80d754b7
   */
  jobId?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 1351****8888
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The business system ID of the contact.
   * 
   * @example
   * 2fa6bac3-06da-4315-82ab-72d6fd3a6f34
   */
  referenceId?: string;
  /**
   * @remarks
   * **[Deprecated]** The contact role.
   * 
   * @example
   * *
   */
  role?: string;
  /**
   * @remarks
   * **[Deprecated]** The contact status.
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

export class DescribeJobResponseBodyJobTasksConversationSummary extends $dara.Model {
  /**
   * @remarks
   * The conversation summary category. This is a legacy field and is no longer used.
   * 
   * @example
   * {}
   */
  category?: string;
  /**
   * @remarks
   * The summary content.
   * 
   * @example
   * 5
   */
  content?: string;
  /**
   * @remarks
   * The summary name.
   * 
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
   * @remarks
   * The instruction.
   * 
   * @example
   * Broadcast
   */
  action?: string;
  /**
   * @remarks
   * The instruction parameters.
   * 
   * @example
   * {}
   */
  actionParams?: string;
  /**
   * @remarks
   * The conversation text.
   * 
   * @example
   * Hello, I am ** customer service.
   */
  script?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * fd279983-93b9-b13b-9a34-64e5df473225
   */
  sequenceId?: string;
  /**
   * @remarks
   * The speaker of the conversation. Valid values: Robot and Contact.
   * 
   * @example
   * Robot
   */
  speaker?: string;
  /**
   * @remarks
   * **[Deprecated]** The conversation summary data. This is a legacy field and is no longer used.
   * 
   * @example
   * []
   */
  summary?: DescribeJobResponseBodyJobTasksConversationSummary[];
  /**
   * @remarks
   * The summary creation time.
   * 
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
   * @remarks
   * The actual execution time.
   * 
   * @example
   * 1579068424883
   */
  actualTime?: number;
  /**
   * @remarks
   * The business result. This is a legacy field and is no longer used.
   * 
   * @example
   * 1
   */
  brief?: string;
  /**
   * @remarks
   * SIP call id。
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
   * The robot ID for the conversation.
   * 
   * @example
   * 1234
   */
  chatbotId?: string;
  /**
   * @remarks
   * The contact information.
   * 
   * @example
   * {}
   */
  contact?: DescribeJobResponseBodyJobTasksContact;
  /**
   * @remarks
   * The conversation text list of the task.
   * 
   * @example
   * []
   */
  conversation?: DescribeJobResponseBodyJobTasksConversation[];
  /**
   * @remarks
   * The conversation duration. This field is not returned.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * The call end reason.
   * 
   * @example
   * FINISHED
   */
  endReason?: string;
  /**
   * @remarks
   * The actual end time.
   * 
   * @example
   * 1579068424883
   */
  endTime?: number;
  /**
   * @remarks
   * The party that hung up.
   * 
   * @example
   * client
   */
  hangUpDirection?: string;
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
   * The planned call time.
   * 
   * @example
   * 1579068424883
   */
  planedTime?: number;
  /**
   * @remarks
   * The actual ringing duration.
   * 
   * @example
   * 25
   */
  realRingingDuration?: number;
  /**
   * @remarks
   * The ringing duration.
   * 
   * @example
   * 25
   */
  ringingDuration?: number;
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
   * The SIP status code of the call task.
   * 
   * @example
   * 200
   */
  sipCode?: string;
  /**
   * @remarks
   * **[Deprecated]** The SIP signaling duration.
   * 
   * @example
   * 25
   */
  sipDuration?: number;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * SucceededTransferByIntent
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
  /**
   * @remarks
   * The total call duration.
   * 
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
   * @remarks
   * **[Deprecated]** The actual execution time of the job.
   * 
   * @example
   * 1640068026385
   */
  actualTime?: number;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 137****7777
   */
  calledNumber?: string;
  /**
   * @remarks
   * The list of calling numbers.
   * 
   * @example
   * ["057126883106"]
   */
  callingNumbers?: string[];
  /**
   * @remarks
   * The contact information.
   * 
   * @example
   * []
   */
  contacts?: DescribeJobResponseBodyJobContacts[];
  /**
   * @remarks
   * **[Deprecated]** The tag hit information of the node.
   * 
   * @example
   * -
   */
  dsReport?: string;
  /**
   * @remarks
   * **[Deprecated]** The end reason.
   * 
   * @example
   * 1
   */
  endReason?: number;
  /**
   * @remarks
   * The business parameters.
   * 
   * @example
   * []
   */
  extras?: DescribeJobResponseBodyJobExtras[];
  /**
   * @remarks
   * The reason for the job failure.
   * 
   * @example
   * NoAnswer
   */
  failureReason?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * d5971d98-7312-4f0e-a918-a17d67133e28
   */
  instanceId?: string;
  /**
   * @remarks
   * The task ID.
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
   * b72425bd-7871-4050-838e-033d80d754b7
   */
  jobId?: string;
  /**
   * @remarks
   * The next execution time of the node.
   * 
   * @example
   * 1640068026385
   */
  nextExecutionTime?: number;
  /**
   * @remarks
   * The job priority.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The business ID of the job, custom-defined by the business side.
   * 
   * @example
   * d5971d98-7312-4f0e-a918-a17d67133e28
   */
  referenceId?: string;
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
   * The script scenario.
   */
  script?: DescribeJobResponseBodyJobScript;
  /**
   * @remarks
   * The job status.
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
   * The conversation business tag data.
   * 
   * @example
   * []
   */
  summary?: DescribeJobResponseBodyJobSummary[];
  /**
   * @remarks
   * The system priority of the job.
   * 
   * @example
   * 1
   */
  systemPriority?: number;
  /**
   * @remarks
   * The call list.
   * 
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
   * @remarks
   * The API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The job information.
   * 
   * @example
   * {}
   */
  job?: DescribeJobResponseBodyJob;
  /**
   * @remarks
   * The API response message.
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

