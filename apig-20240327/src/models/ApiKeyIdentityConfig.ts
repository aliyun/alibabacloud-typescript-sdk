// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApiKeyIdentityConfigApikeySource extends $dara.Model {
  /**
   * @remarks
   * The source of the API key.
   * 
   * Valid values:
   * 
   * *   Header
   * *   QueryString
   * *   Default
   * 
   * @example
   * Default
   */
  source?: string;
  /**
   * @remarks
   * The value of the API key.
   * 
   * @example
   * xxxx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
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

export class ApiKeyIdentityConfigCredentials extends $dara.Model {
  /**
   * @remarks
   * The API key configuration.
   * 
   * @example
   * xxxxx
   */
  apikey?: string;
  /**
   * @remarks
   * The production mode.
   * 
   * @example
   * System
   */
  generateMode?: string;
  static names(): { [key: string]: string } {
    return {
      apikey: 'apikey',
      generateMode: 'generateMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apikey: 'string',
      generateMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiKeyIdentityConfig extends $dara.Model {
  /**
   * @remarks
   * The source configuration of the API key.
   */
  apikeySource?: ApiKeyIdentityConfigApikeySource;
  /**
   * @remarks
   * The list of certificates.
   */
  credentials?: ApiKeyIdentityConfigCredentials[];
  /**
   * @remarks
   * The type.
   * 
   * @example
   * Apikey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apikeySource: 'apikeySource',
      credentials: 'credentials',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apikeySource: ApiKeyIdentityConfigApikeySource,
      credentials: { 'type': 'array', 'itemType': ApiKeyIdentityConfigCredentials },
      type: 'string',
    };
  }

  validate() {
    if(this.apikeySource && typeof (this.apikeySource as any).validate === 'function') {
      (this.apikeySource as any).validate();
    }
    if(Array.isArray(this.credentials)) {
      $dara.Model.validateArray(this.credentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

