// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Boundary } from "./Boundary";


export class CroppingSuggestion extends $dara.Model {
  aspectRatio?: string;
  boundary?: Boundary;
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

