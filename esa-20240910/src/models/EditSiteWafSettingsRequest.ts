// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafSiteSettings } from "./WafSiteSettings";


export class EditSiteWafSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * WAF configuration information for the site, passed in JSON format.
   */
  settings?: WafSiteSettings;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * Site version.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      settings: 'Settings',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settings: WafSiteSettings,
      siteId: 'number',
      siteVersion: 'number',
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

