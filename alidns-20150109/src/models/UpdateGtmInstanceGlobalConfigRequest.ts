// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGtmInstanceGlobalConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The alert contact group. Only one alert contact group is supported.
   * 
   * > This parameter is required when you update the instance for the first time. It is optional for subsequent updates.
   * 
   * @example
   * [\\"研发组\\"]
   */
  alertGroup?: string;
  /**
   * @remarks
   * This parameter is required when you set **CnameMode** to **CUSTOM**. The value must be the primary domain name.
   * 
   * @example
   * dns-example.top
   */
  cnameCustomDomainName?: string;
  /**
   * @remarks
   * The connection type. Valid values:
   * 
   * - **SYSTEM_ASSIGN**: system-assigned
   * 
   * - **CUSTOM**: custom
   * 
   * @example
   * SYSTEM_ASSIGN
   */
  cnameMode?: string;
  /**
   * @remarks
   * The ID of the GTM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * gtm-cn-cs02xyk4a**
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * > This parameter is required when you update the instance for the first time. It is optional for subsequent updates.
   * 
   * @example
   * 测试实例
   */
  instanceName?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The load balancing policy. Valid values:
   * 
   * - **ALL_RR**: round-robin
   * 
   * - **RATIO**: weighted round-robin
   * 
   * > This parameter is required when you update the instance for the first time. It is optional for subsequent updates.
   * 
   * @example
   * RATIO
   */
  lbaStrategy?: string;
  /**
   * @remarks
   * The global Time to Live (TTL).
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The primary domain name.
   * 
   * > This parameter is required when you update the instance for the first time. It is optional for subsequent updates.
   * 
   * @example
   * dns-example.top
   */
  userDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      alertGroup: 'AlertGroup',
      cnameCustomDomainName: 'CnameCustomDomainName',
      cnameMode: 'CnameMode',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lang: 'Lang',
      lbaStrategy: 'LbaStrategy',
      ttl: 'Ttl',
      userDomainName: 'UserDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroup: 'string',
      cnameCustomDomainName: 'string',
      cnameMode: 'string',
      instanceId: 'string',
      instanceName: 'string',
      lang: 'string',
      lbaStrategy: 'string',
      ttl: 'number',
      userDomainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

