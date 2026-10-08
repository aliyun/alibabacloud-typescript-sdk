// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForModifyingDomainDnsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use Alibaba Cloud DNS servers. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  aliyunDns?: boolean;
  /**
   * @remarks
   * The domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string[];
  /**
   * @remarks
   * The new DNS servers. This parameter is required if **AliyunDns** is set to **false**.
   * 
   * @example
   * ns1.test.com
   */
  domainNameServer?: string[];
  /**
   * @remarks
   * The language of API error messages. Valid values:
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
   * The user IP address. You can set this parameter to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunDns: 'AliyunDns',
      domainName: 'DomainName',
      domainNameServer: 'DomainNameServer',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunDns: 'boolean',
      domainName: { 'type': 'array', 'itemType': 'string' },
      domainNameServer: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainName)) {
      $dara.Model.validateArray(this.domainName);
    }
    if(Array.isArray(this.domainNameServer)) {
      $dara.Model.validateArray(this.domainNameServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

