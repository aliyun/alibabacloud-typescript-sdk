// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncCreateAgAccountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  loginEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  maserAccountInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mpk?: string;
  static names(): { [key: string]: string } {
    return {
      loginEmail: 'LoginEmail',
      maserAccountInfo: 'MaserAccountInfo',
      mpk: 'Mpk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginEmail: 'string',
      maserAccountInfo: 'string',
      mpk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

