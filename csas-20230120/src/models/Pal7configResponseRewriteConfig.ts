// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PAL7ConfigReplaceRule } from "./Pal7configReplaceRule";


export class PAL7ConfigResponseRewriteConfig extends $dara.Model {
  mode?: string;
  replaceRules?: PAL7ConfigReplaceRule[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      replaceRules: 'ReplaceRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      replaceRules: { 'type': 'array', 'itemType': PAL7ConfigReplaceRule },
    };
  }

  validate() {
    if(Array.isArray(this.replaceRules)) {
      $dara.Model.validateArray(this.replaceRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

