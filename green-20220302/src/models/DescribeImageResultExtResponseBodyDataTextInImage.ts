// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageResultExtResponseBodyDataTextInImageCustomTexts } from "./DescribeImageResultExtResponseBodyDataTextInImageCustomTexts";


export class DescribeImageResultExtResponseBodyDataTextInImage extends $dara.Model {
  /**
   * @remarks
   * When a custom text library is hit, the custom library ID, custom library name, and custom word are returned.
   */
  customTexts?: DescribeImageResultExtResponseBodyDataTextInImageCustomTexts[];
  /**
   * @remarks
   * Returns the text information in the recognized image.
   */
  ocrDatas?: string[];
  /**
   * @remarks
   * The risk words that are hit. Multiple words are separated by commas (,).
   */
  riskWords?: string[];
  static names(): { [key: string]: string } {
    return {
      customTexts: 'CustomTexts',
      ocrDatas: 'OcrDatas',
      riskWords: 'RiskWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTexts: { 'type': 'array', 'itemType': DescribeImageResultExtResponseBodyDataTextInImageCustomTexts },
      ocrDatas: { 'type': 'array', 'itemType': 'string' },
      riskWords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customTexts)) {
      $dara.Model.validateArray(this.customTexts);
    }
    if(Array.isArray(this.ocrDatas)) {
      $dara.Model.validateArray(this.ocrDatas);
    }
    if(Array.isArray(this.riskWords)) {
      $dara.Model.validateArray(this.riskWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

