// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PAL7ConfigRewriteOp } from "./Pal7configRewriteOp";


export class PAL7ConfigResponseHeaderRewriteConfig extends $dara.Model {
  ops?: PAL7ConfigRewriteOp[];
  static names(): { [key: string]: string } {
    return {
      ops: 'Ops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ops: { 'type': 'array', 'itemType': PAL7ConfigRewriteOp },
    };
  }

  validate() {
    if(Array.isArray(this.ops)) {
      $dara.Model.validateArray(this.ops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

