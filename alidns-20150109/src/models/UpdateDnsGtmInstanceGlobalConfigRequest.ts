// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDnsGtmInstanceGlobalConfigRequestAlertConfig } from "./UpdateDnsGtmInstanceGlobalConfigRequestAlertConfig";


export class UpdateDnsGtmInstanceGlobalConfigRequest extends $dara.Model {
  alertConfig?: UpdateDnsGtmInstanceGlobalConfigRequestAlertConfig[];
  /**
   * @remarks
   * The name of the alert group in the JSON format.
   * 
   * @example
   * alertGroup1
   */
  alertGroup?: string;
  /**
   * @remarks
   * The type of the canonical name (CNAME).
   * 
   * *   Set the value to PUBLIC.
   * 
   * @example
   * public
   */
  cnameType?: string;
  /**
   * @remarks
   * Specifies whether to enable force updates. Valid values:
   * 
   * *   true: enables force update without a conflict alert.
   * *   false: disables force update. If a conflict occurs, the system displays an alert. null: This valid value of ForceUpdate provides the same information as the false value.
   * 
   * @example
   * true
   */
  forceUpdate?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance. This parameter is required only for the first update.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The language of the values of specific response parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to use a custom CNAME domain name or a CNAME domain name assigned by the system to access the instance over the Internet. Valid values:
   * 
   * *   SYSTEM_ASSIGN: a CNAME domain name assigned by the system
   * *   CUSTOM: a custom CNAME domain name
   * 
   * @example
   * custom
   */
  publicCnameMode?: string;
  /**
   * @remarks
   * The hostname corresponding to the CNAME domain name that is used to access the instance over the Internet.
   * 
   * @example
   * test.rr
   */
  publicRr?: string;
  /**
   * @remarks
   * The service domain name that is used over the Internet.
   * 
   * @example
   * example.com
   */
  publicUserDomainName?: string;
  /**
   * @remarks
   * The CNAME domain name that is used to access the instance over the Internet, which is the primary domain name. This parameter is required when the PublicCnameMode parameter is set to CUSTOM.
   * 
   * >  You must use the primary domain name. Do not include the hostname specified by the PublicRr parameter.
   * 
   * @example
   * gtm-003.com
   */
  publicZoneName?: string;
  /**
   * @remarks
   * The global time to live (TTL).
   * 
   * @example
   * 1
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      cnameType: 'CnameType',
      forceUpdate: 'ForceUpdate',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lang: 'Lang',
      publicCnameMode: 'PublicCnameMode',
      publicRr: 'PublicRr',
      publicUserDomainName: 'PublicUserDomainName',
      publicZoneName: 'PublicZoneName',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': UpdateDnsGtmInstanceGlobalConfigRequestAlertConfig },
      alertGroup: 'string',
      cnameType: 'string',
      forceUpdate: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      lang: 'string',
      publicCnameMode: 'string',
      publicRr: 'string',
      publicUserDomainName: 'string',
      publicZoneName: 'string',
      ttl: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertConfig)) {
      $dara.Model.validateArray(this.alertConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

