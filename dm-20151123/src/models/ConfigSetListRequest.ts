// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetListRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  all?: boolean;
  /**
   * @example
   * xxx
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
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
      pageIndex: 'string',
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

