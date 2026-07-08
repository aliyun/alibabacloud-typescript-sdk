// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesDownLeft extends $dara.Model {
  /**
   * @remarks
   * The x-coordinate.
   * 
   * @example
   * 9
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate.
   * 
   * @example
   * 145
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'x',
      y: 'y',
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

export class GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesDownRight extends $dara.Model {
  /**
   * @remarks
   * The x-coordinate.
   * 
   * @example
   * 327
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate.
   * 
   * @example
   * 148
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'x',
      y: 'y',
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

export class GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesUpLeft extends $dara.Model {
  /**
   * @remarks
   * The x-coordinate.
   * 
   * @example
   * 10
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate.
   * 
   * @example
   * 66
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'x',
      y: 'y',
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

export class GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesUpRight extends $dara.Model {
  /**
   * @remarks
   * The x-coordinate.
   * 
   * @example
   * 328
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate.
   * 
   * @example
   * 69
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'x',
      y: 'y',
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

export class GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxes extends $dara.Model {
  /**
   * @remarks
   * The confidence score for the recognized text. The value ranges from 0 (lowest confidence) to 1 (highest confidence).
   * 
   * @example
   * 0.99
   */
  confidence?: number;
  /**
   * @remarks
   * The text direction. Valid values: `0` (horizontal) and `1` (vertical).
   * 
   * @example
   * 0
   */
  direction?: number;
  /**
   * @remarks
   * The coordinates of the lower-left corner of the bounding box.
   */
  downLeft?: GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesDownLeft;
  /**
   * @remarks
   * The coordinates of the lower-right corner of the bounding box.
   */
  downRight?: GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesDownRight;
  /**
   * @remarks
   * The cell ID of the bounding box. If the bounding box is not part of a table, the value is `-1`.
   * 
   * @example
   * 1
   */
  tableCellId?: number;
  /**
   * @remarks
   * The ID of the table that contains the bounding box. If the bounding box is not part of a table, the value is `-1`.
   * 
   * @example
   * 1
   */
  tableId?: number;
  /**
   * @remarks
   * The source-language text within the bounding box.
   * 
   * @example
   * 修护头皮
   */
  text?: string;
  /**
   * @remarks
   * An object containing the translated text, keyed by the target language code.
   * 
   * @example
   * { "en": "Restore Scalp Health" }
   */
  translation?: { [key: string]: any };
  /**
   * @remarks
   * The coordinates of the upper-left corner of the bounding box.
   */
  upLeft?: GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesUpLeft;
  /**
   * @remarks
   * The coordinates of the upper-right corner of the bounding box.
   */
  upRight?: GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesUpRight;
  static names(): { [key: string]: string } {
    return {
      confidence: 'confidence',
      direction: 'direction',
      downLeft: 'downLeft',
      downRight: 'downRight',
      tableCellId: 'tableCellId',
      tableId: 'tableId',
      text: 'text',
      translation: 'translation',
      upLeft: 'upLeft',
      upRight: 'upRight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      direction: 'number',
      downLeft: GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesDownLeft,
      downRight: GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesDownRight,
      tableCellId: 'number',
      tableId: 'number',
      text: 'string',
      translation: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      upLeft: GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesUpLeft,
      upRight: GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesUpRight,
    };
  }

  validate() {
    if(this.downLeft && typeof (this.downLeft as any).validate === 'function') {
      (this.downLeft as any).validate();
    }
    if(this.downRight && typeof (this.downRight as any).validate === 'function') {
      (this.downRight as any).validate();
    }
    if(this.translation) {
      $dara.Model.validateMap(this.translation);
    }
    if(this.upLeft && typeof (this.upLeft as any).validate === 'function') {
      (this.upLeft as any).validate();
    }
    if(this.upRight && typeof (this.upRight as any).validate === 'function') {
      (this.upRight as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateTaskResponseBodyDataTranslationTableInfosCellInfosPos extends $dara.Model {
  /**
   * @remarks
   * The x-coordinate.
   * 
   * @example
   * 33
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate.
   * 
   * @example
   * 11
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'x',
      y: 'y',
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

export class GetImageTranslateTaskResponseBodyDataTranslationTableInfosCellInfos extends $dara.Model {
  /**
   * @remarks
   * An array of coordinates defining the cell\\"s bounding box.
   */
  pos?: GetImageTranslateTaskResponseBodyDataTranslationTableInfosCellInfosPos[];
  /**
   * @remarks
   * The cell ID.
   * 
   * @example
   * 1
   */
  tableCellId?: number;
  /**
   * @remarks
   * The text content of the cell.
   * 
   * @example
   * 活动价
   */
  text?: string;
  /**
   * @remarks
   * The ending column index of the cell. The index starts from 1.
   * 
   * @example
   * 2
   */
  xec?: number;
  /**
   * @remarks
   * The starting column index of the cell. The index starts from 1.
   * 
   * @example
   * 1
   */
  xsc?: number;
  /**
   * @remarks
   * The ending row index of the cell. The index starts from 1.
   * 
   * @example
   * 1
   */
  yec?: number;
  /**
   * @remarks
   * The starting row index of the cell. The index starts from 1.
   * 
   * @example
   * 3
   */
  ysc?: number;
  static names(): { [key: string]: string } {
    return {
      pos: 'pos',
      tableCellId: 'tableCellId',
      text: 'text',
      xec: 'xec',
      xsc: 'xsc',
      yec: 'yec',
      ysc: 'ysc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pos: { 'type': 'array', 'itemType': GetImageTranslateTaskResponseBodyDataTranslationTableInfosCellInfosPos },
      tableCellId: 'number',
      text: 'string',
      xec: 'number',
      xsc: 'number',
      yec: 'number',
      ysc: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pos)) {
      $dara.Model.validateArray(this.pos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateTaskResponseBodyDataTranslationTableInfos extends $dara.Model {
  /**
   * @remarks
   * Information about the cells within the table.
   */
  cellInfos?: GetImageTranslateTaskResponseBodyDataTranslationTableInfosCellInfos[];
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * 1
   */
  tableId?: number;
  /**
   * @remarks
   * The number of columns in the table.
   * 
   * @example
   * 50
   */
  xCellSize?: number;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 50
   */
  yCellSize?: number;
  static names(): { [key: string]: string } {
    return {
      cellInfos: 'cellInfos',
      tableId: 'tableId',
      xCellSize: 'xCellSize',
      yCellSize: 'yCellSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cellInfos: { 'type': 'array', 'itemType': GetImageTranslateTaskResponseBodyDataTranslationTableInfosCellInfos },
      tableId: 'number',
      xCellSize: 'number',
      yCellSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cellInfos)) {
      $dara.Model.validateArray(this.cellInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateTaskResponseBodyDataTranslation extends $dara.Model {
  /**
   * @remarks
   * The rotation angle of the image in degrees.
   * 
   * @example
   * 0
   */
  angle?: number;
  /**
   * @remarks
   * An array of detected bounding boxes.
   */
  boundingBoxes?: GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxes[];
  /**
   * @remarks
   * The number of detected bounding boxes.
   * 
   * @example
   * 13
   */
  boxesCount?: number;
  /**
   * @remarks
   * The height of the image after rotation, in pixels.
   * 
   * @example
   * 800
   */
  height?: number;
  /**
   * @remarks
   * The height of the original image, in pixels.
   * 
   * @example
   * 800
   */
  orgHeight?: number;
  /**
   * @remarks
   * The width of the original image, in pixels.
   * 
   * @example
   * 800
   */
  orgWidth?: number;
  /**
   * @remarks
   * Information about tables detected in the image.
   */
  tableInfos?: GetImageTranslateTaskResponseBodyDataTranslationTableInfos[];
  /**
   * @remarks
   * The width of the image after rotation, in pixels.
   * 
   * @example
   * 800
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      angle: 'angle',
      boundingBoxes: 'boundingBoxes',
      boxesCount: 'boxesCount',
      height: 'height',
      orgHeight: 'orgHeight',
      orgWidth: 'orgWidth',
      tableInfos: 'tableInfos',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      boundingBoxes: { 'type': 'array', 'itemType': GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxes },
      boxesCount: 'number',
      height: 'number',
      orgHeight: 'number',
      orgWidth: 'number',
      tableInfos: { 'type': 'array', 'itemType': GetImageTranslateTaskResponseBodyDataTranslationTableInfos },
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.boundingBoxes)) {
      $dara.Model.validateArray(this.boundingBoxes);
    }
    if(Array.isArray(this.tableInfos)) {
      $dara.Model.validateArray(this.tableInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * 213e391517328463424251152ec9fb
   */
  traceId?: string;
  /**
   * @remarks
   * An object containing the translation result.
   */
  translation?: GetImageTranslateTaskResponseBodyDataTranslation;
  static names(): { [key: string]: string } {
    return {
      traceId: 'traceId',
      translation: 'translation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceId: 'string',
      translation: GetImageTranslateTaskResponseBodyDataTranslation,
    };
  }

  validate() {
    if(this.translation && typeof (this.translation as any).validate === 'function') {
      (this.translation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageTranslateTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * A JSON object that contains the returned data.
   */
  data?: GetImageTranslateTaskResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, used to trace the API call.
   * 
   * @example
   * 377A48D7-7CFA-53F9-8CA2-14FE3F2774B6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates whether the request is synchronous.
   * 
   * @example
   * true
   */
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      synchro: 'synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetImageTranslateTaskResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      synchro: 'boolean',
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

