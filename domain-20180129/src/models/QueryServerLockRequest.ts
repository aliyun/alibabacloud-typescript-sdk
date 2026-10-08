// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryServerLockRequest extends $dara.Model {
  /**
   * @remarks
   * Domain instance ID.
   * 
   * @example
   * S20181*****85212
   */
  instanceId?: string;
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values:
   * 
   * - zh: Chinese
   * - en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * User IP address. You can set it to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

