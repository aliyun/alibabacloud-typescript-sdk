// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteCustomLogShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cookie fields.
   */
  cookiesShrink?: string;
  /**
   * @remarks
   * The request header fields.
   */
  requestHeadersShrink?: string;
  /**
   * @remarks
   * The response header fields.
   */
  responseHeadersShrink?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * 11223
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      cookiesShrink: 'Cookies',
      requestHeadersShrink: 'RequestHeaders',
      responseHeadersShrink: 'ResponseHeaders',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookiesShrink: 'string',
      requestHeadersShrink: 'string',
      responseHeadersShrink: 'string',
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

