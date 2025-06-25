// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveDatabasesFromGroupResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned. If OK is returned, the operation was successful. If another error code is returned, the operation failed.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 20
   */
  databaseId?: string;
  /**
   * @remarks
   * The asset group ID.
   * 
   * @example
   * 1
   */
  hostGroupId?: string;
  /**
   * @remarks
   * The error message that is returned.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseId: 'DatabaseId',
      hostGroupId: 'HostGroupId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseId: 'string',
      hostGroupId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

