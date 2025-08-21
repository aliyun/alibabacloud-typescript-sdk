// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashPluginsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The source of the plug-in.
   * 
   * @example
   * The clone filter is for duplicating events.
   */
  description?: string;
  /**
   * @example
   * logstash-filter-clone
   */
  name?: string;
  /**
   * @example
   * SYSTEM
   */
  source?: string;
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * https://xxx.html
   */
  specificationUrl?: string;
  /**
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
   * The address of the documentation for the plug-in.
   * 
   * @example
   * 99407AB-2FA9-489E-A259-40CF6DCC****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the plug-in. Valid values:
   * 
   * *   INSTALLED: Installed
   * *   UNINSTALLED: Not installed
   * *   INSTALLING: The instance is being installed.
   * *   UNINSTALLING: The instance is being uninstalled.
   * *   UPGRADING: The backup gateway is being upgraded.
   * *   FAILED: Installation failed
   * *   UNKNOWN: The cluster is lost and cannot be created.
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

