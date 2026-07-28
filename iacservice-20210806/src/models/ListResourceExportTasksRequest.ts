// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceExportTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource export task.
   * 
   * @example
   * ex-al1c11jl9g2tbte727otp85
   */
  exportTaskId?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy search by task name is supported.
   * 
   * @example
   * key
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results per page. Default value: 20. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'exportTaskId',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

