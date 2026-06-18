// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAutomaticFrequencyControlConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The action to take on requests that trigger the control. Valid values:
   * 
   * - **observe**: Monitors the requests.
   * 
   * - **deny**: Blocks the requests.
   * 
   * - **js**: Issues a JS challenge.
   * 
   * This parameter is required.
   * 
   * @example
   * js
   */
  actionType?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic frequency control. Valid values:
   * 
   * - **on**: Enables automatic frequency control.
   * 
   * - **off**: Disables automatic frequency control.
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
   * 
   * - **loose**: Loose protection.
   * 
   * - **normal**: Normal protection.
   * 
   * - **strict**: Strict protection.
   * 
   * This parameter is required.
   * 
   * @example
   * normal
   */
  level?: string;
  /**
   * @remarks
   * The ID of the site. Call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The version of the site. For a site with version management enabled, this parameter specifies the version to which the configuration applies. The default value is 0.
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

