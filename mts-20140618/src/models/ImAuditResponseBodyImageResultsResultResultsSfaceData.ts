// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImAuditResponseBodyImageResultsResultResultsSfaceDataFaces } from "./ImAuditResponseBodyImageResultsResultResultsSfaceDataFaces";


export class ImAuditResponseBodyImageResultsResultResultsSfaceData extends $dara.Model {
  /**
   * @remarks
   * The information about the face detected in the moderated image.
   */
  faces?: ImAuditResponseBodyImageResultsResultResultsSfaceDataFaces[];
  /**
   * @remarks
   * The height of the face area. Unit: pixel.
   * 
   * @example
   * 121
   */
  h?: number;
  /**
   * @remarks
   * The width of the face area. Unit: pixel.
   * 
   * @example
   * 47
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the face area and the y-axis, with the upper-left corner of the image being the coordinate origin. Unit: pixel.
   * 
   * @example
   * 49
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the face area and the y-axis, with the upper-left corner of the image being the coordinate origin. Unit: pixel.
   * 
   * @example
   * 39
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      faces: 'faces',
      h: 'h',
      w: 'w',
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faces: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsSfaceDataFaces },
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.faces)) {
      $dara.Model.validateArray(this.faces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

