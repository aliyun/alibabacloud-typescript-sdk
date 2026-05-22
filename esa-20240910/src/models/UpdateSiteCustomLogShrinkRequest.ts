// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteCustomLogShrinkRequest extends $dara.Model {
  cookiesShrink?: string;
  requestHeadersShrink?: string;
  responseHeadersShrink?: string;
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

