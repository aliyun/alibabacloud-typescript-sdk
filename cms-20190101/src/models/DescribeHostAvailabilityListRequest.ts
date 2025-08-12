// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHostAvailabilityListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 12345
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the availability monitoring task.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @remarks
   * The IDs of the availability monitoring tasks. Separate multiple IDs with commas (,).
   * 
   * @example
   * 123456,345678
   */
  ids?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Minimum value: 1. Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the availability monitoring task.
   * 
   * @example
   * ecs_instance
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      id: 'Id',
      ids: 'Ids',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      id: 'number',
      ids: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

