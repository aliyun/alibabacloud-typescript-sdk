// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DLSkewedInfo extends $dara.Model {
  skewedColNames?: string[];
  skewedColValueLocationMaps?: { [key: string]: any };
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

