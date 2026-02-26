// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CroppingSuggestion } from "./CroppingSuggestion";
import { ImageScore } from "./ImageScore";
import { OCRContents } from "./Ocrcontents";


export class Image extends $dara.Model {
  /**
   * @remarks
   * The image cropping suggestions. This parameter is reserved and not available.
   */
  croppingSuggestions?: CroppingSuggestion[];
  /**
   * @remarks
   * The original EXIF information about the image. The EXIF information is stored in the serialized JSON format. For more information, see [Query image information](https://help.aliyun.com/document_detail/44975.html).
   * 
   * @example
   * {"FileSize":{"value":"29304"},"Format":{"value":"jpg"}}
   */
  EXIF?: string;
  /**
   * @remarks
   * The height of the image. Unit: pixels.
   * 
   * @example
   * 820
   */
  imageHeight?: number;
  /**
   * @remarks
   * The image scoring information.
   */
  imageScore?: ImageScore;
  /**
   * @remarks
   * The width of the image. Unit: pixels.
   * 
   * @example
   * 500
   */
  imageWidth?: number;
  /**
   * @remarks
   * The results of optical character recognition (OCR). This parameter is reserved and not available.
   */
  OCRContents?: OCRContents[];
  static names(): { [key: string]: string } {
    return {
      croppingSuggestions: 'CroppingSuggestions',
      EXIF: 'EXIF',
      imageHeight: 'ImageHeight',
      imageScore: 'ImageScore',
      imageWidth: 'ImageWidth',
      OCRContents: 'OCRContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      croppingSuggestions: { 'type': 'array', 'itemType': CroppingSuggestion },
      EXIF: 'string',
      imageHeight: 'number',
      imageScore: ImageScore,
      imageWidth: 'number',
      OCRContents: { 'type': 'array', 'itemType': OCRContents },
    };
  }

  validate() {
    if(Array.isArray(this.croppingSuggestions)) {
      $dara.Model.validateArray(this.croppingSuggestions);
    }
    if(this.imageScore && typeof (this.imageScore as any).validate === 'function') {
      (this.imageScore as any).validate();
    }
    if(Array.isArray(this.OCRContents)) {
      $dara.Model.validateArray(this.OCRContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

