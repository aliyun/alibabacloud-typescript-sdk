// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDentriesInfoResponseBodyDentryThumbnail extends $dara.Model {
  /**
   * @example
   * 720
   */
  height?: number;
  /**
   * @example
   * xxx
   */
  url?: string;
  /**
   * @example
   * 1920
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

