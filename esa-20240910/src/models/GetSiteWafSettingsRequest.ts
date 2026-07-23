// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteWafSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration path. If this parameter is not specified, all configurations are retrieved.
   * 
   * @example
   * bot_management
   */
  path?: string;
  /**
   * @remarks
   * The site ID. You can obtain the site ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
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
      path: 'Path',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
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

