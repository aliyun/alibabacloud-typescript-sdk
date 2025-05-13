// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateXpackMonitorConfigRequest extends $dara.Model {
  /**
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  endpoints?: string[];
  /**
   * @example
   * ******
   * 
   * **if can be null:**
   * true
   */
  password?: string;
  /**
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

