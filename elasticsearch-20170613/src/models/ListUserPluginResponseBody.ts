// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPluginResponseBodyResultBingoPlugins extends $dara.Model {
  /**
   * @remarks
   * The plug-in description.
   * 
   * @example
   * The plugin***
   */
  description?: string;
  /**
   * @remarks
   * The Elasticsearch version of the plug-in.
   * 
   * @example
   * 8.17.0
   */
  elasticsearchVersion?: string;
  /**
   * @remarks
   * The unique identifier of the plug-in.
   * 
   * @example
   * CAEQaRiBgIDI2tie6hkiIGIwM2I3MjZmNjk3YzR***
   */
  fileVersion?: string;
  /**
   * @remarks
   * The plug-in name.
   * 
   * @example
   * dynamic-name
   */
  name?: string;
  /**
   * @remarks
   * The plug-in source. Valid values:
   * 
   * - USER: custom plug-in.
   * - SYSTEM: system preset plug-in.
   * 
   * @example
   * USER
   */
  source?: string;
  /**
   * @remarks
   * The plug-in status. Valid values: 
   * 
   * - INSTALLED
   * - UNINSTALLED
   * - INSTALLING
   * - UNINSTALLING
   * - UPGRADING
   * - FAILED
   * - UNKNOWN
   * - UPLOADING
   * 
   * @example
   * UNINSTALLED
   */
  state?: string;
  /**
   * @remarks
   * The plug-in version.
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
   * The list of plug-ins with the same name.
   */
  bingoPlugins?: ListUserPluginResponseBodyResultBingoPlugins[];
  /**
   * @remarks
   * The plug-in name.
   * 
   * @example
   * ct-test
   */
  name?: string;
  /**
   * @remarks
   * The plug-in source.
   * 
   * @example
   * USER
   */
  source?: string;
  /**
   * @remarks
   * The plug-in status.
   * 
   * @example
   * UNINSTALLED
   */
  state?: string;
  /**
   * @remarks
   * The plug-in version.
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
   * The response headers.
   * 
   * @example
   * {\\"totalCount\\": 1, \\"X-Total-Count\\": 1}
   */
  headers?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5EEF8FAE-EEDD***
   */
  requestId?: string;
  /**
   * @remarks
   * The result array.
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

