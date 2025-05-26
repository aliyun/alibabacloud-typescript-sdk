// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Boundary } from "./Boundary";


export class Codes extends $dara.Model {
  boundary?: Boundary;
  confidence?: number;
  content?: string;
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

