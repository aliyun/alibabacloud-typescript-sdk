// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PointInt64 } from "./PointInt64";


export class Boundary extends $dara.Model {
  height?: number;
  left?: number;
  polygon?: PointInt64[];
  top?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      polygon: 'Polygon',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      polygon: { 'type': 'array', 'itemType': PointInt64 },
      top: 'number',
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.polygon)) {
      $dara.Model.validateArray(this.polygon);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

