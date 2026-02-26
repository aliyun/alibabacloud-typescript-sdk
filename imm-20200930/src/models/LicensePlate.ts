// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Boundary } from "./Boundary";


export class LicensePlate extends $dara.Model {
  /**
   * @remarks
   * The boundary information of the license plate.
   */
  boundary?: Boundary;
  /**
   * @remarks
   * The confidence level.
   * 
   * @example
   * 0.789
   */
  confidence?: number;
  /**
   * @remarks
   * The license plate number.
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      boundary: 'Boundary',
      confidence: 'Confidence',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: Boundary,
      confidence: 'number',
      content: 'string',
    };
  }

  validate() {
    if(this.boundary && typeof (this.boundary as any).validate === 'function') {
      (this.boundary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

