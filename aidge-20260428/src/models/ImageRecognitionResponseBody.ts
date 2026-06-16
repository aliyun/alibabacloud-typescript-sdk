// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRecognitionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The border pixel information, returned as a comma-separated string.
   * 
   * @example
   * 8,10,0,1,330,330
   */
  borderPixel?: string;
  /**
   * @remarks
   * Indicates whether the non-subject area contains text.
   * 
   * @example
   * true
   */
  noobjCharacter?: boolean;
  /**
   * @remarks
   * Indicates whether the non-subject area contains a logo.
   * 
   * @example
   * false
   */
  noobjLogo?: boolean;
  /**
   * @remarks
   * Indicates whether the non-subject area contains irrelevant pixels or noise.
   * 
   * @example
   * false
   */
  noobjNpx?: boolean;
  /**
   * @remarks
   * Indicates whether the non-subject area contains a watermark.
   * 
   * @example
   * false
   */
  noobjWatermark?: boolean;
  /**
   * @remarks
   * Indicates whether the subject area contains text.
   * 
   * @example
   * true
   */
  objCharacter?: boolean;
  /**
   * @remarks
   * Indicates whether the subject area contains a logo.
   * 
   * @example
   * false
   */
  objLogo?: boolean;
  /**
   * @remarks
   * Indicates whether the subject area contains irrelevant pixels or noise.
   * 
   * @example
   * false
   */
  objNpx?: boolean;
  /**
   * @remarks
   * Indicates whether the subject area contains a watermark.
   * 
   * @example
   * false
   */
  objWatermark?: boolean;
  /**
   * @remarks
   * The product count.
   * 
   * @example
   * 2
   */
  pdNum?: number;
  /**
   * @remarks
   * The product proportion.
   * 
   * @example
   * 74.15%
   */
  pdProp?: string;
  /**
   * @remarks
   * The list of recognized text.
   */
  recText?: string[];
  /**
   * @remarks
   * The text proportion.
   * 
   * @example
   * 7.52%
   */
  textProp?: string;
  /**
   * @remarks
   * The usage information.
   * 
   * @example
   * {"ProcessedImageCount":1}
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      borderPixel: 'BorderPixel',
      noobjCharacter: 'NoobjCharacter',
      noobjLogo: 'NoobjLogo',
      noobjNpx: 'NoobjNpx',
      noobjWatermark: 'NoobjWatermark',
      objCharacter: 'ObjCharacter',
      objLogo: 'ObjLogo',
      objNpx: 'ObjNpx',
      objWatermark: 'ObjWatermark',
      pdNum: 'PdNum',
      pdProp: 'PdProp',
      recText: 'RecText',
      textProp: 'TextProp',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      borderPixel: 'string',
      noobjCharacter: 'boolean',
      noobjLogo: 'boolean',
      noobjNpx: 'boolean',
      noobjWatermark: 'boolean',
      objCharacter: 'boolean',
      objLogo: 'boolean',
      objNpx: 'boolean',
      objWatermark: 'boolean',
      pdNum: 'number',
      pdProp: 'string',
      recText: { 'type': 'array', 'itemType': 'string' },
      textProp: 'string',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.recText)) {
      $dara.Model.validateArray(this.recText);
    }
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageRecognitionResponseBody extends $dara.Model {
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
   * The intelligent element recognition result.
   */
  data?: ImageRecognitionResponseBodyData;
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
   * Id of the request
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
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
      data: ImageRecognitionResponseBodyData,
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

