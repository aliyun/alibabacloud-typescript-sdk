// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCallDetailRecordResponseBodyDataAgentEvents } from "./GetCallDetailRecordResponseBodyDataAgentEvents";
import { GetCallDetailRecordResponseBodyDataAnalyticsReport } from "./GetCallDetailRecordResponseBodyDataAnalyticsReport";
import { GetCallDetailRecordResponseBodyDataCustomerEvents } from "./GetCallDetailRecordResponseBodyDataCustomerEvents";
import { GetCallDetailRecordResponseBodyDataIvrEvents } from "./GetCallDetailRecordResponseBodyDataIvrEvents";
import { GetCallDetailRecordResponseBodyDataQueueEvents } from "./GetCallDetailRecordResponseBodyDataQueueEvents";


export class GetCallDetailRecordResponseBodyData extends $dara.Model {
  agentEvents?: GetCallDetailRecordResponseBodyDataAgentEvents[];
  /**
   * @example
   * agent1@ccc-test,agent2@ccc-test
   */
  agentIds?: string;
  /**
   * @example
   * agent1,agent2
   */
  agentNames?: string;
  analyticsReport?: GetCallDetailRecordResponseBodyDataAnalyticsReport;
  analyticsReportReady?: boolean;
  /**
   * @example
   * 50
   */
  callDuration?: number;
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
   * job-10963442671187****
   */
  contactId?: string;
  contactType?: string;
  customerEvents?: GetCallDetailRecordResponseBodyDataCustomerEvents[];
  /**
   * @example
   * NotConnected
   */
  earlyMediaState?: string;
  /**
   * @example
   * 1532458000000
   */
  establishedTime?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  ivrEvents?: GetCallDetailRecordResponseBodyDataIvrEvents[];
  outsideNumberReleaseReason?: string;
  queueEvents?: GetCallDetailRecordResponseBodyDataQueueEvents[];
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
   * 200 - OK
   */
  releaseReason?: string;
  /**
   * @example
   * 1532458000000
   */
  releaseTime?: number;
  /**
   * @example
   * 1
   */
  satisfaction?: number;
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
   * 1532458000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentEvents: 'AgentEvents',
      agentIds: 'AgentIds',
      agentNames: 'AgentNames',
      analyticsReport: 'AnalyticsReport',
      analyticsReportReady: 'AnalyticsReportReady',
      callDuration: 'CallDuration',
      calledNumber: 'CalledNumber',
      calleeLocation: 'CalleeLocation',
      callerLocation: 'CallerLocation',
      callingNumber: 'CallingNumber',
      contactDisposition: 'ContactDisposition',
      contactId: 'ContactId',
      contactType: 'ContactType',
      customerEvents: 'CustomerEvents',
      earlyMediaState: 'EarlyMediaState',
      establishedTime: 'EstablishedTime',
      instanceId: 'InstanceId',
      ivrEvents: 'IvrEvents',
      outsideNumberReleaseReason: 'OutsideNumberReleaseReason',
      queueEvents: 'QueueEvents',
      recordingReady: 'RecordingReady',
      releaseInitiator: 'ReleaseInitiator',
      releaseReason: 'ReleaseReason',
      releaseTime: 'ReleaseTime',
      satisfaction: 'Satisfaction',
      satisfactionSurveyChannel: 'SatisfactionSurveyChannel',
      satisfactionSurveyOffered: 'SatisfactionSurveyOffered',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataAgentEvents },
      agentIds: 'string',
      agentNames: 'string',
      analyticsReport: GetCallDetailRecordResponseBodyDataAnalyticsReport,
      analyticsReportReady: 'boolean',
      callDuration: 'number',
      calledNumber: 'string',
      calleeLocation: 'string',
      callerLocation: 'string',
      callingNumber: 'string',
      contactDisposition: 'string',
      contactId: 'string',
      contactType: 'string',
      customerEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataCustomerEvents },
      earlyMediaState: 'string',
      establishedTime: 'number',
      instanceId: 'string',
      ivrEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataIvrEvents },
      outsideNumberReleaseReason: 'string',
      queueEvents: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataQueueEvents },
      recordingReady: 'boolean',
      releaseInitiator: 'string',
      releaseReason: 'string',
      releaseTime: 'number',
      satisfaction: 'number',
      satisfactionSurveyChannel: 'string',
      satisfactionSurveyOffered: 'boolean',
      skillGroupIds: 'string',
      skillGroupNames: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agentEvents)) {
      $dara.Model.validateArray(this.agentEvents);
    }
    if(this.analyticsReport && typeof (this.analyticsReport as any).validate === 'function') {
      (this.analyticsReport as any).validate();
    }
    if(Array.isArray(this.customerEvents)) {
      $dara.Model.validateArray(this.customerEvents);
    }
    if(Array.isArray(this.ivrEvents)) {
      $dara.Model.validateArray(this.ivrEvents);
    }
    if(Array.isArray(this.queueEvents)) {
      $dara.Model.validateArray(this.queueEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

