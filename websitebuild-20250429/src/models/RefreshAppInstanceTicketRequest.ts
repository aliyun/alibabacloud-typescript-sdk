// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshAppInstanceTicketRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID of the application instance
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Updated token information
   * 
   * @example
   * ***
   */
  token?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
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

