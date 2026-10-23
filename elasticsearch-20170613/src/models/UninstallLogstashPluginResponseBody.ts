// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallLogstashPluginResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response headers of this call.
   */
  headers?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC****
   */
  requestId?: string;
  /**
   * @remarks
   * The names of the Logstash plugins uninstalled by this request.
   */
  result?: string[];
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
      result: { 'type': 'array', 'itemType': 'string' },
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

