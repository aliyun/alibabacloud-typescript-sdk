// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Boundary } from "./Boundary";


export class CroppingSuggestion extends $dara.Model {
  /**
   * @remarks
   * The aspect ratio.
   * 
   * @example
   * 2:3
   */
  aspectRatio?: string;
  /**
   * @remarks
   * The boundary of the cropping.
   */
  boundary?: Boundary;
  /**
   * @remarks
   * The confidence score. Valid values: 0 to 1. A higher score indicates greater confidence in the result.
   * 
   * @example
   * 0.7079545259475708
   */
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      aspectRatio: 'AspectRatio',
      boundary: 'Boundary',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspectRatio: 'string',
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

