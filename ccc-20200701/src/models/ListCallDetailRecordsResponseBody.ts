// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallDetailRecordsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * An additional broker number, which may be used in double-call scenarios.
   * 
   * @example
   * 0533128****
   */
  additionalBroker?: string;
  /**
   * @remarks
   * A list of agent IDs, with multiple values separated by commas.
   * 
   * @example
   * agent@ccc-test
   */
  agentIds?: string;
  /**
   * @remarks
   * List of agent names involved in the call, separated by commas.
   * 
   * @example
   * 坐席小王
   */
  agentNames?: string;
  /**
   * @remarks
   * The intermediary number.
   * 
   * @example
   * 0533127****
   */
  broker?: string;
  /**
   * @remarks
   * Call duration. For inbound calls, timing starts when the call enters IVR. For outbound calls, timing starts when the call is connected. The unit is seconds.
   * 
   * @example
   * 30
   */
  callDuration?: string;
  /**
   * @remarks
   * The Call-Id field in the underlying SIP protocol. If you need to obtain the call ID from the number provider side, you can retrieve it from this field.
   * 
   * @example
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
   */
  callIds?: string;
  /**
   * @remarks
   * Called number.
   * 
   * @example
   * 1332315****
   */
  calledNumber?: string;
  /**
   * @remarks
   * The callee\\"s location.
   * 
   * @example
   * 山东省-济南
   */
  calleeLocation?: string;
  /**
   * @remarks
   * Caller location.
   * 
   * @example
   * 北京市-北京
   */
  callerLocation?: string;
  /**
   * @remarks
   * Calling number.
   * 
   * @example
   * 0533128****
   */
  callingNumber?: string;
  /**
   * @remarks
   * Reason for call termination.
   * 
   * @example
   * Success
   */
  contactDisposition?: string;
  /**
   * @remarks
   * Call ID.
   * 
   * @example
   * job-12515239414412****
   */
  contactId?: string;
  /**
   * @remarks
   * Call type.
   * 
   * @example
   * Outbound
   */
  contactType?: string;
  /**
   * @remarks
   * Dial-up duration, in seconds.
   * 
   * @example
   * 0
   */
  dialingTime?: number;
  /**
   * @remarks
   * Reason for failure to connect.
   * 
   * @example
   * NotConnected
   */
  earlyMediaState?: string;
  /**
   * @remarks
   * The time when the call was established. If the call was not established, this value is empty. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1532448000000
   */
  establishedTime?: number;
  /**
   * @remarks
   * The hold duration, in seconds.
   * 
   * @example
   * 12
   */
  heldTime?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * IVR duration, in seconds. This is the time interval from when the IVR starts until the call enters the agent queue (or the customer hangs up).
   * 
   * @example
   * 8
   */
  ivrTime?: number;
  /**
   * @remarks
   * The queue duration, in seconds, measured from when the customer entered the agent queue until the agent started ringing (or the customer abandoned the call, the queue timed out, or the queue overflowed).
   * 
   * @example
   * 0
   */
  queueTime?: number;
  /**
   * @remarks
   * Recording duration, in seconds.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * Indicates whether the recording has been generated. Returns false if the call was not established.
   * 
   * @example
   * true
   */
  recordingReady?: boolean;
  /**
   * @remarks
   * The party that ended the call.
   * 
   * @example
   * customer
   */
  releaseInitiator?: string;
  /**
   * @remarks
   * Hang-up reason for the channel, indicating why the current channel was disconnected. The value is derived from response codes defined in the SIP protocol. Customers should refer to the SIP protocol to analyze the hang-up reason.
   * 
   * @example
   * 486:USER_BUSY
   */
  releaseReason?: string;
  /**
   * @remarks
   * The call end time, formatted as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1532707199000
   */
  releaseTime?: number;
  /**
   * @remarks
   * Ring duration, which is the time from when the agent\\"s phone starts ringing until the agent answers (or the customer hangs up), in seconds.
   * 
   * @example
   * 5
   */
  ringTime?: number;
  /**
   * @remarks
   * The satisfaction description, corresponding to the configuration of the satisfaction module in the satisfaction IVR. This is defined by the customer.
   * 
   * @example
   * 满意
   */
  satisfactionDescription?: string;
  /**
   * @remarks
   * Satisfaction rating, represented as a single-digit numeric value entered by the customer.
   * 
   * @example
   * 1
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * The channel used for the satisfaction survey.
   * 
   * @example
   * IVR
   */
  satisfactionSurveyChannel?: string;
  /**
   * @remarks
   * Indicates whether a satisfaction survey was initiated.
   * 
   * @example
   * true
   */
  satisfactionSurveyOffered?: boolean;
  /**
   * @remarks
   * The IDs of the skill groups to which the agents participating in the call belong. Multiple skill group IDs are separated by commas.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupIds?: string;
  /**
   * @remarks
   * The names of the skill groups to which the agents participating in the call belong. Multiple skill group names are separated by commas.
   * 
   * @example
   * 测试技能组
   */
  skillGroupNames?: string;
  /**
   * @remarks
   * Call start time. For inbound calls, timing starts when the call enters IVR. For outbound calls, timing starts from dial-up. The format is a Unix string in milliseconds.
   * 
   * @example
   * 1532448000000
   */
  startTime?: number;
  /**
   * @remarks
   * Talk time, in seconds.
   * 
   * @example
   * 0
   */
  talkTime?: number;
  /**
   * @remarks
   * The customer\\"s waiting duration, which equals QueueTime plus RingTime. If the customer abandons the call during waiting, the value is 0. The unit is seconds.
   * 
   * @example
   * 5
   */
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      additionalBroker: 'AdditionalBroker',
      agentIds: 'AgentIds',
      agentNames: 'AgentNames',
      broker: 'Broker',
      callDuration: 'CallDuration',
      callIds: 'CallIds',
      calledNumber: 'CalledNumber',
      calleeLocation: 'CalleeLocation',
      callerLocation: 'CallerLocation',
      callingNumber: 'CallingNumber',
      contactDisposition: 'ContactDisposition',
      contactId: 'ContactId',
      contactType: 'ContactType',
      dialingTime: 'DialingTime',
      earlyMediaState: 'EarlyMediaState',
      establishedTime: 'EstablishedTime',
      heldTime: 'HeldTime',
      instanceId: 'InstanceId',
      ivrTime: 'IvrTime',
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
      talkTime: 'TalkTime',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalBroker: 'string',
      agentIds: 'string',
      agentNames: 'string',
      broker: 'string',
      callDuration: 'string',
      callIds: 'string',
      calledNumber: 'string',
      calleeLocation: 'string',
      callerLocation: 'string',
      callingNumber: 'string',
      contactDisposition: 'string',
      contactId: 'string',
      contactType: 'string',
      dialingTime: 'number',
      earlyMediaState: 'string',
      establishedTime: 'number',
      heldTime: 'number',
      instanceId: 'string',
      ivrTime: 'number',
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
      talkTime: 'number',
      waitTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallDetailRecordsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of call records.
   */
  list?: ListCallDetailRecordsResponseBodyDataList[];
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count. A real numeric value is returned only when PageNumber is 1; otherwise, 0 is returned.
   * 
   * @example
   * 11
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
      list: { 'type': 'array', 'itemType': ListCallDetailRecordsResponseBodyDataList },
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

export class ListCallDetailRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: ListCallDetailRecordsResponseBodyData;
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
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
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
      data: ListCallDetailRecordsResponseBodyData,
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

