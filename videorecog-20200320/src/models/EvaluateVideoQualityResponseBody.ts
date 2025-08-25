// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateVideoQualityResponseBodyDataVideoQualityInfo extends $dara.Model {
  /**
   * @example
   * 0.15
   */
  blurriness?: number;
  /**
   * @example
   * 0.55
   */
  colorContrast?: number;
  /**
   * @example
   * 0.17
   */
  colorSaturation?: number;
  /**
   * @example
   * 0.48
   */
  colorfulness?: number;
  /**
   * @example
   * 0.25
   */
  compressiveStrength?: number;
  /**
   * @example
   * 0.51
   */
  luminance?: number;
  /**
   * @example
   * 0.7048
   */
  mosScore?: number;
  /**
   * @example
   * 0.01
   */
  noiseIntensity?: number;
  static names(): { [key: string]: string } {
    return {
      blurriness: 'Blurriness',
      colorContrast: 'ColorContrast',
      colorSaturation: 'ColorSaturation',
      colorfulness: 'Colorfulness',
      compressiveStrength: 'CompressiveStrength',
      luminance: 'Luminance',
      mosScore: 'MosScore',
      noiseIntensity: 'NoiseIntensity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blurriness: 'number',
      colorContrast: 'number',
      colorSaturation: 'number',
      colorfulness: 'number',
      compressiveStrength: 'number',
      luminance: 'number',
      mosScore: 'number',
      noiseIntensity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateVideoQualityResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://vibktprfx-prod-prod-damo-eas-cn-shanghai.oss-cn-shanghai.aliyuncs.com/eas-video-quality-assessment/2023-01-13-10/31%3A08-cVeN9ZQlzIPfGqsa.json?Expires=1673578869&amp;OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&amp;Signature=AiSsOsZ7rYfhf9w3Mxn%2Fq4GKKy****
   */
  jsonUrl?: string;
  /**
   * @example
   * http://vibktprfx-prod-prod-damo-eas-cn-shanghai.oss-cn-shanghai.aliyuncs.com/eas-video-quality-assessment/2023-01-13-10/31%3A08-cVeN9ZQlzIPfGqsa.pdf?Expires=1673578869&amp;OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&amp;Signature=xULlZzVuhoYWAXRbp9A4EzzZcS****
   */
  pdfUrl?: string;
  videoQualityInfo?: EvaluateVideoQualityResponseBodyDataVideoQualityInfo;
  static names(): { [key: string]: string } {
    return {
      jsonUrl: 'JsonUrl',
      pdfUrl: 'PdfUrl',
      videoQualityInfo: 'VideoQualityInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonUrl: 'string',
      pdfUrl: 'string',
      videoQualityInfo: EvaluateVideoQualityResponseBodyDataVideoQualityInfo,
    };
  }

  validate() {
    if(this.videoQualityInfo && typeof (this.videoQualityInfo as any).validate === 'function') {
      (this.videoQualityInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateVideoQualityResponseBody extends $dara.Model {
  data?: EvaluateVideoQualityResponseBodyData;
  message?: string;
  /**
   * @example
   * 1d33e538-c949-4fcd-83f6-4d57e4b31527
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: EvaluateVideoQualityResponseBodyData,
      message: 'string',
      requestId: 'string',
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

