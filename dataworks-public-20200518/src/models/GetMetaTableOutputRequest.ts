// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The end date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-02-15
   */
  endDate?: string;
  /**
   * @remarks
   * The page number. Valid values: 1 to 30. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-02-02
   */
  startDate?: string;
  /**
   * @remarks
   * The GUID of the metatable.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.sample_project.sample_table
   */
  tableGuid?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1048576
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      tableGuid: 'TableGuid',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      tableGuid: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

