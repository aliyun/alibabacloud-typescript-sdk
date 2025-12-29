// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelHomeBackImageAndModesResponseBodyResultModeList extends $dara.Model {
  /**
   * @example
   * 浪漫模式
   */
  cnName?: string;
  /**
   * @example
   * romantic
   */
  code?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingmoshi/langman.png
   */
  icon?: string;
  static names(): { [key: string]: string } {
    return {
      cnName: 'CnName',
      code: 'Code',
      icon: 'Icon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      code: 'string',
      icon: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * https://ailabs.alibabausercontent.com/platform/3d4fe6d66ec49d9789635f66627f0339/welcome_audios/976210a6532150f49c2677a8b7dbc105/l6fspbhn.jpg
   */
  backgroundImage?: string;
  /**
   * @example
   * 宣雍测试橙蜂酒店
   */
  hotelName?: string;
  modeList?: GetHotelHomeBackImageAndModesResponseBodyResultModeList[];
  static names(): { [key: string]: string } {
    return {
      backgroundImage: 'BackgroundImage',
      hotelName: 'HotelName',
      modeList: 'ModeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundImage: 'string',
      hotelName: 'string',
      modeList: { 'type': 'array', 'itemType': GetHotelHomeBackImageAndModesResponseBodyResultModeList },
    };
  }

  validate() {
    if(Array.isArray(this.modeList)) {
      $dara.Model.validateArray(this.modeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 394450FC-9035-1B7C-8829-BC88832473FC
   */
  requestId?: string;
  result?: GetHotelHomeBackImageAndModesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetHotelHomeBackImageAndModesResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

