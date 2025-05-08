// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCredits extends $dara.Model {
  genericTextSearch?: number;
  static names(): { [key: string]: string } {
    return {
      genericTextSearch: 'genericTextSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      genericTextSearch: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

