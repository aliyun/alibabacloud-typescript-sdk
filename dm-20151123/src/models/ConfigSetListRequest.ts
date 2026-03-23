// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query all configuration sets. This parameter is optional.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The keyword to search by name.
   * 
   * @example
   * xxx
   */
  keyword?: string;
  /**
   * @remarks
   * The page index. The value starts from 1. This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: string;
  /**
   * @remarks
   * The number of entries per page. This parameter is required.
   * 
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

