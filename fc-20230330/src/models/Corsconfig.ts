// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CORSConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  allowCredentials?: boolean;
  /**
   * @example
   * ["Content-Type", "Authorization"]
   */
  allowHeaders?: string[];
  /**
   * @example
   * ["GET", "POST", "OPTIONS"]
   */
  allowMethods?: string[];
  /**
   * @example
   * ["https://example.com", "https://app.example.com"]
   */
  allowOrigins?: string[];
  /**
   * @example
   * ["X-Custom-Header"]
   */
  exposeHeaders?: string[];
  /**
   * @example
   * 3600
   */
  maxAge?: number;
  static names(): { [key: string]: string } {
    return {
      allowCredentials: 'allowCredentials',
      allowHeaders: 'allowHeaders',
      allowMethods: 'allowMethods',
      allowOrigins: 'allowOrigins',
      exposeHeaders: 'exposeHeaders',
      maxAge: 'maxAge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCredentials: 'boolean',
      allowHeaders: { 'type': 'array', 'itemType': 'string' },
      allowMethods: { 'type': 'array', 'itemType': 'string' },
      allowOrigins: { 'type': 'array', 'itemType': 'string' },
      exposeHeaders: { 'type': 'array', 'itemType': 'string' },
      maxAge: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allowHeaders)) {
      $dara.Model.validateArray(this.allowHeaders);
    }
    if(Array.isArray(this.allowMethods)) {
      $dara.Model.validateArray(this.allowMethods);
    }
    if(Array.isArray(this.allowOrigins)) {
      $dara.Model.validateArray(this.allowOrigins);
    }
    if(Array.isArray(this.exposeHeaders)) {
      $dara.Model.validateArray(this.exposeHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

