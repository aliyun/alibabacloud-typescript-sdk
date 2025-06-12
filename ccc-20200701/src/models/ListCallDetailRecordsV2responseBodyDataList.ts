// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReport } from "./ListCallDetailRecordsV2responseBodyDataListAnalyticsReport";
import { ListCallDetailRecordsV2ResponseBodyDataListSummaryIndex } from "./ListCallDetailRecordsV2responseBodyDataListSummaryIndex";


export class ListCallDetailRecordsV2ResponseBodyDataList extends $dara.Model {
  accessChannelName?: string;
  /**
   * @example
   * Web
   */
  accessChannelType?: string;
  /**
   * @example
   * test-user-id
   */
  accessChannelUserId?: string;
  accessChannelUserName?: string;
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
  analyticsReport?: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReport;
  analyticsReportReady?: boolean;
  /**
   * @example
   * 053xxxx3127
   */
  broker?: string;
  /**
   * @example
   * 16
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
  clientAppName?: string;
  /**
   * @example
   * 10.100.2.1
   */
  clientIpAddress?: string;
  /**
   * @example
   * ---
   */
  clientLocation?: string;
  /**
   * @example
   * Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36
   */
  clientUserAgent?: string;
  /**
   * @example
   * Success
   */
  contactDisposition?: string;
  /**
   * @example
   * job-2255019651513856
   */
  contactId?: string;
  /**
   * @example
   * OUTBOUND
   */
  contactType?: string;
  /**
   * @example
   * 0
   */
  dialingTime?: number;
  /**
   * @example
   * NotConnected
   */
  earlyMediaState?: string;
  earlyMediaText?: string;
  /**
   * @example
   * 1532448000000
   */
  establishedTime?: number;
  /**
   * @example
   * 10
   */
  firstResponseTime?: number;
  /**
   * @example
   * 12
   */
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
   * CHAT
   */
  mediaType?: string;
  /**
   * @example
   * 10
   */
  messagesSent?: number;
  /**
   * @example
   * 5
   */
  messagesSentByAgent?: number;
  /**
   * @example
   * 5
   */
  messagesSentByCustomer?: number;
  /**
   * @example
   * skg-default@ccc-test
   */
  offSiteAgentIds?: string;
  /**
   * @example
   * 80312348
   */
  offsiteAgentDestinationNumbers?: string;
  /**
   * @example
   * 0101257****
   */
  offsiteAgentOriginatorNumbers?: string;
  outsideNumberReleaseReason?: string;
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
  /**
   * @example
   * 486:USER_BUSY
   */
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
   * skg-default@ccc-test
   */
  skillGroupIds?: string;
  skillGroupNames?: string;
  /**
   * @example
   * 1631440860000
   */
  startTime?: number;
  summaryIndex?: ListCallDetailRecordsV2ResponseBodyDataListSummaryIndex;
  /**
   * @example
   * 0
   */
  talkTime?: number;
  /**
   * @example
   * 1
   */
  transferCount?: number;
  /**
   * @example
   * 5
   */
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
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
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

