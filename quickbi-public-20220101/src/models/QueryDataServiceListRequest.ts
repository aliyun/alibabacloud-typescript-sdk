// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataServiceListRequest extends $dara.Model {
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Test SQL
   */
  name?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * - Default value: 10
   * - Maximum value: 1000
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * dasdfdsa-csddf-dsadsa
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

