// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInventoryJobsRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * task_1001
   */
  query?: string;
  /**
   * @example
   * 20
   */
  size?: number;
  /**
   * @example
   * confidence
   */
  sortBy?: string;
  /**
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      query: 'Query',
      size: 'Size',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      query: 'string',
      size: 'number',
      sortBy: 'string',
      sortOrder: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

