// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshAppInstanceTicketRequest extends $dara.Model {
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * ***
   */
  token?: string;
  /**
   * @example
   * c5c354d7-5e68-443a-b7fc-767e6ede9deb
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      token: 'Token',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      token: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

