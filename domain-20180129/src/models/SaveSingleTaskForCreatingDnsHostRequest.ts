// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForCreatingDnsHostRequest extends $dara.Model {
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
   * Domain instance ID, which can be obtained by calling the [QueryDomainList](https://help.aliyun.com/document_detail/67712.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * S1234567890
   */
  instanceId?: string;
  /**
   * @remarks
   * List of IP addresses. You can specify up to 13 IP addresses. When specifying multiple IP addresses, pass them as a **list**.
   * 
   * This parameter is required.
   * 
   * @example
   * 218.xx.xx.236
   */
  ip?: string[];
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:  
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
   * User IP address, which can be set to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      dnsName: 'DnsName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsName: 'string',
      instanceId: 'string',
      ip: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ip)) {
      $dara.Model.validateArray(this.ip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

