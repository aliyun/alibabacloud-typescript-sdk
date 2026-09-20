// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AiTryOnResponseBodyDataUsageMap extends $dara.Model {
  /**
   * @example
   * 1
   */
  processedImageCount?: number;
  /**
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
   * @example
   * 1360
   */
  imageHeight?: string;
  /**
   * @example
   * https://example.com/virtual-try-on-result.png
   */
  imageUrl?: string;
  /**
   * @example
   * 768
   */
  imageWidth?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: AiTryOnResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 2728332e-72c1-9c0d-8869-5781b2cd25d4
   */
  requestId?: string;
  /**
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

