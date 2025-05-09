// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobsRequestFilter } from "./ListJobsRequestFilter";
import { ListJobsRequestSortBy } from "./ListJobsRequestSortBy";


export class ListJobsRequest extends $dara.Model {
  filter?: ListJobsRequestFilter;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  sortBy?: ListJobsRequestSortBy;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: ListJobsRequestFilter,
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: ListJobsRequestSortBy,
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(this.sortBy && typeof (this.sortBy as any).validate === 'function') {
      (this.sortBy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

