// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationStandardResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL of the image generated after image translation.
   * 
   * @example
   * http://dashscope-a717.oss-cn-beijing.aliyuncs.com/xxx.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The usage information, including the number of processed images.
   * 
   * @example
   * {"ProcessedImageCount":1}
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageTranslationStandardResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates a successful call. For other response codes, see the error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The translation result data, including the translated image URL and usage information.
   */
  data?: ImageTranslationStandardResponseBodyData;
  /**
   * @remarks
   * The error message. "Success" is returned for a successful call. A specific error message is returned for a failed call.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which uniquely identifies the request.
   * 
   * @example
   * 1CEC4D94-905A-1ED1-A7B4-1BFEFFB3D850
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates success. A value of false indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ImageTranslationStandardResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

