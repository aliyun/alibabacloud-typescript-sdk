// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelRoomInfoResponseBodyModuleBedInfos extends $dara.Model {
  bedDesc?: string;
  /**
   * @example
   * 2
   */
  bedNum?: number;
  /**
   * @example
   * 1.8*2.0m
   */
  bedSize?: string;
  /**
   * @example
   * 1
   */
  bedType?: string;
  length?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bedDesc: 'bed_desc',
      bedNum: 'bed_num',
      bedSize: 'bed_size',
      bedType: 'bed_type',
      length: 'length',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedDesc: 'string',
      bedNum: 'number',
      bedSize: 'string',
      bedType: 'string',
      length: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

