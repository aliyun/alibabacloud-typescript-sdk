// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TraceSiteRequestBody extends $dara.Model {
  /**
   * @example
   * {"request_id","3f809c32"}
   */
  json?: any;
  /**
   * @example
   * bc58c54211db
   */
  plainText?: string;
  static names(): { [key: string]: string } {
    return {
      json: 'Json',
      plainText: 'PlainText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      json: 'any',
      plainText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TraceSiteRequestContextGeoLocation extends $dara.Model {
  /**
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @example
   * 100025
   */
  ispCode?: string;
  /**
   * @example
   * CN-BJ
   */
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      countryCode: 'CountryCode',
      ispCode: 'IspCode',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countryCode: 'string',
      ispCode: 'string',
      regionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TraceSiteRequestContext extends $dara.Model {
  geoLocation?: TraceSiteRequestContextGeoLocation;
  /**
   * @example
   * true
   */
  skipChallenge?: boolean;
  static names(): { [key: string]: string } {
    return {
      geoLocation: 'GeoLocation',
      skipChallenge: 'SkipChallenge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      geoLocation: TraceSiteRequestContextGeoLocation,
      skipChallenge: 'boolean',
    };
  }

  validate() {
    if(this.geoLocation && typeof (this.geoLocation as any).validate === 'function') {
      (this.geoLocation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TraceSiteRequestCookies extends $dara.Model {
  /**
   * @example
   * sessionId
   */
  name?: string;
  /**
   * @example
   * f9ca1f7d-15bb-4c60-ad99-71b8e3e4985b
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TraceSiteRequestHeaders extends $dara.Model {
  /**
   * @example
   * User-Agent
   */
  name?: string;
  /**
   * @example
   * trace-test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TraceSiteRequest extends $dara.Model {
  /**
   * @example
   * {"PlainText":"bc58c54211db"}
   */
  body?: TraceSiteRequestBody;
  context?: TraceSiteRequestContext;
  /**
   * @example
   * []
   */
  cookies?: TraceSiteRequestCookies[];
  /**
   * @example
   * []
   */
  headers?: TraceSiteRequestHeaders[];
  /**
   * @example
   * GET
   */
  method?: string;
  /**
   * @example
   * HTTP/1.1
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://example.com/test
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      context: 'Context',
      cookies: 'Cookies',
      headers: 'Headers',
      method: 'Method',
      protocol: 'Protocol',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: TraceSiteRequestBody,
      context: TraceSiteRequestContext,
      cookies: { 'type': 'array', 'itemType': TraceSiteRequestCookies },
      headers: { 'type': 'array', 'itemType': TraceSiteRequestHeaders },
      method: 'string',
      protocol: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(Array.isArray(this.cookies)) {
      $dara.Model.validateArray(this.cookies);
    }
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

