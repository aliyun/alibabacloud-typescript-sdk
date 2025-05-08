// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTitleGenerateResponseBodyData extends $dara.Model {
  /**
   * @example
   * 10pcs 80ml Kitchen Disposable Plastic Sauce Cup Pot Chutney Container
   */
  titles?: string;
  static names(): { [key: string]: string } {
    return {
      titles: 'Titles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      titles: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

