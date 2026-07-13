// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDomainOfDnsProductRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcefully attach the domain name.
   * Valid values:
   * 
   * - **false**: No
   * 
   * - **true**: Yes
   * 
   * The default value is **false**.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the Cloud DNS product.
   * You can obtain the ID by calling [ListCloudGtmInstances](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-listcloudgtminstances?spm=a2c63.p38356.help-menu-search-29697.d_0).
   * 
   * This parameter is required.
   * 
   * @example
   * i-7XX
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the request and response.
   * Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * The default value is **zh**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The domain name that you want to attach. If you leave this parameter empty, the currently attached domain name is detached.
   * 
   * @example
   * example.com
   */
  newDomain?: string;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 1.1.XX.XX
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

