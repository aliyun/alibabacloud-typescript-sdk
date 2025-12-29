// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveChildAccountAuthRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30**53
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tbxxxx
   */
  childAccountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
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
      appKey: 'AppKey',
      childAccountName: 'ChildAccountName',
      hotelId: 'HotelId',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      childAccountName: 'string',
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

