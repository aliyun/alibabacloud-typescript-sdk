// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApiKeyListQry extends $dara.Model {
  /**
   * @remarks
   * The client ID filter.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The search keyword.
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of items per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status filter.
   * 
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

