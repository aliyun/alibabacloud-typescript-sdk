// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRemoveResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Height of the result image (pixels)
   * 
   * @example
   * 800
   */
  height?: number;
  /**
   * @remarks
   * URL of the removal result image
   * 
   * @example
   * http://dashscope-7c2c.oss-cn-shanghai.aliyuncs.com/xxx.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Usage information
   * 
   * @example
   * {"ProcessedImageCount":1}
   */
  usageMap?: { [key: string]: number };
  /**
   * @remarks
   * Width of the result image (pixels)
   * 
   * @example
   * 800
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      imageUrl: 'ImageUrl',
      usageMap: 'UsageMap',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      imageUrl: 'string',
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

export class ImageRemoveResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Intelligent removal result
   */
  data?: ImageRemoveResponseBodyData;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2728332e-72c1-9c0d-8869-5781b2cd25d4
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful
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
      data: ImageRemoveResponseBodyData,
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

