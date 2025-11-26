// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CollationTimeZone extends $dara.Model {
  /**
   * @example
   * UTC+08:00
   */
  currentTimeOffset?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      currentTimeOffset: 'CurrentTimeOffset',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentTimeOffset: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

