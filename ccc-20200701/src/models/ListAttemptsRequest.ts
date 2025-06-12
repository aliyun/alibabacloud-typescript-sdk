// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttemptsRequest extends $dara.Model {
  /**
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @example
   * job-16976964500325****
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6badb397-a8b5-40b6-21019d382a09
   */
  campaignId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60ecb1a2-4480-4d01-bede-c5b7655bfadf
   */
  caseId?: string;
  /**
   * @example
   * job-16976964500325****
   */
  contactId?: string;
  criteria?: string;
  /**
   * @example
   * 1634115698291
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
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
  /**
   * @example
   * skillgroup@ccc-test
   */
  queueId?: string;
  /**
   * @example
   * 1634115688291
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      attemptId: 'AttemptId',
      callee: 'Callee',
      caller: 'Caller',
      campaignId: 'CampaignId',
      caseId: 'CaseId',
      contactId: 'ContactId',
      criteria: 'Criteria',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queueId: 'QueueId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      attemptId: 'string',
      callee: 'string',
      caller: 'string',
      campaignId: 'string',
      caseId: 'string',
      contactId: 'string',
      criteria: 'string',
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queueId: 'string',
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

