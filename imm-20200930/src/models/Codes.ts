// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Boundary } from "./Boundary";


export class Codes extends $dara.Model {
  /**
   * @remarks
   * The boundary of the code.
   */
  boundary?: Boundary;
  /**
   * @remarks
   * The confidence level of the code. A greater value indicates a higher confidence level. A value exceeding 0.8 signifies a high degree of confidence in the result.
   * 
   * @example
   * 0.9
   */
  confidence?: number;
  /**
   * @remarks
   * The content of the code.
   * 
   * @example
   * https://www.example.com
   */
  content?: string;
  /**
   * @remarks
   * The type of the code.
   * 
   * Enumerated values:
   * 
   * *   qrcode
   * *   barcode
   * 
   * @example
   * qrcode
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      boundary: 'Boundary',
      confidence: 'Confidence',
      content: 'Content',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: Boundary,
      confidence: 'number',
      content: 'string',
      type: 'string',
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

