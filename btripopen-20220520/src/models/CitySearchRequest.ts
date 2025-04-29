// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CitySearchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

