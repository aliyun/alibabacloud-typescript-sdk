// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttemptsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1632883592732
   */
  agentEstablishedTime?: number;
  /**
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @example
   * 23
   */
  agentRingDuration?: number;
  /**
   * @example
   * 1634196287869
   */
  assignAgentTime?: number;
  /**
   * @example
   * job-1704342174816****
   */
  attemptId?: string;
  /**
   * @example
   * 1888888****
   */
  callee?: string;
  /**
   * @example
   * 05711234****
   */
  caller?: string;
  /**
   * @example
   * 083046e3-5822-4cda-9b84-04f2a02eb605
   */
  campaignId?: string;
  /**
   * @example
   * 21d194a7-60b7-4824-932b-48ed03a83704
   */
  caseId?: string;
  /**
   * @example
   * job-1704342174816****
   */
  contactId?: string;
  /**
   * @example
   * 1634196286708
   */
  customerEstablishedTime?: number;
  /**
   * @example
   * 1634196317888
   */
  customerReleasedTime?: number;
  /**
   * @example
   * 2734
   */
  dialDuration?: number;
  /**
   * @example
   * 1634196283974
   */
  dialTime?: number;
  /**
   * @example
   * 1634196287789
   */
  enqueueTime?: number;
  /**
   * @example
   * 1634196286740
   */
  enterIvrTime?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1049
   */
  ivrDuration?: number;
  /**
   * @example
   * 80
   */
  queueDuration?: number;
  /**
   * @example
   * skillgroup@ccc-test
   */
  queueId?: string;
  static names(): { [key: string]: string } {
    return {
      agentEstablishedTime: 'AgentEstablishedTime',
      agentId: 'AgentId',
      agentRingDuration: 'AgentRingDuration',
      assignAgentTime: 'AssignAgentTime',
      attemptId: 'AttemptId',
      callee: 'Callee',
      caller: 'Caller',
      campaignId: 'CampaignId',
      caseId: 'CaseId',
      contactId: 'ContactId',
      customerEstablishedTime: 'CustomerEstablishedTime',
      customerReleasedTime: 'CustomerReleasedTime',
      dialDuration: 'DialDuration',
      dialTime: 'DialTime',
      enqueueTime: 'EnqueueTime',
      enterIvrTime: 'EnterIvrTime',
      instanceId: 'InstanceId',
      ivrDuration: 'IvrDuration',
      queueDuration: 'QueueDuration',
      queueId: 'QueueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentEstablishedTime: 'number',
      agentId: 'string',
      agentRingDuration: 'number',
      assignAgentTime: 'number',
      attemptId: 'string',
      callee: 'string',
      caller: 'string',
      campaignId: 'string',
      caseId: 'string',
      contactId: 'string',
      customerEstablishedTime: 'number',
      customerReleasedTime: 'number',
      dialDuration: 'number',
      dialTime: 'number',
      enqueueTime: 'number',
      enterIvrTime: 'number',
      instanceId: 'string',
      ivrDuration: 'number',
      queueDuration: 'number',
      queueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

