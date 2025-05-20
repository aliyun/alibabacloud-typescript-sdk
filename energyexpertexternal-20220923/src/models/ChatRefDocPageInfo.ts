// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatRefDocPageInfo extends $dara.Model {
  angle?: number;
  excelParseResult?: string;
  imageHeight?: number;
  imageUrl?: string;
  imageWidth?: number;
  pageIdCurDoc?: number;
  pdfParseResult?: string;
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

