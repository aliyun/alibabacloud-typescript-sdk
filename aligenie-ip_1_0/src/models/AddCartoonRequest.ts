// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCartoonRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0***eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40c804***697
   */
  startVideoMd5?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://***.mp4
   */
  startVideoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      startVideoMd5: 'StartVideoMd5',
      startVideoUrl: 'StartVideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      startVideoMd5: 'string',
      startVideoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

