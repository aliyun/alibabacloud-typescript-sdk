// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCalendarsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the scheduling calendar. Partial match is supported.
   * 
   * @example
   * calendar
   */
  name?: string;
  /**
   * @remarks
   * The account ID of the owner. Exact match is supported.
   * 
   * @example
   * 123456789
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of items per page. Default value: 10. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The workspace ID. Queries the calendars applicable to this workspace, including those applicable to all workspaces. If this parameter is not specified, the calendars of the current tenant are queried.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The sorting rule. The format is "Field Direction", separated by a space.
   * 
   * - Field: ModifyTime, Name, or Id.
   * - Direction: Asc for ascending order, or Desc for descending order. If this parameter is not specified, Asc is used.
   * 
   * Default value: ModifyTime Desc.
   * 
   * @example
   * ModifyTime Desc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

