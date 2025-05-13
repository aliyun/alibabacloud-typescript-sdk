// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogstashPluginsResponseBodyResult } from "./ListLogstashPluginsResponseBodyResult";


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

