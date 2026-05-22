// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteWafSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the configuration path. If not provided, all configurations will be retrieved.
   * 
   * @example
   * bot_management
   */
  path?: string;
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

