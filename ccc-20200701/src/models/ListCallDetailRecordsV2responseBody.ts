// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportEmotion extends $dara.Model {
  /**
   * @remarks
   * The confidence level.
   * 
   * @example
   * 50
   */
  confidence?: number;
  /**
   * @remarks
   * The detailed remark of the emotion analysis.
   * 
   * @example
   * No emotional change from the customer
   */
  remark?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 0ff07fe35670423089dbdf12766d962f
   */
  taskId?: string;
  /**
   * @remarks
   * The emotion type.
   * 
   * @example
   * Neutral
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      remark: 'Remark',
      success: 'Success',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      remark: 'string',
      success: 'boolean',
      taskId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportProblemSolving extends $dara.Model {
  /**
   * @remarks
   * The problem description.
   * 
   * @example
   * Alert issue
   */
  problem?: string;
  /**
   * @remarks
   * The Solutions.
   * 
   * @example
   * The enrichment service automatically closes the original alert
   */
  solution?: string;
  /**
   * @remarks
   * Indicates whether the problem is resolved.
   * 
   * @example
   * true
   */
  solved?: boolean;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 8bf18b7a10064b29a75946a8d5b8469a
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      problem: 'Problem',
      solution: 'Solution',
      solved: 'Solved',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      problem: 'string',
      solution: 'string',
      solved: 'boolean',
      success: 'boolean',
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

