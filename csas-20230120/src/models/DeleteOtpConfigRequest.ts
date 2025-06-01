// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOtpConfigRequest extends $dara.Model {
  username?: string;
  static names(): { [key: string]: string } {
    return {
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

