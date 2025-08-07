// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCredits extends $dara.Model {
  genericTextSearch?: number;
  liteAdvancedTextSearch?: number;
  static names(): { [key: string]: string } {
    return {
      genericTextSearch: 'genericTextSearch',
      liteAdvancedTextSearch: 'liteAdvancedTextSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      genericTextSearch: 'number',
      liteAdvancedTextSearch: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

