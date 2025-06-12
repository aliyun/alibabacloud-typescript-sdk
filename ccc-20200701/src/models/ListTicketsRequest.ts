// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketsRequest extends $dara.Model {
  /**
   * @example
   * assignee@cccV2-kmz
   */
  assignee?: string;
  /**
   * @example
   * Agent
   */
  assigneeType?: string;
  /**
   * @example
   * 43c2671b-****-4223-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @example
   * creator@cccV2-kmz
   */
  creator?: string;
  /**
   * @example
   * 51e155ce-3747-*****-b402-13c69597b920
   */
  customerId?: string;
  /**
   * @example
   * 1646928000000
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
   * ["job-12******","job-23****"]
   */
  jobIdList?: string;
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
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * participant@cccV2-kmz
   */
  participant?: string;
  /**
   * @example
   * 1646841600000
   */
  startTime?: number;
  /**
   * @example
   * Processing
   */
  state?: string;
  /**
   * @example
   * 5491d3b4-14ee-4341-b5f1-db2c78beddeb
   */
  ticketId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      assignee: 'Assignee',
      assigneeType: 'AssigneeType',
      categoryId: 'CategoryId',
      creator: 'Creator',
      customerId: 'CustomerId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobIdList: 'JobIdList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      participant: 'Participant',
      startTime: 'StartTime',
      state: 'State',
      ticketId: 'TicketId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignee: 'string',
      assigneeType: 'string',
      categoryId: 'string',
      creator: 'string',
      customerId: 'string',
      endTime: 'number',
      instanceId: 'string',
      jobIdList: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      participant: 'string',
      startTime: 'number',
      state: 'string',
      ticketId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

