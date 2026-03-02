// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreAccessKeyFromRecycleBinRequest extends $dara.Model {
  userAccessKeyId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userAccessKeyId: 'UserAccessKeyId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userAccessKeyId: 'string',
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

