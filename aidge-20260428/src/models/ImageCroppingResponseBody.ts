// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageCroppingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Image height
   * 
   * @example
   * 800
   */
  height?: number;
  /**
   * @remarks
   * URL of the cropped image
   * 
   * @example
   * https://example.com/cropped.jpg
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
   * Image width
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

export class ImageCroppingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Crop result
   */
  data?: ImageCroppingResponseBodyData;
  /**
   * @remarks
   * Error message
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
   * Whether the call was successful: true indicates success, false indicates failure
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
      data: ImageCroppingResponseBodyData,
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

