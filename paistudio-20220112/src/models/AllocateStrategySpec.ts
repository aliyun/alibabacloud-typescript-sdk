// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeSpec } from "./NodeSpec";


export class AllocateStrategySpec extends $dara.Model {
  nodeSpecs?: NodeSpec[];
  static names(): { [key: string]: string } {
    return {
      nodeSpecs: 'NodeSpecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeSpecs: { 'type': 'array', 'itemType': NodeSpec },
    };
  }

  validate() {
    if(Array.isArray(this.nodeSpecs)) {
      $dara.Model.validateArray(this.nodeSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

