// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions for querying jobs.
   */
  filterShrink?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * Start value: 1
   * 
   * Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is 50. The maximum value is 100.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting method.
   */
  sortByShrink?: string;
  static names(): { [key: string]: string } {
    return {
      filterShrink: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortByShrink: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortByShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

