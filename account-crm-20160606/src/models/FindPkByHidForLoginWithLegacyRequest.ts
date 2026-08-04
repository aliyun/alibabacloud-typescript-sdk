// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindPkByHidForLoginWithLegacyRequest extends $dara.Model {
  hid?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      hid: 'Hid',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hid: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

