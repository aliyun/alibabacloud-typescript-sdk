// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateXpackMonitorConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must ensure that it is unique among different requests. The token can contain up to 64 ASCII characters.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable X-Pack monitoring. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The endpoint of the Elasticsearch instance.
   */
  endpoints?: string[];
  /**
   * @remarks
   * The password of the Elasticsearch instance.
   * 
   * @example
   * ******
   * 
   * **if can be null:**
   * true
   */
  password?: string;
  /**
   * @remarks
   * The username of the Elasticsearch instance.
   * 
   * @example
   * elastic
   * 
   * **if can be null:**
   * true
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enable: 'enable',
      endpoints: 'endpoints',
      password: 'password',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enable: 'boolean',
      endpoints: { 'type': 'array', 'itemType': 'string' },
      password: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

