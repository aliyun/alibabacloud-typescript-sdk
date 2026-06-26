// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginPreferenceRequest extends $dara.Model {
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

