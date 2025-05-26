// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OCRContents } from "./Ocrcontents";


export class DetectImageTextsResponseBody extends $dara.Model {
  /**
   * @remarks
   * OCR text blocks.
   */
  OCRContents?: OCRContents[];
  /**
   * @remarks
   * The full Optical Character Recognition (OCR) text, which is spliced by using the content of OCRContents.
   */
  OCRTexts?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B3D5E0A-D8B8-4DA0-8127-ED32C851****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OCRContents: 'OCRContents',
      OCRTexts: 'OCRTexts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OCRContents: { 'type': 'array', 'itemType': OCRContents },
      OCRTexts: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.OCRContents)) {
      $dara.Model.validateArray(this.OCRContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

