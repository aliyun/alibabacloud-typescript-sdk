// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSitePauseRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to temporarily pause the proxy acceleration feature for the entire site. After the feature is paused, all DNS records directly return record values to the client. Valid values:
   * - true: Pauses site acceleration.
   * - false: Resumes normal site acceleration.
   * 
   * When site acceleration is paused, only activated sites with NS access mode are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  paused?: boolean;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID. Check the Status field to confirm the site status and the AccessType field to confirm the access mode of the site.
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

