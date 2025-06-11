// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The database privileges of the account.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The return result of the request.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The return result of the request.
   * 
   * @example
   * pay
   */
  searchKey?: string;
  /**
   * @remarks
   * The return result of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  /**
   * @remarks
   * The operation that you want to perform.   
   * Set the value to **DescribeTenantUsers**.
   * 
   * @example
   * pay_test
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      tenantId: 'TenantId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      tenantId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

