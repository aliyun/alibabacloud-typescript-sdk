// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrustedServiceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The management account or delegated administrator account. Valid values:
   * - Management account (default): Queries the list of trusted services enabled by the management account.
   * - Delegated administrator account: Queries the list of trusted services enabled by the delegated administrator account.
   * 
   * For more information about trusted services and delegated administrator accounts, see [Overview of trusted services](https://help.aliyun.com/document_detail/208133.html) and [Manage delegated administrator accounts](https://help.aliyun.com/document_detail/208117.html).
   * 
   * @example
   * 177242285274****
   */
  adminAccountId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      adminAccountId: 'AdminAccountId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminAccountId: 'string',
      pageNumber: 'number',
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

