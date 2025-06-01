// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyUsers extends $dara.Model {
  department?: string;
  /**
   * @example
   * a***@example.net
   */
  email?: string;
  idpName?: string;
  /**
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      email: 'Email',
      idpName: 'IdpName',
      phone: 'Phone',
      saseUserId: 'SaseUserId',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      email: 'string',
      idpName: 'string',
      phone: 'string',
      saseUserId: 'string',
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

