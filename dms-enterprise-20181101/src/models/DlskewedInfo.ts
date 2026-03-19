// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DLSkewedInfo extends $dara.Model {
  /**
   * @remarks
   * The list of skewed column names.
   */
  skewedColNames?: string[];
  /**
   * @remarks
   * The mappings between skewed values and columns.
   * 
   * @example
   * {“col1”:"val1"}
   */
  skewedColValueLocationMaps?: { [key: string]: any };
  /**
   * @remarks
   * The lists of skewed column values. Each list provides a set of associated values.
   */
  skewedColValues?: string[][];
  static names(): { [key: string]: string } {
    return {
      skewedColNames: 'SkewedColNames',
      skewedColValueLocationMaps: 'SkewedColValueLocationMaps',
      skewedColValues: 'SkewedColValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skewedColNames: { 'type': 'array', 'itemType': 'string' },
      skewedColValueLocationMaps: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      skewedColValues: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.skewedColNames)) {
      $dara.Model.validateArray(this.skewedColNames);
    }
    if(this.skewedColValueLocationMaps) {
      $dara.Model.validateMap(this.skewedColValueLocationMaps);
    }
    if(Array.isArray(this.skewedColValues)) {
      $dara.Model.validateArray(this.skewedColValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

