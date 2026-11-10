// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The target instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-site-bckh96ri1eyo
   */
  newInstanceId?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that owns the new plan instance.
   * 
   * @example
   * 1700594193617909
   */
  resourceOwner?: number;
  /**
   * @remarks
   * The ID of the site. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 901109460617712
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      newInstanceId: 'NewInstanceId',
      resourceOwner: 'ResourceOwner',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newInstanceId: 'string',
      resourceOwner: 'number',
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

