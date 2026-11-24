// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageUpscaleResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * The actual height of the generated image.
   * 
   * @example
   * 4096
   */
  imageHeight?: number;
  /**
   * @remarks
   * The URL of the upscaled single image.
   * 
   * @example
   * https://example.com/output.png
   */
  imageUrl?: string;
  /**
   * @remarks
   * The actual width of the generated image.
   * 
   * @example
   * 2048
   */
  imageWidth?: number;
  static names(): { [key: string]: string } {
    return {
      imageHeight: 'ImageHeight',
      imageUrl: 'ImageUrl',
      imageWidth: 'ImageWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageHeight: 'number',
      imageUrl: 'string',
      imageWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageUpscaleResponseBodyDataUsageMap extends $dara.Model {
  /**
   * @remarks
   * The number of processed images.
   * 
   * @example
   * 1
   */
  processedImageCount?: number;
  static names(): { [key: string]: string } {
    return {
      processedImageCount: 'ProcessedImageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processedImageCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageUpscaleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The upscaling result data.
   */
  data?: ImageUpscaleResponseBodyDataData;
  /**
   * @remarks
   * The error code returned when the operation fails, such as InvalidParameter or DownstreamUnavailable.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the operation fails.
   * 
   * @example
   * Success
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. A value of true indicates success, and a value of false indicates failure.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the downstream task. This parameter is left empty for synchronous API operations.
   * 
   * @example
   * ed9d8504-6141-9fbb-8345-4fa36433483f
   */
  taskId?: string;
  /**
   * @remarks
   * The usage information. The key is the billing dimension name.
   */
  usageMap?: ImageUpscaleResponseBodyDataUsageMap;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      success: 'Success',
      taskId: 'TaskId',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ImageUpscaleResponseBodyDataData,
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
      taskId: 'string',
      usageMap: ImageUpscaleResponseBodyDataUsageMap,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.usageMap && typeof (this.usageMap as any).validate === 'function') {
      (this.usageMap as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageUpscaleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code, such as "success".
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The returned result struct.
   */
  data?: ImageUpscaleResponseBodyData;
  /**
   * @remarks
   * The returned message or error prompt.
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
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates success, and a value of false indicates failure.
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
      data: ImageUpscaleResponseBodyData,
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

