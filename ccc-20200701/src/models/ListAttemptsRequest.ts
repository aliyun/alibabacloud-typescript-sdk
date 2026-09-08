// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttemptsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter by agent ID. This parameter is optional and defaults to empty.
   * 
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * Call record ID, which has the same value as the call ID.
   * 
   * @example
   * job-16976964500325****
   */
  attemptId?: string;
  /**
   * @remarks
   * Filter by called number. Optional. Default is empty.
   * 
   * @example
   * 1888888****
   */
  callee?: string;
  /**
   * @remarks
   * Filter by caller number. This parameter is optional and defaults to empty.
   * 
   * @example
   * 05711234****
   */
  caller?: string;
  /**
   * @remarks
   * Predictive outbound dialing Activity ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6badb397-a8b5-40b6-21019d382a09
   */
  campaignId?: string;
  /**
   * @remarks
   * System-generated contact ID. Customers do not need to concern themselves with this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 60ecb1a2-4480-4d01-bede-c5b7655bfadf
   */
  caseId?: string;
  /**
   * @remarks
   * Filter by call ID. This parameter is optional and defaults to empty.
   * 
   * @example
   * job-16976964500325****
   */
  contactId?: string;
  /**
   * @remarks
   * Extended query conditions in JSON format. Currently supports caseIds for batch queries.
   * 
   * @example
   * {"caseIds":["964f05a7-fc15-4a05-93a6-cd7421c4459e","5e2d508b-0df6-4077-8099-d3fff51ea6d0","da037029-8c83-4270-a90e-e7734be76af6"]}
   */
  criteria?: string;
  /**
   * @remarks
   * End Time. This parameter is optional. If not specified, it defaults to the End Time of the predictive outbound dialing Activity. The format is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1634115698291
   */
  endTime?: number;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Page number. The product of PageNumber and PageSize must not exceed 10 000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size. The product of PageNumber and PageSize must not exceed 10 000.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Filter by skill group ID. This parameter is optional and defaults to empty, which means no filtering is applied.
   * 
   * @example
   * skillgroup@ccc-test
   */
  queueId?: string;
  /**
   * @remarks
   * Start Time. This parameter is optional. If not specified, it defaults to the Start Time of the predictive outbound dialing Activity. The format is a UNIX timestamp in milliseconds.
   * 
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

