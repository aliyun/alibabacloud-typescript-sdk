// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditSiteWafSettingsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The WAF configuration of the site, passed in JSON format.
   */
  settingsShrink?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * The site version.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      settingsShrink: 'Settings',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settingsShrink: 'string',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

