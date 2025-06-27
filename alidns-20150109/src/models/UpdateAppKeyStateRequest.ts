// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppKeyStateRequest extends $dara.Model {
  appKeyId?: string;
  lang?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appKeyId: 'AppKeyId',
      lang: 'Lang',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeyId: 'string',
      lang: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

