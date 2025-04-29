// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PhoneNumberConvertServiceResponseBodyData extends $dara.Model {
  converResult?: boolean;
  number?: string;
  numberMd5?: string;
  numberSha256?: string;
  static names(): { [key: string]: string } {
    return {
      converResult: 'ConverResult',
      number: 'Number',
      numberMd5: 'NumberMd5',
      numberSha256: 'NumberSha256',
    };
  }

  static types(): { [key: string]: any } {
    return {
      converResult: 'boolean',
      number: 'string',
      numberMd5: 'string',
      numberSha256: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

