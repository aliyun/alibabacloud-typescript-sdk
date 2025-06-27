// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGtmInstanceGlobalConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The alert group. Only one alert group is supported.
   * 
   * >  This parameter is required only for the first modification.
   */
  alertGroup?: string;
  /**
   * @remarks
   * If you set **CnameMode** to **CUSTOM**, you must specify the CnameCustomDomainName parameter, which must be set to a primary domain name.
   * 
   * @example
   * www.example.com
   */
  cnameCustomDomainName?: string;
  /**
   * @remarks
   * Specifies whether to use a system-assigned canonical name (CNAME) or a custom CNAME to access GTM. Valid values:
   * 
   * *   **SYSTEM_ASSIGN**: system-assigned CNAME
   * *   **CUSTOM**: custom CNAME
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
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the GTM instance.
   * 
   * >  This parameter is required only for the first modification.
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
   * The balancing policy. Valid values:
   * 
   * *   **ALL_RR**: load balancing
   * *   **RATIO**: weighted round-robin
   * 
   * >  This parameter is required only for the first modification.
   * 
   * @example
   * RATIO
   */
  lbaStrategy?: string;
  /**
   * @remarks
   * The global time-to-live (TTL).
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The primary domain name.
   * 
   * >  This parameter is required only for the first modification.
   * 
   * @example
   * www.example.com
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

