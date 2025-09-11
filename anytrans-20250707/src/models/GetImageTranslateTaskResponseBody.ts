// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesDownLeft extends $dara.Model {
  /**
   * @example
   * 10
   */
  x?: number;
  /**
   * @example
   * 694
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
   * @example
   * 97
   */
  x?: number;
  /**
   * @example
   * 694
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
   * @example
   * 10
   */
  x?: number;
  /**
   * @example
   * 669
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
   * @example
   * 11
   */
  x?: number;
  /**
   * @example
   * 22
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
   * @example
   * 1
   */
  confidence?: number;
  /**
   * @example
   * 0
   */
  direction?: number;
  downLeft?: GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesDownLeft;
  downRight?: GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesDownRight;
  /**
   * @example
   * 1
   */
  tableCellId?: number;
  /**
   * @example
   * tbl-1dd15f7e-e373-4da9-858e-8785db1a2954
   */
  tableId?: number;
  text?: string;
  /**
   * @example
   * {
   *           "en": "Promotional price:"
   *         }
   */
  translation?: { [key: string]: any };
  upLeft?: GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxesUpLeft;
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
   * @example
   * 33
   */
  x?: number;
  /**
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
  pos?: GetImageTranslateTaskResponseBodyDataTranslationTableInfosCellInfosPos[];
  /**
   * @example
   * 1
   */
  tableCellId?: number;
  text?: string;
  /**
   * @example
   * 2
   */
  xec?: number;
  /**
   * @example
   * 1
   */
  xsc?: number;
  /**
   * @example
   * 1
   */
  yec?: number;
  /**
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
  cellInfos?: GetImageTranslateTaskResponseBodyDataTranslationTableInfosCellInfos[];
  /**
   * @example
   * tbl-f16944be-5955-466c-aa6c-940e4ed99a09
   */
  tableId?: number;
  /**
   * @example
   * 50
   */
  xCellSize?: number;
  /**
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
   * @example
   * 0
   */
  angle?: number;
  boundingBoxes?: GetImageTranslateTaskResponseBodyDataTranslationBoundingBoxes[];
  /**
   * @example
   * 5
   */
  boxesCount?: number;
  /**
   * @example
   * 800
   */
  height?: number;
  /**
   * @example
   * 800
   */
  orgHeight?: number;
  /**
   * @example
   * 800
   */
  orgWidth?: number;
  tableInfos?: GetImageTranslateTaskResponseBodyDataTranslationTableInfos[];
  /**
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
   * @example
   * 213e391517328463424251152ec9fb
   */
  traceId?: string;
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
   * @example
   * 200
   */
  code?: string;
  data?: GetImageTranslateTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 377A48D7-7CFA-53F9-8CA2-14FE3F2774B6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

