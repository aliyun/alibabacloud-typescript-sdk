// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForDeletingDnsHostRequest extends $dara.Model {
  /**
   * @remarks
   * DNS name.
   * 
   * This parameter is required.
   * 
   * @example
   * dns1
   */
  dnsName?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * S2019270W570xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * User IP address.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      dnsName: 'DnsName',
      instanceId: 'InstanceId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsName: 'string',
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

