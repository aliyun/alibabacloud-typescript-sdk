// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallDetailRecordsV2Request extends $dara.Model {
  /**
   * @remarks
   * The list of visitor channel types.
   * 
   * Valid values:
   * 
   * Web: web page.
   * 
   * DingTalkServiceWindow: DingTalk service window.
   * 
   * AliMe: chatbot.
   * 
   * DingTalkRobot: DingTalk chatbot.
   * 
   * @example
   * ["Web","AliMe"]
   */
  accessChannelTypeList?: string;
  /**
   * @remarks
   * The ID of the agent.
   * 
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * Indicates whether the AI post-call analytics report is ready.
   * 
   * @example
   * true
   */
  analyticsReportReady?: boolean;
  /**
   * @remarks
   * The intermediate number. The number must be an available outbound number under the instance. In a back-to-back call, this number is used to call the caller and the callee sequentially.
   * 
   * @example
   * 021****4972
   */
  broker?: string;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 191***9993
   */
  calledNumber?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 191***9993
   */
  callingNumber?: string;
  /**
   * @remarks
   * Filters results by hangup cause.
   * 
   * Valid values:
   * 
   * AbandonedInQueue: Abandoned while queuing.
   * 
   * NoAnswer: Customer did not answer.
   * 
   * QueuingTimeout: Queuing timed out.
   * 
   * Voicemail: Transferred to voice mail.
   * 
   * QueuingFailed: Transfer to agent failed.
   * 
   * QueuingOverflow: Queue overflow.
   * 
   * AbandonedInVoiceNavigator: Abandoned during intelligent navigation.
   * 
   * Success: Ended normally.
   * 
   * IVRException: IVR exception.
   * 
   * AbandonedInRing: Abandoned while ringing.
   * 
   * AbandonedInIVR: Abandoned in IVR.
   * 
   * Reject: Customer rejected the call.
   * 
   * ForwardToOutsideNumber: Forwarded to an external number.
   * 
   * @example
   * ["Success","NoAnswer"]
   */
  contactDispositionList?: string;
  /**
   * @remarks
   * The list of call IDs.
   * 
   * @example
   * ["job-123456789","job-234567891"]
   */
  contactIdList?: string;
  /**
   * @remarks
   * Filters results by call type.
   * 
   * Valid values:
   * 
   * OUTBOUND: outbound call.
   * 
   * BACK2BACK: back-to-back call.
   * 
   * PRIVACY_DIAL: encrypted call.
   * 
   * INTERNAL: internal call.
   * 
   * PREDICTIVE: predictive outbound call.
   * 
   * INBOUND: inbound call.
   * 
   * CONFERENCE: conference call.
   * 
   * @example
   * ["INBOUND","OUTBOUND"]
   */
  contactTypeList?: string;
  /**
   * @remarks
   * Filters results by the reason for unanswered calls.
   * 
   * Valid values:
   * 
   * NoAnswer: No answer.
   * 
   * OutOfService: Out of service.
   * 
   * NotExist: Number does not exist.
   * 
   * Restricted: Call restricted.
   * 
   * Busy: Line busy.
   * 
   * NotConnected: Cannot be connected.
   * 
   * PowerOff: Phone powered off.
   * 
   * @example
   * ["NotConnected","NoAnswer"]
   */
  earlyMediaStateList?: string;
  /**
   * @remarks
   * The end time of the historical data to retrieve. The default value is the current time. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1657879880010
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the first agent who participated in the call.
   * 
   * @example
   * agent@ccc-test
   */
  firstAgentId?: string;
  /**
   * @remarks
   * The instance ID of the call center.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The media type.
   * 
   * Valid values:
   * 
   * AUDIO: voice call.
   * 
   * VIDEO: video call.
   * 
   * CHAT: message.
   * 
   * ALL: all types.
   * 
   * @example
   * AUDIO
   */
  mediaType?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 191***9993
   */
  number?: string;
  /**
   * @remarks
   * The field by which to sort the results. This parameter is optional. Default value: startTime (call start time).
   * 
   * Valid values:
   * 
   * startTime: call start time.
   * 
   * @example
   * startTime
   */
  orderByField?: string;
  /**
   * @remarks
   * The page number. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The party that hung up.
   * 
   * @example
   * [\\"AGENT\\"]
   */
  releaseInitiatorList?: string;
  /**
   * @remarks
   * The hangup reason.
   * 
   * @example
   * [\\"VisitorInitiatedClosure\\",\\"AgentInitiatedClosure\\"]
   */
  releaseReasonList?: string;
  /**
   * @remarks
   * Filters results by satisfaction description. The description content is defined by the customer.
   * 
   * @example
   * ["Satisfied","Average"]
   */
  satisfactionDescriptionList?: string;
  /**
   * @remarks
   * Filters results by satisfaction rating. Separate multiple satisfaction ratings with commas (,).
   * 
   * Valid values:
   * 
   * -2: Not sent.
   * 
   * -1: Not rated.
   * 
   * Other positive numbers: custom satisfaction rating values.
   * 
   * @example
   * ["-1","3"]
   * [">2"]
   * ["<3"]
   */
  satisfactionRateList?: string;
  /**
   * @remarks
   * The satisfaction survey channel.
   * 
   * Valid values:
   * 
   * IVR: voice-based satisfaction survey.
   * 
   * SMS: SMS-based satisfaction survey.
   * 
   * CHAT: message-based satisfaction survey.
   * 
   * @example
   * IVR
   */
  satisfactionSurveyChannel?: string;
  /**
   * @remarks
   * The custom query text that follows the Lucene query syntax.
   * 
   * The following table describes the supported query fields and query types:
   * 
   * accessChannelUserId: the visitor ID. Supports exact match and fuzzy match.
   * 
   * accessChannelName: the channel name. Supports exact match and fuzzy match.
   * 
   * text: the session text. Supports fuzzy match.
   * 
   * @example
   * text:please wait AND accessChannelUserId:af1a0-afaa-5086e2946e0b* AND accessChannelName:dedicated development channel*
   */
  searchPattern?: string;
  /**
   * @remarks
   * The list of skill group IDs to which the agent belongs.
   * 
   * @example
   * [
   *       "skg1@ccc-test",
   *       "skg2@ccc-test"
   * ]
   */
  skillGroupIdList?: string;
  /**
   * @remarks
   * The sort order. Default value: DESC.
   * 
   * Valid values:
   * 
   * ASC: ascending order.
   * 
   * DESC: descending order.
   * 
   * @example
   * DESC
   */
  sortOrder?: string;
  /**
   * @remarks
   * The start time of the historical data to retrieve. The default value is 00:00 of the current day. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1657853640015
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessChannelTypeList: 'AccessChannelTypeList',
      agentId: 'AgentId',
      analyticsReportReady: 'AnalyticsReportReady',
      broker: 'Broker',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      contactDispositionList: 'ContactDispositionList',
      contactIdList: 'ContactIdList',
      contactTypeList: 'ContactTypeList',
      earlyMediaStateList: 'EarlyMediaStateList',
      endTime: 'EndTime',
      firstAgentId: 'FirstAgentId',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      number: 'Number',
      orderByField: 'OrderByField',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      releaseInitiatorList: 'ReleaseInitiatorList',
      releaseReasonList: 'ReleaseReasonList',
      satisfactionDescriptionList: 'SatisfactionDescriptionList',
      satisfactionRateList: 'SatisfactionRateList',
      satisfactionSurveyChannel: 'SatisfactionSurveyChannel',
      searchPattern: 'SearchPattern',
      skillGroupIdList: 'SkillGroupIdList',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelTypeList: 'string',
      agentId: 'string',
      analyticsReportReady: 'boolean',
      broker: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      contactDispositionList: 'string',
      contactIdList: 'string',
      contactTypeList: 'string',
      earlyMediaStateList: 'string',
      endTime: 'number',
      firstAgentId: 'string',
      instanceId: 'string',
      mediaType: 'string',
      number: 'string',
      orderByField: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      releaseInitiatorList: 'string',
      releaseReasonList: 'string',
      satisfactionDescriptionList: 'string',
      satisfactionRateList: 'string',
      satisfactionSurveyChannel: 'string',
      searchPattern: 'string',
      skillGroupIdList: 'string',
      sortOrder: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

