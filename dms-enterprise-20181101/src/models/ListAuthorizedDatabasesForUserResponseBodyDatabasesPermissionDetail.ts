// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedDatabasesForUserResponseBodyDatabasesPermissionDetail extends $dara.Model {
  /**
   * @example
   * DATABASE
   */
  dsType?: string;
  /**
   * @example
   * 2024-12-06 10:00:00
   */
  expireDate?: string;
  message?: string;
  /**
   * @example
   * CORRECT
   */
  permType?: string;
  static names(): { [key: string]: string } {
    return {
      dsType: 'DsType',
      expireDate: 'ExpireDate',
      message: 'Message',
      permType: 'PermType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsType: 'string',
      expireDate: 'string',
      message: 'string',
      permType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

