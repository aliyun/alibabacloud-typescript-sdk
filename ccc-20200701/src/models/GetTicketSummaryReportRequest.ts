// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketSummaryReportRequest extends $dara.Model {
  /**
   * @remarks
   * Assignee ID. This can be an agent ID or a skill group ID.
   * 
   * @example
   * assignee@ccc-test
   */
  assignee?: string;
  /**
   * @remarks
   * Assignee type.
   * 
   * - Agent
   * 
   * - SkillGroup
   * 
   * @example
   * Agent
   */
  assigneeType?: string;
  /**
   * @remarks
   * Ticket category ID.
   * 
   * @example
   * 43c2671b-***-***-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @remarks
   * Creator ID.
   * 
   * @example
   * creator@ccc-test
   */
  creator?: string;
  /**
   * @remarks
   * End time. Filter tickets by creation time.
   * 
   * @example
   * 1719590399999
   */
  endTime?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size. Valid values: 1 to 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Participant ID.
   * 
   * @example
   * participant@ccc-test
   */
  participant?: string;
  /**
   * @remarks
   * Start time. Filter tickets by creation time.
   * 
   * @example
   * 1716998400000
   */
  startTime?: number;
  /**
   * @remarks
   * Ticket state.
   * 
   * - Processing
   * 
   * - Withdrawal
   * 
   * - Rejected
   * 
   * - Closed
   * 
   * @example
   * 无
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      assignee: 'Assignee',
      assigneeType: 'AssigneeType',
      categoryId: 'CategoryId',
      creator: 'Creator',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      participant: 'Participant',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignee: 'string',
      assigneeType: 'string',
      categoryId: 'string',
      creator: 'string',
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      participant: 'string',
      startTime: 'number',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

