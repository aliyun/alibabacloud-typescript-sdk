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
   * @remarks
   * The API name.
   * 
   * @example
   * test-api
   */
  name?: string;
  /**
   * @remarks
   * The API type.
   * 
   * @example
   * Http
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to enable versioning.
   * 
   * @example
   * true
   */
  versionEnabled?: boolean;
  /**
   * @remarks
   * The information about the versioned API.
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

