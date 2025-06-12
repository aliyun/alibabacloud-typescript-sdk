// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallDetailRecordsV2Request extends $dara.Model {
  /**
   * @example
   * ["Web","AliMe"]
   */
  accessChannelTypeList?: string;
  /**
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  analyticsReportReady?: boolean;
  /**
   * @example
   * 021****4972
   */
  broker?: string;
  /**
   * @example
   * 191***9993
   */
  calledNumber?: string;
  /**
   * @example
   * 191***9993
   */
  callingNumber?: string;
  /**
   * @example
   * ["Success","NoAnswer"]
   */
  contactDispositionList?: string;
  /**
   * @example
   * ["job-123456789","job-234567891"]
   */
  contactIdList?: string;
  /**
   * @example
   * ["INBOUND","OUTBOUND"]
   */
  contactTypeList?: string;
  /**
   * @example
   * ["NotConnected","NoAnswer"]
   */
  earlyMediaStateList?: string;
  /**
   * @example
   * 1657879880010
   */
  endTime?: number;
  /**
   * @example
   * agent@ccc-test
   */
  firstAgentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * AUDIO
   */
  mediaType?: string;
  /**
   * @example
   * 191***9993
   */
  number?: string;
  /**
   * @example
   * startTime
   */
  orderByField?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  releaseInitiatorList?: string;
  releaseReasonList?: string;
  satisfactionDescriptionList?: string;
  /**
   * @example
   * ["1","3"]
   */
  satisfactionRateList?: string;
  /**
   * @example
   * IVR
   */
  satisfactionSurveyChannel?: string;
  searchPattern?: string;
  /**
   * @example
   * [
   *       "skg1@ccc-test",
   *       "skg2@ccc-test"
   * ]
   */
  skillGroupIdList?: string;
  /**
   * @example
   * DESC
   */
  sortOrder?: string;
  /**
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

