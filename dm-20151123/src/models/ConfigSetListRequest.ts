// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retrieve all ConfigSets. Optional.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The keyword for filtering ConfigSets by name.
   * 
   * @example
   * xxx
   */
  keyword?: string;
  /**
   * @remarks
   * The page number, starting from 1. Required.
   * 
   * @example
   * 1
   */
  pageIndex?: string;
  /**
   * @remarks
   * The number of entries per page. Required.
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

