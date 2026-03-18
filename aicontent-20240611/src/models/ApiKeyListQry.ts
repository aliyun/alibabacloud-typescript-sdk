// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApiKeyListQry extends $dara.Model {
  /**
   * @example
   * 1
   */
  clientId?: number;
  keyword?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      keyword: 'keyword',
      page: 'page',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'number',
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

