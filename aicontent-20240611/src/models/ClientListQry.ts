// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClientListQry extends $dara.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      page: 'page',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
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

