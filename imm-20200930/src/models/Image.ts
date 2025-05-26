// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CroppingSuggestion } from "./CroppingSuggestion";
import { ImageScore } from "./ImageScore";
import { OCRContents } from "./Ocrcontents";


export class Image extends $dara.Model {
  croppingSuggestions?: CroppingSuggestion[];
  EXIF?: string;
  imageHeight?: number;
  imageScore?: ImageScore;
  imageWidth?: number;
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

