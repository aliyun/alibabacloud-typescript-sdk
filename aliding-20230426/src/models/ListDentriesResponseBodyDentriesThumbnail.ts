// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDentriesResponseBodyDentriesThumbnail extends $dara.Model {
  /**
   * @example
   * 64
   */
  height?: number;
  /**
   * @example
   * url
   */
  url?: string;
  /**
   * @example
   * 64
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      url: 'Url',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      url: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

