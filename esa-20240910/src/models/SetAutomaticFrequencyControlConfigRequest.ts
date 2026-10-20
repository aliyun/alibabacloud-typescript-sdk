// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAutomaticFrequencyControlConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The action to perform. Valid values:
   * - **observe**: Monitor.
   * - **deny**: Block.
   * - **js**: JavaScript Challenge.
   * 
   * This parameter is required.
   * 
   * @example
   * js
   */
  actionType?: string;
  /**
   * @remarks
   * Specifies whether to enable the feature. Valid values:
   * 
   *  - **on**: Enabled.
   * 
   *  - **off**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The protection level. Valid values:
   * - **loose**: Loose.
   * - **normal**: Medium.
   * - **strict**: Strict.
   * 
   * This parameter is required.
   * 
   * @example
   * normal
   */
  level?: string;
  /**
   * @remarks
   * The ID of the site. You can obtain the ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site. For sites with version management enabled, you can use this parameter to specify the site version to which the configuration applies. Default value: 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      enable: 'Enable',
      level: 'Level',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      enable: 'string',
      level: 'string',
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

