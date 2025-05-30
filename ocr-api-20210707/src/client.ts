// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';

export class DataSubImagesFigureInfoValueFigureDetailsFigurePoints extends $dara.Model {
  /**
   * @example
   * 100
   */
  x?: number;
  /**
   * @example
   * 200
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSubImagesFigureInfoValueFigureDetailsFigureRect extends $dara.Model {
  /**
   * @example
   * 100
   */
  centerX?: number;
  /**
   * @example
   * 200
   */
  centerY?: number;
  /**
   * @example
   * 50
   */
  width?: number;
  /**
   * @example
   * 50
   */
  height?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      width: 'number',
      height: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSubImagesFigureInfoValueFigureDetails extends $dara.Model {
  /**
   * @example
   * face
   */
  type?: string;
  /**
   * @example
   * “”
   */
  data?: any;
  figurePoints?: DataSubImagesFigureInfoValueFigureDetailsFigurePoints[];
  figureRect?: DataSubImagesFigureInfoValueFigureDetailsFigureRect;
  /**
   * @example
   * 0
   */
  figureAngle?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      data: 'Data',
      figurePoints: 'FigurePoints',
      figureRect: 'FigureRect',
      figureAngle: 'FigureAngle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      data: 'any',
      figurePoints: { 'type': 'array', 'itemType': DataSubImagesFigureInfoValueFigureDetailsFigurePoints },
      figureRect: DataSubImagesFigureInfoValueFigureDetailsFigureRect,
      figureAngle: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.figurePoints)) {
      $dara.Model.validateArray(this.figurePoints);
    }
    if(this.figureRect && typeof (this.figureRect as any).validate === 'function') {
      (this.figureRect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSubImagesKvInfoKvDetailsValueValuePoints extends $dara.Model {
  /**
   * @example
   * 100
   */
  x?: number;
  /**
   * @example
   * 200
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSubImagesKvInfoKvDetailsValueValueRect extends $dara.Model {
  /**
   * @example
   * 100
   */
  centerX?: number;
  /**
   * @example
   * 200
   */
  centerY?: number;
  /**
   * @example
   * 50
   */
  width?: number;
  /**
   * @example
   * 50
   */
  height?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      width: 'number',
      height: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextRequestAdvancedConfig extends $dara.Model {
  /**
   * @example
   * false
   */
  isHandWritingTable?: boolean;
  /**
   * @example
   * false
   */
  isLineLessTable?: boolean;
  /**
   * @example
   * false
   */
  outputCharInfo?: boolean;
  /**
   * @example
   * false
   */
  outputParagraph?: boolean;
  /**
   * @example
   * false
   */
  outputRow?: boolean;
  /**
   * @example
   * false
   */
  outputTable?: boolean;
  /**
   * @example
   * false
   */
  outputTableExcel?: boolean;
  /**
   * @example
   * false
   */
  outputTableHtml?: boolean;
  static names(): { [key: string]: string } {
    return {
      isHandWritingTable: 'IsHandWritingTable',
      isLineLessTable: 'IsLineLessTable',
      outputCharInfo: 'OutputCharInfo',
      outputParagraph: 'OutputParagraph',
      outputRow: 'OutputRow',
      outputTable: 'OutputTable',
      outputTableExcel: 'OutputTableExcel',
      outputTableHtml: 'OutputTableHtml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHandWritingTable: 'boolean',
      isLineLessTable: 'boolean',
      outputCharInfo: 'boolean',
      outputParagraph: 'boolean',
      outputRow: 'boolean',
      outputTable: 'boolean',
      outputTableExcel: 'boolean',
      outputTableHtml: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextRequestIdCardConfig extends $dara.Model {
  llmRec?: boolean;
  /**
   * @example
   * false
   */
  outputIdCardQuality?: boolean;
  static names(): { [key: string]: string } {
    return {
      llmRec: 'Llm_rec',
      outputIdCardQuality: 'OutputIdCardQuality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmRec: 'boolean',
      outputIdCardQuality: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextRequestInternationalBusinessLicenseConfig extends $dara.Model {
  country?: string;
  static names(): { [key: string]: string } {
    return {
      country: 'Country',
    };
  }

  static types(): { [key: string]: any } {
    return {
      country: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextRequestInternationalIdCardConfig extends $dara.Model {
  /**
   * @example
   * India
   */
  country?: string;
  static names(): { [key: string]: string } {
    return {
      country: 'Country',
    };
  }

  static types(): { [key: string]: any } {
    return {
      country: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextRequestMultiLanConfig extends $dara.Model {
  /**
   * @example
   * eng,chn
   */
  languages?: string;
  static names(): { [key: string]: string } {
    return {
      languages: 'Languages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      languages: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextRequestTableConfig extends $dara.Model {
  isHandWritingTable?: boolean;
  isLineLessTable?: boolean;
  outputTableExcel?: boolean;
  outputTableHtml?: boolean;
  static names(): { [key: string]: string } {
    return {
      isHandWritingTable: 'IsHandWritingTable',
      isLineLessTable: 'IsLineLessTable',
      outputTableExcel: 'OutputTableExcel',
      outputTableHtml: 'OutputTableHtml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHandWritingTable: 'boolean',
      isLineLessTable: 'boolean',
      outputTableExcel: 'boolean',
      outputTableHtml: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetailsBarCodePoints extends $dara.Model {
  /**
   * @example
   * 100
   */
  x?: number;
  /**
   * @example
   * 200
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetailsBarCodeRect extends $dara.Model {
  /**
   * @example
   * 100
   */
  centerX?: number;
  /**
   * @example
   * 200
   */
  centerY?: number;
  /**
   * @example
   * 10
   */
  height?: number;
  /**
   * @example
   * 100
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetails extends $dara.Model {
  /**
   * @example
   * 0
   */
  barCodeAngle?: number;
  barCodePoints?: RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetailsBarCodePoints[];
  barCodeRect?: RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetailsBarCodeRect;
  /**
   * @example
   * "1100011XXXXXX"
   */
  data?: any;
  /**
   * @example
   * Code128
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      barCodeAngle: 'BarCodeAngle',
      barCodePoints: 'BarCodePoints',
      barCodeRect: 'BarCodeRect',
      data: 'Data',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barCodeAngle: 'number',
      barCodePoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetailsBarCodePoints },
      barCodeRect: RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetailsBarCodeRect,
      data: 'any',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.barCodePoints)) {
      $dara.Model.validateArray(this.barCodePoints);
    }
    if(this.barCodeRect && typeof (this.barCodeRect as any).validate === 'function') {
      (this.barCodeRect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBarCodeInfo extends $dara.Model {
  /**
   * @example
   * 2
   */
  barCodeCount?: number;
  barCodeDetails?: RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetails[];
  static names(): { [key: string]: string } {
    return {
      barCodeCount: 'BarCodeCount',
      barCodeDetails: 'BarCodeDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barCodeCount: 'number',
      barCodeDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetails },
    };
  }

  validate() {
    if(Array.isArray(this.barCodeDetails)) {
      $dara.Model.validateArray(this.barCodeDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsBlockPoints extends $dara.Model {
  /**
   * @example
   * 100
   */
  x?: number;
  /**
   * @example
   * 200
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsBlockRect extends $dara.Model {
  /**
   * @example
   * 100
   */
  centerX?: number;
  /**
   * @example
   * 200
   */
  centerY?: number;
  /**
   * @example
   * 10
   */
  height?: number;
  /**
   * @example
   * 50
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfosCharPoints extends $dara.Model {
  /**
   * @example
   * 100
   */
  x?: number;
  /**
   * @example
   * 200
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfosCharRect extends $dara.Model {
  /**
   * @example
   * 100
   */
  centerX?: number;
  /**
   * @example
   * 200
   */
  centerY?: number;
  /**
   * @example
   * 10
   */
  height?: number;
  /**
   * @example
   * 10
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfos extends $dara.Model {
  /**
   * @example
   * 95
   */
  charConfidence?: number;
  charContent?: string;
  /**
   * @example
   * 0
   */
  charId?: number;
  charPoints?: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfosCharPoints[];
  charRect?: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfosCharRect;
  static names(): { [key: string]: string } {
    return {
      charConfidence: 'CharConfidence',
      charContent: 'CharContent',
      charId: 'CharId',
      charPoints: 'CharPoints',
      charRect: 'CharRect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charConfidence: 'number',
      charContent: 'string',
      charId: 'number',
      charPoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfosCharPoints },
      charRect: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfosCharRect,
    };
  }

  validate() {
    if(Array.isArray(this.charPoints)) {
      $dara.Model.validateArray(this.charPoints);
    }
    if(this.charRect && typeof (this.charRect as any).validate === 'function') {
      (this.charRect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetails extends $dara.Model {
  /**
   * @example
   * 0
   */
  blockAngle?: number;
  /**
   * @example
   * 98
   */
  blockConfidence?: number;
  blockContent?: string;
  /**
   * @example
   * 0
   */
  blockId?: number;
  blockPoints?: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsBlockPoints[];
  blockRect?: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsBlockRect;
  charInfos?: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfos[];
  static names(): { [key: string]: string } {
    return {
      blockAngle: 'BlockAngle',
      blockConfidence: 'BlockConfidence',
      blockContent: 'BlockContent',
      blockId: 'BlockId',
      blockPoints: 'BlockPoints',
      blockRect: 'BlockRect',
      charInfos: 'CharInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockAngle: 'number',
      blockConfidence: 'number',
      blockContent: 'string',
      blockId: 'number',
      blockPoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsBlockPoints },
      blockRect: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsBlockRect,
      charInfos: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfos },
    };
  }

  validate() {
    if(Array.isArray(this.blockPoints)) {
      $dara.Model.validateArray(this.blockPoints);
    }
    if(this.blockRect && typeof (this.blockRect as any).validate === 'function') {
      (this.blockRect as any).validate();
    }
    if(Array.isArray(this.charInfos)) {
      $dara.Model.validateArray(this.charInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBlockInfo extends $dara.Model {
  /**
   * @example
   * 12
   */
  blockCount?: number;
  blockDetails?: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetails[];
  static names(): { [key: string]: string } {
    return {
      blockCount: 'BlockCount',
      blockDetails: 'BlockDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockCount: 'number',
      blockDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetails },
    };
  }

  validate() {
    if(Array.isArray(this.blockDetails)) {
      $dara.Model.validateArray(this.blockDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesKvInfo extends $dara.Model {
  data?: any;
  /**
   * @example
   * 6
   */
  kvCount?: number;
  kvDetails?: { [key: string]: DataSubImagesKvInfoKvDetailsValue };
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      kvCount: 'KvCount',
      kvDetails: 'KvDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      kvCount: 'number',
      kvDetails: { 'type': 'map', 'keyType': 'string', 'valueType': DataSubImagesKvInfoKvDetailsValue },
    };
  }

  validate() {
    if(this.kvDetails) {
      $dara.Model.validateMap(this.kvDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesParagraphInfoParagraphDetails extends $dara.Model {
  blockList?: number[];
  paragraphContent?: string;
  /**
   * @example
   * 0
   */
  paragraphId?: number;
  static names(): { [key: string]: string } {
    return {
      blockList: 'BlockList',
      paragraphContent: 'ParagraphContent',
      paragraphId: 'ParagraphId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockList: { 'type': 'array', 'itemType': 'number' },
      paragraphContent: 'string',
      paragraphId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.blockList)) {
      $dara.Model.validateArray(this.blockList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesParagraphInfo extends $dara.Model {
  /**
   * @example
   * 11
   */
  paragraphCount?: number;
  paragraphDetails?: RecognizeAllTextResponseBodyDataSubImagesParagraphInfoParagraphDetails[];
  static names(): { [key: string]: string } {
    return {
      paragraphCount: 'ParagraphCount',
      paragraphDetails: 'ParagraphDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paragraphCount: 'number',
      paragraphDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesParagraphInfoParagraphDetails },
    };
  }

  validate() {
    if(Array.isArray(this.paragraphDetails)) {
      $dara.Model.validateArray(this.paragraphDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetailsQrCodePoints extends $dara.Model {
  /**
   * @example
   * 100
   */
  x?: number;
  /**
   * @example
   * 200
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetailsQrCodeRect extends $dara.Model {
  /**
   * @example
   * 100
   */
  centerX?: number;
  /**
   * @example
   * 200
   */
  centerY?: number;
  /**
   * @example
   * 100
   */
  height?: number;
  /**
   * @example
   * 100
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetails extends $dara.Model {
  /**
   * @example
   * “http://www.gsxt.gov.cn/indeXXX”
   */
  data?: any;
  /**
   * @example
   * 0
   */
  qrCodeAngle?: number;
  qrCodePoints?: RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetailsQrCodePoints[];
  qrCodeRect?: RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetailsQrCodeRect;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      qrCodeAngle: 'QrCodeAngle',
      qrCodePoints: 'QrCodePoints',
      qrCodeRect: 'QrCodeRect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      qrCodeAngle: 'number',
      qrCodePoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetailsQrCodePoints },
      qrCodeRect: RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetailsQrCodeRect,
    };
  }

  validate() {
    if(Array.isArray(this.qrCodePoints)) {
      $dara.Model.validateArray(this.qrCodePoints);
    }
    if(this.qrCodeRect && typeof (this.qrCodeRect as any).validate === 'function') {
      (this.qrCodeRect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesQrCodeInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  qrCodeCount?: number;
  qrCodeDetails?: RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetails[];
  static names(): { [key: string]: string } {
    return {
      qrCodeCount: 'QrCodeCount',
      qrCodeDetails: 'QrCodeDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qrCodeCount: 'number',
      qrCodeDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetails },
    };
  }

  validate() {
    if(Array.isArray(this.qrCodeDetails)) {
      $dara.Model.validateArray(this.qrCodeDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesQualityInfo extends $dara.Model {
  /**
   * @example
   * 90.5
   */
  completenessScore?: number;
  /**
   * @example
   * false
   */
  isCopy?: boolean;
  /**
   * @example
   * false
   */
  isReshoot?: boolean;
  /**
   * @example
   * 80.5
   */
  qualityScore?: number;
  /**
   * @example
   * 10.5
   */
  tamperScore?: number;
  static names(): { [key: string]: string } {
    return {
      completenessScore: 'CompletenessScore',
      isCopy: 'IsCopy',
      isReshoot: 'IsReshoot',
      qualityScore: 'QualityScore',
      tamperScore: 'TamperScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completenessScore: 'number',
      isCopy: 'boolean',
      isReshoot: 'boolean',
      qualityScore: 'number',
      tamperScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesRowInfoRowDetails extends $dara.Model {
  blockList?: number[];
  rowContent?: string;
  /**
   * @example
   * 0
   */
  rowId?: number;
  static names(): { [key: string]: string } {
    return {
      blockList: 'BlockList',
      rowContent: 'RowContent',
      rowId: 'RowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockList: { 'type': 'array', 'itemType': 'number' },
      rowContent: 'string',
      rowId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.blockList)) {
      $dara.Model.validateArray(this.blockList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesRowInfo extends $dara.Model {
  /**
   * @example
   * 9
   */
  rowCount?: number;
  rowDetails?: RecognizeAllTextResponseBodyDataSubImagesRowInfoRowDetails[];
  static names(): { [key: string]: string } {
    return {
      rowCount: 'RowCount',
      rowDetails: 'RowDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowCount: 'number',
      rowDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesRowInfoRowDetails },
    };
  }

  validate() {
    if(Array.isArray(this.rowDetails)) {
      $dara.Model.validateArray(this.rowDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsData extends $dara.Model {
  /**
   * @example
   * "3205823XXXXXX"
   */
  antiFakeCode?: string;
  /**
   * @example
   * "XXX"
   */
  companyId?: string;
  organizationName?: string;
  /**
   * @example
   * ""
   */
  organizationNameEng?: string;
  /**
   * @example
   * "3205823XXXXXX"
   */
  otherText?: string;
  /**
   * @example
   * ""
   */
  taxpayerId?: string;
  topText?: string;
  static names(): { [key: string]: string } {
    return {
      antiFakeCode: 'AntiFakeCode',
      companyId: 'CompanyId',
      organizationName: 'OrganizationName',
      organizationNameEng: 'OrganizationNameEng',
      otherText: 'OtherText',
      taxpayerId: 'TaxpayerId',
      topText: 'TopText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiFakeCode: 'string',
      companyId: 'string',
      organizationName: 'string',
      organizationNameEng: 'string',
      otherText: 'string',
      taxpayerId: 'string',
      topText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsStampPoints extends $dara.Model {
  /**
   * @example
   * 100
   */
  x?: number;
  /**
   * @example
   * 200
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsStampRect extends $dara.Model {
  /**
   * @example
   * 100
   */
  centerX?: number;
  /**
   * @example
   * 200
   */
  centerY?: number;
  /**
   * @example
   * 50
   */
  height?: number;
  /**
   * @example
   * 50
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetails extends $dara.Model {
  data?: RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsData;
  /**
   * @example
   * 0
   */
  stampAngle?: number;
  stampPoints?: RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsStampPoints[];
  stampRect?: RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsStampRect;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      stampAngle: 'StampAngle',
      stampPoints: 'StampPoints',
      stampRect: 'StampRect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsData,
      stampAngle: 'number',
      stampPoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsStampPoints },
      stampRect: RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsStampRect,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.stampPoints)) {
      $dara.Model.validateArray(this.stampPoints);
    }
    if(this.stampRect && typeof (this.stampRect as any).validate === 'function') {
      (this.stampRect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesStampInfo extends $dara.Model {
  /**
   * @example
   * 2
   */
  stampCount?: number;
  stampDetails?: RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetails[];
  static names(): { [key: string]: string } {
    return {
      stampCount: 'StampCount',
      stampDetails: 'StampDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stampCount: 'number',
      stampDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetails },
    };
  }

  validate() {
    if(Array.isArray(this.stampDetails)) {
      $dara.Model.validateArray(this.stampDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesSubImagePoints extends $dara.Model {
  /**
   * @example
   * 100
   */
  x?: number;
  /**
   * @example
   * 200
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesSubImageRect extends $dara.Model {
  /**
   * @example
   * 100
   */
  centerX?: number;
  /**
   * @example
   * 200
   */
  centerY?: number;
  /**
   * @example
   * 2000
   */
  height?: number;
  /**
   * @example
   * 1000
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetailsCellPoints extends $dara.Model {
  /**
   * @example
   * 100
   */
  x?: number;
  /**
   * @example
   * 200
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetailsCellRect extends $dara.Model {
  /**
   * @example
   * 100
   */
  centerX?: number;
  /**
   * @example
   * 200
   */
  centerY?: number;
  /**
   * @example
   * 20
   */
  height?: number;
  /**
   * @example
   * 20
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetails extends $dara.Model {
  blockList?: number[];
  /**
   * @example
   * 0
   */
  cellAngle?: number;
  cellContent?: string;
  /**
   * @example
   * 0
   */
  cellId?: number;
  cellPoints?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetailsCellPoints[];
  cellRect?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetailsCellRect;
  /**
   * @example
   * 5
   */
  columnEnd?: number;
  /**
   * @example
   * 2
   */
  columnStart?: number;
  /**
   * @example
   * 0
   */
  rowEnd?: number;
  /**
   * @example
   * 0
   */
  rowStart?: number;
  static names(): { [key: string]: string } {
    return {
      blockList: 'BlockList',
      cellAngle: 'CellAngle',
      cellContent: 'CellContent',
      cellId: 'CellId',
      cellPoints: 'CellPoints',
      cellRect: 'CellRect',
      columnEnd: 'ColumnEnd',
      columnStart: 'ColumnStart',
      rowEnd: 'RowEnd',
      rowStart: 'RowStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockList: { 'type': 'array', 'itemType': 'number' },
      cellAngle: 'number',
      cellContent: 'string',
      cellId: 'number',
      cellPoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetailsCellPoints },
      cellRect: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetailsCellRect,
      columnEnd: 'number',
      columnStart: 'number',
      rowEnd: 'number',
      rowStart: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.blockList)) {
      $dara.Model.validateArray(this.blockList);
    }
    if(Array.isArray(this.cellPoints)) {
      $dara.Model.validateArray(this.cellPoints);
    }
    if(this.cellRect && typeof (this.cellRect as any).validate === 'function') {
      (this.cellRect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsFooter extends $dara.Model {
  /**
   * @example
   * 0
   */
  blockId?: number;
  contents?: string[];
  static names(): { [key: string]: string } {
    return {
      blockId: 'BlockId',
      contents: 'Contents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockId: 'number',
      contents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsHeader extends $dara.Model {
  /**
   * @example
   * 0
   */
  blockId?: number;
  contents?: string[];
  static names(): { [key: string]: string } {
    return {
      blockId: 'BlockId',
      contents: 'Contents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockId: 'number',
      contents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsTablePoints extends $dara.Model {
  /**
   * @example
   * 100
   */
  x?: number;
  /**
   * @example
   * 200
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsTableRect extends $dara.Model {
  /**
   * @example
   * 100
   */
  centerX?: number;
  /**
   * @example
   * 200
   */
  centerY?: number;
  /**
   * @example
   * 100
   */
  height?: number;
  /**
   * @example
   * 100
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetails extends $dara.Model {
  /**
   * @example
   * 29
   */
  cellCount?: number;
  cellDetails?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetails[];
  /**
   * @example
   * 3
   */
  columnCount?: number;
  footer?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsFooter;
  header?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsHeader;
  /**
   * @example
   * 10
   */
  rowCount?: number;
  /**
   * @example
   * 0
   */
  tableId?: number;
  tablePoints?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsTablePoints[];
  tableRect?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsTableRect;
  static names(): { [key: string]: string } {
    return {
      cellCount: 'CellCount',
      cellDetails: 'CellDetails',
      columnCount: 'ColumnCount',
      footer: 'Footer',
      header: 'Header',
      rowCount: 'RowCount',
      tableId: 'TableId',
      tablePoints: 'TablePoints',
      tableRect: 'TableRect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cellCount: 'number',
      cellDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetails },
      columnCount: 'number',
      footer: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsFooter,
      header: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsHeader,
      rowCount: 'number',
      tableId: 'number',
      tablePoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsTablePoints },
      tableRect: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsTableRect,
    };
  }

  validate() {
    if(Array.isArray(this.cellDetails)) {
      $dara.Model.validateArray(this.cellDetails);
    }
    if(this.footer && typeof (this.footer as any).validate === 'function') {
      (this.footer as any).validate();
    }
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(Array.isArray(this.tablePoints)) {
      $dara.Model.validateArray(this.tablePoints);
    }
    if(this.tableRect && typeof (this.tableRect as any).validate === 'function') {
      (this.tableRect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfo extends $dara.Model {
  /**
   * @example
   * 2
   */
  tableCount?: number;
  tableDetails?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetails[];
  /**
   * @example
   * https://example.xlsx
   */
  tableExcel?: string;
  /**
   * @example
   * https://example.html
   */
  tableHtml?: string;
  static names(): { [key: string]: string } {
    return {
      tableCount: 'TableCount',
      tableDetails: 'TableDetails',
      tableExcel: 'TableExcel',
      tableHtml: 'TableHtml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableCount: 'number',
      tableDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetails },
      tableExcel: 'string',
      tableHtml: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tableDetails)) {
      $dara.Model.validateArray(this.tableDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImages extends $dara.Model {
  /**
   * @example
   * 0
   */
  angle?: number;
  barCodeInfo?: RecognizeAllTextResponseBodyDataSubImagesBarCodeInfo;
  blockInfo?: RecognizeAllTextResponseBodyDataSubImagesBlockInfo;
  figureInfo?: { [key: string]: DataSubImagesFigureInfoValue };
  kvInfo?: RecognizeAllTextResponseBodyDataSubImagesKvInfo;
  paragraphInfo?: RecognizeAllTextResponseBodyDataSubImagesParagraphInfo;
  qrCodeInfo?: RecognizeAllTextResponseBodyDataSubImagesQrCodeInfo;
  qualityInfo?: RecognizeAllTextResponseBodyDataSubImagesQualityInfo;
  rowInfo?: RecognizeAllTextResponseBodyDataSubImagesRowInfo;
  stampInfo?: RecognizeAllTextResponseBodyDataSubImagesStampInfo;
  /**
   * @example
   * 0
   */
  subImageId?: number;
  subImagePoints?: RecognizeAllTextResponseBodyDataSubImagesSubImagePoints[];
  subImageRect?: RecognizeAllTextResponseBodyDataSubImagesSubImageRect;
  tableInfo?: RecognizeAllTextResponseBodyDataSubImagesTableInfo;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      barCodeInfo: 'BarCodeInfo',
      blockInfo: 'BlockInfo',
      figureInfo: 'FigureInfo',
      kvInfo: 'KvInfo',
      paragraphInfo: 'ParagraphInfo',
      qrCodeInfo: 'QrCodeInfo',
      qualityInfo: 'QualityInfo',
      rowInfo: 'RowInfo',
      stampInfo: 'StampInfo',
      subImageId: 'SubImageId',
      subImagePoints: 'SubImagePoints',
      subImageRect: 'SubImageRect',
      tableInfo: 'TableInfo',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      barCodeInfo: RecognizeAllTextResponseBodyDataSubImagesBarCodeInfo,
      blockInfo: RecognizeAllTextResponseBodyDataSubImagesBlockInfo,
      figureInfo: { 'type': 'map', 'keyType': 'string', 'valueType': DataSubImagesFigureInfoValue },
      kvInfo: RecognizeAllTextResponseBodyDataSubImagesKvInfo,
      paragraphInfo: RecognizeAllTextResponseBodyDataSubImagesParagraphInfo,
      qrCodeInfo: RecognizeAllTextResponseBodyDataSubImagesQrCodeInfo,
      qualityInfo: RecognizeAllTextResponseBodyDataSubImagesQualityInfo,
      rowInfo: RecognizeAllTextResponseBodyDataSubImagesRowInfo,
      stampInfo: RecognizeAllTextResponseBodyDataSubImagesStampInfo,
      subImageId: 'number',
      subImagePoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesSubImagePoints },
      subImageRect: RecognizeAllTextResponseBodyDataSubImagesSubImageRect,
      tableInfo: RecognizeAllTextResponseBodyDataSubImagesTableInfo,
      type: 'string',
    };
  }

  validate() {
    if(this.barCodeInfo && typeof (this.barCodeInfo as any).validate === 'function') {
      (this.barCodeInfo as any).validate();
    }
    if(this.blockInfo && typeof (this.blockInfo as any).validate === 'function') {
      (this.blockInfo as any).validate();
    }
    if(this.figureInfo) {
      $dara.Model.validateMap(this.figureInfo);
    }
    if(this.kvInfo && typeof (this.kvInfo as any).validate === 'function') {
      (this.kvInfo as any).validate();
    }
    if(this.paragraphInfo && typeof (this.paragraphInfo as any).validate === 'function') {
      (this.paragraphInfo as any).validate();
    }
    if(this.qrCodeInfo && typeof (this.qrCodeInfo as any).validate === 'function') {
      (this.qrCodeInfo as any).validate();
    }
    if(this.qualityInfo && typeof (this.qualityInfo as any).validate === 'function') {
      (this.qualityInfo as any).validate();
    }
    if(this.rowInfo && typeof (this.rowInfo as any).validate === 'function') {
      (this.rowInfo as any).validate();
    }
    if(this.stampInfo && typeof (this.stampInfo as any).validate === 'function') {
      (this.stampInfo as any).validate();
    }
    if(Array.isArray(this.subImagePoints)) {
      $dara.Model.validateArray(this.subImagePoints);
    }
    if(this.subImageRect && typeof (this.subImageRect as any).validate === 'function') {
      (this.subImageRect as any).validate();
    }
    if(this.tableInfo && typeof (this.tableInfo as any).validate === 'function') {
      (this.tableInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyData extends $dara.Model {
  algoServer?: string[];
  /**
   * @example
   * ""
   */
  algoVersion?: string;
  content?: string;
  /**
   * @example
   * ""
   */
  debugInfo?: any;
  /**
   * @example
   * 2000
   */
  height?: number;
  /**
   * @example
   * false
   */
  isMixedMode?: boolean;
  /**
   * @example
   * https://example.xlsx
   */
  kvExcelUrl?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 2
   */
  subImageCount?: number;
  subImages?: RecognizeAllTextResponseBodyDataSubImages[];
  /**
   * @example
   * 1000
   */
  width?: number;
  /**
   * @example
   * ""
   */
  xmlResult?: string;
  static names(): { [key: string]: string } {
    return {
      algoServer: 'AlgoServer',
      algoVersion: 'AlgoVersion',
      content: 'Content',
      debugInfo: 'DebugInfo',
      height: 'Height',
      isMixedMode: 'IsMixedMode',
      kvExcelUrl: 'KvExcelUrl',
      pageNo: 'PageNo',
      subImageCount: 'SubImageCount',
      subImages: 'SubImages',
      width: 'Width',
      xmlResult: 'XmlResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoServer: { 'type': 'array', 'itemType': 'string' },
      algoVersion: 'string',
      content: 'string',
      debugInfo: 'any',
      height: 'number',
      isMixedMode: 'boolean',
      kvExcelUrl: 'string',
      pageNo: 'number',
      subImageCount: 'number',
      subImages: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImages },
      width: 'number',
      xmlResult: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.algoServer)) {
      $dara.Model.validateArray(this.algoServer);
    }
    if(Array.isArray(this.subImages)) {
      $dara.Model.validateArray(this.subImages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralStructureResponseBodyDataSubImagesKvInfo extends $dara.Model {
  data?: any;
  /**
   * @example
   * 6
   */
  kvCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      kvCount: 'KvCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      kvCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralStructureResponseBodyDataSubImages extends $dara.Model {
  /**
   * @example
   * 0
   */
  angle?: number;
  kvInfo?: RecognizeGeneralStructureResponseBodyDataSubImagesKvInfo;
  /**
   * @example
   * 0
   */
  subImageId?: number;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      kvInfo: 'KvInfo',
      subImageId: 'SubImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      kvInfo: RecognizeGeneralStructureResponseBodyDataSubImagesKvInfo,
      subImageId: 'number',
    };
  }

  validate() {
    if(this.kvInfo && typeof (this.kvInfo as any).validate === 'function') {
      (this.kvInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralStructureResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2000
   */
  height?: number;
  /**
   * @example
   * 1
   */
  subImageCount?: number;
  subImages?: RecognizeGeneralStructureResponseBodyDataSubImages[];
  /**
   * @example
   * 1000
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      subImageCount: 'SubImageCount',
      subImages: 'SubImages',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      subImageCount: 'number',
      subImages: { 'type': 'array', 'itemType': RecognizeGeneralStructureResponseBodyDataSubImages },
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.subImages)) {
      $dara.Model.validateArray(this.subImages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSubImagesFigureInfoValue extends $dara.Model {
  /**
   * @example
   * 3
   */
  figureCount?: number;
  figureDetails?: DataSubImagesFigureInfoValueFigureDetails[];
  static names(): { [key: string]: string } {
    return {
      figureCount: 'FigureCount',
      figureDetails: 'FigureDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureCount: 'number',
      figureDetails: { 'type': 'array', 'itemType': DataSubImagesFigureInfoValueFigureDetails },
    };
  }

  validate() {
    if(Array.isArray(this.figureDetails)) {
      $dara.Model.validateArray(this.figureDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSubImagesKvInfoKvDetailsValue extends $dara.Model {
  /**
   * @example
   * "address"
   */
  keyName?: string;
  /**
   * @example
   * 100
   */
  keyConfidence?: number;
  value?: string;
  /**
   * @example
   * 98
   */
  valueConfidence?: number;
  valuePoints?: DataSubImagesKvInfoKvDetailsValueValuePoints[];
  valueRect?: DataSubImagesKvInfoKvDetailsValueValueRect;
  /**
   * @example
   * 0
   */
  valueAngle?: number;
  static names(): { [key: string]: string } {
    return {
      keyName: 'KeyName',
      keyConfidence: 'KeyConfidence',
      value: 'Value',
      valueConfidence: 'ValueConfidence',
      valuePoints: 'ValuePoints',
      valueRect: 'ValueRect',
      valueAngle: 'ValueAngle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyName: 'string',
      keyConfidence: 'number',
      value: 'string',
      valueConfidence: 'number',
      valuePoints: { 'type': 'array', 'itemType': DataSubImagesKvInfoKvDetailsValueValuePoints },
      valueRect: DataSubImagesKvInfoKvDetailsValueValueRect,
      valueAngle: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.valuePoints)) {
      $dara.Model.validateArray(this.valuePoints);
    }
    if(this.valueRect && typeof (this.valueRect as any).validate === 'function') {
      (this.valueRect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAdvancedRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  needRotate?: boolean;
  /**
   * @example
   * false
   */
  needSortPage?: boolean;
  /**
   * @example
   * false
   */
  noStamp?: boolean;
  /**
   * @example
   * false
   */
  outputCharInfo?: boolean;
  /**
   * @example
   * false
   */
  outputFigure?: boolean;
  /**
   * @example
   * false
   */
  outputTable?: boolean;
  /**
   * @example
   * false
   */
  paragraph?: boolean;
  /**
   * @example
   * false
   */
  row?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      needSortPage: 'NeedSortPage',
      noStamp: 'NoStamp',
      outputCharInfo: 'OutputCharInfo',
      outputFigure: 'OutputFigure',
      outputTable: 'OutputTable',
      paragraph: 'Paragraph',
      row: 'Row',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      needSortPage: 'boolean',
      noStamp: 'boolean',
      outputCharInfo: 'boolean',
      outputFigure: 'boolean',
      outputTable: 'boolean',
      paragraph: 'boolean',
      row: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAdvancedResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * { 	"content": "2017年河北区实验小学", 	"height": 3509, 	"orgHeight": 3509, 	"orgWidth": 2512, 	"prism_version": "1.0.9", 	"prism_wnum": 126, 	"prism_wordsInfo": [{ 		"angle": -89, 		"direction": 0, 		"height": 541, 		"pos": [{ 			"x": 982, 			"y": 223 		}, { 			"x": 1522, 			"y": 223 		}, { 			"x": 1522, 			"y": 266 		}, { 			"x": 982, 			"y": 266 		}], 		"prob": 99, 		"width": 43, 		"word": "2017年河北区实验小学", 		"x": 1230, 		"y": -26 	}], 	"width": 2512 }
   */
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAdvancedResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeAdvancedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeAdvancedResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAirItineraryRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1hBCIcBr0gK0jSZFnXXbRRXXa-1833-785.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAirItineraryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAirItineraryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeAirItineraryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeAirItineraryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextRequest extends $dara.Model {
  advancedConfig?: RecognizeAllTextRequestAdvancedConfig;
  idCardConfig?: RecognizeAllTextRequestIdCardConfig;
  internationalBusinessLicenseConfig?: RecognizeAllTextRequestInternationalBusinessLicenseConfig;
  internationalIdCardConfig?: RecognizeAllTextRequestInternationalIdCardConfig;
  multiLanConfig?: RecognizeAllTextRequestMultiLanConfig;
  /**
   * @example
   * false
   */
  outputBarCode?: boolean;
  /**
   * @example
   * false
   */
  outputCoordinate?: string;
  /**
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  outputFigure?: boolean;
  /**
   * @example
   * false
   */
  outputKVExcel?: boolean;
  /**
   * @example
   * false
   */
  outputOricoord?: boolean;
  /**
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  outputQrcode?: boolean;
  /**
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  outputStamp?: boolean;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  tableConfig?: RecognizeAllTextRequestTableConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Advanced
   */
  type?: string;
  /**
   * @example
   * https://example.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      advancedConfig: 'AdvancedConfig',
      idCardConfig: 'IdCardConfig',
      internationalBusinessLicenseConfig: 'InternationalBusinessLicenseConfig',
      internationalIdCardConfig: 'InternationalIdCardConfig',
      multiLanConfig: 'MultiLanConfig',
      outputBarCode: 'OutputBarCode',
      outputCoordinate: 'OutputCoordinate',
      outputFigure: 'OutputFigure',
      outputKVExcel: 'OutputKVExcel',
      outputOricoord: 'OutputOricoord',
      outputQrcode: 'OutputQrcode',
      outputStamp: 'OutputStamp',
      pageNo: 'PageNo',
      tableConfig: 'TableConfig',
      type: 'Type',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedConfig: RecognizeAllTextRequestAdvancedConfig,
      idCardConfig: RecognizeAllTextRequestIdCardConfig,
      internationalBusinessLicenseConfig: RecognizeAllTextRequestInternationalBusinessLicenseConfig,
      internationalIdCardConfig: RecognizeAllTextRequestInternationalIdCardConfig,
      multiLanConfig: RecognizeAllTextRequestMultiLanConfig,
      outputBarCode: 'boolean',
      outputCoordinate: 'string',
      outputFigure: 'boolean',
      outputKVExcel: 'boolean',
      outputOricoord: 'boolean',
      outputQrcode: 'boolean',
      outputStamp: 'boolean',
      pageNo: 'number',
      tableConfig: RecognizeAllTextRequestTableConfig,
      type: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    if(this.advancedConfig && typeof (this.advancedConfig as any).validate === 'function') {
      (this.advancedConfig as any).validate();
    }
    if(this.idCardConfig && typeof (this.idCardConfig as any).validate === 'function') {
      (this.idCardConfig as any).validate();
    }
    if(this.internationalBusinessLicenseConfig && typeof (this.internationalBusinessLicenseConfig as any).validate === 'function') {
      (this.internationalBusinessLicenseConfig as any).validate();
    }
    if(this.internationalIdCardConfig && typeof (this.internationalIdCardConfig as any).validate === 'function') {
      (this.internationalIdCardConfig as any).validate();
    }
    if(this.multiLanConfig && typeof (this.multiLanConfig as any).validate === 'function') {
      (this.multiLanConfig as any).validate();
    }
    if(this.tableConfig && typeof (this.tableConfig as any).validate === 'function') {
      (this.tableConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextShrinkRequest extends $dara.Model {
  advancedConfigShrink?: string;
  idCardConfigShrink?: string;
  internationalBusinessLicenseConfigShrink?: string;
  internationalIdCardConfigShrink?: string;
  multiLanConfigShrink?: string;
  /**
   * @example
   * false
   */
  outputBarCode?: boolean;
  /**
   * @example
   * false
   */
  outputCoordinate?: string;
  /**
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  outputFigure?: boolean;
  /**
   * @example
   * false
   */
  outputKVExcel?: boolean;
  /**
   * @example
   * false
   */
  outputOricoord?: boolean;
  /**
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  outputQrcode?: boolean;
  /**
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  outputStamp?: boolean;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  tableConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Advanced
   */
  type?: string;
  /**
   * @example
   * https://example.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      advancedConfigShrink: 'AdvancedConfig',
      idCardConfigShrink: 'IdCardConfig',
      internationalBusinessLicenseConfigShrink: 'InternationalBusinessLicenseConfig',
      internationalIdCardConfigShrink: 'InternationalIdCardConfig',
      multiLanConfigShrink: 'MultiLanConfig',
      outputBarCode: 'OutputBarCode',
      outputCoordinate: 'OutputCoordinate',
      outputFigure: 'OutputFigure',
      outputKVExcel: 'OutputKVExcel',
      outputOricoord: 'OutputOricoord',
      outputQrcode: 'OutputQrcode',
      outputStamp: 'OutputStamp',
      pageNo: 'PageNo',
      tableConfigShrink: 'TableConfig',
      type: 'Type',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedConfigShrink: 'string',
      idCardConfigShrink: 'string',
      internationalBusinessLicenseConfigShrink: 'string',
      internationalIdCardConfigShrink: 'string',
      multiLanConfigShrink: 'string',
      outputBarCode: 'boolean',
      outputCoordinate: 'string',
      outputFigure: 'boolean',
      outputKVExcel: 'boolean',
      outputOricoord: 'boolean',
      outputQrcode: 'boolean',
      outputStamp: 'boolean',
      pageNo: 'number',
      tableConfigShrink: 'string',
      type: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBody extends $dara.Model {
  /**
   * @example
   * 400
   */
  code?: string;
  data?: RecognizeAllTextResponseBodyData;
  /**
   * @example
   * illegalImageUrl
   */
  message?: string;
  /**
   * @example
   * E2A98925-DC2C-18FB-995F-BAF507XXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RecognizeAllTextResponseBodyData,
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

export class RecognizeAllTextResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeAllTextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeAllTextResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAcceptanceRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/imgextra/i1/O1CN016eNk0d1ubhKP4y6gK_!!6000000006056-2-tps-631-570.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAcceptanceResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"data": {"出票日期": "2021-03-31", "到期日期": "2021-06-30", "票据状态": "提示收票已签收", "票据号码": "1306595000098202103", "出票人全称": "广东格林精密部件股份有限公司", "出票人账号": "9550880016631800646", "出票人开户银行": "广发银行股份有限公司惠州江北支行", "收票人全称": "限公司", "收票人账号": "2008022009200267322", "收票人开户银行": "中国工商银行惠州仲恺高新区支行", "票据金额大写": "贰拾万捌仟捌佰肆拾伍元整", "票据金额小写": "208845.00", "承兑人全称": "广发银行股份有限公司惠州江北支行", "承兑人账号": "", "承兑人开户行行号": "306595000098", "承兑人开户行名称": "广发银行股份有限公司惠州江北支行", "交易合同号": "", "能否转让": "可转让", "承兑日期": "2021-03-31"}, "ftype": 0, "height": 570, "orgHeight": 570, "orgWidth": 631, "prism_keyValueInfo": [{"key": "出票日期", "keyProb": 100, "value": "2021-03-31", "valuePos": [{"x": 148, "y": 37}, {"x": 148, "y": 48}, {"x": 86, "y": 48}, {"x": 86, "y": 37}], "valueProb": 100}, {"key": "到期日期", "keyProb": 100, "value": "2021-06-30", "valuePos": [{"x": 150, "y": 54}, {"x": 150, "y": 66}, {"x": 86, "y": 66}, {"x": 86, "y": 54}], "valueProb": 100}, {"key": "票据状态", "keyProb": 100, "value": "提示收票已签收", "valuePos": [{"x": 466, "y": 35}, {"x": 466, "y": 50}, {"x": 379, "y": 50}, {"x": 379, "y": 35}], "valueProb": 100}, {"key": "票据号码", "keyProb": 96, "value": "1306595000098202103", "valuePos": [{"x": 509, "y": 55}, {"x": 509, "y": 66}, {"x": 379, "y": 66}, {"x": 379, "y": 54}], "valueProb": 96}, {"key": "出票人全称", "keyProb": 100, "value": "广东格林精密部件股份有限公司", "valuePos": [{"x": 274, "y": 73}, {"x": 274, "y": 88}, {"x": 102, "y": 88}, {"x": 102, "y": 73}], "valueProb": 100}, {"key": "出票人账号", "keyProb": 97, "value": "9550880016631800646", "valuePos": [{"x": 220, "y": 94}, {"x": 220, "y": 106}, {"x": 104, "y": 106}, {"x": 104, "y": 94}], "valueProb": 97}, {"key": "出票人开户银行", "keyProb": 100, "value": "广发银行股份有限公司惠州江北支行", "valuePos": [{"x": 297, "y": 119}, {"x": 297, "y": 134}, {"x": 105, "y": 134}, {"x": 105, "y": 118}], "valueProb": 100}, {"key": "收票人全称", "keyProb": 100, "value": "限公司", "valuePos": [{"x": 548, "y": 75}, {"x": 588, "y": 74}, {"x": 589, "y": 86}, {"x": 548, "y": 88}], "valueProb": 100}, {"key": "收票人账号", "keyProb": 99, "value": "2008022009200267322", "valuePos": [{"x": 536, "y": 96}, {"x": 536, "y": 106}, {"x": 418, "y": 106}, {"x": 418, "y": 96}], "valueProb": 99}, {"key": "收票人开户银行", "keyProb": 100, "value": "中国工商银行惠州仲恺高新区支行", "valuePos": [{"x": 585, "y": 111}, {"x": 586, "y": 136}, {"x": 420, "y": 137}, {"x": 419, "y": 113}], "valueProb": 100}, {"key": "票据金额大写", "keyProb": 100, "value": "贰拾万捌仟捌佰肆拾伍元整", "valuePos": [{"x": 299, "y": 162}, {"x": 299, "y": 178}, {"x": 152, "y": 178}, {"x": 152, "y": 162}], "valueProb": 100}, {"key": "票据金额小写", "keyProb": 100, "value": "208845.00", "valuePos": [{"x": 299, "y": 162}, {"x": 299, "y": 178}, {"x": 152, "y": 178}, {"x": 152, "y": 162}], "valueProb": 100}, {"key": "承兑人全称", "keyProb": 100, "value": "广发银行股份有限公司惠州江北支行", "valuePos": [{"x": 309, "y": 208}, {"x": 309, "y": 234}, {"x": 178, "y": 234}, {"x": 178, "y": 208}], "valueProb": 100}, {"key": "承兑人账号", "keyProb": 98, "value": "", "valuePos": [{"x": 187, "y": 247}, {"x": 187, "y": 258}, {"x": 180, "y": 258}, {"x": 180, "y": 247}], "valueProb": 98}, {"key": "承兑人开户行行号", "keyProb": 100, "value": "306595000098", "valuePos": [{"x": 493, "y": 216}, {"x": 493, "y": 227}, {"x": 420, "y": 227}, {"x": 420, "y": 216}], "valueProb": 100}, {"key": "承兑人开户行名称", "keyProb": 100, "value": "广发银行股份有限公司惠州江北支行", "valuePos": [{"x": 419, "y": 239}, {"x": 586, "y": 239}, {"x": 586, "y": 264}, {"x": 419, "y": 264}], "valueProb": 100}, {"key": "交易合同号", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "能否转让", "keyProb": 100, "value": "可转让", "valuePos": [{"x": 143, "y": 307}, {"x": 143, "y": 322}, {"x": 105, "y": 322}, {"x": 105, "y": 307}], "valueProb": 100}, {"key": "承兑日期", "keyProb": 100, "value": "2021-03-31", "valuePos": [{"x": 404, "y": 314}, {"x": 465, "y": 314}, {"x": 465, "y": 326}, {"x": 404, "y": 326}], "valueProb": 100}], "sliceRect": {"x0": 11, "y0": 90, "x1": 614, "y1": 93, "x2": 614, "y2": 490, "x3": 10, "y3": 489}, "width": 631}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAcceptanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeBankAcceptanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeBankAcceptanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAccountLicenseRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB17liGda67gK0jSZFHXXa9jVXa-1375-1000.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAccountLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAccountLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeBankAccountLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeBankAccountLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1fL.fiCzqK1RjSZPcXXbTepXa-3116-2139.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeBankCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeBankCardResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBasicRequest extends $dara.Model {
  needRotate?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBasicResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBasicResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeBasicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeBasicResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBirthCertificationRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1P6Yll8Bh1e4jSZFhXXcC9VXa-1381-962.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBirthCertificationResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBirthCertificationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeBirthCertificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeBirthCertificationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusShipTicketRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/imgextra/i2/O1CN010iDcM7218ZQJtJyGX_!!6000000006940-0-tps-936-541.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusShipTicketResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"angle":0,"data":{"title":"南通汽运实业集团有限公司旅客运输专用发票","formType":"发票联","invoiceCode":"132061981313","invoiceNumber":"05591493","date":"2020-01-20","time":"12:30","departureStation":"南通东站","arrivalStation":"上海总站","totalAmount":"56.00","passengerName":"颜跃第","idcardNo":"3210****2218"},"ftype":0,"height":541,"orgHeight":541,"orgWidth":936,"prism_keyValueInfo":[{"key":"title","keyProb":97,"value":"南通汽运实业集团有限公司旅客运输专用发票","valuePos":[{"x":508,"y":16},{"x":509,"y":94},{"x":91,"y":95},{"x":90,"y":18}],"valueProb":98},{"key":"formType","keyProb":100,"value":"发票联","valuePos":[{"x":388,"y":119},{"x":388,"y":157},{"x":209,"y":157},{"x":209,"y":118}],"valueProb":100},{"key":"invoiceCode","keyProb":100,"value":"132061981313","valuePos":[{"x":929,"y":127},{"x":929,"y":161},{"x":699,"y":162},{"x":698,"y":128}],"valueProb":100},{"key":"invoiceNumber","keyProb":100,"value":"05591493","valuePos":[{"x":851,"y":167},{"x":851,"y":199},{"x":696,"y":201},{"x":695,"y":168}],"valueProb":100},{"key":"date","keyProb":100,"value":"2020-01-20","valuePos":[{"x":185,"y":356},{"x":186,"y":384},{"x":62,"y":385},{"x":62,"y":358}],"valueProb":100},{"key":"time","keyProb":100,"value":"12:30","valuePos":[{"x":186,"y":385},{"x":186,"y":358},{"x":264,"y":359},{"x":264,"y":386}],"valueProb":100},{"key":"departureStation","keyProb":100,"value":"南通东站","valuePos":[{"x":66,"y":304},{"x":66,"y":271},{"x":187,"y":274},{"x":186,"y":308}],"valueProb":100},{"key":"arrivalStation","keyProb":100,"value":"上海总站","valuePos":[{"x":205,"y":306},{"x":205,"y":273},{"x":326,"y":276},{"x":325,"y":308}],"valueProb":100},{"key":"totalAmount","keyProb":100,"value":"56.00","valuePos":[{"x":402,"y":278},{"x":402,"y":306},{"x":366,"y":306},{"x":366,"y":278}],"valueProb":100},{"key":"passengerName","keyProb":97,"value":"颜跃第","valuePos":[{"x":426,"y":466},{"x":427,"y":434},{"x":516,"y":435},{"x":516,"y":468}],"valueProb":97},{"key":"idcardNo","keyProb":100,"value":"3210****2218","valuePos":[{"x":729,"y":441},{"x":729,"y":468},{"x":548,"y":468},{"x":548,"y":441}],"valueProb":100}],"sliceRect":{"x0":0,"y0":14,"x1":934,"y1":18,"x2":936,"y2":541,"x3":0,"y3":541},"width":936}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusShipTicketResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeBusShipTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeBusShipTicketResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1nnHJNSrqK1RjSZK9XXXyypXa-564-829.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeBusinessLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeBusinessLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarInvoiceRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1hC7bXCzqK1RjSZPcXXbTepXa-832-616.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarInvoiceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarInvoiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeCarInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeCarInvoiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarNumberRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarNumberResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarNumberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeCarNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeCarNumberResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarVinCodeRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarVinCodeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarVinCodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeCarVinCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeCarVinCodeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeChinesePassportRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  outputFigure?: boolean;
  /**
   * @example
   * https://img.alicdn.com/imgextra/i2/O1CN01yaQKCT1PrUsTWqgSK_!!6000000001894-0-tps-271-186.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      outputFigure: 'OutputFigure',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFigure: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeChinesePassportResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"data":{"passportType":"P","countryCode":"CHN","passportNumber":"E90000082","nameEn":",ZHENGJIANGANGUX","name":"","sex":"3.7F","birthPlace":"北京/BEIJIHG","nationality":"","issuePlace":"山东/SHANDON","issueAuthority":"公安部出入境管理局","mrzLine1":"POCHNZHENGJIAN<<YANGBEN<<<<<<<<<<<<<<<<<<<<<","mrzLine2":"E900000821CHN8108038F2110189NGKELMPONBPJB978","validToDate":"2921.DCF.3B","birthDate":"08.1981","issueDate":"91.1010.19"},"ftype":0,"height":186,"orgHeight":186,"orgWidth":271,"prism_keyValueInfo":[{"key":"passportType","keyProb":100,"value":"P","valuePos":[{"x":93,"y":26},{"x":93,"y":33},{"x":87,"y":33},{"x":87,"y":26}],"valueProb":100},{"key":"countryCode","keyProb":92,"value":"CHN","valuePos":[{"x":143,"y":26},{"x":143,"y":33},{"x":126,"y":33},{"x":126,"y":26}],"valueProb":92},{"key":"passportNumber","keyProb":100,"value":"E90000082","valuePos":[{"x":173,"y":29},{"x":230,"y":28},{"x":230,"y":35},{"x":174,"y":37}],"valueProb":100},{"key":"nameEn","keyProb":87,"value":",ZHENGJIANGANGUX","valuePos":[{"x":88,"y":55},{"x":89,"y":48},{"x":166,"y":49},{"x":166,"y":57}],"valueProb":87},{"key":"name","keyProb":100,"value":"","valueProb":100},{"key":"sex","keyProb":99,"value":"3.7F","valuePos":[{"x":103,"y":67},{"x":103,"y":74},{"x":87,"y":74},{"x":87,"y":67}],"valueProb":99},{"key":"birthPlace","keyProb":98,"value":"北京/BEIJIHG","valuePos":[{"x":133,"y":83},{"x":133,"y":91},{"x":87,"y":91},{"x":87,"y":83}],"valueProb":98},{"key":"nationality","keyProb":100,"value":"","valueProb":100},{"key":"issuePlace","keyProb":99,"value":"山东/SHANDON","valuePos":[{"x":136,"y":100},{"x":136,"y":108},{"x":88,"y":108},{"x":88,"y":100}],"valueProb":99},{"key":"issueAuthority","keyProb":79,"value":"公安部出入境管理局","valuePos":[{"x":87,"y":118},{"x":142,"y":118},{"x":142,"y":125},{"x":87,"y":125}],"valueProb":79},{"key":"mrzLine1","keyProb":100,"value":"POCHNZHENGJIAN<<YANGBEN<<<<<<<<<<<<<<<<<<<<<","valuePos":[{"x":12,"y":153},{"x":252,"y":152},{"x":252,"y":159},{"x":12,"y":161}],"valueProb":100},{"key":"mrzLine2","keyProb":99,"value":"E900000821CHN8108038F2110189NGKELMPONBPJB978","valuePos":[{"x":11,"y":166},{"x":253,"y":165},{"x":253,"y":173},{"x":12,"y":175}],"valueProb":99},{"key":"validToDate","keyProb":60,"value":"2921.DCF.3B","valuePos":[{"x":170,"y":107},{"x":171,"y":99},{"x":226,"y":101},{"x":225,"y":108}],"valueProb":86},{"key":"birthDate","keyProb":100,"value":"08.1981","valuePos":[{"x":209,"y":67},{"x":209,"y":74},{"x":181,"y":74},{"x":181,"y":67}],"valueProb":99},{"key":"issueDate","keyProb":82,"value":"91.1010.19","valuePos":[{"x":226,"y":83},{"x":226,"y":90},{"x":170,"y":90},{"x":170,"y":83}],"valueProb":84}],"sliceRect":{"x0":1,"y0":1,"x1":269,"y1":1,"x2":269,"y2":184,"x3":1,"y3":183},"width":271}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeChinesePassportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeChinesePassportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeChinesePassportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCommonPrintedInvoiceRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/imgextra/i2/O1CN01XU9dTh1O4CdHxXhMw_!!6000000001651-0-tps-1437-909.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCommonPrintedInvoiceResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"angle":0,"data":{"title":"浙江通用机打发票","formType":"发票联","invoiceCode":"133041930432","invoiceNumber":"01488558","printedInvoiceCode":"","printedInvoiceNumber":"","invoiceDate":"2019-11-19","totalAmount":"170.00","sellerName":"嘉兴市南湖区余新镇瘦汁味餐饮店","sellerTaxNumber":"92330402MA28B4LL4B","purchaserName":"阿里巴巴俪人购(上海)电子商务有限公司","purchaserTaxNumber":"91310114312356647G","drawer":"高伟","recipient":"","remarks":"","invoiceDetails":[{"itemName":"餐饮费","unit":"","quantity":"1","unitPrice":"170.00","amount":"170.00"}]},"ftype":0,"height":909,"orgHeight":909,"orgWidth":1437,"prism_keyValueInfo":[{"key":"title","keyProb":100,"value":"浙江通用机打发票","valuePos":[{"x":431,"y":68},{"x":843,"y":62},{"x":843,"y":125},{"x":431,"y":130}],"valueProb":100},{"key":"formType","keyProb":100,"value":"发票联","valuePos":[{"x":507,"y":154},{"x":767,"y":152},{"x":768,"y":214},{"x":508,"y":215}],"valueProb":100},{"key":"invoiceCode","keyProb":100,"value":"133041930432","valuePos":[{"x":990,"y":134},{"x":1283,"y":131},{"x":1283,"y":167},{"x":991,"y":171}],"valueProb":100},{"key":"invoiceNumber","keyProb":100,"value":"01488558","valuePos":[{"x":999,"y":195},{"x":1197,"y":193},{"x":1198,"y":234},{"x":999,"y":235}],"valueProb":100},{"key":"printedInvoiceCode","keyProb":100,"value":"","valueProb":100},{"key":"printedInvoiceNumber","keyProb":100,"value":"","valueProb":100},{"key":"invoiceDate","keyProb":100,"value":"2019-11-19","valuePos":[{"x":153,"y":280},{"x":351,"y":278},{"x":351,"y":309},{"x":154,"y":312}],"valueProb":100},{"key":"totalAmount","keyProb":100,"value":"170.00","valuePos":[{"x":300,"y":752},{"x":461,"y":749},{"x":462,"y":786},{"x":300,"y":788}],"valueProb":100},{"key":"sellerName","keyProb":100,"value":"嘉兴市南湖区余新镇瘦汁味餐饮店","valuePos":[{"x":220,"y":455},{"x":612,"y":450},{"x":612,"y":482},{"x":221,"y":488}],"valueProb":100},{"key":"sellerTaxNumber","keyProb":97,"value":"92330402MA28B4LL4B","valuePos":[{"x":224,"y":511},{"x":476,"y":509},{"x":477,"y":537},{"x":225,"y":539}],"valueProb":97},{"key":"purchaserName","keyProb":98,"value":"阿里巴巴俪人购(上海)电子商务有限公司","valuePos":[{"x":213,"y":327},{"x":714,"y":324},{"x":715,"y":359},{"x":214,"y":363}],"valueProb":98},{"key":"purchaserTaxNumber","keyProb":100,"value":"91310114312356647G","valuePos":[{"x":221,"y":406},{"x":480,"y":402},{"x":481,"y":432},{"x":221,"y":435}],"valueProb":100},{"key":"drawer","keyProb":100,"value":"高伟","valuePos":[{"x":680,"y":819},{"x":680,"y":850},{"x":627,"y":850},{"x":627,"y":819}],"valueProb":100},{"key":"recipient","keyProb":100,"value":"","valueProb":100},{"key":"remarks","keyProb":100,"value":"","valueProb":100},{"key":"invoiceDetails","keyProb":100,"value":"[{\"itemName\":\"餐饮费\",\"unit\":\"\",\"quantity\":\"1\",\"unitPrice\":\"170.00\",\"amount\":\"170.00\"}]","valueProb":100}],"sliceRect":{"x0":0,"y0":7,"x1":1416,"y1":0,"x2":1421,"y2":907,"x3":0,"y3":904},"width":1437}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCommonPrintedInvoiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeCommonPrintedInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeCommonPrintedInvoiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCosmeticProduceLicenseRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCosmeticProduceLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * AA91C84E-7DB9-1951-B8FE-D830076A0473
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCosmeticProduceLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeCosmeticProduceLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeCosmeticProduceLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCovidTestReportRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  multipleResult?: boolean;
  /**
   * @example
   * http://duguang-database-public.oss-cn-hangzhou.aliyuncs.com/covid_init_covid_test_report/test_report__data_pool_15a4f85478cb1bd69a5d631b182aba69.jpg_item_0_cls_covid_test_report.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      multipleResult: 'MultipleResult',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multipleResult: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCovidTestReportResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"data": {"name": "张德周", "idNumber": "612401********22010", "samplingDate": "2022-03-30", "samplingTime": "330", "testOrganization": "", "testItem": "", "testResult": ""}, "ftype": 0, "height": 991, "orgHeight": 998, "orgWidth": 1076, "prism_keyValueInfo": [{"key": "name", "keyProb": 100, "value": "张德周", "valuePos": [{"x": 291, "y": 465}, {"x": 473, "y": 463}, {"x": 474, "y": 526}, {"x": 291, "y": 527}], "valueProb": 100}, {"key": "idNumber", "keyProb": 91, "value": "612401********22010", "valuePos": [{"x": 791, "y": 180}, {"x": 791, "y": 227}, {"x": 300, "y": 226}, {"x": 300, "y": 179}], "valueProb": 91}, {"key": "samplingDate", "keyProb": 100, "value": "2022-03-30", "valuePos": [{"x": 597, "y": 775}, {"x": 597, "y": 826}, {"x": 296, "y": 826}, {"x": 296, "y": 775}], "valueProb": 100}, {"key": "samplingTime", "keyProb": 100, "value": "330", "valuePos": [{"x": 412, "y": 684}, {"x": 413, "y": 741}, {"x": 268, "y": 742}, {"x": 268, "y": 686}], "valueProb": 100}, {"key": "testOrganization", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "testItem", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "testResult", "keyProb": 28, "value": "", "valuePos": [{"x": 417, "y": 873}, {"x": 417, "y": 941}, {"x": 298, "y": 941}, {"x": 298, "y": 873}], "valueProb": 28}], "sliceRect": {"x0": 0, "y0": 10, "x1": 1076, "y1": 6, "x2": 1076, "y2": 995, "x3": 0, "y3": 996}, "width": 1076}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCovidTestReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeCovidTestReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeCovidTestReportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCtwoMedicalDeviceManageLicenseRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Hyx0MEH1gK0jSZSyXXXtlpXa-750-1000.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCtwoMedicalDeviceManageLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCtwoMedicalDeviceManageLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeCtwoMedicalDeviceManageLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeCtwoMedicalDeviceManageLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDocumentStructureRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  needRotate?: boolean;
  /**
   * @example
   * false
   */
  needSortPage?: boolean;
  /**
   * @example
   * false
   */
  noStamp?: boolean;
  /**
   * @example
   * false
   */
  outputCharInfo?: boolean;
  /**
   * @example
   * false
   */
  outputTable?: boolean;
  /**
   * @example
   * false
   */
  page?: boolean;
  /**
   * @example
   * false
   */
  paragraph?: boolean;
  /**
   * @example
   * false
   */
  row?: boolean;
  /**
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01amMFBF1GUki3NHNzI_!!6000000000626-2-tps-978-1346.png
   */
  url?: string;
  /**
   * @example
   * false
   */
  useNewStyleOutput?: boolean;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      needSortPage: 'NeedSortPage',
      noStamp: 'NoStamp',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      page: 'Page',
      paragraph: 'Paragraph',
      row: 'Row',
      url: 'Url',
      useNewStyleOutput: 'UseNewStyleOutput',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      needSortPage: 'boolean',
      noStamp: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      page: 'boolean',
      paragraph: 'boolean',
      row: 'boolean',
      url: 'string',
      useNewStyleOutput: 'boolean',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDocumentStructureResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * { 	"content": "2017年河北区实验小学", 	"height": 3509, 	"orgHeight": 3509, 	"orgWidth": 2512, 	"prism_version": "1.0.9", 	"prism_wnum": 126, 	"prism_wordsInfo": [{ 		"angle": -89, 		"direction": 0, 		"height": 541, 		"pos": [{ 			"x": 982, 			"y": 223 		}, { 			"x": 1522, 			"y": 223 		}, { 			"x": 1522, 			"y": 266 		}, { 			"x": 982, 			"y": 266 		}], 		"prob": 99, 		"width": 43, 		"word": "2017年河北区实验小学", 		"x": 1230, 		"y": -26 	}], 	"width": 2512 }
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDocumentStructureResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeDocumentStructureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeDocumentStructureResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB18sTuNSzqK1RjSZPxXXc4tVXa-629-416.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * unmatchedImageType
   */
  code?: string;
  data?: string;
  /**
   * @example
   * The type of image didn\\"t match the api.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeDrivingLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeDrivingLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduFormulaRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduFormulaResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduFormulaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEduFormulaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeEduFormulaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduOralCalculationRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01diDxZe21hNSkCBf5n_!!6000000007016-0-tps-2268-3024.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduOralCalculationResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {"height":3024,"mathsInfo":[{"pos":[{"x":128,"y":456},{"x":481,"y":425},{"x":479,"y":526},{"x":127,"y":523}],"result":"right","title":"5 9 - 2 5 = 3 4"}],"orgHeight":3024,"orgWidth":2268,"prism_version":"1.0.9","prism_wnum":0,"prism_wordsInfo":[],"width":2268}
   */
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduOralCalculationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEduOralCalculationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeEduOralCalculationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperCutRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * question：题目， answer：答案
   */
  cutType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * scan：扫描图， photo：实拍图
   */
  imageType?: string;
  outputOricoord?: boolean;
  /**
   * @example
   * default:默认, Math:数学, PrimarySchool_Math:小学数学, JHighSchool_Math: 初中数学, Chinese:语文, PrimarySchool_Chinese:小学语文, JHighSchool_Chinese:初中语文, English:英语, PrimarySchool_English:小学英语, JHighSchool_English:初中英语, Physics:物理, JHighSchool_Physics:初中物理, Chemistry: 化学, JHighSchool_Chemistry:初中化学, Biology:生物, JHighSchool_Biology:初中生物, History:历史, JHighSchool_History:初中历史, Geography:地理, JHighSchool_Geography:初中地理, Politics:政治, JHighSchool_Politics:初中政治
   */
  subject?: string;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      cutType: 'CutType',
      imageType: 'ImageType',
      outputOricoord: 'OutputOricoord',
      subject: 'Subject',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cutType: 'string',
      imageType: 'string',
      outputOricoord: 'boolean',
      subject: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperCutResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperCutResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEduPaperCutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeEduPaperCutResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperOcrRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * scan：扫描图， photo：实拍图
   */
  imageType?: string;
  /**
   * @example
   * false
   */
  outputOricoord?: boolean;
  /**
   * @example
   * default:默认, Math:数学, PrimarySchool_Math:小学数学, JHighSchool_Math: 初中数学, Chinese:语文, PrimarySchool_Chinese:小学语文, JHighSchool_Chinese:初中语文, English:英语, PrimarySchool_English:小学英语, JHighSchool_English:初中英语, Physics:物理, JHighSchool_Physics:初中物理, Chemistry: 化学, JHighSchool_Chemistry:初中化学, Biology:生物, JHighSchool_Biology:初中生物, History:历史, JHighSchool_History:初中历史, Geography:地理, JHighSchool_Geography:初中地理, Politics:政治, JHighSchool_Politics:初中政治
   */
  subject?: string;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageType: 'ImageType',
      outputOricoord: 'OutputOricoord',
      subject: 'Subject',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageType: 'string',
      outputOricoord: 'boolean',
      subject: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperOcrResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperOcrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEduPaperOcrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeEduPaperOcrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperStructedRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  needRotate?: boolean;
  outputOricoord?: boolean;
  /**
   * @example
   * default:默认, Math:数学, PrimarySchool_Math:小学数学, JHighSchool_Math: 初中数学, Chinese:语文, PrimarySchool_Chinese:小学语文, //JHighSchool_Chinese:初中语文, English:英语, PrimarySchool_English:小学英语, JHighSchool_English:初中英语, Physics:物理, JHighSchool_Physics:初中物理   //Chemistry: 化学, JHighSchool_Chemistry:初中化学, Biology:生物, JHighSchool_Biology:初中生物, History:历史, JHighSchool_History:初中历史, Geography:地理,   //JHighSchool_Geography:初中地理, Politics:政治, JHighSchool_Politics:初中政治   "templateType": "Math"
   */
  subject?: string;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      outputOricoord: 'OutputOricoord',
      subject: 'Subject',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      outputOricoord: 'boolean',
      subject: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperStructedResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperStructedResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEduPaperStructedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeEduPaperStructedResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduQuestionOcrRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  needRotate?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduQuestionOcrResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduQuestionOcrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEduQuestionOcrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeEduQuestionOcrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEnglishRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  needRotate?: boolean;
  /**
   * @example
   * false
   */
  outputTable?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEnglishResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEnglishResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEnglishResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeEnglishResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEstateCertificationRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1idy2XDZmx1VjSZFGXXax2XXa-713-1133.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEstateCertificationResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEstateCertificationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEstateCertificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeEstateCertificationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExitEntryPermitToHKRequest extends $dara.Model {
  /**
   * @example
   * true/false
   */
  outputFigure?: boolean;
  /**
   * @example
   * https://img.alicdn.com/imgextra/i2/O1CN01Rs4C321G2oTD7Dg1U_!!6000000000565-0-tps-1024-692.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      outputFigure: 'OutputFigure',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFigure: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExitEntryPermitToHKResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"data":{"permitType":"往来港澳通行证","nameCn":"朱伟","nameEn":"ZHU,WEI","birthDate":"2021.01.01","sex":"男","validPeriod":"2018.06.11-2028.06.10","issueAuthority":"公安部出入境管理局","issuePlace":"江苏","permitNumber":"C88600000","mrzCode":"CSC886084772<2800800<8200000<6"},"figure":[{"type":"face","x":160,"y":271,"w":190,"h":248,"box":{"x":254,"y":394,"w":186,"h":244,"angle":0},"points":[{"x":160,"y":272},{"x":347,"y":271},{"x":348,"y":516},{"x":161,"y":517}]},{"type":"face","x":711,"y":355,"w":80,"h":103,"box":{"x":750,"y":405,"w":75,"h":99,"angle":-1},"points":[{"x":711,"y":357},{"x":787,"y":355},{"x":789,"y":454},{"x":713,"y":456}]}],"ftype":0,"height":692,"orgHeight":692,"orgWidth":1024,"prism_keyValueInfo":[{"key":"permitType","keyProb":100,"value":"往来港澳通行证","valuePos":[{"x":142,"y":39},{"x":476,"y":35},{"x":477,"y":75},{"x":142,"y":79}],"valueProb":100},{"key":"nameCn","keyProb":100,"value":"朱伟","valuePos":[{"x":272,"y":126},{"x":346,"y":124},{"x":347,"y":160},{"x":272,"y":161}],"valueProb":100},{"key":"nameEn","keyProb":100,"value":"ZHU,WEI","valuePos":[{"x":273,"y":168},{"x":403,"y":167},{"x":403,"y":194},{"x":274,"y":196}],"valueProb":100},{"key":"birthDate","keyProb":100,"value":"2021.01.01","valuePos":[{"x":421,"y":240},{"x":421,"y":269},{"x":281,"y":269},{"x":281,"y":240}],"valueProb":100},{"key":"sex","keyProb":100,"value":"男","valuePos":[{"x":502,"y":240},{"x":502,"y":270},{"x":474,"y":270},{"x":474,"y":240}],"valueProb":100},{"key":"validPeriod","keyProb":100,"value":"2018.06.11-2028.06.10","valuePos":[{"x":579,"y":301},{"x":579,"y":328},{"x":275,"y":328},{"x":275,"y":301}],"valueProb":100},{"key":"issueAuthority","keyProb":100,"value":"公安部出入境管理局","valuePos":[{"x":278,"y":361},{"x":524,"y":361},{"x":524,"y":391},{"x":278,"y":391}],"valueProb":100},{"key":"issuePlace","keyProb":100,"value":"江苏","valuePos":[{"x":619,"y":361},{"x":619,"y":391},{"x":561,"y":391},{"x":561,"y":361}],"valueProb":100},{"key":"permitNumber","keyProb":100,"value":"C88600000","valuePos":[{"x":524,"y":61},{"x":727,"y":60},{"x":728,"y":92},{"x":524,"y":94}],"valueProb":100},{"key":"mrzCode","keyProb":98,"value":"CSC886084772<2800800<8200000<6","valuePos":[{"x":714,"y":421},{"x":714,"y":449},{"x":65,"y":449},{"x":65,"y":421}],"valueProb":98}],"sliceRect":{"x0":107,"y0":135,"x1":880,"y1":134,"x2":874,"y2":616,"x3":117,"y3":624},"width":1024}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * C99EABB8-9FCB-5E5E-B4D9-AFCFA6C8B3FD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExitEntryPermitToHKResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeExitEntryPermitToHKResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeExitEntryPermitToHKResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExitEntryPermitToMainlandRequest extends $dara.Model {
  /**
   * @example
   * true/false
   */
  outputFigure?: boolean;
  /**
   * @example
   * https://img.alicdn.com/imgextra/i2/O1CN01VpucoK1PtmovU859J_!!6000000001899-0-tps-928-626.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      outputFigure: 'OutputFigure',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFigure: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExitEntryPermitToMainlandResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"data":{"permitType":"港澳居民来往内地通行证","nameCn":"何郑","nameEn":"HE,CHENG","birthDate":"2000.01.01","sex":"男","validPeriod":"2014.04.10-2019.04.09","issueAuthority":"公安部出入境管理局","issuePlace":"","permitNumber":"H10387877","issueCount":"01"},"figure":[{"type":"face","x":80,"y":164,"w":192,"h":273,"box":{"x":175,"y":300,"w":187,"h":269,"angle":0},"points":[{"x":80,"y":166},{"x":268,"y":164},{"x":270,"y":433},{"x":82,"y":435}]}],"ftype":0,"height":626,"orgHeight":626,"orgWidth":928,"prism_keyValueInfo":[{"key":"permitType","keyProb":100,"value":"港澳居民来往内地通行证","valuePos":[{"x":680,"y":41},{"x":681,"y":83},{"x":177,"y":86},{"x":176,"y":44}],"valueProb":100},{"key":"nameCn","keyProb":100,"value":"何郑","valuePos":[{"x":346,"y":119},{"x":346,"y":153},{"x":269,"y":153},{"x":269,"y":119}],"valueProb":100},{"key":"nameEn","keyProb":100,"value":"HE,CHENG","valuePos":[{"x":452,"y":166},{"x":452,"y":195},{"x":270,"y":195},{"x":270,"y":166}],"valueProb":100},{"key":"birthDate","keyProb":100,"value":"2000.01.01","valuePos":[{"x":273,"y":226},{"x":414,"y":226},{"x":414,"y":254},{"x":273,"y":254}],"valueProb":100},{"key":"sex","keyProb":100,"value":"男","valuePos":[{"x":594,"y":234},{"x":594,"y":268},{"x":562,"y":268},{"x":562,"y":234}],"valueProb":100},{"key":"validPeriod","keyProb":100,"value":"2014.04.10-2019.04.09","valuePos":[{"x":700,"y":295},{"x":700,"y":323},{"x":267,"y":324},{"x":267,"y":296}],"valueProb":100},{"key":"issueAuthority","keyProb":100,"value":"公安部出入境管理局","valuePos":[{"x":264,"y":386},{"x":265,"y":353},{"x":536,"y":357},{"x":536,"y":390}],"valueProb":100},{"key":"issuePlace","keyProb":100,"value":"","valueProb":100},{"key":"permitNumber","keyProb":100,"value":"H10387877","valuePos":[{"x":489,"y":424},{"x":489,"y":457},{"x":268,"y":457},{"x":268,"y":424}],"valueProb":100},{"key":"issueCount","keyProb":100,"value":"01","valuePos":[{"x":601,"y":425},{"x":601,"y":456},{"x":555,"y":456},{"x":555,"y":425}],"valueProb":100}],"sliceRect":{"x0":46,"y0":30,"x1":887,"y1":38,"x2":892,"y2":564,"x3":39,"y3":567},"width":928}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExitEntryPermitToMainlandResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeExitEntryPermitToMainlandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeExitEntryPermitToMainlandResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodManageLicenseRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodManageLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodManageLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeFoodManageLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeFoodManageLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodProduceLicenseRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1YaMhXKT2gK0jSZFvXXXnFXXa-1414-1000.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodProduceLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodProduceLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeFoodProduceLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeFoodProduceLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeGeneralResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeGeneralResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralStructureRequest extends $dara.Model {
  keys?: string[];
  /**
   * @example
   * https://example.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralStructureShrinkRequest extends $dara.Model {
  keysShrink?: string;
  /**
   * @example
   * https://example.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      keysShrink: 'Keys',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keysShrink: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralStructureResponseBody extends $dara.Model {
  /**
   * @example
   * LLMTimeout
   */
  code?: string;
  data?: RecognizeGeneralStructureResponseBodyData;
  /**
   * @example
   * Large language model timeout, please try again with fewer keys.
   */
  message?: string;
  /**
   * @example
   * 2F86F9B6-CF68-1574-860C-7CC5E46F14BC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RecognizeGeneralStructureResponseBodyData,
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

export class RecognizeGeneralStructureResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeGeneralStructureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeGeneralStructureResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHKIdcardRequest extends $dara.Model {
  /**
   * @example
   * https://example.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHKIdcardResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHKIdcardResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeHKIdcardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeHKIdcardResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandwritingRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  needRotate?: boolean;
  /**
   * @example
   * false
   */
  needSortPage?: boolean;
  /**
   * @example
   * false
   */
  outputCharInfo?: boolean;
  /**
   * @example
   * false
   */
  outputTable?: boolean;
  paragraph?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      needSortPage: 'NeedSortPage',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      paragraph: 'Paragraph',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      needSortPage: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      paragraph: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandwritingResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandwritingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeHandwritingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeHandwritingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHealthCodeRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/imgextra/i3/O1CN01ME0L7j29f6VRZKo5e_!!6000000008094-0-tps-1237-1981.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHealthCodeResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"data":{"permitType":"往来港澳通行证","nameCn":"朱伟","nameEn":"ZHU,WEI","birthDate":"2021.01.01","sex":"男","validPeriod":"2018.06.11-2028.06.10","issueAuthority":"公安部出入境管理局","issuePlace":"江苏","permitNumber":"C88600000","mrzCode":"CSC886084772<2800800<8200000<6"},"figure":[{"type":"face","x":160,"y":271,"w":190,"h":248,"box":{"x":254,"y":394,"w":186,"h":244,"angle":0},"points":[{"x":160,"y":272},{"x":347,"y":271},{"x":348,"y":516},{"x":161,"y":517}]},{"type":"face","x":711,"y":355,"w":80,"h":103,"box":{"x":750,"y":405,"w":75,"h":99,"angle":-1},"points":[{"x":711,"y":357},{"x":787,"y":355},{"x":789,"y":454},{"x":713,"y":456}]}],"ftype":0,"height":692,"orgHeight":692,"orgWidth":1024,"prism_keyValueInfo":[{"key":"permitType","keyProb":100,"value":"往来港澳通行证","valuePos":[{"x":142,"y":39},{"x":476,"y":35},{"x":477,"y":75},{"x":142,"y":79}],"valueProb":100},{"key":"nameCn","keyProb":100,"value":"朱伟","valuePos":[{"x":272,"y":126},{"x":346,"y":124},{"x":347,"y":160},{"x":272,"y":161}],"valueProb":100},{"key":"nameEn","keyProb":100,"value":"ZHU,WEI","valuePos":[{"x":273,"y":168},{"x":403,"y":167},{"x":403,"y":194},{"x":274,"y":196}],"valueProb":100},{"key":"birthDate","keyProb":100,"value":"2021.01.01","valuePos":[{"x":421,"y":240},{"x":421,"y":269},{"x":281,"y":269},{"x":281,"y":240}],"valueProb":100},{"key":"sex","keyProb":100,"value":"男","valuePos":[{"x":502,"y":240},{"x":502,"y":270},{"x":474,"y":270},{"x":474,"y":240}],"valueProb":100},{"key":"validPeriod","keyProb":100,"value":"2018.06.11-2028.06.10","valuePos":[{"x":579,"y":301},{"x":579,"y":328},{"x":275,"y":328},{"x":275,"y":301}],"valueProb":100},{"key":"issueAuthority","keyProb":100,"value":"公安部出入境管理局","valuePos":[{"x":278,"y":361},{"x":524,"y":361},{"x":524,"y":391},{"x":278,"y":391}],"valueProb":100},{"key":"issuePlace","keyProb":100,"value":"江苏","valuePos":[{"x":619,"y":361},{"x":619,"y":391},{"x":561,"y":391},{"x":561,"y":361}],"valueProb":100},{"key":"permitNumber","keyProb":100,"value":"C88600000","valuePos":[{"x":524,"y":61},{"x":727,"y":60},{"x":728,"y":92},{"x":524,"y":94}],"valueProb":100},{"key":"mrzCode","keyProb":98,"value":"CSC886084772<2800800<8200000<6","valuePos":[{"x":714,"y":421},{"x":714,"y":449},{"x":65,"y":449},{"x":65,"y":421}],"valueProb":98}],"sliceRect":{"x0":107,"y0":135,"x1":880,"y1":134,"x2":874,"y2":616,"x3":117,"y3":624},"width":1024}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHealthCodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeHealthCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeHealthCodeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHotelConsumeRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHotelConsumeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHotelConsumeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeHotelConsumeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeHotelConsumeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHouseholdRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  isResidentPage?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB11ZxTMxD1gK0jSZFsXXbldVXa-920-606.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      isResidentPage: 'IsResidentPage',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isResidentPage: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHouseholdResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHouseholdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeHouseholdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeHouseholdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdcardRequest extends $dara.Model {
  llmRec?: boolean;
  /**
   * @example
   * false
   */
  outputFigure?: boolean;
  /**
   * @example
   * false
   */
  outputQualityInfo?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1q5IeXAvoK1RjSZFNXXcxMVXa-483-307.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      llmRec: 'Llm_rec',
      outputFigure: 'OutputFigure',
      outputQualityInfo: 'OutputQualityInfo',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmRec: 'boolean',
      outputFigure: 'boolean',
      outputQualityInfo: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdcardResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  /**
   * @example
   * 86B83935-DD36-195B-B6E4-D07BE370C8B6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdcardResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeIdcardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeIdcardResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInternationalBusinessLicenseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * India
   */
  country?: string;
  /**
   * @example
   * https://www.example.com
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      country: 'Country',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      country: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInternationalBusinessLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * unmatchedImageType
   */
  code?: string;
  /**
   * @example
   * {"algo_version": "b16f86189b72c2d726865272c98e8e58156a41c7;b16f86189b72c2d726865272c98e8e58156a41c7", "data": {"certificateType": "간이과세자", "issuanceNo": "", "processingTime": "", "companyNameEn": "", "companyName": "", "registrationNo": "135-31-78773", "nameOfRepresentativeEn": "", "nameOfRepresentative": "테라", "residentRegistrationNo": "", "businessAddressEn": "", "businessAddress": "경기도 수원시 영통구 영통로 498, 143동 1806흐(영통동, 황골마을 주공아파트)", "businessCommencementDate": "1972-01-10", "businessRegistrationDate": "", "businessTypeEn": "", "businessType": "", "businessItemEn": "", "businessItem": "스매업 전자상거래업(의류)", "jointCompanyName": "", "jointCompanyRegistrationNo": "", "issueDate": "2015-10-28", "issuer": "동수원세무서장"}, "ftype": 0, "height": 2988, "orgHeight": 2988, "orgWidth": 5312, "prism_keyValueInfo": [{"key": "certificateType", "keyProb": 100, "value": "간이과세자", "valuePos": [{"x": 621, "y": 1768}, {"x": 615, "y": 1221}, {"x": 720, "y": 1220}, {"x": 726, "y": 1767}], "valueProb": 100}, {"key": "issuanceNo", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "processingTime", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "companyNameEn", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "companyName", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "registrationNo", "keyProb": 100, "value": "135-31-78773", "valuePos": [{"x": 773, "y": 1517}, {"x": 763, "y": 881}, {"x": 861, "y": 880}, {"x": 870, "y": 1515}], "valueProb": 100}, {"key": "nameOfRepresentativeEn", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "nameOfRepresentative", "keyProb": 90, "value": "테라", "valuePos": [{"x": 946, "y": 2201}, {"x": 946, "y": 2047}, {"x": 1022, "y": 2047}, {"x": 1022, "y": 2201}], "valueProb": 90}, {"key": "residentRegistrationNo", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "businessAddressEn", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "businessAddress", "keyProb": 96, "value": "경기도 수원시 영통구 영통로 498, 143동 1806흐(영통동, 황골마을 주공아파트)", "valuePos": [{"x": 1346, "y": 2200}, {"x": 1321, "y": 736}, {"x": 1499, "y": 733}, {"x": 1523, "y": 2197}], "valueProb": 96}, {"key": "businessCommencementDate", "keyProb": 100, "value": "1972-01-10", "valuePos": [{"x": 1055, "y": 788}, {"x": 1046, "y": 62}, {"x": 1127, "y": 62}, {"x": 1135, "y": 787}], "valueProb": 100}, {"key": "businessRegistrationDate", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "businessTypeEn", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "businessType", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "businessItemEn", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "businessItem", "keyProb": 100, "value": "스매업 전자상거래업(의류)", "valuePos": [{"x": 1590, "y": 1982}, {"x": 1561, "y": 293}, {"x": 1659, "y": 291}, {"x": 1688, "y": 1980}], "valueProb": 100}, {"key": "jointCompanyName", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "jointCompanyRegistrationNo", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "issueDate", "keyProb": 100, "value": "2015-10-28", "valuePos": [{"x": 3755, "y": 1938}, {"x": 3749, "y": 1057}, {"x": 3842, "y": 1056}, {"x": 3848, "y": 1937}], "valueProb": 100}, {"key": "issuer", "keyProb": 100, "value": "동수원세무서장", "valuePos": [{"x": 3978, "y": 1997}, {"x": 3970, "y": 982}, {"x": 4099, "y": 980}, {"x": 4107, "y": 1996}], "valueProb": 100}], "sliceRect": {"x0": 8, "y0": 0, "x1": 4695, "y1": 0, "x2": 4737, "y2": 2976, "x3": 12, "y3": 2988}, "width": 5312}
   */
  data?: string;
  /**
   * @example
   * The type of image didn\\"t match the api.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInternationalBusinessLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeInternationalBusinessLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeInternationalBusinessLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInternationalIdcardRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Vietnam
   */
  country?: string;
  /**
   * @example
   * http://example.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      country: 'Country',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      country: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInternationalIdcardResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInternationalIdcardResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeInternationalIdcardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeInternationalIdcardResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInvoiceRequest extends $dara.Model {
  pageNo?: number;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1qIIfXAPoK1RjSZKbXXX1IXXa-808-523.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInvoiceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInvoiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeInvoiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeJanpaneseRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  needRotate?: boolean;
  /**
   * @example
   * false
   */
  outputCharInfo?: boolean;
  /**
   * @example
   * false
   */
  outputTable?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeJanpaneseResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeJanpaneseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeJanpaneseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeJanpaneseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeKoreanRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  needRotate?: boolean;
  /**
   * @example
   * false
   */
  outputCharInfo?: boolean;
  /**
   * @example
   * false
   */
  outputTable?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeKoreanResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {"content":"위 기자재는 [전파법] 제58조의2 제3항에 따라 등록되었음을 증명합니다.  Itis verified thatforegoing equipment has bee en registered underthe Clause 3, Article 58-2 of Radio Waves Act.  y0 13년(Year)_08월(Month) 16일(Date) 국립전 파연구 국립전파연7 구원장 인 Dlrector General ofNatlonal Radio Research Agency    적합등록 방송통신기자재는 반드시\\"적합성평가표: .시\\"를 부착하여 유통하여야 합니다.  위반시 과태료 처분 및등록이 취소될 수 있습니다.  ","height":499,"orgHeight":499,"orgWidth":1153,"prism_version":"1.0.9","prism_wnum":19,"prism_wordsInfo":[{"angle":-90,"direction":0,"height":587,"pos":[{"x":61,"y":18},{"x":647,"y":16},{"x":647,"y":43},{"x":61,"y":45}],"prob":98,"width":27,"word":"위 기자재는 [전파법] 제58조의2 제3항에 따라","x":341,"y":-263}],"width":1153}
   */
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeKoreanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeKoreanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeKoreanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLatinRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  needRotate?: boolean;
  /**
   * @example
   * false
   */
  outputCharInfo?: boolean;
  /**
   * @example
   * false
   */
  outputTable?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLatinResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {"angle":1,"content":"Đậm Phong Cách Khác Biêt  Trên tay chế tác nguyên khối dẫn đầu xu hướng với thiết kế thần máy liền mạch, độ mông ấn tượng 8.5mm cùng   kiểu dáng mặt kinh bóng mượt, sang trọng từ Galaxy M30. Vừa vặn hoền hẩo trong lông bần tay, tho thích thể hiện   phong cách thời thượng với hai phiên bản màu Đen hoặc Xanh cắ tính.  xanh Ngân Hà   Đen Ngả Khói  OC S   ","height":821,"orgHeight":803,"orgWidth":1075,"prism_version":"1.0.9","prism_wnum":9,"prism_wordsInfo":[{"angle":0,"direction":0,"height":37,"pos":[{"x":293,"y":37},{"x":776,"y":29},{"x":777,"y":66},{"x":294,"y":74}],"prob":99,"width":484,"word":"Đậm Phong Cách","x":292,"y":24}],"width":1088}
   */
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLatinResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeLatinResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeLatinResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceManageLicenseRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1ZrF.MuL2gK0jSZFmXXc7iXXa-1417-995.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceManageLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceManageLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeMedicalDeviceManageLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeMedicalDeviceManageLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceProduceLicenseRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB13MJ.MuT2gK0jSZFvXXXnFXXa-1417-994.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceProduceLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceProduceLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeMedicalDeviceProduceLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeMedicalDeviceProduceLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMixedInvoicesRequest extends $dara.Model {
  mergePdfPages?: boolean;
  pageNo?: number;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1.bnGbRWD3KVjSZFsXXcqkpXa-1654-2341.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      mergePdfPages: 'MergePdfPages',
      pageNo: 'PageNo',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mergePdfPages: 'boolean',
      pageNo: 'number',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMixedInvoicesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMixedInvoicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeMixedInvoicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeMixedInvoicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMultiLanguageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  languages?: string[];
  /**
   * @example
   * false
   */
  needRotate?: boolean;
  /**
   * @example
   * false
   */
  needSortPage?: boolean;
  /**
   * @example
   * false
   */
  outputCharInfo?: boolean;
  /**
   * @example
   * false
   */
  outputTable?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      languages: 'Languages',
      needRotate: 'NeedRotate',
      needSortPage: 'NeedSortPage',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      languages: { 'type': 'array', 'itemType': 'string' },
      needRotate: 'boolean',
      needSortPage: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    if(Array.isArray(this.languages)) {
      $dara.Model.validateArray(this.languages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMultiLanguageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  languagesShrink?: string;
  /**
   * @example
   * false
   */
  needRotate?: boolean;
  /**
   * @example
   * false
   */
  needSortPage?: boolean;
  /**
   * @example
   * false
   */
  outputCharInfo?: boolean;
  /**
   * @example
   * false
   */
  outputTable?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      languagesShrink: 'Languages',
      needRotate: 'NeedRotate',
      needSortPage: 'NeedSortPage',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      languagesShrink: 'string',
      needRotate: 'boolean',
      needSortPage: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMultiLanguageResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {"content":"PACKING  Shipper/Export   Invoice No & Date  STM TECHNOLOGY INC. 20140730- ST44 ","height":1753,"orgHeight":1753,"orgWidth":1240,"prism_version":"1.0.9","prism_wnum":71,"prism_wordsInfo":[{"angle":0,"direction":0,"height":33,"pos":[{"x":348,"y":137},{"x":531,"y":135},{"x":532,"y":168},{"x":348,"y":170}],"prob":99,"recClassify":1,"width":184,"word":"PACKING","x":348,"y":135}],"width":1240}
   */
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMultiLanguageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeMultiLanguageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeMultiLanguageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeNonTaxInvoiceRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeNonTaxInvoiceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeNonTaxInvoiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeNonTaxInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeNonTaxInvoiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePassportRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1uHglUgHqK1RjSZFEXXcGMXXa-800-502.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePassportResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePassportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizePassportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizePassportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePaymentRecordRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePaymentRecordResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePaymentRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizePaymentRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizePaymentRecordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePurchaseRecordRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  outputMultiOrders?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      outputMultiOrders: 'OutputMultiOrders',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputMultiOrders: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePurchaseRecordResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePurchaseRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizePurchaseRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizePurchaseRecordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1SwAeXHr1gK0jSZR0XXbP8XXa-870-604.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeQuotaInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeQuotaInvoiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRideHailingItineraryRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/imgextra/i1/O1CN01ePLJiZ1n8CTylKsn3_!!6000000005044-2-tps-194-260.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRideHailingItineraryResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"data":{"serviceProvider":"滴滴出行","applicationDate":"","startTime":"","endTime":"","phoneNumber":"","totalAmount":"","rideDetails":[{"Number":"","carType":"","pickUpTime":"","city":"","startPlace":"","endPlace":"","mileage":"","amount":"","remarks":""}]},"ftype":0,"height":260,"orgHeight":260,"orgWidth":194,"prism_keyValueInfo":[{"key":"serviceProvider","keyProb":99,"value":"滴滴出行","valuePos":[{"x":120,"y":11},{"x":120,"y":21},{"x":57,"y":20},{"x":57,"y":10}],"valueProb":99},{"key":"applicationDate","keyProb":100,"value":"","valueProb":100},{"key":"startTime","keyProb":91,"value":"","valuePos":[{"x":94,"y":46},{"x":94,"y":50},{"x":75,"y":50},{"x":75,"y":46}],"valueProb":91},{"key":"endTime","keyProb":65,"value":"","valuePos":[{"x":112,"y":46},{"x":112,"y":50},{"x":95,"y":50},{"x":95,"y":46}],"valueProb":65},{"key":"phoneNumber","keyProb":100,"value":"","valueProb":100},{"key":"totalAmount","keyProb":100,"value":"","valueProb":100},{"key":"rideDetails","keyProb":100,"value":"[{\"Number\":\"\",\"carType\":\"\",\"pickUpTime\":\"\",\"city\":\"\",\"startPlace\":\"\",\"endPlace\":\"\",\"mileage\":\"\",\"amount\":\"\",\"remarks\":\"\"}]","valueProb":100}],"sliceRect":{"x0":6,"y0":72,"x1":186,"y1":72,"x2":186,"y2":156,"x3":6,"y3":156},"width":194}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRideHailingItineraryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeRideHailingItineraryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeRideHailingItineraryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRollTicketRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Y2ryJKT2gK0jSZFvXXXnFXXa-438-934.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRollTicketResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRollTicketResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeRollTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeRollTicketResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussianRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  needRotate?: boolean;
  /**
   * @example
   * false
   */
  outputCharInfo?: boolean;
  /**
   * @example
   * false
   */
  outputTable?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussianResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {"content":"Тэбако (коробочка для косметики) с рисунком в виде колес повозки","height":199,"orgHeight":199,"orgWidth":766,"prism_version":"1.0.9","prism_wnum":6,"prism_wordsInfo":[{"angle":-89,"direction":0,"height":722,"pos":[{"x":6,"y":23},{"x":728,"y":26},{"x":727,"y":43},{"x":5,"y":41}],"prob":99,"width":17,"word":"Тэбако (коробочка для косметики) с рисунком в виде колес повозки， покрытая","x":358,"y":-327}],"width":766}
   */
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussianResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeRussianResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeRussianResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeShoppingReceiptRequest extends $dara.Model {
  /**
   * @example
   * http://duguang-database-public.oss-cn-hangzhou.aliyuncs.com/multi_receipt_shopping_receipt/shop_receipt__ticket_2020-05-14-11-59-30.540668_01_List.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeShoppingReceiptResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"data": {"shopName": "世纪联华椒江市府大道店", "receiptDate": "2020-04-23", "receiptTime": "20:26:00", "contactNumber": "88068111", "shopAddress": "", "totalAmount": "566.67"}, "ftype": 0, "height": 1047, "orgHeight": 1055, "orgWidth": 690, "prism_keyValueInfo": [{"key": "shopName", "keyProb": 98, "value": "世纪联华椒江市府大道店", "valuePos": [{"x": 51, "y": 239}, {"x": 53, "y": 208}, {"x": 438, "y": 231}, {"x": 436, "y": 262}], "valueProb": 98}, {"key": "receiptDate", "keyProb": 100, "value": "2020-04-23", "valuePos": [{"x": 292, "y": 677}, {"x": 293, "y": 649}, {"x": 428, "y": 651}, {"x": 428, "y": 680}], "valueProb": 100}, {"key": "receiptTime", "keyProb": 100, "value": "20:26:00", "valuePos": [{"x": 435, "y": 681}, {"x": 435, "y": 652}, {"x": 548, "y": 656}, {"x": 547, "y": 684}], "valueProb": 100}, {"key": "contactNumber", "keyProb": 100, "value": "88068111", "valuePos": [{"x": 52, "y": 271}, {"x": 52, "y": 242}, {"x": 160, "y": 246}, {"x": 159, "y": 274}], "valueProb": 100}, {"key": "shopAddress", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "totalAmount", "keyProb": 100, "value": "566.67", "valuePos": [{"x": 206, "y": 522}, {"x": 206, "y": 493}, {"x": 313, "y": 495}, {"x": 313, "y": 524}], "valueProb": 100}], "sliceRect": {"x0": 17, "y0": 8, "x1": 690, "y1": 42, "x2": 690, "y2": 1054, "x3": 6, "y3": 1053}, "width": 684}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeShoppingReceiptResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeShoppingReceiptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeShoppingReceiptResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSocialSecurityCardRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01zpM9bJ1Pa5pCwJat7_!!6000000001856-0-tps-282-179.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSocialSecurityCardResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"angle":0,"data":{"issueDate":"20168月4日","certificateNumber":"2014100285","taxAuthorityName":"格","formType":"第一联","taxNumbe":"","name":"","totalAmountInWords":"肆佰陆拾陆元叁角玖分","totalAmount":"466.39","drawer":"","remarks":"(20141)鄂国证00285001正常申报一般申报滞纳金自行申报松滋市街河市镇现:主管税务所(科、分局):松滋市国家税务局办税服票价格:4615.38、车辆厂牌:铃木牌/SUZUKIHJ125K-车辆型号:铃木牌/SUZUKIHJ125K-2A、车辆识别代号:LC6PCJ2Y5F1014537","taxClearanceDetails":[{"voucherNumber":"320160804000005082","taxType":"车辆购置税","itemName":"车辆购置税","taxPeriod":"2016-08-04至2016-08-04","date":"2016-08-04461.54","amount":""},{"voucherNumber":"320160804000005082","taxType":"车辆购置税","itemName":"滞纳金","taxPeriod":"2016-08-04至2016-08-04","date":"2016-08-044.85","amount":""}]},"ftype":0,"height":712,"orgHeight":712,"orgWidth":1080,"prism_keyValueInfo":[{"key":"issueDate","keyProb":100,"value":"20168月4日","valuePos":[{"x":458,"y":129},{"x":458,"y":110},{"x":639,"y":113},{"x":638,"y":131}],"valueProb":100},{"key":"certificateNumber","keyProb":99,"value":"2014100285","valuePos":[{"x":810,"y":87},{"x":997,"y":83},{"x":997,"y":103},{"x":810,"y":106}],"valueProb":99},{"key":"taxAuthorityName","keyProb":87,"value":"格","valuePos":[{"x":840,"y":103},{"x":840,"y":128},{"x":825,"y":128},{"x":825,"y":103}],"valueProb":87},{"key":"formType","keyProb":100,"value":"第一联","valuePos":[{"x":1036,"y":247},{"x":1051,"y":247},{"x":1051,"y":289},{"x":1036,"y":289}],"valueProb":100},{"key":"taxNumbe","keyProb":100,"value":"","valueProb":100},{"key":"name","keyProb":100,"value":"","valueProb":100},{"key":"totalAmountInWords","keyProb":100,"value":"肆佰陆拾陆元叁角玖分","valuePos":[{"x":239,"y":498},{"x":395,"y":496},{"x":395,"y":514},{"x":239,"y":515}],"valueProb":100},{"key":"totalAmount","keyProb":100,"value":"466.39","valuePos":[{"x":892,"y":494},{"x":957,"y":493},{"x":957,"y":508},{"x":893,"y":510}],"valueProb":100},{"key":"drawer","keyProb":100,"value":"","valueProb":100},{"key":"remarks","keyProb":100,"value":"(20141)鄂国证00285001正常申报一般申报滞纳金自行申报松滋市街河市镇现:主管税务所(科、分局):松滋市国家税务局办税服票价格:4615.38、车辆厂牌:铃木牌/SUZUKIHJ125K-车辆型号:铃木牌/SUZUKIHJ125K-2A、车辆识别代号:LC6PCJ2Y5F1014537","valuePos":[{"x":966,"y":538},{"x":966,"y":663},{"x":610,"y":663},{"x":610,"y":538}],"valueProb":100},{"key":"taxClearanceDetails","keyProb":100,"value":"[{\"voucherNumber\":\"320160804000005082\",\"taxType\":\"车辆购置税\",\"itemName\":\"车辆购置税\",\"taxPeriod\":\"2016-08-04至2016-08-04\",\"date\":\"2016-08-04461.54\",\"amount\":\"\"},{\"voucherNumber\":\"320160804000005082\",\"taxType\":\"车辆购置税\",\"itemName\":\"滞纳金\",\"taxPeriod\":\"2016-08-04至2016-08-04\",\"date\":\"2016-08-044.85\",\"amount\":\"\"}]","valueProb":100}],"sliceRect":{"x0":0,"y0":0,"x1":1077,"y1":0,"x2":1078,"y2":709,"x3":0,"y3":704},"width":1080}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSocialSecurityCardResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeSocialSecurityCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeSocialSecurityCardResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSocialSecurityCardVersionIIRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01zpM9bJ1Pa5pCwJat7_!!6000000001856-0-tps-282-179.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSocialSecurityCardVersionIIResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"angle":0,"data":{"issueDate":"20168月4日","certificateNumber":"2014100285","taxAuthorityName":"格","formType":"第一联","taxNumbe":"","name":"","totalAmountInWords":"肆佰陆拾陆元叁角玖分","totalAmount":"466.39","drawer":"","remarks":"(20141)鄂国证00285001正常申报一般申报滞纳金自行申报松滋市街河市镇现:主管税务所(科、分局):松滋市国家税务局办税服票价格:4615.38、车辆厂牌:铃木牌/SUZUKIHJ125K-车辆型号:铃木牌/SUZUKIHJ125K-2A、车辆识别代号:LC6PCJ2Y5F1014537","taxClearanceDetails":[{"voucherNumber":"320160804000005082","taxType":"车辆购置税","itemName":"车辆购置税","taxPeriod":"2016-08-04至2016-08-04","date":"2016-08-04461.54","amount":""},{"voucherNumber":"320160804000005082","taxType":"车辆购置税","itemName":"滞纳金","taxPeriod":"2016-08-04至2016-08-04","date":"2016-08-044.85","amount":""}]},"ftype":0,"height":712,"orgHeight":712,"orgWidth":1080,"prism_keyValueInfo":[{"key":"issueDate","keyProb":100,"value":"20168月4日","valuePos":[{"x":458,"y":129},{"x":458,"y":110},{"x":639,"y":113},{"x":638,"y":131}],"valueProb":100},{"key":"certificateNumber","keyProb":99,"value":"2014100285","valuePos":[{"x":810,"y":87},{"x":997,"y":83},{"x":997,"y":103},{"x":810,"y":106}],"valueProb":99},{"key":"taxAuthorityName","keyProb":87,"value":"格","valuePos":[{"x":840,"y":103},{"x":840,"y":128},{"x":825,"y":128},{"x":825,"y":103}],"valueProb":87},{"key":"formType","keyProb":100,"value":"第一联","valuePos":[{"x":1036,"y":247},{"x":1051,"y":247},{"x":1051,"y":289},{"x":1036,"y":289}],"valueProb":100},{"key":"taxNumbe","keyProb":100,"value":"","valueProb":100},{"key":"name","keyProb":100,"value":"","valueProb":100},{"key":"totalAmountInWords","keyProb":100,"value":"肆佰陆拾陆元叁角玖分","valuePos":[{"x":239,"y":498},{"x":395,"y":496},{"x":395,"y":514},{"x":239,"y":515}],"valueProb":100},{"key":"totalAmount","keyProb":100,"value":"466.39","valuePos":[{"x":892,"y":494},{"x":957,"y":493},{"x":957,"y":508},{"x":893,"y":510}],"valueProb":100},{"key":"drawer","keyProb":100,"value":"","valueProb":100},{"key":"remarks","keyProb":100,"value":"(20141)鄂国证00285001正常申报一般申报滞纳金自行申报松滋市街河市镇现:主管税务所(科、分局):松滋市国家税务局办税服票价格:4615.38、车辆厂牌:铃木牌/SUZUKIHJ125K-车辆型号:铃木牌/SUZUKIHJ125K-2A、车辆识别代号:LC6PCJ2Y5F1014537","valuePos":[{"x":966,"y":538},{"x":966,"y":663},{"x":610,"y":663},{"x":610,"y":538}],"valueProb":100},{"key":"taxClearanceDetails","keyProb":100,"value":"[{\"voucherNumber\":\"320160804000005082\",\"taxType\":\"车辆购置税\",\"itemName\":\"车辆购置税\",\"taxPeriod\":\"2016-08-04至2016-08-04\",\"date\":\"2016-08-04461.54\",\"amount\":\"\"},{\"voucherNumber\":\"320160804000005082\",\"taxType\":\"车辆购置税\",\"itemName\":\"滞纳金\",\"taxPeriod\":\"2016-08-04至2016-08-04\",\"date\":\"2016-08-044.85\",\"amount\":\"\"}]","valueProb":100}],"sliceRect":{"x0":0,"y0":0,"x1":1077,"y1":0,"x2":1078,"y2":709,"x3":0,"y3":704},"width":1080}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSocialSecurityCardVersionIIResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeSocialSecurityCardVersionIIResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeSocialSecurityCardVersionIIResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableOcrRequest extends $dara.Model {
  /**
   * @example
   * "false"
   */
  isHandWriting?: string;
  /**
   * @example
   * false
   */
  lineLess?: boolean;
  /**
   * @example
   * true
   */
  needRotate?: boolean;
  /**
   * @example
   * false
   */
  skipDetection?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      isHandWriting: 'IsHandWriting',
      lineLess: 'LineLess',
      needRotate: 'NeedRotate',
      skipDetection: 'SkipDetection',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHandWriting: 'string',
      lineLess: 'boolean',
      needRotate: 'boolean',
      skipDetection: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableOcrResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableOcrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeTableOcrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeTableOcrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxClearanceCertificateRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/imgextra/i1/O1CN0131X3Xs1d1CHG8oypS_!!6000000003675-0-tps-1080-712.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxClearanceCertificateResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"angle":0,"data":{"issueDate":"20168月4日","certificateNumber":"2014100285","taxAuthorityName":"格","formType":"第一联","taxNumbe":"","name":"","totalAmountInWords":"肆佰陆拾陆元叁角玖分","totalAmount":"466.39","drawer":"","remarks":"(20141)鄂国证00285001正常申报一般申报滞纳金自行申报松滋市街河市镇现:主管税务所(科、分局):松滋市国家税务局办税服票价格:4615.38、车辆厂牌:铃木牌/SUZUKIHJ125K-车辆型号:铃木牌/SUZUKIHJ125K-2A、车辆识别代号:LC6PCJ2Y5F1014537","taxClearanceDetails":[{"voucherNumber":"320160804000005082","taxType":"车辆购置税","itemName":"车辆购置税","taxPeriod":"2016-08-04至2016-08-04","date":"2016-08-04461.54","amount":""},{"voucherNumber":"320160804000005082","taxType":"车辆购置税","itemName":"滞纳金","taxPeriod":"2016-08-04至2016-08-04","date":"2016-08-044.85","amount":""}]},"ftype":0,"height":712,"orgHeight":712,"orgWidth":1080,"prism_keyValueInfo":[{"key":"issueDate","keyProb":100,"value":"20168月4日","valuePos":[{"x":458,"y":129},{"x":458,"y":110},{"x":639,"y":113},{"x":638,"y":131}],"valueProb":100},{"key":"certificateNumber","keyProb":99,"value":"2014100285","valuePos":[{"x":810,"y":87},{"x":997,"y":83},{"x":997,"y":103},{"x":810,"y":106}],"valueProb":99},{"key":"taxAuthorityName","keyProb":87,"value":"格","valuePos":[{"x":840,"y":103},{"x":840,"y":128},{"x":825,"y":128},{"x":825,"y":103}],"valueProb":87},{"key":"formType","keyProb":100,"value":"第一联","valuePos":[{"x":1036,"y":247},{"x":1051,"y":247},{"x":1051,"y":289},{"x":1036,"y":289}],"valueProb":100},{"key":"taxNumbe","keyProb":100,"value":"","valueProb":100},{"key":"name","keyProb":100,"value":"","valueProb":100},{"key":"totalAmountInWords","keyProb":100,"value":"肆佰陆拾陆元叁角玖分","valuePos":[{"x":239,"y":498},{"x":395,"y":496},{"x":395,"y":514},{"x":239,"y":515}],"valueProb":100},{"key":"totalAmount","keyProb":100,"value":"466.39","valuePos":[{"x":892,"y":494},{"x":957,"y":493},{"x":957,"y":508},{"x":893,"y":510}],"valueProb":100},{"key":"drawer","keyProb":100,"value":"","valueProb":100},{"key":"remarks","keyProb":100,"value":"(20141)鄂国证00285001正常申报一般申报滞纳金自行申报松滋市街河市镇现:主管税务所(科、分局):松滋市国家税务局办税服票价格:4615.38、车辆厂牌:铃木牌/SUZUKIHJ125K-车辆型号:铃木牌/SUZUKIHJ125K-2A、车辆识别代号:LC6PCJ2Y5F1014537","valuePos":[{"x":966,"y":538},{"x":966,"y":663},{"x":610,"y":663},{"x":610,"y":538}],"valueProb":100},{"key":"taxClearanceDetails","keyProb":100,"value":"[{\"voucherNumber\":\"320160804000005082\",\"taxType\":\"车辆购置税\",\"itemName\":\"车辆购置税\",\"taxPeriod\":\"2016-08-04至2016-08-04\",\"date\":\"2016-08-04461.54\",\"amount\":\"\"},{\"voucherNumber\":\"320160804000005082\",\"taxType\":\"车辆购置税\",\"itemName\":\"滞纳金\",\"taxPeriod\":\"2016-08-04至2016-08-04\",\"date\":\"2016-08-044.85\",\"amount\":\"\"}]","valueProb":100}],"sliceRect":{"x0":0,"y0":0,"x1":1077,"y1":0,"x2":1078,"y2":709,"x3":0,"y3":704},"width":1080}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxClearanceCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeTaxClearanceCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeTaxClearanceCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1.OicXebviK0jSZFNXXaApXXa-364-982.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * { 	"data": { 		"licensePlateNumber": "B-30T76", 		"date": "2018-09-28", 		"invoiceCode": "150001583910", 		"invoiceNumber": "22566685", 		"mileage": "22.8", 		"fare": "¥57.00", 		"dropOffTime": "01：40", 		"pickUpTime": "01：19" 	}, 	"ftype": 0, 	"height": 982, 	"orgHeight": 982, 	"orgWidth": 364,  	"width": 364 }
   */
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeTaxiInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeTaxiInvoiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeThaiRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  needRotate?: boolean;
  /**
   * @example
   * false
   */
  outputCharInfo?: boolean;
  /**
   * @example
   * false
   */
  outputTable?: boolean;
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeThaiResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {"angle":0,"content":"4สัป าR  ๗  เริมเห็นผิวที่เรียบเบียน  วิรีการใช้ LEshop uA","height":887,"orgHeight":887,"orgWidth":790,"prism_version":"1.0.9","prism_wnum":26,"prism_wordsInfo":[{"angle":-89,"direction":0,"height":210,"pos":[{"x":285,"y":14},{"x":495,"y":14},{"x":495,"y":63},{"x":285,"y":63}],"prob":85,"width":48,"word":"4สัป าR ","x":365,"y":-66}],"width":790}
   */
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeThaiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeThaiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeThaiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTollInvoiceRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/imgextra/i3/O1CN01uUHo411DCwPsBWDMJ_!!6000000000181-0-tps-199-254.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTollInvoiceResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"angle":0,"data":{"title":"苏宁用打发","formType":"发票联","invoiceCode":"132001681414","invoiceNumber":"53184969","date":"","time":"","vehicleType":"客1","entranceName":"江","exitName":"","totalAmount":"0.00"},"ftype":0,"height":254,"orgHeight":254,"orgWidth":199,"prism_keyValueInfo":[{"key":"title","keyProb":98,"value":"苏宁用打发","valuePos":[{"x":174,"y":20},{"x":174,"y":35},{"x":24,"y":34},{"x":24,"y":19}],"valueProb":98},{"key":"formType","keyProb":89,"value":"发票联","valuePos":[{"x":50,"y":41},{"x":131,"y":37},{"x":131,"y":52},{"x":50,"y":56}],"valueProb":89},{"key":"invoiceCode","keyProb":100,"value":"132001681414","valuePos":[{"x":150,"y":94},{"x":150,"y":105},{"x":63,"y":105},{"x":63,"y":94}],"valueProb":100},{"key":"invoiceNumber","keyProb":100,"value":"53184969","valuePos":[{"x":119,"y":109},{"x":119,"y":120},{"x":63,"y":120},{"x":63,"y":109}],"valueProb":100},{"key":"date","keyProb":100,"value":"","valueProb":100},{"key":"time","keyProb":100,"value":"","valueProb":100},{"key":"vehicleType","keyProb":95,"value":"客1","valuePos":[{"x":40,"y":180},{"x":40,"y":192},{"x":28,"y":192},{"x":28,"y":180}],"valueProb":95},{"key":"entranceName","keyProb":98,"value":"江","valuePos":[{"x":96,"y":128},{"x":96,"y":140},{"x":39,"y":140},{"x":39,"y":128}],"valueProb":98},{"key":"exitName","keyProb":100,"value":"","valueProb":100},{"key":"totalAmount","keyProb":85,"value":"0.00","valuePos":[{"x":70,"y":181},{"x":70,"y":190},{"x":55,"y":190},{"x":55,"y":181}],"valueProb":85}],"sliceRect":{"x0":0,"y0":2,"x1":196,"y1":1,"x2":198,"y2":251,"x3":0,"y3":252},"width":199}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTollInvoiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeTollInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeTollInvoiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTradeMarkCertificationRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1SZiGdfb2gK0jSZK9XXaEgFXa-1654-2340.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTradeMarkCertificationResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTradeMarkCertificationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeTradeMarkCertificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeTradeMarkCertificationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainInvoiceRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1u1HrUmzqK1RjSZFpXXakSXXa-1200-900.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainInvoiceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainInvoiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeTrainInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeTrainInvoiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUsedCarInvoiceRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01NiY6e220zrtvT6dFJ_!!6000000006921-0-tps-3468-4624.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUsedCarInvoiceResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"angle":270,"data":{"title":"二手车销售统一发票","formType":"发票联","invoiceDate":"2021-03-19","invoiceCode":"021002000117","invoiceNumber":"00713899","printedInvoiceCode":"021002000117","printedInvoiceNumber":"00713899","taxCode":"03300173880207579449","purchaserName":"李壮","purchaserCode":"210105198712104354","purchaserAddress":"沈阳市皇姑区泰山路69-50号3-1-3","purchaserPhoneNumber":"18947857689","sellerName":"张鹏","sellerCode":"210105197807263716","sellerAddress":"沈阳市皇姑区宁山东路甲2号3-5-2","sellerPhoneNumber":"17641587456","licensePlateNumber":"辽A6L136","certificateNumber":"210008639051","vehicleType":"小型轿车","vinCode":"WAUYGB4H3FN031973","brandMode":"奥迪WAUYGB4H","vehicleAdministrationName":"沈阳市车管所","totalAmountInWords":"壹万圆整","totalAmount":"10000.00","marketName":"沈阳车顶尚二手车交易市场有限公司","marketTaxNumber":"91210106MA0TURHE35","marketAddress":"沈阳市铁西区北二西路29甲4号(9门)","marketBankAccountInfo":"葫芦岛银行股份有限公司沈阳分行20008411159000000025","marketPhoneNumber":"15940287043","remarks":"","drawer":"张丽"},"ftype":0,"height":4624,"orgHeight":4624,"orgWidth":3468,"prism_keyValueInfo":[{"key":"title","keyProb":100,"value":"二手车销售统一发票","valuePos":[{"x":2715,"y":228},{"x":2715,"y":347},{"x":1283,"y":352},{"x":1282,"y":233}],"valueProb":100},{"key":"formType","keyProb":85,"value":"发票联","valuePos":[{"x":2289,"y":401},{"x":2290,"y":510},{"x":1701,"y":512},{"x":1701,"y":403}],"valueProb":85},{"key":"invoiceDate","keyProb":100,"value":"2021-03-19","valuePos":[{"x":728,"y":568},{"x":729,"y":504},{"x":1142,"y":509},{"x":1141,"y":573}],"valueProb":100},{"key":"invoiceCode","keyProb":100,"value":"021002000117","valuePos":[{"x":3090,"y":376},{"x":3676,"y":359},{"x":3678,"y":432},{"x":3093,"y":450}],"valueProb":100},{"key":"invoiceNumber","keyProb":100,"value":"00713899","valuePos":[{"x":3099,"y":457},{"x":3470,"y":449},{"x":3472,"y":523},{"x":3100,"y":530}],"valueProb":100},{"key":"printedInvoiceCode","keyProb":100,"value":"021002000117","valuePos":[{"x":1307,"y":621},{"x":1308,"y":683},{"x":812,"y":688},{"x":812,"y":626}],"valueProb":100},{"key":"printedInvoiceNumber","keyProb":100,"value":"00713899","valuePos":[{"x":811,"y":797},{"x":812,"y":731},{"x":1155,"y":738},{"x":1153,"y":803}],"valueProb":100},{"key":"taxCode","keyProb":100,"value":"03300173880207579449","valuePos":[{"x":3005,"y":755},{"x":3005,"y":818},{"x":2184,"y":825},{"x":2183,"y":761}],"valueProb":100},{"key":"purchaserName","keyProb":100,"value":"李壮","valuePos":[{"x":1139,"y":977},{"x":1260,"y":977},{"x":1260,"y":1044},{"x":1139,"y":1044}],"valueProb":100},{"key":"purchaserCode","keyProb":100,"value":"210105198712104354","valuePos":[{"x":3502,"y":992},{"x":3502,"y":1054},{"x":2802,"y":1054},{"x":2802,"y":992}],"valueProb":100},{"key":"purchaserAddress","keyProb":100,"value":"沈阳市皇姑区泰山路69-50号3-1-3","valuePos":[{"x":1138,"y":1105},{"x":1988,"y":1105},{"x":1988,"y":1176},{"x":1138,"y":1176}],"valueProb":100},{"key":"purchaserPhoneNumber","keyProb":100,"value":"18947857689","valuePos":[{"x":2996,"y":1115},{"x":3466,"y":1115},{"x":3466,"y":1181},{"x":2996,"y":1181}],"valueProb":100},{"key":"sellerName","keyProb":100,"value":"张鹏","valuePos":[{"x":1137,"y":1227},{"x":1259,"y":1227},{"x":1259,"y":1296},{"x":1137,"y":1296}],"valueProb":100},{"key":"sellerCode","keyProb":100,"value":"210105197807263716","valuePos":[{"x":3501,"y":1245},{"x":3501,"y":1305},{"x":2807,"y":1307},{"x":2806,"y":1247}],"valueProb":100},{"key":"sellerAddress","keyProb":100,"value":"沈阳市皇姑区宁山东路甲2号3-5-2","valuePos":[{"x":1991,"y":1353},{"x":1991,"y":1422},{"x":1137,"y":1426},{"x":1136,"y":1356}],"valueProb":100},{"key":"sellerPhoneNumber","keyProb":100,"value":"17641587456","valuePos":[{"x":3460,"y":1372},{"x":3461,"y":1433},{"x":2996,"y":1435},{"x":2996,"y":1373}],"valueProb":100},{"key":"licensePlateNumber","keyProb":100,"value":"辽A6L136","valuePos":[{"x":1470,"y":1471},{"x":1471,"y":1541},{"x":1140,"y":1544},{"x":1139,"y":1474}],"valueProb":100},{"key":"certificateNumber","keyProb":100,"value":"210008639051","valuePos":[{"x":2433,"y":1489},{"x":2433,"y":1549},{"x":1981,"y":1553},{"x":1981,"y":1493}],"valueProb":100},{"key":"vehicleType","keyProb":100,"value":"小型轿车","valuePos":[{"x":2994,"y":1498},{"x":3229,"y":1498},{"x":3229,"y":1562},{"x":2994,"y":1562}],"valueProb":100},{"key":"vinCode","keyProb":100,"value":"WAUYGB4H3FN031973","valuePos":[{"x":1601,"y":1587},{"x":1601,"y":1633},{"x":1138,"y":1638},{"x":1137,"y":1591}],"valueProb":100},{"key":"brandMode","keyProb":100,"value":"奥迪WAUYGB4H","valuePos":[{"x":2330,"y":1616},{"x":2330,"y":1677},{"x":1986,"y":1677},{"x":1986,"y":1616}],"valueProb":100},{"key":"vehicleAdministrationName","keyProb":100,"value":"沈阳市车管所","valuePos":[{"x":3347,"y":1621},{"x":3347,"y":1690},{"x":2989,"y":1693},{"x":2989,"y":1624}],"valueProb":100},{"key":"totalAmountInWords","keyProb":100,"value":"壹万圆整","valuePos":[{"x":1528,"y":1730},{"x":1529,"y":1799},{"x":1292,"y":1801},{"x":1291,"y":1732}],"valueProb":100},{"key":"totalAmount","keyProb":100,"value":"10000.00","valuePos":[{"x":3479,"y":1746},{"x":3479,"y":1816},{"x":3048,"y":1820},{"x":3047,"y":1749}],"valueProb":100},{"key":"marketName","keyProb":100,"value":"沈阳车顶尚二手车交易市场有限公司","valuePos":[{"x":2037,"y":2282},{"x":2037,"y":2354},{"x":1124,"y":2362},{"x":1124,"y":2290}],"valueProb":100},{"key":"marketTaxNumber","keyProb":96,"value":"91210106MA0TURHE35","valuePos":[{"x":3079,"y":2255},{"x":3079,"y":2314},{"x":2397,"y":2321},{"x":2396,"y":2261}],"valueProb":96},{"key":"marketAddress","keyProb":100,"value":"沈阳市铁西区北二西路29甲4号(9门)","valuePos":[{"x":3306,"y":2378},{"x":3307,"y":2445},{"x":2399,"y":2453},{"x":2399,"y":2387}],"valueProb":100},{"key":"marketBankAccountInfo","keyProb":100,"value":"葫芦岛银行股份有限公司沈阳分行20008411159000000025","valuePos":[{"x":2522,"y":2480},{"x":2523,"y":2554},{"x":1109,"y":2567},{"x":1109,"y":2494}],"valueProb":100},{"key":"marketPhoneNumber","keyProb":100,"value":"15940287043","valuePos":[{"x":3172,"y":2579},{"x":3173,"y":2518},{"x":3603,"y":2530},{"x":3601,"y":2590}],"valueProb":100},{"key":"remarks","keyProb":100,"value":"","valueProb":100},{"key":"drawer","keyProb":100,"value":"张丽","valuePos":[{"x":2787,"y":2819},{"x":2789,"y":2756},{"x":2914,"y":2761},{"x":2911,"y":2823}],"valueProb":100}],"sliceRect":{"x0":103,"y0":372,"x1":3174,"y1":428,"x2":3041,"y2":4364,"x3":161,"y3":4360},"width":3468}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUsedCarInvoiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeUsedCarInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeUsedCarInvoiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleCertificationRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/imgextra/i1/O1CN0196uE7i1FXD9TpYqLy_!!6000000000496-0-tps-3024-4032.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleCertificationResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"data":{"certificateNumber":"YG170ZLM1234567","issueDate":"2021年01月01日","manufactureName":"中国重汽集团济南卡车股份有限公司","vehicleBrand":"豪沃牌","vehicleName":"自卸汽车","vehicleModel":"ZZ3257N414GE1","vinCode":"LZZ1ELSEXLW644557","vehicleColor":"水晶红","chassisModel":"ZZ3257N384GE1","chassisId":"2578516","chassisCertificateNumber":"","engineModel":"WP10H400E50","engineNumber":"7520K064819","fuelType":"柴油","displacement":"9500","power":"294","emissionStandard":"GB17691-2005国V","fuelConsumption":"","overallDimension":"8920×2550×3450","containerDimension":"6000×2350×1500","springNumber":"11/12","tireNumber":"10","tireSize":"12.00R2016PR","frontWheelTrack":"2022","rearWheelTrack":"1850/1850","wheelbase":"4125+1350","axleLoad":"7000/18000(二轴组)","axleNumber":"3","steeringForm":"方向盘","totalWeight":"25000","equipmentWeight":"12500","maximumLadenMass":"12370","massUtilizationCoefficient":"1.00","tractionWeight":"","MaximumLoadMass":"","cabPassengerCapacity":"2","passengerCapacity":"","maxDesignSpeed":"80","manufactureDate":"2020年12月03日","remarks":"备注:货厢自卸方式为后卸。"},"ftype":1,"height":4032,"orgHeight":4032,"orgWidth":3024,"prism_keyValueInfo":[{"key":"certificateNumber","keyProb":100,"value":"YG170ZLM1234567","valuePos":[{"x":554,"y":85},{"x":932,"y":84},{"x":932,"y":133},{"x":554,"y":135}],"valueProb":100},{"key":"issueDate","keyProb":100,"value":"2021年01月01日","valuePos":[{"x":1637,"y":132},{"x":1639,"y":82},{"x":2002,"y":91},{"x":2001,"y":142}],"valueProb":100},{"key":"manufactureName","keyProb":100,"value":"中国重汽集团济南卡车股份有限公司","valuePos":[{"x":552,"y":212},{"x":554,"y":164},{"x":1265,"y":180},{"x":1264,"y":229}],"valueProb":100},{"key":"vehicleBrand","keyProb":100,"value":"豪沃牌","valuePos":[{"x":554,"y":292},{"x":556,"y":240},{"x":693,"y":243},{"x":692,"y":296}],"valueProb":100},{"key":"vehicleName","keyProb":100,"value":"自卸汽车","valuePos":[{"x":1338,"y":257},{"x":1338,"y":307},{"x":1161,"y":307},{"x":1161,"y":257}],"valueProb":100},{"key":"vehicleModel","keyProb":100,"value":"ZZ3257N414GE1","valuePos":[{"x":550,"y":366},{"x":551,"y":319},{"x":846,"y":325},{"x":845,"y":372}],"valueProb":100},{"key":"vinCode","keyProb":100,"value":"LZZ1ELSEXLW644557","valuePos":[{"x":1636,"y":373},{"x":1638,"y":328},{"x":2016,"y":352},{"x":2013,"y":397}],"valueProb":100},{"key":"vehicleColor","keyProb":100,"value":"水晶红","valuePos":[{"x":554,"y":447},{"x":554,"y":395},{"x":690,"y":398},{"x":689,"y":449}],"valueProb":100},{"key":"chassisModel","keyProb":100,"value":"ZZ3257N384GE1","valuePos":[{"x":550,"y":521},{"x":550,"y":474},{"x":848,"y":480},{"x":847,"y":526}],"valueProb":100},{"key":"chassisId","keyProb":100,"value":"2578516","valuePos":[{"x":1635,"y":529},{"x":1637,"y":485},{"x":1801,"y":489},{"x":1800,"y":534}],"valueProb":100},{"key":"chassisCertificateNumber","keyProb":100,"value":"","valueProb":100},{"key":"engineModel","keyProb":100,"value":"WP10H400E50","valuePos":[{"x":1634,"y":607},{"x":1635,"y":562},{"x":1886,"y":570},{"x":1884,"y":614}],"valueProb":100},{"key":"engineNumber","keyProb":100,"value":"7520K064819","valuePos":[{"x":548,"y":672},{"x":549,"y":631},{"x":804,"y":635},{"x":804,"y":676}],"valueProb":100},{"key":"fuelType","keyProb":100,"value":"柴油","valuePos":[{"x":641,"y":705},{"x":641,"y":755},{"x":550,"y":755},{"x":550,"y":705}],"valueProb":100},{"key":"displacement","keyProb":100,"value":"9500","valuePos":[{"x":1631,"y":760},{"x":1631,"y":719},{"x":1728,"y":722},{"x":1727,"y":762}],"valueProb":100},{"key":"power","keyProb":100,"value":"294","valuePos":[{"x":2002,"y":729},{"x":2002,"y":769},{"x":1930,"y":769},{"x":1930,"y":729}],"valueProb":100},{"key":"emissionStandard","keyProb":100,"value":"GB17691-2005国V","valuePos":[{"x":545,"y":828},{"x":545,"y":782},{"x":904,"y":789},{"x":903,"y":835}],"valueProb":100},{"key":"fuelConsumption","keyProb":100,"value":"","valueProb":100},{"key":"overallDimension","keyProb":100,"value":"8920×2550×3450","valuePos":[{"x":547,"y":979},{"x":548,"y":939},{"x":1042,"y":950},{"x":1041,"y":989}],"valueProb":100},{"key":"containerDimension","keyProb":100,"value":"6000×2350×1500","valuePos":[{"x":1628,"y":992},{"x":1629,"y":949},{"x":2119,"y":962},{"x":2117,"y":1005}],"valueProb":100},{"key":"springNumber","keyProb":100,"value":"11/12","valuePos":[{"x":662,"y":1017},{"x":663,"y":1059},{"x":549,"y":1060},{"x":548,"y":1018}],"valueProb":100},{"key":"tireNumber","keyProb":100,"value":"10","valuePos":[{"x":1676,"y":1032},{"x":1676,"y":1073},{"x":1628,"y":1073},{"x":1628,"y":1032}],"valueProb":100},{"key":"tireSize","keyProb":100,"value":"12.00R2016PR","valuePos":[{"x":545,"y":1133},{"x":546,"y":1094},{"x":839,"y":1099},{"x":839,"y":1139}],"valueProb":100},{"key":"frontWheelTrack","keyProb":100,"value":"2022","valuePos":[{"x":640,"y":1169},{"x":640,"y":1208},{"x":545,"y":1210},{"x":544,"y":1170}],"valueProb":100},{"key":"rearWheelTrack","keyProb":100,"value":"1850/1850","valuePos":[{"x":1148,"y":1223},{"x":1149,"y":1183},{"x":1349,"y":1186},{"x":1349,"y":1227}],"valueProb":100},{"key":"wheelbase","keyProb":100,"value":"4125+1350","valuePos":[{"x":546,"y":1286},{"x":547,"y":1244},{"x":752,"y":1248},{"x":751,"y":1290}],"valueProb":100},{"key":"axleLoad","keyProb":100,"value":"7000/18000(二轴组)","valuePos":[{"x":539,"y":1364},{"x":539,"y":1316},{"x":946,"y":1325},{"x":945,"y":1372}],"valueProb":100},{"key":"axleNumber","keyProb":100,"value":"3","valuePos":[{"x":567,"y":1398},{"x":567,"y":1438},{"x":541,"y":1438},{"x":541,"y":1398}],"valueProb":100},{"key":"steeringForm","keyProb":100,"value":"方向盘","valuePos":[{"x":1757,"y":1412},{"x":1757,"y":1463},{"x":1622,"y":1464},{"x":1622,"y":1413}],"valueProb":100},{"key":"totalWeight","keyProb":100,"value":"25000","valuePos":[{"x":536,"y":1512},{"x":538,"y":1471},{"x":658,"y":1475},{"x":657,"y":1515}],"valueProb":100},{"key":"equipmentWeight","keyProb":100,"value":"12500","valuePos":[{"x":1735,"y":1491},{"x":1736,"y":1532},{"x":1620,"y":1534},{"x":1620,"y":1492}],"valueProb":100},{"key":"maximumLadenMass","keyProb":100,"value":"12370","valuePos":[{"x":539,"y":1590},{"x":539,"y":1547},{"x":656,"y":1549},{"x":656,"y":1592}],"valueProb":100},{"key":"massUtilizationCoefficient","keyProb":100,"value":"1.00","valuePos":[{"x":1712,"y":1568},{"x":1712,"y":1608},{"x":1617,"y":1610},{"x":1616,"y":1569}],"valueProb":100},{"key":"tractionWeight","keyProb":100,"value":"","valueProb":100},{"key":"MaximumLoadMass","keyProb":100,"value":"","valueProb":100},{"key":"cabPassengerCapacity","keyProb":100,"value":"2","valuePos":[{"x":560,"y":1777},{"x":560,"y":1817},{"x":532,"y":1817},{"x":532,"y":1777}],"valueProb":100},{"key":"passengerCapacity","keyProb":100,"value":"","valueProb":100},{"key":"maxDesignSpeed","keyProb":100,"value":"80","valuePos":[{"x":581,"y":1931},{"x":581,"y":1971},{"x":530,"y":1971},{"x":530,"y":1931}],"valueProb":100},{"key":"manufactureDate","keyProb":100,"value":"2020年12月03日","valuePos":[{"x":840,"y":2003},{"x":841,"y":2048},{"x":523,"y":2052},{"x":522,"y":2006}],"valueProb":100},{"key":"remarks","keyProb":100,"value":"备注:货厢自卸方式为后卸。","valuePos":[{"x":620,"y":2080},{"x":620,"y":2130},{"x":54,"y":2134},{"x":53,"y":2083}],"valueProb":100}],"sliceRect":{"x0":330,"y0":466,"x1":2530,"y1":420,"x2":2544,"y2":3811,"x3":229,"y3":3746},"width":3024}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleCertificationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeVehicleCertificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeVehicleCertificationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleLicenseRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeVehicleLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeVehicleLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleRegistrationRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/imgextra/i1/O1CN01NA1F7A1cSO8cnFQ7m_!!6000000003599-0-tps-844-1125.jpg
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleRegistrationResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @example
   * {"codes":[{"data":"310007798232","points":[{"x":502,"y":6},{"x":768,"y":6},{"x":768,"y":52},{"x":502,"y":52}],"type":"Codabar"}],"data":{"barCode":"310007798232","vehicleOwnerInfo":"某某某限有限公司/统一社会信用代码/12345678682296194","registrationAuthority":"上海市公安局交通警察总队车辆管理所","registrationDate":"2021-04-28","registrationNumber":"沪AG12345","vehicleType":"小型轿车","vehicleBrand":"大众汽车牌","vehicleModel":"SVW7142BPV","vehicleColor":"","vinCode":"LSVCY6C49MN027789","isDomestic":"国产","engineNumber":"035154","engineType":"DUK","fuelType":"混合动力","displacement":"1395","power":"110","manufactureName":"上汽大众汽车有限公司","steeringForm":"方向盘","frontWheelTrack":"1584","rearWheelTrack":"1570","tireNumber":"4","tireSize":"215/60R1695V","springNumber":"","wheelbase":"2871","axleNumber":"2","overallDimension":"4948×1836×1469","containerDimension":"","totalWeight":"2190","permittedWeight":"","passengerCapacity":"","tractionWeight":"","cabPassengerCapacity":"","useNature":"租赁","acquisitionMethod":"购买","manufactureDate":"2021-03-16","issueAuthority":"上海市公安局交通警察总队","issueDate":"2021-04-28"},"ftype":0,"height":1125,"orgHeight":1125,"orgWidth":844,"prism_keyValueInfo":[{"key":"barCode","keyProb":96,"value":"310007798232","valuePos":[{"x":545,"y":45},{"x":735,"y":42},{"x":736,"y":53},{"x":545,"y":55}],"valueProb":96},{"key":"vehicleOwnerInfo","keyProb":100,"value":"某某某限有限公司/统一社会信用代码/12345678682296194","valuePos":[{"x":317,"y":70},{"x":723,"y":68},{"x":723,"y":84},{"x":318,"y":87}],"valueProb":100},{"key":"registrationAuthority","keyProb":100,"value":"上海市公安局交通警察总队车辆管理所","valuePos":[{"x":165,"y":89},{"x":369,"y":87},{"x":370,"y":112},{"x":166,"y":114}],"valueProb":100},{"key":"registrationDate","keyProb":100,"value":"2021-04-28","valuePos":[{"x":463,"y":93},{"x":538,"y":92},{"x":538,"y":104},{"x":464,"y":106}],"valueProb":100},{"key":"registrationNumber","keyProb":100,"value":"沪AG12345","valuePos":[{"x":733,"y":93},{"x":733,"y":107},{"x":669,"y":107},{"x":669,"y":93}],"valueProb":100},{"key":"vehicleType","keyProb":84,"value":"小型轿车","valuePos":[{"x":262,"y":588},{"x":262,"y":603},{"x":205,"y":603},{"x":205,"y":588}],"valueProb":84},{"key":"vehicleBrand","keyProb":100,"value":"大众汽车牌","valuePos":[{"x":569,"y":606},{"x":570,"y":592},{"x":643,"y":594},{"x":642,"y":608}],"valueProb":100},{"key":"vehicleModel","keyProb":99,"value":"SVW7142BPV","valuePos":[{"x":277,"y":616},{"x":277,"y":630},{"x":206,"y":630},{"x":206,"y":616}],"valueProb":99},{"key":"vehicleColor","keyProb":77,"value":"","valuePos":[{"x":585,"y":620},{"x":585,"y":635},{"x":569,"y":635},{"x":569,"y":620}],"valueProb":77},{"key":"vinCode","keyProb":100,"value":"LSVCY6C49MN027789","valuePos":[{"x":324,"y":645},{"x":324,"y":659},{"x":204,"y":659},{"x":204,"y":645}],"valueProb":100},{"key":"isDomestic","keyProb":96,"value":"国产","valuePos":[{"x":568,"y":662},{"x":569,"y":649},{"x":599,"y":650},{"x":599,"y":664}],"valueProb":96},{"key":"engineNumber","keyProb":100,"value":"035154","valuePos":[{"x":203,"y":686},{"x":204,"y":671},{"x":250,"y":672},{"x":250,"y":688}],"valueProb":100},{"key":"engineType","keyProb":100,"value":"DUK","valuePos":[{"x":594,"y":678},{"x":594,"y":692},{"x":568,"y":692},{"x":568,"y":678}],"valueProb":100},{"key":"fuelType","keyProb":100,"value":"混合动力","valuePos":[{"x":260,"y":702},{"x":260,"y":717},{"x":204,"y":717},{"x":204,"y":702}],"valueProb":100},{"key":"displacement","keyProb":100,"value":"1395","valuePos":[{"x":600,"y":707},{"x":600,"y":722},{"x":569,"y":722},{"x":569,"y":707}],"valueProb":100},{"key":"power","keyProb":100,"value":"110","valuePos":[{"x":687,"y":708},{"x":687,"y":723},{"x":663,"y":723},{"x":663,"y":708}],"valueProb":100},{"key":"manufactureName","keyProb":100,"value":"上汽大众汽车有限公司","valuePos":[{"x":342,"y":731},{"x":342,"y":746},{"x":205,"y":746},{"x":205,"y":731}],"valueProb":100},{"key":"steeringForm","keyProb":100,"value":"方向盘","valueProb":100},{"key":"frontWheelTrack","keyProb":100,"value":"1584","valuePos":[{"x":252,"y":760},{"x":252,"y":774},{"x":222,"y":774},{"x":222,"y":760}],"valueProb":100},{"key":"rearWheelTrack","keyProb":100,"value":"1570","valuePos":[{"x":370,"y":761},{"x":370,"y":775},{"x":340,"y":775},{"x":340,"y":761}],"valueProb":100},{"key":"tireNumber","keyProb":100,"value":"4","valuePos":[{"x":580,"y":766},{"x":580,"y":781},{"x":568,"y":781},{"x":568,"y":766}],"valueProb":100},{"key":"tireSize","keyProb":100,"value":"215/60R1695V","valuePos":[{"x":302,"y":788},{"x":302,"y":803},{"x":203,"y":803},{"x":203,"y":788}],"valueProb":100},{"key":"springNumber","keyProb":100,"value":"","valueProb":100},{"key":"wheelbase","keyProb":100,"value":"2871","valuePos":[{"x":232,"y":817},{"x":232,"y":831},{"x":202,"y":831},{"x":202,"y":817}],"valueProb":100},{"key":"axleNumber","keyProb":92,"value":"2","valuePos":[{"x":578,"y":825},{"x":578,"y":839},{"x":569,"y":839},{"x":569,"y":825}],"valueProb":92},{"key":"overallDimension","keyProb":100,"value":"4948×1836×1469","valuePos":[{"x":221,"y":857},{"x":222,"y":845},{"x":475,"y":850},{"x":474,"y":862}],"valueProb":100},{"key":"containerDimension","keyProb":100,"value":"","valueProb":100},{"key":"totalWeight","keyProb":100,"value":"2190","valuePos":[{"x":232,"y":904},{"x":232,"y":918},{"x":203,"y":918},{"x":203,"y":904}],"valueProb":100},{"key":"permittedWeight","keyProb":100,"value":"","valueProb":100},{"key":"passengerCapacity","keyProb":100,"value":"","valueProb":100},{"key":"tractionWeight","keyProb":100,"value":"","valueProb":100},{"key":"cabPassengerCapacity","keyProb":100,"value":"","valueProb":100},{"key":"useNature","keyProb":97,"value":"租赁","valuePos":[{"x":487,"y":968},{"x":487,"y":984},{"x":457,"y":984},{"x":457,"y":968}],"valueProb":97},{"key":"acquisitionMethod","keyProb":100,"value":"购买","valuePos":[{"x":230,"y":992},{"x":230,"y":1008},{"x":200,"y":1008},{"x":200,"y":992}],"valueProb":100},{"key":"manufactureDate","keyProb":100,"value":"2021-03-16","valuePos":[{"x":455,"y":1012},{"x":456,"y":999},{"x":529,"y":1000},{"x":529,"y":1013}],"valueProb":100},{"key":"issueAuthority","keyProb":100,"value":"上海市公安局交通警察总队","valuePos":[{"x":684,"y":895},{"x":684,"y":980},{"x":599,"y":980},{"x":599,"y":895}],"valueProb":100},{"key":"issueDate","keyProb":100,"value":"2021-04-28","valuePos":[{"x":642,"y":1018},{"x":642,"y":1002},{"x":719,"y":1007},{"x":718,"y":1022}],"valueProb":100}],"sliceRect":{"x0":23,"y0":44,"x1":795,"y1":38,"x2":793,"y2":1124,"x3":12,"y3":1106},"width":844}
   */
  data?: string;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleRegistrationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeVehicleRegistrationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeVehicleRegistrationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeWaybillRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1lOe6VqL7gK0jSZFBXXXZZpXa-480-640.png
   */
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeWaybillResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeWaybillResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeWaybillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeWaybillResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBusinessLicenseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  companyName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  creditCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  legalPerson?: string;
  static names(): { [key: string]: string } {
    return {
      companyName: 'CompanyName',
      creditCode: 'CreditCode',
      legalPerson: 'LegalPerson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyName: 'string',
      creditCode: 'string',
      legalPerson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBusinessLicenseResponseBody extends $dara.Model {
  data?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBusinessLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyBusinessLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyBusinessLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVATInvoiceRequest extends $dara.Model {
  invoiceCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  invoiceDate?: string;
  invoiceKind?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  invoiceNo?: string;
  invoiceSum?: string;
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      invoiceCode: 'InvoiceCode',
      invoiceDate: 'InvoiceDate',
      invoiceKind: 'InvoiceKind',
      invoiceNo: 'InvoiceNo',
      invoiceSum: 'InvoiceSum',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoiceCode: 'string',
      invoiceDate: 'string',
      invoiceKind: 'number',
      invoiceNo: 'string',
      invoiceSum: 'string',
      verifyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVATInvoiceResponseBody extends $dara.Model {
  data?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVATInvoiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyVATInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyVATInvoiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ocr-api", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 全文识别高精版
   * 
   * @param request - RecognizeAdvancedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeAdvancedResponse
   */
  async recognizeAdvancedWithOptions(request: RecognizeAdvancedRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeAdvancedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!$dara.isNull(request.needSortPage)) {
      query["NeedSortPage"] = request.needSortPage;
    }

    if (!$dara.isNull(request.noStamp)) {
      query["NoStamp"] = request.noStamp;
    }

    if (!$dara.isNull(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!$dara.isNull(request.outputFigure)) {
      query["OutputFigure"] = request.outputFigure;
    }

    if (!$dara.isNull(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!$dara.isNull(request.paragraph)) {
      query["Paragraph"] = request.paragraph;
    }

    if (!$dara.isNull(request.row)) {
      query["Row"] = request.row;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeAdvanced",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeAdvancedResponse>(await this.callApi(params, req, runtime), new RecognizeAdvancedResponse({}));
  }

  /**
   * 全文识别高精版
   * 
   * @param request - RecognizeAdvancedRequest
   * @returns RecognizeAdvancedResponse
   */
  async recognizeAdvanced(request: RecognizeAdvancedRequest): Promise<RecognizeAdvancedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeAdvancedWithOptions(request, runtime);
  }

  /**
   * 航空行程单
   * 
   * @param request - RecognizeAirItineraryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeAirItineraryResponse
   */
  async recognizeAirItineraryWithOptions(request: RecognizeAirItineraryRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeAirItineraryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeAirItinerary",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeAirItineraryResponse>(await this.callApi(params, req, runtime), new RecognizeAirItineraryResponse({}));
  }

  /**
   * 航空行程单
   * 
   * @param request - RecognizeAirItineraryRequest
   * @returns RecognizeAirItineraryResponse
   */
  async recognizeAirItinerary(request: RecognizeAirItineraryRequest): Promise<RecognizeAirItineraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeAirItineraryWithOptions(request, runtime);
  }

  /**
   * 统一Api
   * 
   * @param tmpReq - RecognizeAllTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeAllTextResponse
   */
  async recognizeAllTextWithOptions(tmpReq: RecognizeAllTextRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeAllTextResponse> {
    tmpReq.validate();
    let request = new RecognizeAllTextShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.advancedConfig)) {
      request.advancedConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.advancedConfig, "AdvancedConfig", "json");
    }

    if (!$dara.isNull(tmpReq.idCardConfig)) {
      request.idCardConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.idCardConfig, "IdCardConfig", "json");
    }

    if (!$dara.isNull(tmpReq.internationalBusinessLicenseConfig)) {
      request.internationalBusinessLicenseConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.internationalBusinessLicenseConfig, "InternationalBusinessLicenseConfig", "json");
    }

    if (!$dara.isNull(tmpReq.internationalIdCardConfig)) {
      request.internationalIdCardConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.internationalIdCardConfig, "InternationalIdCardConfig", "json");
    }

    if (!$dara.isNull(tmpReq.multiLanConfig)) {
      request.multiLanConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.multiLanConfig, "MultiLanConfig", "json");
    }

    if (!$dara.isNull(tmpReq.tableConfig)) {
      request.tableConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableConfig, "TableConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.advancedConfigShrink)) {
      query["AdvancedConfig"] = request.advancedConfigShrink;
    }

    if (!$dara.isNull(request.idCardConfigShrink)) {
      query["IdCardConfig"] = request.idCardConfigShrink;
    }

    if (!$dara.isNull(request.internationalBusinessLicenseConfigShrink)) {
      query["InternationalBusinessLicenseConfig"] = request.internationalBusinessLicenseConfigShrink;
    }

    if (!$dara.isNull(request.internationalIdCardConfigShrink)) {
      query["InternationalIdCardConfig"] = request.internationalIdCardConfigShrink;
    }

    if (!$dara.isNull(request.multiLanConfigShrink)) {
      query["MultiLanConfig"] = request.multiLanConfigShrink;
    }

    if (!$dara.isNull(request.outputBarCode)) {
      query["OutputBarCode"] = request.outputBarCode;
    }

    if (!$dara.isNull(request.outputCoordinate)) {
      query["OutputCoordinate"] = request.outputCoordinate;
    }

    if (!$dara.isNull(request.outputFigure)) {
      query["OutputFigure"] = request.outputFigure;
    }

    if (!$dara.isNull(request.outputKVExcel)) {
      query["OutputKVExcel"] = request.outputKVExcel;
    }

    if (!$dara.isNull(request.outputOricoord)) {
      query["OutputOricoord"] = request.outputOricoord;
    }

    if (!$dara.isNull(request.outputQrcode)) {
      query["OutputQrcode"] = request.outputQrcode;
    }

    if (!$dara.isNull(request.outputStamp)) {
      query["OutputStamp"] = request.outputStamp;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.tableConfigShrink)) {
      query["TableConfig"] = request.tableConfigShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: tmpReq.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeAllText",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeAllTextResponse>(await this.callApi(params, req, runtime), new RecognizeAllTextResponse({}));
  }

  /**
   * 统一Api
   * 
   * @param request - RecognizeAllTextRequest
   * @returns RecognizeAllTextResponse
   */
  async recognizeAllText(request: RecognizeAllTextRequest): Promise<RecognizeAllTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeAllTextWithOptions(request, runtime);
  }

  /**
   * 银承汇票识别
   * 
   * @param request - RecognizeBankAcceptanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeBankAcceptanceResponse
   */
  async recognizeBankAcceptanceWithOptions(request: RecognizeBankAcceptanceRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeBankAcceptanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeBankAcceptance",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeBankAcceptanceResponse>(await this.callApi(params, req, runtime), new RecognizeBankAcceptanceResponse({}));
  }

  /**
   * 银承汇票识别
   * 
   * @param request - RecognizeBankAcceptanceRequest
   * @returns RecognizeBankAcceptanceResponse
   */
  async recognizeBankAcceptance(request: RecognizeBankAcceptanceRequest): Promise<RecognizeBankAcceptanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeBankAcceptanceWithOptions(request, runtime);
  }

  /**
   * 银行开户许可证识别
   * 
   * @param request - RecognizeBankAccountLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeBankAccountLicenseResponse
   */
  async recognizeBankAccountLicenseWithOptions(request: RecognizeBankAccountLicenseRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeBankAccountLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeBankAccountLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeBankAccountLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeBankAccountLicenseResponse({}));
  }

  /**
   * 银行开户许可证识别
   * 
   * @param request - RecognizeBankAccountLicenseRequest
   * @returns RecognizeBankAccountLicenseResponse
   */
  async recognizeBankAccountLicense(request: RecognizeBankAccountLicenseRequest): Promise<RecognizeBankAccountLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeBankAccountLicenseWithOptions(request, runtime);
  }

  /**
   * 银行卡识别
   * 
   * @param request - RecognizeBankCardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeBankCardResponse
   */
  async recognizeBankCardWithOptions(request: RecognizeBankCardRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeBankCardResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeBankCard",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeBankCardResponse>(await this.callApi(params, req, runtime), new RecognizeBankCardResponse({}));
  }

  /**
   * 银行卡识别
   * 
   * @param request - RecognizeBankCardRequest
   * @returns RecognizeBankCardResponse
   */
  async recognizeBankCard(request: RecognizeBankCardRequest): Promise<RecognizeBankCardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeBankCardWithOptions(request, runtime);
  }

  /**
   * 电商图片文字识别
   * 
   * @param request - RecognizeBasicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeBasicResponse
   */
  async recognizeBasicWithOptions(request: RecognizeBasicRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeBasicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeBasic",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeBasicResponse>(await this.callApi(params, req, runtime), new RecognizeBasicResponse({}));
  }

  /**
   * 电商图片文字识别
   * 
   * @param request - RecognizeBasicRequest
   * @returns RecognizeBasicResponse
   */
  async recognizeBasic(request: RecognizeBasicRequest): Promise<RecognizeBasicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeBasicWithOptions(request, runtime);
  }

  /**
   * 出生证明
   * 
   * @param request - RecognizeBirthCertificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeBirthCertificationResponse
   */
  async recognizeBirthCertificationWithOptions(request: RecognizeBirthCertificationRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeBirthCertificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeBirthCertification",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeBirthCertificationResponse>(await this.callApi(params, req, runtime), new RecognizeBirthCertificationResponse({}));
  }

  /**
   * 出生证明
   * 
   * @param request - RecognizeBirthCertificationRequest
   * @returns RecognizeBirthCertificationResponse
   */
  async recognizeBirthCertification(request: RecognizeBirthCertificationRequest): Promise<RecognizeBirthCertificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeBirthCertificationWithOptions(request, runtime);
  }

  /**
   * 客运车船票识别
   * 
   * @param request - RecognizeBusShipTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeBusShipTicketResponse
   */
  async recognizeBusShipTicketWithOptions(request: RecognizeBusShipTicketRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeBusShipTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeBusShipTicket",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeBusShipTicketResponse>(await this.callApi(params, req, runtime), new RecognizeBusShipTicketResponse({}));
  }

  /**
   * 客运车船票识别
   * 
   * @param request - RecognizeBusShipTicketRequest
   * @returns RecognizeBusShipTicketResponse
   */
  async recognizeBusShipTicket(request: RecognizeBusShipTicketRequest): Promise<RecognizeBusShipTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeBusShipTicketWithOptions(request, runtime);
  }

  /**
   * 营业执照识别
   * 
   * @param request - RecognizeBusinessLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeBusinessLicenseResponse
   */
  async recognizeBusinessLicenseWithOptions(request: RecognizeBusinessLicenseRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeBusinessLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeBusinessLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeBusinessLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeBusinessLicenseResponse({}));
  }

  /**
   * 营业执照识别
   * 
   * @param request - RecognizeBusinessLicenseRequest
   * @returns RecognizeBusinessLicenseResponse
   */
  async recognizeBusinessLicense(request: RecognizeBusinessLicenseRequest): Promise<RecognizeBusinessLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeBusinessLicenseWithOptions(request, runtime);
  }

  /**
   * 机动车销售发票
   * 
   * @param request - RecognizeCarInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeCarInvoiceResponse
   */
  async recognizeCarInvoiceWithOptions(request: RecognizeCarInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeCarInvoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeCarInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeCarInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeCarInvoiceResponse({}));
  }

  /**
   * 机动车销售发票
   * 
   * @param request - RecognizeCarInvoiceRequest
   * @returns RecognizeCarInvoiceResponse
   */
  async recognizeCarInvoice(request: RecognizeCarInvoiceRequest): Promise<RecognizeCarInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeCarInvoiceWithOptions(request, runtime);
  }

  /**
   * 车牌识别
   * 
   * @param request - RecognizeCarNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeCarNumberResponse
   */
  async recognizeCarNumberWithOptions(request: RecognizeCarNumberRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeCarNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeCarNumber",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeCarNumberResponse>(await this.callApi(params, req, runtime), new RecognizeCarNumberResponse({}));
  }

  /**
   * 车牌识别
   * 
   * @param request - RecognizeCarNumberRequest
   * @returns RecognizeCarNumberResponse
   */
  async recognizeCarNumber(request: RecognizeCarNumberRequest): Promise<RecognizeCarNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeCarNumberWithOptions(request, runtime);
  }

  /**
   * 车辆vin码识别
   * 
   * @param request - RecognizeCarVinCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeCarVinCodeResponse
   */
  async recognizeCarVinCodeWithOptions(request: RecognizeCarVinCodeRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeCarVinCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeCarVinCode",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeCarVinCodeResponse>(await this.callApi(params, req, runtime), new RecognizeCarVinCodeResponse({}));
  }

  /**
   * 车辆vin码识别
   * 
   * @param request - RecognizeCarVinCodeRequest
   * @returns RecognizeCarVinCodeResponse
   */
  async recognizeCarVinCode(request: RecognizeCarVinCodeRequest): Promise<RecognizeCarVinCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeCarVinCodeWithOptions(request, runtime);
  }

  /**
   * 中国护照识别
   * 
   * @param request - RecognizeChinesePassportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeChinesePassportResponse
   */
  async recognizeChinesePassportWithOptions(request: RecognizeChinesePassportRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeChinesePassportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outputFigure)) {
      query["OutputFigure"] = request.outputFigure;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeChinesePassport",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeChinesePassportResponse>(await this.callApi(params, req, runtime), new RecognizeChinesePassportResponse({}));
  }

  /**
   * 中国护照识别
   * 
   * @param request - RecognizeChinesePassportRequest
   * @returns RecognizeChinesePassportResponse
   */
  async recognizeChinesePassport(request: RecognizeChinesePassportRequest): Promise<RecognizeChinesePassportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeChinesePassportWithOptions(request, runtime);
  }

  /**
   * 通用机打发票识别
   * 
   * @param request - RecognizeCommonPrintedInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeCommonPrintedInvoiceResponse
   */
  async recognizeCommonPrintedInvoiceWithOptions(request: RecognizeCommonPrintedInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeCommonPrintedInvoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeCommonPrintedInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeCommonPrintedInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeCommonPrintedInvoiceResponse({}));
  }

  /**
   * 通用机打发票识别
   * 
   * @param request - RecognizeCommonPrintedInvoiceRequest
   * @returns RecognizeCommonPrintedInvoiceResponse
   */
  async recognizeCommonPrintedInvoice(request: RecognizeCommonPrintedInvoiceRequest): Promise<RecognizeCommonPrintedInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeCommonPrintedInvoiceWithOptions(request, runtime);
  }

  /**
   * 化妆品生产许可证识别
   * 
   * @param request - RecognizeCosmeticProduceLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeCosmeticProduceLicenseResponse
   */
  async recognizeCosmeticProduceLicenseWithOptions(request: RecognizeCosmeticProduceLicenseRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeCosmeticProduceLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeCosmeticProduceLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeCosmeticProduceLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeCosmeticProduceLicenseResponse({}));
  }

  /**
   * 化妆品生产许可证识别
   * 
   * @param request - RecognizeCosmeticProduceLicenseRequest
   * @returns RecognizeCosmeticProduceLicenseResponse
   */
  async recognizeCosmeticProduceLicense(request: RecognizeCosmeticProduceLicenseRequest): Promise<RecognizeCosmeticProduceLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeCosmeticProduceLicenseWithOptions(request, runtime);
  }

  /**
   * 核算检测报告识别
   * 
   * @param request - RecognizeCovidTestReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeCovidTestReportResponse
   */
  async recognizeCovidTestReportWithOptions(request: RecognizeCovidTestReportRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeCovidTestReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.multipleResult)) {
      query["MultipleResult"] = request.multipleResult;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeCovidTestReport",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeCovidTestReportResponse>(await this.callApi(params, req, runtime), new RecognizeCovidTestReportResponse({}));
  }

  /**
   * 核算检测报告识别
   * 
   * @param request - RecognizeCovidTestReportRequest
   * @returns RecognizeCovidTestReportResponse
   */
  async recognizeCovidTestReport(request: RecognizeCovidTestReportRequest): Promise<RecognizeCovidTestReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeCovidTestReportWithOptions(request, runtime);
  }

  /**
   * 第二类医疗器械经营备案凭证
   * 
   * @param request - RecognizeCtwoMedicalDeviceManageLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeCtwoMedicalDeviceManageLicenseResponse
   */
  async recognizeCtwoMedicalDeviceManageLicenseWithOptions(request: RecognizeCtwoMedicalDeviceManageLicenseRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeCtwoMedicalDeviceManageLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeCtwoMedicalDeviceManageLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeCtwoMedicalDeviceManageLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeCtwoMedicalDeviceManageLicenseResponse({}));
  }

  /**
   * 第二类医疗器械经营备案凭证
   * 
   * @param request - RecognizeCtwoMedicalDeviceManageLicenseRequest
   * @returns RecognizeCtwoMedicalDeviceManageLicenseResponse
   */
  async recognizeCtwoMedicalDeviceManageLicense(request: RecognizeCtwoMedicalDeviceManageLicenseRequest): Promise<RecognizeCtwoMedicalDeviceManageLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeCtwoMedicalDeviceManageLicenseWithOptions(request, runtime);
  }

  /**
   * 文档结构化识别
   * 
   * @param request - RecognizeDocumentStructureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeDocumentStructureResponse
   */
  async recognizeDocumentStructureWithOptions(request: RecognizeDocumentStructureRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeDocumentStructureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!$dara.isNull(request.needSortPage)) {
      query["NeedSortPage"] = request.needSortPage;
    }

    if (!$dara.isNull(request.noStamp)) {
      query["NoStamp"] = request.noStamp;
    }

    if (!$dara.isNull(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!$dara.isNull(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.paragraph)) {
      query["Paragraph"] = request.paragraph;
    }

    if (!$dara.isNull(request.row)) {
      query["Row"] = request.row;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    if (!$dara.isNull(request.useNewStyleOutput)) {
      query["UseNewStyleOutput"] = request.useNewStyleOutput;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeDocumentStructure",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeDocumentStructureResponse>(await this.callApi(params, req, runtime), new RecognizeDocumentStructureResponse({}));
  }

  /**
   * 文档结构化识别
   * 
   * @param request - RecognizeDocumentStructureRequest
   * @returns RecognizeDocumentStructureResponse
   */
  async recognizeDocumentStructure(request: RecognizeDocumentStructureRequest): Promise<RecognizeDocumentStructureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeDocumentStructureWithOptions(request, runtime);
  }

  /**
   * 驾驶证识别
   * 
   * @param request - RecognizeDrivingLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeDrivingLicenseResponse
   */
  async recognizeDrivingLicenseWithOptions(request: RecognizeDrivingLicenseRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeDrivingLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeDrivingLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeDrivingLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeDrivingLicenseResponse({}));
  }

  /**
   * 驾驶证识别
   * 
   * @param request - RecognizeDrivingLicenseRequest
   * @returns RecognizeDrivingLicenseResponse
   */
  async recognizeDrivingLicense(request: RecognizeDrivingLicenseRequest): Promise<RecognizeDrivingLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeDrivingLicenseWithOptions(request, runtime);
  }

  /**
   * 印刷体数学公式识别
   * 
   * @param request - RecognizeEduFormulaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeEduFormulaResponse
   */
  async recognizeEduFormulaWithOptions(request: RecognizeEduFormulaRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeEduFormulaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeEduFormula",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeEduFormulaResponse>(await this.callApi(params, req, runtime), new RecognizeEduFormulaResponse({}));
  }

  /**
   * 印刷体数学公式识别
   * 
   * @param request - RecognizeEduFormulaRequest
   * @returns RecognizeEduFormulaResponse
   */
  async recognizeEduFormula(request: RecognizeEduFormulaRequest): Promise<RecognizeEduFormulaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeEduFormulaWithOptions(request, runtime);
  }

  /**
   * 口算判题
   * 
   * @param request - RecognizeEduOralCalculationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeEduOralCalculationResponse
   */
  async recognizeEduOralCalculationWithOptions(request: RecognizeEduOralCalculationRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeEduOralCalculationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeEduOralCalculation",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeEduOralCalculationResponse>(await this.callApi(params, req, runtime), new RecognizeEduOralCalculationResponse({}));
  }

  /**
   * 口算判题
   * 
   * @param request - RecognizeEduOralCalculationRequest
   * @returns RecognizeEduOralCalculationResponse
   */
  async recognizeEduOralCalculation(request: RecognizeEduOralCalculationRequest): Promise<RecognizeEduOralCalculationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeEduOralCalculationWithOptions(request, runtime);
  }

  /**
   * 试卷切题识别
   * 
   * @param request - RecognizeEduPaperCutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeEduPaperCutResponse
   */
  async recognizeEduPaperCutWithOptions(request: RecognizeEduPaperCutRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeEduPaperCutResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cutType)) {
      query["CutType"] = request.cutType;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.outputOricoord)) {
      query["OutputOricoord"] = request.outputOricoord;
    }

    if (!$dara.isNull(request.subject)) {
      query["Subject"] = request.subject;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeEduPaperCut",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeEduPaperCutResponse>(await this.callApi(params, req, runtime), new RecognizeEduPaperCutResponse({}));
  }

  /**
   * 试卷切题识别
   * 
   * @param request - RecognizeEduPaperCutRequest
   * @returns RecognizeEduPaperCutResponse
   */
  async recognizeEduPaperCut(request: RecognizeEduPaperCutRequest): Promise<RecognizeEduPaperCutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeEduPaperCutWithOptions(request, runtime);
  }

  /**
   * 整页试卷识别
   * 
   * @param request - RecognizeEduPaperOcrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeEduPaperOcrResponse
   */
  async recognizeEduPaperOcrWithOptions(request: RecognizeEduPaperOcrRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeEduPaperOcrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.outputOricoord)) {
      query["OutputOricoord"] = request.outputOricoord;
    }

    if (!$dara.isNull(request.subject)) {
      query["Subject"] = request.subject;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeEduPaperOcr",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeEduPaperOcrResponse>(await this.callApi(params, req, runtime), new RecognizeEduPaperOcrResponse({}));
  }

  /**
   * 整页试卷识别
   * 
   * @param request - RecognizeEduPaperOcrRequest
   * @returns RecognizeEduPaperOcrResponse
   */
  async recognizeEduPaperOcr(request: RecognizeEduPaperOcrRequest): Promise<RecognizeEduPaperOcrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeEduPaperOcrWithOptions(request, runtime);
  }

  /**
   * 精细版结构化切题
   * 
   * @param request - RecognizeEduPaperStructedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeEduPaperStructedResponse
   */
  async recognizeEduPaperStructedWithOptions(request: RecognizeEduPaperStructedRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeEduPaperStructedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!$dara.isNull(request.outputOricoord)) {
      query["OutputOricoord"] = request.outputOricoord;
    }

    if (!$dara.isNull(request.subject)) {
      query["Subject"] = request.subject;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeEduPaperStructed",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeEduPaperStructedResponse>(await this.callApi(params, req, runtime), new RecognizeEduPaperStructedResponse({}));
  }

  /**
   * 精细版结构化切题
   * 
   * @param request - RecognizeEduPaperStructedRequest
   * @returns RecognizeEduPaperStructedResponse
   */
  async recognizeEduPaperStructed(request: RecognizeEduPaperStructedRequest): Promise<RecognizeEduPaperStructedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeEduPaperStructedWithOptions(request, runtime);
  }

  /**
   * 题目识别
   * 
   * @param request - RecognizeEduQuestionOcrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeEduQuestionOcrResponse
   */
  async recognizeEduQuestionOcrWithOptions(request: RecognizeEduQuestionOcrRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeEduQuestionOcrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeEduQuestionOcr",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeEduQuestionOcrResponse>(await this.callApi(params, req, runtime), new RecognizeEduQuestionOcrResponse({}));
  }

  /**
   * 题目识别
   * 
   * @param request - RecognizeEduQuestionOcrRequest
   * @returns RecognizeEduQuestionOcrResponse
   */
  async recognizeEduQuestionOcr(request: RecognizeEduQuestionOcrRequest): Promise<RecognizeEduQuestionOcrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeEduQuestionOcrWithOptions(request, runtime);
  }

  /**
   * 英语专项识别
   * 
   * @param request - RecognizeEnglishRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeEnglishResponse
   */
  async recognizeEnglishWithOptions(request: RecognizeEnglishRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeEnglishResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!$dara.isNull(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeEnglish",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeEnglishResponse>(await this.callApi(params, req, runtime), new RecognizeEnglishResponse({}));
  }

  /**
   * 英语专项识别
   * 
   * @param request - RecognizeEnglishRequest
   * @returns RecognizeEnglishResponse
   */
  async recognizeEnglish(request: RecognizeEnglishRequest): Promise<RecognizeEnglishResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeEnglishWithOptions(request, runtime);
  }

  /**
   * 不动产权证
   * 
   * @param request - RecognizeEstateCertificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeEstateCertificationResponse
   */
  async recognizeEstateCertificationWithOptions(request: RecognizeEstateCertificationRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeEstateCertificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeEstateCertification",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeEstateCertificationResponse>(await this.callApi(params, req, runtime), new RecognizeEstateCertificationResponse({}));
  }

  /**
   * 不动产权证
   * 
   * @param request - RecognizeEstateCertificationRequest
   * @returns RecognizeEstateCertificationResponse
   */
  async recognizeEstateCertification(request: RecognizeEstateCertificationRequest): Promise<RecognizeEstateCertificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeEstateCertificationWithOptions(request, runtime);
  }

  /**
   * 来往港澳台通行证识别
   * 
   * @param request - RecognizeExitEntryPermitToHKRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeExitEntryPermitToHKResponse
   */
  async recognizeExitEntryPermitToHKWithOptions(request: RecognizeExitEntryPermitToHKRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeExitEntryPermitToHKResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outputFigure)) {
      query["OutputFigure"] = request.outputFigure;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeExitEntryPermitToHK",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeExitEntryPermitToHKResponse>(await this.callApi(params, req, runtime), new RecognizeExitEntryPermitToHKResponse({}));
  }

  /**
   * 来往港澳台通行证识别
   * 
   * @param request - RecognizeExitEntryPermitToHKRequest
   * @returns RecognizeExitEntryPermitToHKResponse
   */
  async recognizeExitEntryPermitToHK(request: RecognizeExitEntryPermitToHKRequest): Promise<RecognizeExitEntryPermitToHKResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeExitEntryPermitToHKWithOptions(request, runtime);
  }

  /**
   * 来往大陆(内地)通行证识别
   * 
   * @param request - RecognizeExitEntryPermitToMainlandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeExitEntryPermitToMainlandResponse
   */
  async recognizeExitEntryPermitToMainlandWithOptions(request: RecognizeExitEntryPermitToMainlandRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeExitEntryPermitToMainlandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outputFigure)) {
      query["OutputFigure"] = request.outputFigure;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeExitEntryPermitToMainland",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeExitEntryPermitToMainlandResponse>(await this.callApi(params, req, runtime), new RecognizeExitEntryPermitToMainlandResponse({}));
  }

  /**
   * 来往大陆(内地)通行证识别
   * 
   * @param request - RecognizeExitEntryPermitToMainlandRequest
   * @returns RecognizeExitEntryPermitToMainlandResponse
   */
  async recognizeExitEntryPermitToMainland(request: RecognizeExitEntryPermitToMainlandRequest): Promise<RecognizeExitEntryPermitToMainlandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeExitEntryPermitToMainlandWithOptions(request, runtime);
  }

  /**
   * 食品经营许可证
   * 
   * @param request - RecognizeFoodManageLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeFoodManageLicenseResponse
   */
  async recognizeFoodManageLicenseWithOptions(request: RecognizeFoodManageLicenseRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeFoodManageLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeFoodManageLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeFoodManageLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeFoodManageLicenseResponse({}));
  }

  /**
   * 食品经营许可证
   * 
   * @param request - RecognizeFoodManageLicenseRequest
   * @returns RecognizeFoodManageLicenseResponse
   */
  async recognizeFoodManageLicense(request: RecognizeFoodManageLicenseRequest): Promise<RecognizeFoodManageLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeFoodManageLicenseWithOptions(request, runtime);
  }

  /**
   * 食品生产许可证
   * 
   * @param request - RecognizeFoodProduceLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeFoodProduceLicenseResponse
   */
  async recognizeFoodProduceLicenseWithOptions(request: RecognizeFoodProduceLicenseRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeFoodProduceLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeFoodProduceLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeFoodProduceLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeFoodProduceLicenseResponse({}));
  }

  /**
   * 食品生产许可证
   * 
   * @param request - RecognizeFoodProduceLicenseRequest
   * @returns RecognizeFoodProduceLicenseResponse
   */
  async recognizeFoodProduceLicense(request: RecognizeFoodProduceLicenseRequest): Promise<RecognizeFoodProduceLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeFoodProduceLicenseWithOptions(request, runtime);
  }

  /**
   * 通用文字识别
   * 
   * @param request - RecognizeGeneralRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeGeneralResponse
   */
  async recognizeGeneralWithOptions(request: RecognizeGeneralRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeGeneralResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeGeneral",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeGeneralResponse>(await this.callApi(params, req, runtime), new RecognizeGeneralResponse({}));
  }

  /**
   * 通用文字识别
   * 
   * @param request - RecognizeGeneralRequest
   * @returns RecognizeGeneralResponse
   */
  async recognizeGeneral(request: RecognizeGeneralRequest): Promise<RecognizeGeneralResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeGeneralWithOptions(request, runtime);
  }

  /**
   * DocMaster
   * 
   * @param tmpReq - RecognizeGeneralStructureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeGeneralStructureResponse
   */
  async recognizeGeneralStructureWithOptions(tmpReq: RecognizeGeneralStructureRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeGeneralStructureResponse> {
    tmpReq.validate();
    let request = new RecognizeGeneralStructureShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.keys)) {
      request.keysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.keysShrink)) {
      query["Keys"] = request.keysShrink;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: tmpReq.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeGeneralStructure",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeGeneralStructureResponse>(await this.callApi(params, req, runtime), new RecognizeGeneralStructureResponse({}));
  }

  /**
   * DocMaster
   * 
   * @param request - RecognizeGeneralStructureRequest
   * @returns RecognizeGeneralStructureResponse
   */
  async recognizeGeneralStructure(request: RecognizeGeneralStructureRequest): Promise<RecognizeGeneralStructureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeGeneralStructureWithOptions(request, runtime);
  }

  /**
   * 香港身份证识别
   * 
   * @param request - RecognizeHKIdcardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeHKIdcardResponse
   */
  async recognizeHKIdcardWithOptions(request: RecognizeHKIdcardRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeHKIdcardResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeHKIdcard",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeHKIdcardResponse>(await this.callApi(params, req, runtime), new RecognizeHKIdcardResponse({}));
  }

  /**
   * 香港身份证识别
   * 
   * @param request - RecognizeHKIdcardRequest
   * @returns RecognizeHKIdcardResponse
   */
  async recognizeHKIdcard(request: RecognizeHKIdcardRequest): Promise<RecognizeHKIdcardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeHKIdcardWithOptions(request, runtime);
  }

  /**
   * 通用手写体识别
   * 
   * @param request - RecognizeHandwritingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeHandwritingResponse
   */
  async recognizeHandwritingWithOptions(request: RecognizeHandwritingRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeHandwritingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!$dara.isNull(request.needSortPage)) {
      query["NeedSortPage"] = request.needSortPage;
    }

    if (!$dara.isNull(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!$dara.isNull(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!$dara.isNull(request.paragraph)) {
      query["Paragraph"] = request.paragraph;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeHandwriting",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeHandwritingResponse>(await this.callApi(params, req, runtime), new RecognizeHandwritingResponse({}));
  }

  /**
   * 通用手写体识别
   * 
   * @param request - RecognizeHandwritingRequest
   * @returns RecognizeHandwritingResponse
   */
  async recognizeHandwriting(request: RecognizeHandwritingRequest): Promise<RecognizeHandwritingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeHandwritingWithOptions(request, runtime);
  }

  /**
   * 防疫健康码识别
   * 
   * @param request - RecognizeHealthCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeHealthCodeResponse
   */
  async recognizeHealthCodeWithOptions(request: RecognizeHealthCodeRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeHealthCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeHealthCode",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeHealthCodeResponse>(await this.callApi(params, req, runtime), new RecognizeHealthCodeResponse({}));
  }

  /**
   * 防疫健康码识别
   * 
   * @param request - RecognizeHealthCodeRequest
   * @returns RecognizeHealthCodeResponse
   */
  async recognizeHealthCode(request: RecognizeHealthCodeRequest): Promise<RecognizeHealthCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeHealthCodeWithOptions(request, runtime);
  }

  /**
   * 酒店流水识别
   * 
   * @param request - RecognizeHotelConsumeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeHotelConsumeResponse
   */
  async recognizeHotelConsumeWithOptions(request: RecognizeHotelConsumeRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeHotelConsumeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeHotelConsume",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeHotelConsumeResponse>(await this.callApi(params, req, runtime), new RecognizeHotelConsumeResponse({}));
  }

  /**
   * 酒店流水识别
   * 
   * @param request - RecognizeHotelConsumeRequest
   * @returns RecognizeHotelConsumeResponse
   */
  async recognizeHotelConsume(request: RecognizeHotelConsumeRequest): Promise<RecognizeHotelConsumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeHotelConsumeWithOptions(request, runtime);
  }

  /**
   * 户口本识别
   * 
   * @param request - RecognizeHouseholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeHouseholdResponse
   */
  async recognizeHouseholdWithOptions(request: RecognizeHouseholdRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeHouseholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isResidentPage)) {
      query["IsResidentPage"] = request.isResidentPage;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeHousehold",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeHouseholdResponse>(await this.callApi(params, req, runtime), new RecognizeHouseholdResponse({}));
  }

  /**
   * 户口本识别
   * 
   * @param request - RecognizeHouseholdRequest
   * @returns RecognizeHouseholdResponse
   */
  async recognizeHousehold(request: RecognizeHouseholdRequest): Promise<RecognizeHouseholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeHouseholdWithOptions(request, runtime);
  }

  /**
   * 身份证识别
   * 
   * @param request - RecognizeIdcardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeIdcardResponse
   */
  async recognizeIdcardWithOptions(request: RecognizeIdcardRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeIdcardResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.llmRec)) {
      query["Llm_rec"] = request.llmRec;
    }

    if (!$dara.isNull(request.outputFigure)) {
      query["OutputFigure"] = request.outputFigure;
    }

    if (!$dara.isNull(request.outputQualityInfo)) {
      query["OutputQualityInfo"] = request.outputQualityInfo;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeIdcard",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeIdcardResponse>(await this.callApi(params, req, runtime), new RecognizeIdcardResponse({}));
  }

  /**
   * 身份证识别
   * 
   * @param request - RecognizeIdcardRequest
   * @returns RecognizeIdcardResponse
   */
  async recognizeIdcard(request: RecognizeIdcardRequest): Promise<RecognizeIdcardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeIdcardWithOptions(request, runtime);
  }

  /**
   * 国际营业执照识别
   * 
   * @param request - RecognizeInternationalBusinessLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeInternationalBusinessLicenseResponse
   */
  async recognizeInternationalBusinessLicenseWithOptions(request: RecognizeInternationalBusinessLicenseRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeInternationalBusinessLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeInternationalBusinessLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeInternationalBusinessLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeInternationalBusinessLicenseResponse({}));
  }

  /**
   * 国际营业执照识别
   * 
   * @param request - RecognizeInternationalBusinessLicenseRequest
   * @returns RecognizeInternationalBusinessLicenseResponse
   */
  async recognizeInternationalBusinessLicense(request: RecognizeInternationalBusinessLicenseRequest): Promise<RecognizeInternationalBusinessLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeInternationalBusinessLicenseWithOptions(request, runtime);
  }

  /**
   * 国际身份证识别
   * 
   * @param request - RecognizeInternationalIdcardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeInternationalIdcardResponse
   */
  async recognizeInternationalIdcardWithOptions(request: RecognizeInternationalIdcardRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeInternationalIdcardResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeInternationalIdcard",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeInternationalIdcardResponse>(await this.callApi(params, req, runtime), new RecognizeInternationalIdcardResponse({}));
  }

  /**
   * 国际身份证识别
   * 
   * @param request - RecognizeInternationalIdcardRequest
   * @returns RecognizeInternationalIdcardResponse
   */
  async recognizeInternationalIdcard(request: RecognizeInternationalIdcardRequest): Promise<RecognizeInternationalIdcardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeInternationalIdcardWithOptions(request, runtime);
  }

  /**
   * 增值税发票识别
   * 
   * @param request - RecognizeInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeInvoiceResponse
   */
  async recognizeInvoiceWithOptions(request: RecognizeInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeInvoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeInvoiceResponse({}));
  }

  /**
   * 增值税发票识别
   * 
   * @param request - RecognizeInvoiceRequest
   * @returns RecognizeInvoiceResponse
   */
  async recognizeInvoice(request: RecognizeInvoiceRequest): Promise<RecognizeInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeInvoiceWithOptions(request, runtime);
  }

  /**
   * 日语识别
   * 
   * @param request - RecognizeJanpaneseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeJanpaneseResponse
   */
  async recognizeJanpaneseWithOptions(request: RecognizeJanpaneseRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeJanpaneseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!$dara.isNull(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!$dara.isNull(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeJanpanese",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeJanpaneseResponse>(await this.callApi(params, req, runtime), new RecognizeJanpaneseResponse({}));
  }

  /**
   * 日语识别
   * 
   * @param request - RecognizeJanpaneseRequest
   * @returns RecognizeJanpaneseResponse
   */
  async recognizeJanpanese(request: RecognizeJanpaneseRequest): Promise<RecognizeJanpaneseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeJanpaneseWithOptions(request, runtime);
  }

  /**
   * 韩语识别
   * 
   * @param request - RecognizeKoreanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeKoreanResponse
   */
  async recognizeKoreanWithOptions(request: RecognizeKoreanRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeKoreanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!$dara.isNull(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!$dara.isNull(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeKorean",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeKoreanResponse>(await this.callApi(params, req, runtime), new RecognizeKoreanResponse({}));
  }

  /**
   * 韩语识别
   * 
   * @param request - RecognizeKoreanRequest
   * @returns RecognizeKoreanResponse
   */
  async recognizeKorean(request: RecognizeKoreanRequest): Promise<RecognizeKoreanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeKoreanWithOptions(request, runtime);
  }

  /**
   * 拉丁语识别
   * 
   * @param request - RecognizeLatinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeLatinResponse
   */
  async recognizeLatinWithOptions(request: RecognizeLatinRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeLatinResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!$dara.isNull(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!$dara.isNull(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeLatin",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeLatinResponse>(await this.callApi(params, req, runtime), new RecognizeLatinResponse({}));
  }

  /**
   * 拉丁语识别
   * 
   * @param request - RecognizeLatinRequest
   * @returns RecognizeLatinResponse
   */
  async recognizeLatin(request: RecognizeLatinRequest): Promise<RecognizeLatinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeLatinWithOptions(request, runtime);
  }

  /**
   * 医疗器械经营许可证
   * 
   * @param request - RecognizeMedicalDeviceManageLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeMedicalDeviceManageLicenseResponse
   */
  async recognizeMedicalDeviceManageLicenseWithOptions(request: RecognizeMedicalDeviceManageLicenseRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeMedicalDeviceManageLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeMedicalDeviceManageLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeMedicalDeviceManageLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeMedicalDeviceManageLicenseResponse({}));
  }

  /**
   * 医疗器械经营许可证
   * 
   * @param request - RecognizeMedicalDeviceManageLicenseRequest
   * @returns RecognizeMedicalDeviceManageLicenseResponse
   */
  async recognizeMedicalDeviceManageLicense(request: RecognizeMedicalDeviceManageLicenseRequest): Promise<RecognizeMedicalDeviceManageLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeMedicalDeviceManageLicenseWithOptions(request, runtime);
  }

  /**
   * 医疗器械生产许可证
   * 
   * @param request - RecognizeMedicalDeviceProduceLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeMedicalDeviceProduceLicenseResponse
   */
  async recognizeMedicalDeviceProduceLicenseWithOptions(request: RecognizeMedicalDeviceProduceLicenseRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeMedicalDeviceProduceLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeMedicalDeviceProduceLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeMedicalDeviceProduceLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeMedicalDeviceProduceLicenseResponse({}));
  }

  /**
   * 医疗器械生产许可证
   * 
   * @param request - RecognizeMedicalDeviceProduceLicenseRequest
   * @returns RecognizeMedicalDeviceProduceLicenseResponse
   */
  async recognizeMedicalDeviceProduceLicense(request: RecognizeMedicalDeviceProduceLicenseRequest): Promise<RecognizeMedicalDeviceProduceLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeMedicalDeviceProduceLicenseWithOptions(request, runtime);
  }

  /**
   * 混贴发票识别
   * 
   * @param request - RecognizeMixedInvoicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeMixedInvoicesResponse
   */
  async recognizeMixedInvoicesWithOptions(request: RecognizeMixedInvoicesRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeMixedInvoicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mergePdfPages)) {
      query["MergePdfPages"] = request.mergePdfPages;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeMixedInvoices",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeMixedInvoicesResponse>(await this.callApi(params, req, runtime), new RecognizeMixedInvoicesResponse({}));
  }

  /**
   * 混贴发票识别
   * 
   * @param request - RecognizeMixedInvoicesRequest
   * @returns RecognizeMixedInvoicesResponse
   */
  async recognizeMixedInvoices(request: RecognizeMixedInvoicesRequest): Promise<RecognizeMixedInvoicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeMixedInvoicesWithOptions(request, runtime);
  }

  /**
   * 通用多语言识别
   * 
   * @param tmpReq - RecognizeMultiLanguageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeMultiLanguageResponse
   */
  async recognizeMultiLanguageWithOptions(tmpReq: RecognizeMultiLanguageRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeMultiLanguageResponse> {
    tmpReq.validate();
    let request = new RecognizeMultiLanguageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.languages)) {
      request.languagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.languages, "Languages", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.languagesShrink)) {
      query["Languages"] = request.languagesShrink;
    }

    if (!$dara.isNull(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!$dara.isNull(request.needSortPage)) {
      query["NeedSortPage"] = request.needSortPage;
    }

    if (!$dara.isNull(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!$dara.isNull(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: tmpReq.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeMultiLanguage",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeMultiLanguageResponse>(await this.callApi(params, req, runtime), new RecognizeMultiLanguageResponse({}));
  }

  /**
   * 通用多语言识别
   * 
   * @param request - RecognizeMultiLanguageRequest
   * @returns RecognizeMultiLanguageResponse
   */
  async recognizeMultiLanguage(request: RecognizeMultiLanguageRequest): Promise<RecognizeMultiLanguageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeMultiLanguageWithOptions(request, runtime);
  }

  /**
   * 非税收入票据识别
   * 
   * @param request - RecognizeNonTaxInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeNonTaxInvoiceResponse
   */
  async recognizeNonTaxInvoiceWithOptions(request: RecognizeNonTaxInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeNonTaxInvoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeNonTaxInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeNonTaxInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeNonTaxInvoiceResponse({}));
  }

  /**
   * 非税收入票据识别
   * 
   * @param request - RecognizeNonTaxInvoiceRequest
   * @returns RecognizeNonTaxInvoiceResponse
   */
  async recognizeNonTaxInvoice(request: RecognizeNonTaxInvoiceRequest): Promise<RecognizeNonTaxInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeNonTaxInvoiceWithOptions(request, runtime);
  }

  /**
   * 护照识别
   * 
   * @param request - RecognizePassportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizePassportResponse
   */
  async recognizePassportWithOptions(request: RecognizePassportRequest, runtime: $dara.RuntimeOptions): Promise<RecognizePassportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizePassport",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizePassportResponse>(await this.callApi(params, req, runtime), new RecognizePassportResponse({}));
  }

  /**
   * 护照识别
   * 
   * @param request - RecognizePassportRequest
   * @returns RecognizePassportResponse
   */
  async recognizePassport(request: RecognizePassportRequest): Promise<RecognizePassportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizePassportWithOptions(request, runtime);
  }

  /**
   * 支付详情页识别
   * 
   * @param request - RecognizePaymentRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizePaymentRecordResponse
   */
  async recognizePaymentRecordWithOptions(request: RecognizePaymentRecordRequest, runtime: $dara.RuntimeOptions): Promise<RecognizePaymentRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizePaymentRecord",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizePaymentRecordResponse>(await this.callApi(params, req, runtime), new RecognizePaymentRecordResponse({}));
  }

  /**
   * 支付详情页识别
   * 
   * @param request - RecognizePaymentRecordRequest
   * @returns RecognizePaymentRecordResponse
   */
  async recognizePaymentRecord(request: RecognizePaymentRecordRequest): Promise<RecognizePaymentRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizePaymentRecordWithOptions(request, runtime);
  }

  /**
   * 电商订单页识别
   * 
   * @param request - RecognizePurchaseRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizePurchaseRecordResponse
   */
  async recognizePurchaseRecordWithOptions(request: RecognizePurchaseRecordRequest, runtime: $dara.RuntimeOptions): Promise<RecognizePurchaseRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outputMultiOrders)) {
      query["OutputMultiOrders"] = request.outputMultiOrders;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizePurchaseRecord",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizePurchaseRecordResponse>(await this.callApi(params, req, runtime), new RecognizePurchaseRecordResponse({}));
  }

  /**
   * 电商订单页识别
   * 
   * @param request - RecognizePurchaseRecordRequest
   * @returns RecognizePurchaseRecordResponse
   */
  async recognizePurchaseRecord(request: RecognizePurchaseRecordRequest): Promise<RecognizePurchaseRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizePurchaseRecordWithOptions(request, runtime);
  }

  /**
   * 定额发票
   * 
   * @param request - RecognizeQuotaInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeQuotaInvoiceResponse
   */
  async recognizeQuotaInvoiceWithOptions(request: RecognizeQuotaInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeQuotaInvoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeQuotaInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeQuotaInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeQuotaInvoiceResponse({}));
  }

  /**
   * 定额发票
   * 
   * @param request - RecognizeQuotaInvoiceRequest
   * @returns RecognizeQuotaInvoiceResponse
   */
  async recognizeQuotaInvoice(request: RecognizeQuotaInvoiceRequest): Promise<RecognizeQuotaInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeQuotaInvoiceWithOptions(request, runtime);
  }

  /**
   * 网约车行程单识别
   * 
   * @param request - RecognizeRideHailingItineraryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeRideHailingItineraryResponse
   */
  async recognizeRideHailingItineraryWithOptions(request: RecognizeRideHailingItineraryRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeRideHailingItineraryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeRideHailingItinerary",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeRideHailingItineraryResponse>(await this.callApi(params, req, runtime), new RecognizeRideHailingItineraryResponse({}));
  }

  /**
   * 网约车行程单识别
   * 
   * @param request - RecognizeRideHailingItineraryRequest
   * @returns RecognizeRideHailingItineraryResponse
   */
  async recognizeRideHailingItinerary(request: RecognizeRideHailingItineraryRequest): Promise<RecognizeRideHailingItineraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeRideHailingItineraryWithOptions(request, runtime);
  }

  /**
   * 增值税发票卷票
   * 
   * @param request - RecognizeRollTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeRollTicketResponse
   */
  async recognizeRollTicketWithOptions(request: RecognizeRollTicketRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeRollTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeRollTicket",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeRollTicketResponse>(await this.callApi(params, req, runtime), new RecognizeRollTicketResponse({}));
  }

  /**
   * 增值税发票卷票
   * 
   * @param request - RecognizeRollTicketRequest
   * @returns RecognizeRollTicketResponse
   */
  async recognizeRollTicket(request: RecognizeRollTicketRequest): Promise<RecognizeRollTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeRollTicketWithOptions(request, runtime);
  }

  /**
   * 俄语识别
   * 
   * @param request - RecognizeRussianRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeRussianResponse
   */
  async recognizeRussianWithOptions(request: RecognizeRussianRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeRussianResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!$dara.isNull(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!$dara.isNull(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeRussian",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeRussianResponse>(await this.callApi(params, req, runtime), new RecognizeRussianResponse({}));
  }

  /**
   * 俄语识别
   * 
   * @param request - RecognizeRussianRequest
   * @returns RecognizeRussianResponse
   */
  async recognizeRussian(request: RecognizeRussianRequest): Promise<RecognizeRussianResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeRussianWithOptions(request, runtime);
  }

  /**
   * 购物小票识别
   * 
   * @param request - RecognizeShoppingReceiptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeShoppingReceiptResponse
   */
  async recognizeShoppingReceiptWithOptions(request: RecognizeShoppingReceiptRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeShoppingReceiptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeShoppingReceipt",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeShoppingReceiptResponse>(await this.callApi(params, req, runtime), new RecognizeShoppingReceiptResponse({}));
  }

  /**
   * 购物小票识别
   * 
   * @param request - RecognizeShoppingReceiptRequest
   * @returns RecognizeShoppingReceiptResponse
   */
  async recognizeShoppingReceipt(request: RecognizeShoppingReceiptRequest): Promise<RecognizeShoppingReceiptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeShoppingReceiptWithOptions(request, runtime);
  }

  /**
   * 社会保障卡识别
   * 
   * @param request - RecognizeSocialSecurityCardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeSocialSecurityCardResponse
   */
  async recognizeSocialSecurityCardWithOptions(request: RecognizeSocialSecurityCardRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeSocialSecurityCardResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeSocialSecurityCard",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeSocialSecurityCardResponse>(await this.callApi(params, req, runtime), new RecognizeSocialSecurityCardResponse({}));
  }

  /**
   * 社会保障卡识别
   * 
   * @param request - RecognizeSocialSecurityCardRequest
   * @returns RecognizeSocialSecurityCardResponse
   */
  async recognizeSocialSecurityCard(request: RecognizeSocialSecurityCardRequest): Promise<RecognizeSocialSecurityCardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeSocialSecurityCardWithOptions(request, runtime);
  }

  /**
   * 社保卡识别
   * 
   * @param request - RecognizeSocialSecurityCardVersionIIRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeSocialSecurityCardVersionIIResponse
   */
  async recognizeSocialSecurityCardVersionIIWithOptions(request: RecognizeSocialSecurityCardVersionIIRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeSocialSecurityCardVersionIIResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeSocialSecurityCardVersionII",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeSocialSecurityCardVersionIIResponse>(await this.callApi(params, req, runtime), new RecognizeSocialSecurityCardVersionIIResponse({}));
  }

  /**
   * 社保卡识别
   * 
   * @param request - RecognizeSocialSecurityCardVersionIIRequest
   * @returns RecognizeSocialSecurityCardVersionIIResponse
   */
  async recognizeSocialSecurityCardVersionII(request: RecognizeSocialSecurityCardVersionIIRequest): Promise<RecognizeSocialSecurityCardVersionIIResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeSocialSecurityCardVersionIIWithOptions(request, runtime);
  }

  /**
   * 表格识别
   * 
   * @param request - RecognizeTableOcrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeTableOcrResponse
   */
  async recognizeTableOcrWithOptions(request: RecognizeTableOcrRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeTableOcrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isHandWriting)) {
      query["IsHandWriting"] = request.isHandWriting;
    }

    if (!$dara.isNull(request.lineLess)) {
      query["LineLess"] = request.lineLess;
    }

    if (!$dara.isNull(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!$dara.isNull(request.skipDetection)) {
      query["SkipDetection"] = request.skipDetection;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeTableOcr",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeTableOcrResponse>(await this.callApi(params, req, runtime), new RecognizeTableOcrResponse({}));
  }

  /**
   * 表格识别
   * 
   * @param request - RecognizeTableOcrRequest
   * @returns RecognizeTableOcrResponse
   */
  async recognizeTableOcr(request: RecognizeTableOcrRequest): Promise<RecognizeTableOcrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeTableOcrWithOptions(request, runtime);
  }

  /**
   * 税收完税证明识别
   * 
   * @param request - RecognizeTaxClearanceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeTaxClearanceCertificateResponse
   */
  async recognizeTaxClearanceCertificateWithOptions(request: RecognizeTaxClearanceCertificateRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeTaxClearanceCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeTaxClearanceCertificate",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeTaxClearanceCertificateResponse>(await this.callApi(params, req, runtime), new RecognizeTaxClearanceCertificateResponse({}));
  }

  /**
   * 税收完税证明识别
   * 
   * @param request - RecognizeTaxClearanceCertificateRequest
   * @returns RecognizeTaxClearanceCertificateResponse
   */
  async recognizeTaxClearanceCertificate(request: RecognizeTaxClearanceCertificateRequest): Promise<RecognizeTaxClearanceCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeTaxClearanceCertificateWithOptions(request, runtime);
  }

  /**
   * 出租车发票
   * 
   * @param request - RecognizeTaxiInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeTaxiInvoiceResponse
   */
  async recognizeTaxiInvoiceWithOptions(request: RecognizeTaxiInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeTaxiInvoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeTaxiInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeTaxiInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeTaxiInvoiceResponse({}));
  }

  /**
   * 出租车发票
   * 
   * @param request - RecognizeTaxiInvoiceRequest
   * @returns RecognizeTaxiInvoiceResponse
   */
  async recognizeTaxiInvoice(request: RecognizeTaxiInvoiceRequest): Promise<RecognizeTaxiInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeTaxiInvoiceWithOptions(request, runtime);
  }

  /**
   * 泰语识别
   * 
   * @param request - RecognizeThaiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeThaiResponse
   */
  async recognizeThaiWithOptions(request: RecognizeThaiRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeThaiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!$dara.isNull(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!$dara.isNull(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeThai",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeThaiResponse>(await this.callApi(params, req, runtime), new RecognizeThaiResponse({}));
  }

  /**
   * 泰语识别
   * 
   * @param request - RecognizeThaiRequest
   * @returns RecognizeThaiResponse
   */
  async recognizeThai(request: RecognizeThaiRequest): Promise<RecognizeThaiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeThaiWithOptions(request, runtime);
  }

  /**
   * 过路过桥费发票识别
   * 
   * @param request - RecognizeTollInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeTollInvoiceResponse
   */
  async recognizeTollInvoiceWithOptions(request: RecognizeTollInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeTollInvoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeTollInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeTollInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeTollInvoiceResponse({}));
  }

  /**
   * 过路过桥费发票识别
   * 
   * @param request - RecognizeTollInvoiceRequest
   * @returns RecognizeTollInvoiceResponse
   */
  async recognizeTollInvoice(request: RecognizeTollInvoiceRequest): Promise<RecognizeTollInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeTollInvoiceWithOptions(request, runtime);
  }

  /**
   * 商标注册证
   * 
   * @param request - RecognizeTradeMarkCertificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeTradeMarkCertificationResponse
   */
  async recognizeTradeMarkCertificationWithOptions(request: RecognizeTradeMarkCertificationRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeTradeMarkCertificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeTradeMarkCertification",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeTradeMarkCertificationResponse>(await this.callApi(params, req, runtime), new RecognizeTradeMarkCertificationResponse({}));
  }

  /**
   * 商标注册证
   * 
   * @param request - RecognizeTradeMarkCertificationRequest
   * @returns RecognizeTradeMarkCertificationResponse
   */
  async recognizeTradeMarkCertification(request: RecognizeTradeMarkCertificationRequest): Promise<RecognizeTradeMarkCertificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeTradeMarkCertificationWithOptions(request, runtime);
  }

  /**
   * 火车票
   * 
   * @param request - RecognizeTrainInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeTrainInvoiceResponse
   */
  async recognizeTrainInvoiceWithOptions(request: RecognizeTrainInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeTrainInvoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeTrainInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeTrainInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeTrainInvoiceResponse({}));
  }

  /**
   * 火车票
   * 
   * @param request - RecognizeTrainInvoiceRequest
   * @returns RecognizeTrainInvoiceResponse
   */
  async recognizeTrainInvoice(request: RecognizeTrainInvoiceRequest): Promise<RecognizeTrainInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeTrainInvoiceWithOptions(request, runtime);
  }

  /**
   * 二手车统一销售发票识别
   * 
   * @param request - RecognizeUsedCarInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeUsedCarInvoiceResponse
   */
  async recognizeUsedCarInvoiceWithOptions(request: RecognizeUsedCarInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeUsedCarInvoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeUsedCarInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeUsedCarInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeUsedCarInvoiceResponse({}));
  }

  /**
   * 二手车统一销售发票识别
   * 
   * @param request - RecognizeUsedCarInvoiceRequest
   * @returns RecognizeUsedCarInvoiceResponse
   */
  async recognizeUsedCarInvoice(request: RecognizeUsedCarInvoiceRequest): Promise<RecognizeUsedCarInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeUsedCarInvoiceWithOptions(request, runtime);
  }

  /**
   * 车辆合格证识别
   * 
   * @param request - RecognizeVehicleCertificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeVehicleCertificationResponse
   */
  async recognizeVehicleCertificationWithOptions(request: RecognizeVehicleCertificationRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeVehicleCertificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeVehicleCertification",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeVehicleCertificationResponse>(await this.callApi(params, req, runtime), new RecognizeVehicleCertificationResponse({}));
  }

  /**
   * 车辆合格证识别
   * 
   * @param request - RecognizeVehicleCertificationRequest
   * @returns RecognizeVehicleCertificationResponse
   */
  async recognizeVehicleCertification(request: RecognizeVehicleCertificationRequest): Promise<RecognizeVehicleCertificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeVehicleCertificationWithOptions(request, runtime);
  }

  /**
   * 行驶证识别
   * 
   * @param request - RecognizeVehicleLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeVehicleLicenseResponse
   */
  async recognizeVehicleLicenseWithOptions(request: RecognizeVehicleLicenseRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeVehicleLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeVehicleLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeVehicleLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeVehicleLicenseResponse({}));
  }

  /**
   * 行驶证识别
   * 
   * @param request - RecognizeVehicleLicenseRequest
   * @returns RecognizeVehicleLicenseResponse
   */
  async recognizeVehicleLicense(request: RecognizeVehicleLicenseRequest): Promise<RecognizeVehicleLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeVehicleLicenseWithOptions(request, runtime);
  }

  /**
   * 机动车注册登记证识别
   * 
   * @param request - RecognizeVehicleRegistrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeVehicleRegistrationResponse
   */
  async recognizeVehicleRegistrationWithOptions(request: RecognizeVehicleRegistrationRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeVehicleRegistrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeVehicleRegistration",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeVehicleRegistrationResponse>(await this.callApi(params, req, runtime), new RecognizeVehicleRegistrationResponse({}));
  }

  /**
   * 机动车注册登记证识别
   * 
   * @param request - RecognizeVehicleRegistrationRequest
   * @returns RecognizeVehicleRegistrationResponse
   */
  async recognizeVehicleRegistration(request: RecognizeVehicleRegistrationRequest): Promise<RecognizeVehicleRegistrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeVehicleRegistrationWithOptions(request, runtime);
  }

  /**
   * 电子面单识别
   * 
   * @param request - RecognizeWaybillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeWaybillResponse
   */
  async recognizeWaybillWithOptions(request: RecognizeWaybillRequest, runtime: $dara.RuntimeOptions): Promise<RecognizeWaybillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeWaybill",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecognizeWaybillResponse>(await this.callApi(params, req, runtime), new RecognizeWaybillResponse({}));
  }

  /**
   * 电子面单识别
   * 
   * @param request - RecognizeWaybillRequest
   * @returns RecognizeWaybillResponse
   */
  async recognizeWaybill(request: RecognizeWaybillRequest): Promise<RecognizeWaybillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeWaybillWithOptions(request, runtime);
  }

  /**
   * 营业执照核验
   * 
   * @param request - VerifyBusinessLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyBusinessLicenseResponse
   */
  async verifyBusinessLicenseWithOptions(request: VerifyBusinessLicenseRequest, runtime: $dara.RuntimeOptions): Promise<VerifyBusinessLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!$dara.isNull(request.creditCode)) {
      query["CreditCode"] = request.creditCode;
    }

    if (!$dara.isNull(request.legalPerson)) {
      query["LegalPerson"] = request.legalPerson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyBusinessLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<VerifyBusinessLicenseResponse>(await this.callApi(params, req, runtime), new VerifyBusinessLicenseResponse({}));
  }

  /**
   * 营业执照核验
   * 
   * @param request - VerifyBusinessLicenseRequest
   * @returns VerifyBusinessLicenseResponse
   */
  async verifyBusinessLicense(request: VerifyBusinessLicenseRequest): Promise<VerifyBusinessLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyBusinessLicenseWithOptions(request, runtime);
  }

  /**
   * 增值税发票核验
   * 
   * @param request - VerifyVATInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyVATInvoiceResponse
   */
  async verifyVATInvoiceWithOptions(request: VerifyVATInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<VerifyVATInvoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.invoiceCode)) {
      query["InvoiceCode"] = request.invoiceCode;
    }

    if (!$dara.isNull(request.invoiceDate)) {
      query["InvoiceDate"] = request.invoiceDate;
    }

    if (!$dara.isNull(request.invoiceKind)) {
      query["InvoiceKind"] = request.invoiceKind;
    }

    if (!$dara.isNull(request.invoiceNo)) {
      query["InvoiceNo"] = request.invoiceNo;
    }

    if (!$dara.isNull(request.invoiceSum)) {
      query["InvoiceSum"] = request.invoiceSum;
    }

    if (!$dara.isNull(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyVATInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<VerifyVATInvoiceResponse>(await this.callApi(params, req, runtime), new VerifyVATInvoiceResponse({}));
  }

  /**
   * 增值税发票核验
   * 
   * @param request - VerifyVATInvoiceRequest
   * @returns VerifyVATInvoiceResponse
   */
  async verifyVATInvoice(request: VerifyVATInvoiceRequest): Promise<VerifyVATInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyVATInvoiceWithOptions(request, runtime);
  }

}
