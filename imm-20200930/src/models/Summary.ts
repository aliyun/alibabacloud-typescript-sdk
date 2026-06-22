// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Illustration } from "./Illustration";


export class Summary extends $dara.Model {
  image?: Illustration;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: Illustration,
      text: 'string',
    };
  }

  validate() {
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

