// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightSegmentAvailableCertRequest extends $dara.Model {
  /**
   * @example
   * ZJTD
   */
  isvName?: string;
  /**
   * @example
   * chinese
   */
  language?: string;
  /**
   * @example
   * 21341234
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      isvName: 'isv_name',
      language: 'language',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvName: 'string',
      language: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

