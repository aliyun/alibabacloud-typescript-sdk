// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number for pagination.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page for pagination. Maximum value: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The UID of the distribution customer account. Either this parameter or the UserType parameter must be specified. If this parameter is empty, all distribution customer accounts of the specified UserType are queried.
   * 
   * @example
   * 1215848086704806
   */
  uid?: number;
  /**
   * @remarks
   * The type of the distribution customer account. Valid values:
   * - 1: End user.
   * - 2: Enterprise customer. 
   * - 3: T2 partner.
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

