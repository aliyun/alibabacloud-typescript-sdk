// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchStrategy } from "./SearchStrategy";


export class UpdateSearchStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: SearchStrategy;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SearchStrategy,
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

