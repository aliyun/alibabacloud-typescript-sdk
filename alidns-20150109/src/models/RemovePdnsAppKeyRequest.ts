// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemovePdnsAppKeyRequest extends $dara.Model {
  appKeyId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      appKeyId: 'AppKeyId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeyId: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

