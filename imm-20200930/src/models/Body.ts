// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Boundary } from "./Boundary";


export class Body extends $dara.Model {
  /**
   * @remarks
   * The boundary of the human body.
   */
  boundary?: Boundary;
  /**
   * @remarks
   * The confidence level of the result. A higher value indicates greater confidence. Specifically, a value exceeding 0.8 signifies a high degree of confidence in the result.
   * 
   * @example
   * 0.75
   */
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      boundary: 'Boundary',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: Boundary,
      confidence: 'number',
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

