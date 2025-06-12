// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageModerationResponseBodyDataExtTextInImageCustomText } from "./ImageModerationResponseBodyDataExtTextInImageCustomText";
import { ImageModerationResponseBodyDataExtTextInImageOcrResult } from "./ImageModerationResponseBodyDataExtTextInImageOcrResult";


export class ImageModerationResponseBodyDataExtTextInImage extends $dara.Model {
  /**
   * @remarks
   * When a custom text library is hit, the custom library ID, custom library name, and custom word are returned.
   */
  customText?: ImageModerationResponseBodyDataExtTextInImageCustomText[];
  /**
   * @remarks
   * Returns the text information in the recognized image.
   */
  ocrResult?: ImageModerationResponseBodyDataExtTextInImageOcrResult[];
  /**
   * @remarks
   * The risk words that are hit. Multiple words are separated by commas (,).
   */
  riskWord?: string[];
  static names(): { [key: string]: string } {
    return {
      customText: 'CustomText',
      ocrResult: 'OcrResult',
      riskWord: 'RiskWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customText: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtTextInImageCustomText },
      ocrResult: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtTextInImageOcrResult },
      riskWord: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customText)) {
      $dara.Model.validateArray(this.customText);
    }
    if(Array.isArray(this.ocrResult)) {
      $dara.Model.validateArray(this.ocrResult);
    }
    if(Array.isArray(this.riskWord)) {
      $dara.Model.validateArray(this.riskWord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

