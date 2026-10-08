// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MosCheckInRequest extends $dara.Model {
  /**
   * @example
   * INTL1234
   */
  activityId?: string;
  /**
   * @example
   * {}
   */
  extParam?: string;
  /**
   * @example
   * abc12345
   */
  qrCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      extParam: 'ExtParam',
      qrCode: 'QrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      extParam: 'string',
      qrCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

