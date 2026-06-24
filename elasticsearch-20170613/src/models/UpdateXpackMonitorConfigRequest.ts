// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateXpackMonitorConfigRequest extends $dara.Model {
  /**
   * @remarks
   * A unique token used to ensure the idempotence of the request. The client generates this value. The value must be unique among different requests and cannot exceed 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable X-Pack monitoring. Valid values:
   * 
   * - true: Enable X-Pack monitoring.
   * - false: Disable X-Pack monitoring.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The access endpoint of the Elasticsearch instance.
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

