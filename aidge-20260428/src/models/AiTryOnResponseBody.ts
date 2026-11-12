// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiTryOnResponseBodyDataUsageMap extends $dara.Model {
  /**
   * @remarks
   * The number of processed images.
   * 
   * @example
   * 1
   */
  processedImageCount?: number;
  /**
   * @remarks
   * The resolution of the image.
   * 
   * @example
   * 1K
   */
  resolution?: string;
  static names(): { [key: string]: string } {
    return {
      processedImageCount: 'ProcessedImageCount',
      resolution: 'Resolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processedImageCount: 'number',
      resolution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiTryOnResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The actual height of the generated image.
   * 
   * @example
   * 1360
   */
  imageHeight?: string;
  /**
   * @remarks
   * The URL of the generated image.
   * 
   * @example
   * https://example.com/virtual-try-on-result.png
   */
  imageUrl?: string;
  /**
   * @remarks
   * The actual width of the generated image.
   * 
   * @example
   * 768
   */
  imageWidth?: string;
  /**
   * @remarks
   * The usage fields.
   * 
   * @example
   * {"ProcessedImageCount":1,"Resolution":"1K"}
   */
  usageMap?: AiTryOnResponseBodyDataUsageMap;
  static names(): { [key: string]: string } {
    return {
      imageHeight: 'ImageHeight',
      imageUrl: 'ImageUrl',
      imageWidth: 'ImageWidth',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageHeight: 'string',
      imageUrl: 'string',
      imageWidth: 'string',
      usageMap: AiTryOnResponseBodyDataUsageMap,
    };
  }

  validate() {
    if(this.usageMap && typeof (this.usageMap as any).validate === 'function') {
      (this.usageMap as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiTryOnResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is not returned if the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result struct.
   */
  data?: AiTryOnResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is not returned if the call is successful.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request, which is used to identify a unique API call.
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success, and a value of false indicates failure.
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
      data: AiTryOnResponseBodyData,
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

