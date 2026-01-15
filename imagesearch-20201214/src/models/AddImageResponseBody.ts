// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddImageResponseBodyPicInfo extends $dara.Model {
  /**
   * @remarks
   * The result of category prediction. If a category is specified in the request, the specified category prevails.
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @remarks
   * The result of subject identification. The subject area of the image is in the format of `x1,x2,y1,y2`. `x1 and y1` represent the position in the upper-left corner, in pixels. `x2 and y2` represent the position in the lower-right corner, in pixels. If a subject area is specified in the request, the specified subject area prevails.
   * 
   * @example
   * 94,691,206,650
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code returned.
   * 
   * *   A value of 0 indicates that the request was successful.
   * *   Values other than 0 indicate that the request failed.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * > No value is returned if the request was successful, and an error message is returned if the request failed.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The results of category prediction and subject identification.
   */
  picInfo?: AddImageResponseBodyPicInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0845DE6-52AF-4B50-9F15-51ED4044E6AB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      picInfo: 'PicInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      picInfo: AddImageResponseBodyPicInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.picInfo && typeof (this.picInfo as any).validate === 'function') {
      (this.picInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

