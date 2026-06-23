// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MultimodalSearchBody } from "./MultimodalSearchBody";


export class MultimodalSearchRequest extends $dara.Model {
  /**
   * @remarks
   * Query parameters and site blocking parameters
   */
  body?: MultimodalSearchBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: MultimodalSearchBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

