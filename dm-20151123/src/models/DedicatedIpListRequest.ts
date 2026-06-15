// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DedicatedIpListRequest extends $dara.Model {
  /**
   * @remarks
   * The search keyword for IP addresses.
   * 
   * @example
   * xxx
   */
  keyword?: string;
  /**
   * @remarks
   * The page index, starting from 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

