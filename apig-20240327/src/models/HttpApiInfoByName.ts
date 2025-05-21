// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiApiInfo } from "./HttpApiApiInfo";


export class HttpApiInfoByName extends $dara.Model {
  /**
   * @example
   * gw-xx
   */
  gatewayId?: string;
  /**
   * @example
   * test-api
   */
  name?: string;
  /**
   * @example
   * Http
   */
  type?: string;
  /**
   * @example
   * true
   */
  versionEnabled?: boolean;
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

