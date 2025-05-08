// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSiteRequest extends $dara.Model {
  ownerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
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

