// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmInstanceResponseBodyConfigAlertConfig } from "./DescribeDnsGtmInstanceResponseBodyConfigAlertConfig";


export class DescribeDnsGtmInstanceResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The alert notification method.
   */
  alertConfig?: DescribeDnsGtmInstanceResponseBodyConfigAlertConfig;
  /**
   * @remarks
   * The name of the alert group.
   * 
   * @example
   * alertgroup1
   */
  alertGroup?: string;
  /**
   * @remarks
   * The type of the CNAME domain name that is used to access the instance. Valid value:
   * 
   * *   PUBLIC: The CNAME domain name is used to access the instance over the Internet.
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
   * instancetest1
   */
  instanceName?: string;
  /**
   * @remarks
   * The domain name that is used to access the instance over the Internet.
   * 
   * @example
   * test.rr.gtm-003.com
   */
  pubicZoneName?: string;
  /**
   * @remarks
   * Indicates whether a custom CNAME domain name or a CNAME domain name assigned by the system is used to access the instance over the Internet. Valid values:
   * 
   * *   CUSTOM: A custom CNAME domain name is used.
   * *   SYSTEM_ASSIGN: A CNAME domain name assigned by the system is used.
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
   * The type of the access policy. Valid values:
   * 
   * *   LATENCY: Latency-based
   * *   GEO: Geographical location-based
   * 
   * @example
   * GEO
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
      pubicZoneName: 'PubicZoneName',
      publicCnameMode: 'PublicCnameMode',
      publicRr: 'PublicRr',
      publicUserDomainName: 'PublicUserDomainName',
      strategyMode: 'StrategyMode',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeDnsGtmInstanceResponseBodyConfigAlertConfig,
      alertGroup: 'string',
      cnameType: 'string',
      instanceName: 'string',
      pubicZoneName: 'string',
      publicCnameMode: 'string',
      publicRr: 'string',
      publicUserDomainName: 'string',
      strategyMode: 'string',
      ttl: 'number',
    };
  }

  validate() {
    if(this.alertConfig && typeof (this.alertConfig as any).validate === 'function') {
      (this.alertConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

