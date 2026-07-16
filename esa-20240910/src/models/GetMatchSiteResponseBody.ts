// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMatchSiteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-3C82-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 1234567890****
   */
  siteId?: number;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      siteId: 'SiteId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      siteId: 'number',
      siteName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

