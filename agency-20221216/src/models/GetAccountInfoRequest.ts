// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Pagination, current page.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Pagination, record number on each page, maximum 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Account UID of Distribution Customer. This parameter and the UserType parameter must have one filled. If this parameter is empty, then check all Distribution Customer accounts of the selected UserType.
   * 
   * @example
   * 1215848086704806
   */
  uid?: number;
  /**
   * @remarks
   * Distribution Customer\\"s Account Type:
   * - 1 End User
   * - 2 Enterprise
   * - 3 T2 Partner
   * 
   * @example
   * 1
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      uid: 'Uid',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      uid: 'number',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

