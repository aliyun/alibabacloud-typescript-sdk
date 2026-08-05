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

export class ApiKeyIdentityConfigApikeySources extends $dara.Model {
  /**
   * @remarks
   * The credential source type.
   */
  source?: string;
  /**
   * @remarks
   * The field name of the HTTP header or query string.
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
   * The generation mode.
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
   * The API key source configuration.
   */
  apikeySource?: ApiKeyIdentityConfigApikeySource;
  /**
   * @remarks
   * The complete set of API key credential sources. The set contains one to three items. Multiple sources are applicable only to the AI gateway Header mode. Query String and non-AI gateway scenarios allow only a single source. If submitted together with apikeySource, the latter must be consistent with the compatible projection.
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

