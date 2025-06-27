// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDomainOfDnsProductRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcibly bind a domain name to the instance. Valid values:
   * 
   * *   **false****: no**
   * *   **true**: **yes**
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the Alibaba Cloud Domain Name System (DNS) instance.
   * 
   * You can call the [ListCloudGtmInstances ](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-listcloudgtminstances?spm=a2c63.p38356.help-menu-search-29697.d_0)operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-7sb
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * Default value: **zh**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The domain name that you want to bind to the instance. If you leave this parameter empty, the domain name that is bound to the instance is unbound from the instance.
   * 
   * @example
   * newdomain.com
   */
  newDomain?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 1.1.1.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      instanceId: 'InstanceId',
      lang: 'Lang',
      newDomain: 'NewDomain',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      instanceId: 'string',
      lang: 'string',
      newDomain: 'string',
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

