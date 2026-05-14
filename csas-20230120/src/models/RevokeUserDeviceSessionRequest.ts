// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeUserDeviceSessionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2987b3e0-8108-2f99-4d18-3b4f1c1c36d7
   */
  devTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * su_xxxxxxxx
   */
  saseUserId?: string;
  static names(): { [key: string]: string } {
    return {
      devTag: 'DevTag',
      saseUserId: 'SaseUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devTag: 'string',
      saseUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

