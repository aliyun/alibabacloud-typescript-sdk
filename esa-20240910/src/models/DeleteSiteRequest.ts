// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSiteRequest extends $dara.Model {
  securityToken?: string;
  /**
   * @remarks
   * The ID of the site to delete. Call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain site IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
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

