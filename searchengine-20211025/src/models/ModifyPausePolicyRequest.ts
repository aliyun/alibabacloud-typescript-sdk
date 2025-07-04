// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BodyValue } from "./BodyValue";


export class ModifyPausePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: { [key: string]: BodyValue };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': BodyValue },
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

