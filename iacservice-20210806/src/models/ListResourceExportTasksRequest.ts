// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceExportTasksRequest extends $dara.Model {
  /**
   * @example
   * ex-al1c11jl9g2tbte727otp85
   */
  exportTaskId?: string;
  /**
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
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

