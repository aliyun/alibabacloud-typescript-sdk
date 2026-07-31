// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashPluginsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The plugin description.
   * 
   * @example
   * The clone filter is for duplicating events.
   */
  description?: string;
  /**
   * @remarks
   * The plugin name.
   * 
   * @example
   * logstash-filter-clone
   */
  name?: string;
  /**
   * @remarks
   * The plugin source.
   * 
   * @example
   * SYSTEM
   */
  source?: string;
  /**
   * @remarks
   * The URL of the plugin documentation.
   * 
   * @example
   * https://xxx.html
   */
  specificationUrl?: string;
  /**
   * @remarks
   * Creation status of the plugin. Valid values:
   * 
   * - INSTALLED: Installed.
   * - UNINSTALLED: Not installed.
   * - INSTALLING: Being installed.
   * - UNINSTALLING: Being uninstalled.
   * - UPGRADING: Being upgraded.
   * - FAILED: Installation failed.
   * - UNKNOWN: The cluster is disconnected and creation status cannot be retrieved.
   * 
   * @example
   * INSTALLED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      source: 'source',
      specificationUrl: 'specificationUrl',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      source: 'string',
      specificationUrl: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashPluginsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 99407AB-2FA9-489E-A259-40CF6DCC****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListLogstashPluginsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListLogstashPluginsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

