// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDefaultDriveRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID. If you use an AccessKey pair for authentication, you must specify this parameter. If you use an access token for authentication, this parameter is optional. By default, the user ID associated with the access token is used.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

