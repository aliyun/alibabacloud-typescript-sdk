// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientUsersRequest extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Department ID.
   * 
   * @example
   * 10785
   */
  departmentId?: string;
  /**
   * @remarks
   * Email address.
   * 
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @remarks
   * Custom identity source configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1071
   */
  idpConfigId?: string;
  /**
   * @remarks
   * Mobile phone number without country code.
   * 
   * @example
   * 18980976559
   */
  mobileNumber?: string;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * User enable status. Valid values:
   * 
   * - **Enabled**: enabled.
   * 
   * - **Disabled**: disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * Username.
   * 
   * @example
   * 张三
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      departmentId: 'DepartmentId',
      email: 'Email',
      idpConfigId: 'IdpConfigId',
      mobileNumber: 'MobileNumber',
      pageSize: 'PageSize',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      departmentId: 'string',
      email: 'string',
      idpConfigId: 'string',
      mobileNumber: 'string',
      pageSize: 'number',
      status: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

