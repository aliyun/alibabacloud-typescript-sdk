// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageMattingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The height of the result image in pixels.
   * 
   * @example
   * 800
   */
  height?: number;
  /**
   * @remarks
   * The URL of the matting result image.
   * 
   * @example
   * http://dashscope-7c2c.oss-cn-shanghai.aliyuncs.com/xxx.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The quality score of the matting result.
   * 
   * @example
   * 0.11
   */
  score?: number;
  /**
   * @remarks
   * The usage information.
   * 
   * @example
   * {"ProcessedImageCount":1}
   */
  usageMap?: { [key: string]: number };
  /**
   * @remarks
   * The width of the result image in pixels.
   * 
   * @example
   * 800
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      imageUrl: 'ImageUrl',
      score: 'Score',
      usageMap: 'UsageMap',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      imageUrl: 'string',
      score: 'number',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      width: 'number',
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

export class ImageMattingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The matting result.
   */
  data?: ImageMattingResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * True
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
      data: ImageMattingResponseBodyData,
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

