// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Developer } from "./Developer";


export class CreateDeveloperRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: Developer;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Developer,
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

