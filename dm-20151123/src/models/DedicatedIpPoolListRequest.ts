// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DedicatedIpPoolListRequest extends $dara.Model {
  all?: boolean;
  /**
   * @remarks
   * Search keyword for the name
   * 
   * @example
   * xxx
   */
  keyword?: string;
  /**
   * @remarks
   * Page index, starting from 1
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * Number of items per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      keyword: 'Keyword',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      keyword: 'string',
      pageIndex: 'number',
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

