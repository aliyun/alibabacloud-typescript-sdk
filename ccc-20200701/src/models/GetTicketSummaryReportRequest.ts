// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketSummaryReportRequest extends $dara.Model {
  /**
   * @example
   * assignee@ccc-test
   */
  assignee?: string;
  /**
   * @example
   * Agent
   */
  assigneeType?: string;
  /**
   * @example
   * 43c2671b-***-***-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @example
   * creator@ccc-test
   */
  creator?: string;
  /**
   * @example
   * 1719590399999
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * participant@ccc-test
   */
  participant?: string;
  /**
   * @example
   * 1716998400000
   */
  startTime?: number;
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

