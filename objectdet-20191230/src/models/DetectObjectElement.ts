// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectObjectElement extends $dara.Model {
  /**
   * @example
   * 200
   */
  height?: number;
  /**
   * @example
   * 0.68225745
   */
  score?: number;
  /**
   * @example
   * VEHICLE
   */
  type?: string;
  /**
   * @example
   * 100
   */
  width?: number;
  /**
   * @example
   * 5
   */
  x?: number;
  /**
   * @example
   * 10
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      score: 'Score',
      type: 'Type',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      score: 'number',
      type: 'string',
      width: 'number',
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

