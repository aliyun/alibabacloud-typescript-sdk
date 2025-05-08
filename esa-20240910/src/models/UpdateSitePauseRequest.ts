// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSitePauseRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to temporarily pause ESA on the website. If you set this parameter to true, all requests to the domains in your DNS records go directly to your origin server. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  paused?: boolean;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      paused: 'Paused',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paused: 'boolean',
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

