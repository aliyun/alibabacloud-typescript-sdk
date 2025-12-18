// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration. You can call the [ListSiteRoutes](https://help.aliyun.com/document_detail/2866989.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 33793140540****
   */
  configId?: number;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 3400350********
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

