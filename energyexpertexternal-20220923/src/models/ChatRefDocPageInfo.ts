// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatRefDocPageInfo extends $dara.Model {
  /**
   * @remarks
   * The rotation angle of the image after the page is converted to an image.
   * 
   * @example
   * 0.0
   */
  angle?: number;
  /**
   * @remarks
   * Reserved, can be unused for now.
   * 
   * @example
   * null
   */
  excelParseResult?: string;
  /**
   * @remarks
   * The height of the page turns to image.
   * 
   * @example
   * 22
   */
  imageHeight?: number;
  /**
   * @remarks
   * - The image URL after the page is converted to an image. 
   * - Note: The image URL will be inaccessible after 24 hours, so you need to save it promptly.
   * 
   * @example
   * 2
   */
  imageUrl?: string;
  /**
   * @remarks
   * The width of the page turns to image
   * 
   * @example
   * 23
   */
  imageWidth?: number;
  /**
   * @remarks
   * The page index in the current document, starting from 0.
   * 
   * @example
   * 2
   */
  pageIdCurDoc?: number;
  /**
   * @remarks
   * Reserved, can be unused for now.
   * 
   * @example
   * null
   */
  pdfParseResult?: string;
  /**
   * @remarks
   * Reserved, can be unused for now.
   * 
   * @example
   * null
   */
  wordParseResult?: string;
  static names(): { [key: string]: string } {
    return {
      angle: 'angle',
      excelParseResult: 'excelParseResult',
      imageHeight: 'imageHeight',
      imageUrl: 'imageUrl',
      imageWidth: 'imageWidth',
      pageIdCurDoc: 'pageIdCurDoc',
      pdfParseResult: 'pdfParseResult',
      wordParseResult: 'wordParseResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      excelParseResult: 'string',
      imageHeight: 'number',
      imageUrl: 'string',
      imageWidth: 'number',
      pageIdCurDoc: 'number',
      pdfParseResult: 'string',
      wordParseResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

