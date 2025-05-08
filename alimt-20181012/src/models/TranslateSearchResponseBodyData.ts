// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateSearchResponseBodyData extends $dara.Model {
  translated?: string;
  static names(): { [key: string]: string } {
    return {
      translated: 'Translated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      translated: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

