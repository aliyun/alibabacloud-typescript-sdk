// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRunResponseBodyDeltaContent } from "./CreateRunResponseBodyDeltaContent";


export class CreateRunResponseBodyDelta extends $dara.Model {
  /**
   * @example
   * {}
   */
  content?: CreateRunResponseBodyDeltaContent;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: CreateRunResponseBodyDeltaContent,
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

