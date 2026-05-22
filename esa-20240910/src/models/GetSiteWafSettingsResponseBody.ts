// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafSiteSettings } from "./WafSiteSettings";


export class GetSiteWafSettingsResponseBody extends $dara.Model {
  requestId?: string;
  settings?: WafSiteSettings;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      settings: WafSiteSettings,
    };
  }

  validate() {
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

