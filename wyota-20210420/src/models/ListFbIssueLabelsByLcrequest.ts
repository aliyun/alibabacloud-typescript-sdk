// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFbIssueLabelsByLCRequest extends $dara.Model {
  caller?: string;
  languageType?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      languageType: 'LanguageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      languageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

