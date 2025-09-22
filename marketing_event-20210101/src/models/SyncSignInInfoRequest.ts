// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncSignInInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  activityId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  QRCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      QRCode: 'QRCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      QRCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

