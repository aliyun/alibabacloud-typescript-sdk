// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PAL7ConfigBypassConfigUrlBypassRules } from "./Pal7configBypassConfigUrlBypassRules";


export class PAL7ConfigBypassConfig extends $dara.Model {
  appBypassFroms?: string[];
  mode?: string;
  urlBypassRules?: PAL7ConfigBypassConfigUrlBypassRules[];
  static names(): { [key: string]: string } {
    return {
      appBypassFroms: 'AppBypassFroms',
      mode: 'Mode',
      urlBypassRules: 'UrlBypassRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appBypassFroms: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      urlBypassRules: { 'type': 'array', 'itemType': PAL7ConfigBypassConfigUrlBypassRules },
    };
  }

  validate() {
    if(Array.isArray(this.appBypassFroms)) {
      $dara.Model.validateArray(this.appBypassFroms);
    }
    if(Array.isArray(this.urlBypassRules)) {
      $dara.Model.validateArray(this.urlBypassRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

