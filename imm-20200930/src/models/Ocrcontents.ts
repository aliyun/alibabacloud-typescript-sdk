// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Boundary } from "./Boundary";


export class OCRContents extends $dara.Model {
  /**
   * @remarks
   * The boundary information.
   */
  boundary?: Boundary;
  /**
   * @remarks
   * The confidence level of the content. Valid values: 0 to 1. The value 0 indicates the lowest confidence level. The value 1 indicates the highest confidence level.
   * 
   * @example
   * 0.8254936695098877
   */
  confidence?: number;
  /**
   * @remarks
   * The content.
   */
  contents?: string;
  /**
   * @remarks
   * The BCP 47 language code. This parameter is not supported in the current version.
   * 
   * @example
   * zh-hans
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      boundary: 'Boundary',
      confidence: 'Confidence',
      contents: 'Contents',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: Boundary,
      confidence: 'number',
      contents: 'string',
      language: 'string',
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

