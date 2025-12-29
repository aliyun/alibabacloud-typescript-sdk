// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChildAccountAuthRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lee
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30471753
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEV***E3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      appKey: 'AppKey',
      hotelId: 'HotelId',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      appKey: 'string',
      hotelId: 'string',
      tbOpenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

