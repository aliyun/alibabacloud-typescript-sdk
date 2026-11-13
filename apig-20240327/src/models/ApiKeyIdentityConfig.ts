// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApiKeyIdentityConfigApikeySource extends $dara.Model {
  /**
   * @remarks
   * The API key source.
   * 
   * @example
   * Default
   */
  source?: string;
  /**
   * @remarks
   * The API key value.
   * 
   * @example
   * apikey-xxxxxxxx
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

export class ApiKeyIdentityConfigApikeySources extends $dara.Model {
  /**
   * @remarks
   * The credential source category.
   * 
   * @example
   * Default
   */
  source?: string;
  /**
   * @remarks
   * The field name of the HTTP header or query string.
   * 
   * @example
   * Authorization
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
   * apikey-xxxxxxxx
   */
  apikey?: string;
  /**
   * @remarks
   * The creation time of this logical key saved by the server, in Unix milliseconds, for read-only purposes. When updated, the original key retains the saved time, and client input is not used as the time basis. A missing or null history indicates an unknown time, and the consumer creation time must not be used as a substitute.
   * 
   * @example
   * 1792627200000
   * 
   * **if can be null:**
   * true
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The generation mode.
   * 
   * @example
   * System
   */
  generateMode?: string;
  static names(): { [key: string]: string } {
    return {
      apikey: 'apikey',
      createTimestamp: 'createTimestamp',
      generateMode: 'generateMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apikey: 'string',
      createTimestamp: 'number',
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
   * The API key source configuration.
   */
  apikeySource?: ApiKeyIdentityConfigApikeySource;
  /**
   * @remarks
   * The complete collection of API key credential sources. The collection contains one to three items. Multiple sources apply only to the AI gateway header mode. Query string and non-AI gateway modes allow only a single source. If submitted together with apikeySource, the latter must be consistent with the compatible projection.
   */
  apikeySources?: ApiKeyIdentityConfigApikeySources[];
  /**
   * @remarks
   * The list of credentials.
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
      apikeySources: 'apikeySources',
      credentials: 'credentials',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apikeySource: ApiKeyIdentityConfigApikeySource,
      apikeySources: { 'type': 'array', 'itemType': ApiKeyIdentityConfigApikeySources },
      credentials: { 'type': 'array', 'itemType': ApiKeyIdentityConfigCredentials },
      type: 'string',
    };
  }

  validate() {
    if(this.apikeySource && typeof (this.apikeySource as any).validate === 'function') {
      (this.apikeySource as any).validate();
    }
    if(Array.isArray(this.apikeySources)) {
      $dara.Model.validateArray(this.apikeySources);
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

