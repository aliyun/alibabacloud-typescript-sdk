// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageBatchModerationResponseBodyDataResultsExtTextInImageCustomText } from "./ImageBatchModerationResponseBodyDataResultsExtTextInImageCustomText";
import { ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResult } from "./ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResult";


export class ImageBatchModerationResponseBodyDataResultsExtTextInImage extends $dara.Model {
  /**
   * @remarks
   * When a custom text library is matched, return the custom library ID, custom library name, and custom words.
   */
  customText?: ImageBatchModerationResponseBodyDataResultsExtTextInImageCustomText[];
  /**
   * @remarks
   * Return the text information of each line recognized in the image.
   */
  ocrResult?: ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResult[];
  /**
   * @remarks
   * hit risk keywords
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
      customText: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtTextInImageCustomText },
      ocrResult: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResult },
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

