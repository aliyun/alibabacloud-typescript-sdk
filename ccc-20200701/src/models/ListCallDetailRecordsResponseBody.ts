// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallDetailRecordsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 0533128****
   */
  additionalBroker?: string;
  /**
   * @example
   * agent@ccc-test
   */
  agentIds?: string;
  agentNames?: string;
  /**
   * @example
   * 0533127****
   */
  broker?: string;
  /**
   * @example
   * 30
   */
  callDuration?: string;
  callIds?: string;
  /**
   * @example
   * 1332315****
   */
  calledNumber?: string;
  calleeLocation?: string;
  callerLocation?: string;
  /**
   * @example
   * 0533128****
   */
  callingNumber?: string;
  /**
   * @example
   * Success
   */
  contactDisposition?: string;
  /**
   * @example
   * job-12515239414412****
   */
  contactId?: string;
  /**
   * @example
   * Outbound
   */
  contactType?: string;
  dialingTime?: number;
  /**
   * @example
   * NotConnected
   */
  earlyMediaState?: string;
  /**
   * @example
   * 1532448000000
   */
  establishedTime?: number;
  heldTime?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 8
   */
  ivrTime?: number;
  /**
   * @example
   * 0
   */
  queueTime?: number;
  /**
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @example
   * true
   */
  recordingReady?: boolean;
  /**
   * @example
   * customer
   */
  releaseInitiator?: string;
  releaseReason?: string;
  /**
   * @example
   * 1532707199000
   */
  releaseTime?: number;
  /**
   * @example
   * 5
   */
  ringTime?: number;
  satisfactionDescription?: string;
  /**
   * @example
   * 1
   */
  satisfactionIndex?: number;
  /**
   * @example
   * IVR
   */
  satisfactionSurveyChannel?: string;
  /**
   * @example
   * true
   */
  satisfactionSurveyOffered?: boolean;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupIds?: string;
  skillGroupNames?: string;
  /**
   * @example
   * 1532448000000
   */
  startTime?: number;
  talkTime?: number;
  /**
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
  list?: ListCallDetailRecordsResponseBodyDataList[];
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
   * @example
   * OK
   */
  code?: string;
  data?: ListCallDetailRecordsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
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

