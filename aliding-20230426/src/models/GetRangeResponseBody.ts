// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRangeResponseBodyBackgroundColors extends $dara.Model {
  /**
   * @remarks
   * red
   * 
   * @example
   * 0
   */
  red?: number;
  /**
   * @remarks
   * green
   * 
   * @example
   * 0
   */
  green?: number;
  /**
   * @remarks
   * blue
   * 
   * @example
   * 0
   */
  blue?: number;
  /**
   * @remarks
   * hexString
   * 
   * @example
   * #000000
   */
  hexString?: string;
  static names(): { [key: string]: string } {
    return {
      red: 'Red',
      green: 'Green',
      blue: 'Blue',
      hexString: 'HexString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      red: 'number',
      green: 'number',
      blue: 'number',
      hexString: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRangeResponseBodyHyperlinks extends $dara.Model {
  type?: string;
  link?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      link: 'link',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      link: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRangeResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  backgroundColors?: GetRangeResponseBodyBackgroundColors[][];
  /**
   * @example
   * []
   */
  displayValues?: string[][];
  /**
   * @example
   * []
   */
  formulas?: string[][];
  /**
   * @example
   * []
   */
  hyperlinks?: GetRangeResponseBodyHyperlinks[][];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * []
   */
  values?: any[][];
  static names(): { [key: string]: string } {
    return {
      backgroundColors: 'backgroundColors',
      displayValues: 'displayValues',
      formulas: 'formulas',
      hyperlinks: 'hyperlinks',
      requestId: 'requestId',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundColors: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': GetRangeResponseBodyBackgroundColors } },
      displayValues: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      formulas: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      hyperlinks: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': GetRangeResponseBodyHyperlinks } },
      requestId: 'string',
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.backgroundColors)) {
      $dara.Model.validateArray(this.backgroundColors);
    }
    if(Array.isArray(this.displayValues)) {
      $dara.Model.validateArray(this.displayValues);
    }
    if(Array.isArray(this.formulas)) {
      $dara.Model.validateArray(this.formulas);
    }
    if(Array.isArray(this.hyperlinks)) {
      $dara.Model.validateArray(this.hyperlinks);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

