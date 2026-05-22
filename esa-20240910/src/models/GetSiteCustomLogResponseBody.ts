// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteCustomLogResponseBodyLogCustomField extends $dara.Model {
  cookies?: string[];
  requestHeaders?: string[];
  responseHeaders?: string[];
  static names(): { [key: string]: string } {
    return {
      cookies: 'Cookies',
      requestHeaders: 'RequestHeaders',
      responseHeaders: 'ResponseHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookies: { 'type': 'array', 'itemType': 'string' },
      requestHeaders: { 'type': 'array', 'itemType': 'string' },
      responseHeaders: { 'type': 'array', 'itemType': 'string' },
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

export class GetSiteCustomLogResponseBody extends $dara.Model {
  configId?: number;
  isExist?: boolean;
  logCustomField?: GetSiteCustomLogResponseBodyLogCustomField;
  requestId?: string;
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      isExist: 'IsExist',
      logCustomField: 'LogCustomField',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      isExist: 'boolean',
      logCustomField: GetSiteCustomLogResponseBodyLogCustomField,
      requestId: 'string',
      siteId: 'number',
    };
  }

  validate() {
    if(this.logCustomField && typeof (this.logCustomField as any).validate === 'function') {
      (this.logCustomField as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

