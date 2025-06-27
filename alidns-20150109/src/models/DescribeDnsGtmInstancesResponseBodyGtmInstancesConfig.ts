// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig } from "./DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig";


export class DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig extends $dara.Model {
  /**
   * @remarks
   * The alert notification method.
   */
  alertConfig?: DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig[];
  /**
   * @remarks
   * The alert contact groups. The value is in the JSON format.
   * 
   * @example
   * testgroup
   */
  alertGroup?: string;
  /**
   * @remarks
   * The type of the CNAME. Valid value:
   * 
   * *   PUBLIC
   * 
   * @example
   * public
   */
  cnameType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * instanceTest
   */
  instanceName?: string;
  /**
   * @remarks
   * Specifies whether to use a custom CNAME or a system-assigned CNAME to access GTM over the Internet. Valid values:
   * 
   * *   CUSTOM: a custom CNAME
   * *   SYSTEM_ASSIGN: a system-assigned CNAME. You cannot set PublicCnameMode to this value.
   * 
   * @example
   * custom
   */
  publicCnameMode?: string;
  /**
   * @remarks
   * The hostname of the domain name that is used to access GTM over the Internet.
   * 
   * @example
   * test.rr
   */
  publicRr?: string;
  /**
   * @remarks
   * The domain name that is used to access GTM over the Internet.
   * 
   * @example
   * example.com
   */
  publicUserDomainName?: string;
  /**
   * @remarks
   * The canonical name (CNAME) that is used to access GTM over the Internet.
   * 
   * @example
   * test.rr.gtm-003.com
   */
  publicZoneName?: string;
  /**
   * @remarks
   * The type of the access policy. Valid values:
   * 
   * *   LATENCY: latency-based access policy
   * *   GEO: geographical location-based access policy
   * 
   * @example
   * geo
   */
  strategyMode?: string;
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
      instanceName: 'InstanceName',
      publicCnameMode: 'PublicCnameMode',
      publicRr: 'PublicRr',
      publicUserDomainName: 'PublicUserDomainName',
      publicZoneName: 'PublicZoneName',
      strategyMode: 'StrategyMode',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig },
      alertGroup: 'string',
      cnameType: 'string',
      instanceName: 'string',
      publicCnameMode: 'string',
      publicRr: 'string',
      publicUserDomainName: 'string',
      publicZoneName: 'string',
      strategyMode: 'string',
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

