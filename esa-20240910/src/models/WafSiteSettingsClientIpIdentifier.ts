// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafSiteSettingsClientIpIdentifier extends $dara.Model {
  headers?: string[];
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

