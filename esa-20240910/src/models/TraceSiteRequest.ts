// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TraceSiteRequestBody extends $dara.Model {
  /**
   * @remarks
   * The content in JSON format. If both JSON format content and plain text content are specified, the JSON format content takes precedence.
   * 
   * @example
   * {"request_id","3f809c32"}
   */
  json?: any;
  /**
   * @remarks
   * The plain text content.
   * 
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
   * @remarks
   * The country/region code.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The Internet service provider (ISP) code. This parameter is valid only when the country or region is the Chinese mainland.
   * 
   * @example
   * 100025
   */
  ispCode?: string;
  /**
   * @remarks
   * The region or province code. This parameter is valid only when the country or region is the Chinese mainland.
   * 
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
  /**
   * @remarks
   * The simulated geolocation information.
   */
  geoLocation?: TraceSiteRequestContextGeoLocation;
  /**
   * @remarks
   * Specifies whether to skip the security challenge test.
   * 
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
   * @remarks
   * The cookie name.
   * 
   * @example
   * sessionId
   */
  name?: string;
  /**
   * @remarks
   * The cookie value.
   * 
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
   * @remarks
   * The HTTP request header name.
   * 
   * @example
   * User-Agent
   */
  name?: string;
  /**
   * @remarks
   * The HTTP request header value.
   * 
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
   * @remarks
   * The HTTP request body.
   * 
   * @example
   * {"PlainText":"bc58c54211db"}
   */
  body?: TraceSiteRequestBody;
  /**
   * @remarks
   * The environment context. This parameter is optional.
   */
  context?: TraceSiteRequestContext;
  /**
   * @remarks
   * The cookie parameters.
   * 
   * @example
   * []
   */
  cookies?: TraceSiteRequestCookies[];
  /**
   * @remarks
   * The request headers.
   * 
   * @example
   * []
   */
  headers?: TraceSiteRequestHeaders[];
  /**
   * @remarks
   * The HTTP method.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The HTTP protocol.
   * 
   * @example
   * HTTP/1.1
   */
  protocol?: string;
  /**
   * @remarks
   * The URL of the request.
   * 
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

