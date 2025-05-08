// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnifiedSearchInformation extends $dara.Model {
  searchTime?: number;
  static names(): { [key: string]: string } {
    return {
      searchTime: 'searchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

