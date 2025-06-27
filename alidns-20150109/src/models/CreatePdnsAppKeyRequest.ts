// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePdnsAppKeyRequest extends $dara.Model {
  lang?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

