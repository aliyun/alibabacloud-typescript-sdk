// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the job template.
   * 
   * This parameter is required.
   * 
   * @example
   * e1a7a07-abcb-4652-a1d3-2d57f415****
   */
  appId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page in the paging Settings for a paged query. Valid values: 0 to 10000.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The running status of the job. Valid values:
   * - **0**: Not run.
   * - **1**: Succeeded.
   * - **2**: Failed.
   * - **3**: Running.
   * 
   * @example
   * 1
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      pageSize: 'number',
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

