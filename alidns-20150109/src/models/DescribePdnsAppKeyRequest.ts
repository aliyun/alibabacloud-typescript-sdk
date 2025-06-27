// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsAppKeyRequest extends $dara.Model {
  appKeyId?: string;
  authCode?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      appKeyId: 'AppKeyId',
      authCode: 'AuthCode',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeyId: 'string',
      authCode: 'string',
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