export class ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportSatisfaction extends $dara.Model {
  /**
   * @remarks
   * The detailed remark of the satisfaction analysis.
   * 
   * @example
   * The customer expressed satisfaction
   */
  remark?: string;
  /**
   * @remarks
   * The satisfaction description.
   * 
   * @example
   * Satisfied
   */
  satisfactionDescription?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * cb67479ce28243b28ff39948feaa0806
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      satisfactionDescription: 'SatisfactionDescription',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      satisfactionDescription: 'string',
      success: 'boolean',
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

export class ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportTodoList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * cb67479ce28243b28ff39948feaa0806
   */
  taskId?: string;
  /**
   * @remarks
   * The to-do items.
   */
  tasks?: string[];
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      taskId: 'TaskId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      taskId: 'string',
      tasks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReport extends $dara.Model {
  /**
   * @remarks
   * The emotion analysis.
   */
  emotion?: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportEmotion;
  /**
   * @remarks
   * The problem resolution status.
   */
  problemSolving?: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportProblemSolving;
  /**
   * @remarks
   * The satisfaction analysis.
   */
  satisfaction?: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportSatisfaction;
  /**
   * @remarks
   * The to-do list.
   */
  todoList?: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportTodoList;
  static names(): { [key: string]: string } {
    return {
      emotion: 'Emotion',
      problemSolving: 'ProblemSolving',
      satisfaction: 'Satisfaction',
      todoList: 'TodoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emotion: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportEmotion,
      problemSolving: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportProblemSolving,
      satisfaction: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportSatisfaction,
      todoList: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportTodoList,
    };
  }

  validate() {
    if(this.emotion && typeof (this.emotion as any).validate === 'function') {
      (this.emotion as any).validate();
    }
    if(this.problemSolving && typeof (this.problemSolving as any).validate === 'function') {
      (this.problemSolving as any).validate();
    }
    if(this.satisfaction && typeof (this.satisfaction as any).validate === 'function') {
      (this.satisfaction as any).validate();
    }
    if(this.todoList && typeof (this.todoList as any).validate === 'function') {
      (this.todoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsV2ResponseBodyDataListSummaryIndex extends $dara.Model {
  /**
   * @remarks
   * The keywords.
   * 
   * @example
   * CustomerService
   */
  keywords?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsV2ResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * 8f6bcbad-6e2d-4ca3-9b65-91cf0aafdf00
   */
  accessChannelId?: string;
  /**
   * @remarks
   * The channel name. This parameter has a value only when MediaType is CHAT.
   * 
   * @example
   * TestChannel
   */
  accessChannelName?: string;
  /**
   * @remarks
   * The channel type. This parameter has a value only when MediaType is CHAT.
   * 
   * @example
   * Web
   */
  accessChannelType?: string;
  /**
   * @remarks
   * The visitor ID. This parameter has a value only when MediaType is CHAT.
   * 
   * @example
   * test-user-id
   */
  accessChannelUserId?: string;
  /**
   * @remarks
   * The visitor name. This parameter has a value only when MediaType is CHAT.
   * 
   * @example
   * TestVisitor
   */
  accessChannelUserName?: string;
  /**
   * @remarks
   * The additional intermediate number, which may be used in dual-call scenarios.
   * 
   * @example
   * 0533128****
   */
  additionalBroker?: string;
  /**
   * @remarks
   * The list of agent IDs. Multiple values are separated by commas.
   * 
   * @example
   * agent@ccc-test
   */
  agentIds?: string;
  /**
   * @remarks
   * The list of agent names involved in the call. Multiple agents are separated by commas.
   * 
   * @example
   * CloudCallCenterTestAgent
   */
  agentNames?: string;
  /**
   * @remarks
   * The post-call analytics report.
   */
  analyticsReport?: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReport;
  /**
   * @remarks
   * Indicates whether the AI post-call analytics report is complete.
   * 
   * @example
   * true
   */
  analyticsReportReady?: boolean;
  /**
   * @remarks
   * The intermediate number.
   * 
   * @example
   * 053xxxx3127
   */
  broker?: string;
  /**
   * @remarks
   * The call duration. For inbound calls, timing starts when the call enters the IVR. For outbound calls, timing starts when the call is connected. Unit: seconds.
   * 
   * @example
   * 16
   */
  callDuration?: string;
  /**
   * @remarks
   * The list of SIP CallIds.
   * 
   * @example
   * dxxx1sdf,xkkwwwa
   */
  callIds?: string;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 1332315****
   */
  calledNumber?: string;
  /**
   * @remarks
   * The location of the callee.
   * 
   * @example
   * Shandong-Jinan
   */
  calleeLocation?: string;
  /**
   * @remarks
   * The location of the caller.
   * 
   * @example
   * Beijing-Beijing
   */
  callerLocation?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 0533128****
   */
  callingNumber?: string;
  /**
   * @remarks
   * The visitor client application name. This parameter has a value only when MediaType is CHAT.
   * 
   * @example
   * Unknown
   */
  clientAppName?: string;
  /**
   * @remarks
   * The visitor client IP address. This parameter has a value only when MediaType is CHAT.
   * 
   * @example
   * 10.100.2.1
   */
  clientIpAddress?: string;
  /**
   * @remarks
   * The visitor client location. This parameter has a value only when MediaType is CHAT.
   * 
   * @example
   * ---
   */
  clientLocation?: string;
  /**
   * @remarks
   * The visitor client user agent information. This parameter has a value only when MediaType is CHAT.
   * 
   * @example
   * Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36
   */
  clientUserAgent?: string;
  /**
   * @remarks
   * The call end reason. For the enumeration list, refer to the ContactDispositionList query parameter.
   * 
   * @example
   * Success
   */
  contactDisposition?: string;
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * job-2255019651513856
   */
  contactId?: string;
  /**
   * @remarks
   * The call type. For the enumeration list, refer to the ContactTypeList query parameter.
   * 
   * @example
   * OUTBOUND
   */
  contactType?: string;
  /**
   * @remarks
   * The dialing duration. Unit: seconds.
   * 
   * @example
   * 0
   */
  dialingTime?: number;
  /**
   * @remarks
   * The early media state.
   * 
   * @example
   * NotConnected
   */
  earlyMediaState?: string;
  /**
   * @remarks
   * The early media text.
   * 
   * @example
   * Currently on a call
   */
  earlyMediaText?: string;
  /**
   * @remarks
   * The time when the call was established. If the call was not established, this value is empty. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1532448000000
   */
  establishedTime?: number;
  /**
   * @remarks
   * The time taken for the agent to first respond to the customer message. This parameter has a value only when MediaType is CHAT.
   * 
   * @example
   * 10
   */
  firstResponseTime?: number;
  /**
   * @remarks
   * The hold time. Unit: seconds.
   * 
   * @example
   * 12
   */
  heldTime?: number;
  /**
   * @remarks
   * The call center instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The IVR duration, which is the time from when the call enters the IVR to when it starts entering the manual service queue (or the customer abandons the call). Unit: seconds.
   * 
   * @example
   * 8
   */
  ivrTime?: number;
  /**
   * @remarks
   * The media type.
   * 
   * Valid values:
   * 
   * - AUDIO: Voice.
   * - CHAT: Message.
   * - VIDEO: Video.
   * 
   * @example
   * CHAT
   */
  mediaType?: string;
  /**
   * @remarks
   * The total number of messages. This parameter has a value only when MediaType is CHAT.
   * 
   * @example
   * 10
   */
  messagesSent?: number;
  /**
   * @remarks
   * The total number of messages sent by the agent. This parameter has a value only when MediaType is CHAT.
   * 
   * @example
   * 5
   */
  messagesSentByAgent?: number;
  /**
   * @remarks
   * The total number of messages sent by the customer. This parameter has a value only when MediaType is CHAT.
   * 
   * @example
   * 5
   */
  messagesSentByCustomer?: number;
  /**
   * @remarks
   * The list of off-site agent IDs involved in the call. Multiple agents are separated by commas.
   * 
   * @example
   * skg-default@ccc-test
   */
  offSiteAgentIds?: string;
  /**
   * @remarks
   * The off-site agent number that is called when the assigned agent is an off-site agent.
   * 
   * @example
   * 80312348
   */
  offsiteAgentDestinationNumbers?: string;
  /**
   * @remarks
   * The number that initiates the call to the off-site agent when the assigned agent is an off-site agent.
   * 
   * @example
   * 0101257****
   */
  offsiteAgentOriginatorNumbers?: string;
  /**
   * @remarks
   * The hangup reason of the last assigned offsite agent.
   * 
   * @example
   * IVRException
   */
  offsiteAgentReleaseReason?: string;
  /**
   * @remarks
   * The called number when the call is transferred to an outside line.
   * 
   * @example
   * 134xxxxxx
   */
  outsideNumberDestinationNumber?: string;
  /**
   * @remarks
   * The hangup reason when the call is transferred to an outside line.
   * 
   * @example
   * NoAnswer
   */
  outsideNumberReleaseReason?: string;
  /**
   * @remarks
   * The queue duration, which is the time from when the call enters the manual service queue to when the agent starts ringing (or the customer abandons the call, the queue times out, or the queue overflows). Unit: seconds.
   * 
   * @example
   * 0
   */
  queueTime?: number;
  /**
   * @remarks
   * The recording duration. Unit: seconds.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * Indicates whether the recording has been generated. If the call was not established, false is returned.
   * 
   * @example
   * true
   */
  recordingReady?: boolean;
  /**
   * @remarks
   * The party that hung up.
   * 
   * Valid values:
   * 
   * - agent: The agent.
   * - customer: The customer.
   * 
   * @example
   * customer
   */
  releaseInitiator?: string;
  /**
   * @remarks
   * The hangup reason of the call channel, indicating why the current call channel was hung up. The value is a response code defined in the SIP protocol. Refer to the SIP protocol to analyze the hangup reason.
   * 
   * @example
   * 486:USER_BUSY
   */
  releaseReason?: string;
  /**
   * @remarks
   * The time when the call ended, in Unix timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1532707199000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The ringing duration, which is the time from when the agent starts ringing to when the agent answers (or the customer abandons the call). Unit: seconds.
   * 
   * @example
   * 5
   */
  ringTime?: number;
  /**
   * @remarks
   * The satisfaction description, which corresponds to the configuration of the satisfaction module in the satisfaction IVR and is defined by the customer.
   * 
   * @example
   * Satisfied
   */
  satisfactionDescription?: string;
  /**
   * @remarks
   * The satisfaction rating, which is the value of the satisfaction key digit (a single digit).
   * 
   * @example
   * 1
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * The satisfaction survey channel.
   * 
   * @example
   * IVR
   */
  satisfactionSurveyChannel?: string;
  /**
   * @remarks
   * Indicates whether a satisfaction survey was sent.
   * 
   * @example
   * true
   */
  satisfactionSurveyOffered?: boolean;
  /**
   * @remarks
   * The skill group IDs of the agents who participated in the call. Multiple skill groups are separated by commas.
   * 
   * @example
   * skg-default@ccc-test
   */
  skillGroupIds?: string;
  /**
   * @remarks
   * The skill group names of the agents who participated in the call. Multiple skill groups are separated by commas.
   * 
   * @example
   * TestSkillGroup1,TestSkillGroup2
   */
  skillGroupNames?: string;
  /**
   * @remarks
   * The time when the call started. For inbound calls, this is counted from when the call enters the IVR. For outbound calls, this is counted from when dialing begins. The value is in Unix timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1631440860000
   */
  startTime?: number;
  /**
   * @remarks
   * The summary index.
   */
  summaryIndex?: ListCallDetailRecordsV2ResponseBodyDataListSummaryIndex;
  /**
   * @remarks
   * The talk time. Unit: seconds.
   * 
   * @example
   * 0
   */
  talkTime?: number;
  /**
   * @remarks
   * The number of transfers.
   * 
   * @example
   * 1
   */
  transferCount?: number;
  /**
   * @remarks
   * The outbound called number carried when the call is transferred from an intelligent outbound call.
   * 
   * @example
   * 134xxxxxx
   */
  voicebotDestinationNumber?: string;
  /**
   * @remarks
   * The outbound caller number carried when the call is transferred from an intelligent outbound call.
   * 
   * @example
   * 021xxxxxxx
   */
  voicebotOriginatorNumber?: string;
  /**
   * @remarks
   * The customer wait time, which equals QueueTime + RingTime. If the customer abandons the call during the waiting period, the value is 0. Unit: seconds.
   * 
   * @example
   * 5
   */
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessChannelId: 'AccessChannelId',
      accessChannelName: 'AccessChannelName',
      accessChannelType: 'AccessChannelType',
      accessChannelUserId: 'AccessChannelUserId',
      accessChannelUserName: 'AccessChannelUserName',
      additionalBroker: 'AdditionalBroker',
      agentIds: 'AgentIds',
      agentNames: 'AgentNames',
      analyticsReport: 'AnalyticsReport',
      analyticsReportReady: 'AnalyticsReportReady',
      broker: 'Broker',
      callDuration: 'CallDuration',
      callIds: 'CallIds',
      calledNumber: 'CalledNumber',
      calleeLocation: 'CalleeLocation',
      callerLocation: 'CallerLocation',
      callingNumber: 'CallingNumber',
      clientAppName: 'ClientAppName',
      clientIpAddress: 'ClientIpAddress',
      clientLocation: 'ClientLocation',
      clientUserAgent: 'ClientUserAgent',
      contactDisposition: 'ContactDisposition',
      contactId: 'ContactId',
      contactType: 'ContactType',
      dialingTime: 'DialingTime',
      earlyMediaState: 'EarlyMediaState',
      earlyMediaText: 'EarlyMediaText',
      establishedTime: 'EstablishedTime',
      firstResponseTime: 'FirstResponseTime',
      heldTime: 'HeldTime',
      instanceId: 'InstanceId',
      ivrTime: 'IvrTime',
      mediaType: 'MediaType',
      messagesSent: 'MessagesSent',
      messagesSentByAgent: 'MessagesSentByAgent',
      messagesSentByCustomer: 'MessagesSentByCustomer',
      offSiteAgentIds: 'OffSiteAgentIds',
      offsiteAgentDestinationNumbers: 'OffsiteAgentDestinationNumbers',
      offsiteAgentOriginatorNumbers: 'OffsiteAgentOriginatorNumbers',
      offsiteAgentReleaseReason: 'OffsiteAgentReleaseReason',
      outsideNumberDestinationNumber: 'OutsideNumberDestinationNumber',
      outsideNumberReleaseReason: 'OutsideNumberReleaseReason',
      queueTime: 'QueueTime',
      recordingDuration: 'RecordingDuration',
      recordingReady: 'RecordingReady',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      releaseTime: 'ReleaseTime',
      ringTime: 'RingTime',
      satisfactionDescription: 'SatisfactionDescription',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveyChannel: 'SatisfactionSurveyChannel',
      satisfactionSurveyOffered: 'SatisfactionSurveyOffered',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
      startTime: 'StartTime',
      summaryIndex: 'SummaryIndex',
      talkTime: 'TalkTime',
      transferCount: 'TransferCount',
      voicebotDestinationNumber: 'VoicebotDestinationNumber',
      voicebotOriginatorNumber: 'VoicebotOriginatorNumber',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      accessChannelName: 'string',
      accessChannelType: 'string',
      accessChannelUserId: 'string',
      accessChannelUserName: 'string',
      additionalBroker: 'string',
      agentIds: 'string',
      agentNames: 'string',
      analyticsReport: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReport,
      analyticsReportReady: 'boolean',
      broker: 'string',
      callDuration: 'string',
      callIds: 'string',
      calledNumber: 'string',
      calleeLocation: 'string',
      callerLocation: 'string',
      callingNumber: 'string',
      clientAppName: 'string',
      clientIpAddress: 'string',
      clientLocation: 'string',
      clientUserAgent: 'string',
      contactDisposition: 'string',
      contactId: 'string',
      contactType: 'string',
      dialingTime: 'number',
      earlyMediaState: 'string',
      earlyMediaText: 'string',
      establishedTime: 'number',
      firstResponseTime: 'number',
      heldTime: 'number',
      instanceId: 'string',
      ivrTime: 'number',
      mediaType: 'string',
      messagesSent: 'number',
      messagesSentByAgent: 'number',
      messagesSentByCustomer: 'number',
      offSiteAgentIds: 'string',
      offsiteAgentDestinationNumbers: 'string',
      offsiteAgentOriginatorNumbers: 'string',
      offsiteAgentReleaseReason: 'string',
      outsideNumberDestinationNumber: 'string',
      outsideNumberReleaseReason: 'string',
      queueTime: 'number',
      recordingDuration: 'number',
      recordingReady: 'boolean',
      releaseInitiator: 'string',
      releaseReason: 'string',
      releaseTime: 'number',
      ringTime: 'number',
      satisfactionDescription: 'string',
      satisfactionIndex: 'number',
      satisfactionSurveyChannel: 'string',
      satisfactionSurveyOffered: 'boolean',
      skillGroupIds: 'string',
      skillGroupNames: 'string',
      startTime: 'number',
      summaryIndex: ListCallDetailRecordsV2ResponseBodyDataListSummaryIndex,
      talkTime: 'number',
      transferCount: 'number',
      voicebotDestinationNumber: 'string',
      voicebotOriginatorNumber: 'string',
      waitTime: 'number',
    };
  }

  validate() {
    if(this.analyticsReport && typeof (this.analyticsReport as any).validate === 'function') {
      (this.analyticsReport as any).validate();
    }
    if(this.summaryIndex && typeof (this.summaryIndex as any).validate === 'function') {
      (this.summaryIndex as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsV2ResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of call records.
   */
  list?: ListCallDetailRecordsV2ResponseBodyDataList[];
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
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
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
      list: { 'type': 'array', 'itemType': ListCallDetailRecordsV2ResponseBodyDataList },
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

export class ListCallDetailRecordsV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: ListCallDetailRecordsV2ResponseBodyData;
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
   * The response message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01B12EE4-6AF2-4730-8B78-EC15F4E5C025
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCallDetailRecordsV2ResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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

