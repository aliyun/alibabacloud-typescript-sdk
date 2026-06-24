// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPluginResponseBodyResultBingoPlugins extends $dara.Model {
  /**
   * @remarks
   * Plugin Description.
   * 
   * @example
   * The plugin***
   */
  description?: string;
  /**
   * @remarks
   * Elasticsearch version of the plugin.
   * 
   * @example
   * 8.17.0
   */
  elasticsearchVersion?: string;
  /**
   * @remarks
   * Plugin UUID
   * 
   * @example
   * CAEQaRiBgIDI2tie6hkiIGIwM2I3MjZmNjk3YzR***
   */
  fileVersion?: string;
  /**
   * @remarks
   * Plugin Name.
   * 
   * @example
   * dynamic-name
   */
  name?: string;
  /**
   * @remarks
   * Plugin Source. Valid values:
   * 
   * - USER: Custom plugin  
   * - SYSTEM: Preset system plugin
   * 
   * @example
   * USER
   */
  source?: string;
  /**
   * @remarks
   * Plugin Status
   * 
   * - INSTALLED,
   * - UNINSTALLED,
   * - INSTALLING,
   * - UNINSTALLING,
   * - UPGRADING,
   * - FAILED,
   * - UNKNOWN,
   * - UPLOADING,
   * 
   * @example
   * UNINSTALLED
   */
  state?: string;
  /**
   * @remarks
   * Plugin Version.
   * 
   * @example
   * 8.17.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      elasticsearchVersion: 'elasticsearchVersion',
      fileVersion: 'fileVersion',
      name: 'name',
      source: 'source',
      state: 'state',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      elasticsearchVersion: 'string',
      fileVersion: 'string',
      name: 'string',
      source: 'string',
      state: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPluginResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of plugins with the same name
   */
  bingoPlugins?: ListUserPluginResponseBodyResultBingoPlugins[];
  /**
   * @remarks
   * Plugin Name.
   * 
   * @example
   * ct-test
   */
  name?: string;
  /**
   * @remarks
   * Plugin Source.
   * 
   * @example
   * USER
   */
  source?: string;
  /**
   * @remarks
   * Plugin Status.
   * 
   * @example
   * UNINSTALLED
   */
  state?: string;
  /**
   * @remarks
   * Plugin Version.
   * 
   * @example
   * 8.17.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      bingoPlugins: 'bingoPlugins',
      name: 'name',
      source: 'source',
      state: 'state',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bingoPlugins: { 'type': 'array', 'itemType': ListUserPluginResponseBodyResultBingoPlugins },
      name: 'string',
      source: 'string',
      state: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bingoPlugins)) {
      $dara.Model.validateArray(this.bingoPlugins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPluginResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response header information.
   * 
   * @example
   * {\\"totalCount\\": 1, \\"X-Total-Count\\": 1}
   */
  headers?: { [key: string]: any };
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 5EEF8FAE-EEDD***
   */
  requestId?: string;
  /**
   * @remarks
   * Return Result array
   */
  result?: ListUserPluginResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListUserPluginResponseBodyResult },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

