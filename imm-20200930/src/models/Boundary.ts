// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PointInt64 } from "./PointInt64";


export class Boundary extends $dara.Model {
  /**
   * @remarks
   * The height. Unit: pixel.
   * 
   * @example
   * 300
   */
  height?: number;
  /**
   * @remarks
   * The distance from the X-coordinate of the vertex to the left edge.
   * 
   * @example
   * 10
   */
  left?: number;
  /**
   * @remarks
   * The polygon formed by a number of points. This parameter takes effect only when the boundary describes a polygon rather than a rectangle.
   * 
   * >  This parameter is mutually exclusive to the following parameters that form a rectangle: Width, Height, Left, and Top. A boundary describes only a rectangle or a polygon.
   */
  polygon?: PointInt64[];
  /**
   * @remarks
   * The distance from the Y-coordinate of the vertex to the top.
   * 
   * @example
   * 30
   */
  top?: number;
  /**
   * @remarks
   * The width. Unit: pixel.
   * 
   * @example
   * 200
   */
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

