// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserDeviceListByTmeUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  sp?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tmeUserId?: string;
  static names(): { [key: string]: string } {
    return {
      sp: 'Sp',
      tmeUserId: 'TmeUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sp: 'string',
      tmeUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

