// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserUsageDataExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Valid values: **1** to **100000**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**. Maximum value: **50**.
   * 
   * Valid values: an integer from **1** to **50**.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

