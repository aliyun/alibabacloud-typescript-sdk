// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyIndexVersionRequestBody } from "./ModifyIndexVersionRequestBody";


export class ModifyIndexVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
  body?: ModifyIndexVersionRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': ModifyIndexVersionRequestBody },
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

