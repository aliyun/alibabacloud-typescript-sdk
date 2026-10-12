// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiApiInfo } from "./HttpApiApiInfo";


export class HttpApiInfoByName extends $dara.Model {
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-xx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * test-api
   */
  name?: string;
  /**
   * @remarks
   * The type of the HTTP API.
   * 
   * @example
   * Http
   */
  type?: string;
  /**
   * @remarks
   * Indicates whether version management is enabled.
   * 
   * @example
   * true
   */
  versionEnabled?: boolean;
  /**
   * @remarks
   * The versioned API version information.
   */
  versionedHttpApis?: HttpApiApiInfo[];
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      name: 'name',
      type: 'type',
      versionEnabled: 'versionEnabled',
      versionedHttpApis: 'versionedHttpApis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      name: 'string',
      type: 'string',
      versionEnabled: 'boolean',
      versionedHttpApis: { 'type': 'array', 'itemType': HttpApiApiInfo },
    };
  }

  validate() {
    if(Array.isArray(this.versionedHttpApis)) {
      $dara.Model.validateArray(this.versionedHttpApis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

