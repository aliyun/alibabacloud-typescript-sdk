// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDnsHostRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name instance. Call the QueryDomainList API to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ST2017120814571100001303
   */
  instanceId?: string;
  /**
   * @remarks
   * The language for returned error messages. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The user\\"s IP address.
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

