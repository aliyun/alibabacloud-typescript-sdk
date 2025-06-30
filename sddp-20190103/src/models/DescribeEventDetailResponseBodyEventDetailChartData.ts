// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventDetailResponseBodyEventDetailChartData extends $dara.Model {
  /**
   * @remarks
   * The value of the data item on the X axis.
   * 
   * @example
   * [test1,test2,...]
   */
  x?: string[];
  /**
   * @remarks
   * The value of the data item on the Y axis.
   * 
   * @example
   * [1,2,3,...]
   */
  y?: string[];
  /**
   * @remarks
   * The value of the data item for the Z axis.
   */
  z?: string[];
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': 'string' },
      z: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.x)) {
      $dara.Model.validateArray(this.x);
    }
    if(Array.isArray(this.y)) {
      $dara.Model.validateArray(this.y);
    }
    if(Array.isArray(this.z)) {
      $dara.Model.validateArray(this.z);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

