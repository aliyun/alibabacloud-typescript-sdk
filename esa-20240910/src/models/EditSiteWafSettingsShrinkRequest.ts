// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditSiteWafSettingsShrinkRequest extends $dara.Model {
  settingsShrink?: string;
  /**
   * @example
   * 1
   */
  siteId?: number;
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

