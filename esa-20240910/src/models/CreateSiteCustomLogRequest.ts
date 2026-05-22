// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteCustomLogRequest extends $dara.Model {
  cookies?: string[];
  requestHeaders?: string[];
  responseHeaders?: string[];
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      cookies: 'Cookies',
      requestHeaders: 'RequestHeaders',
      responseHeaders: 'ResponseHeaders',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookies: { 'type': 'array', 'itemType': 'string' },
      requestHeaders: { 'type': 'array', 'itemType': 'string' },
      responseHeaders: { 'type': 'array', 'itemType': 'string' },
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cookies)) {
      $dara.Model.validateArray(this.cookies);
    }
    if(Array.isArray(this.requestHeaders)) {
      $dara.Model.validateArray(this.requestHeaders);
    }
    if(Array.isArray(this.responseHeaders)) {
      $dara.Model.validateArray(this.responseHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

