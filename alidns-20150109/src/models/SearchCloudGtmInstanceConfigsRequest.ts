// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCloudGtmInstanceConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - `zh-CN`: Chinese
   * 
   * - `en-US` (default): English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The service availability status of the instance configuration. Valid values:
   * 
   * - `available`: The service for the GTM access domain is available when the instance configuration is **enabled** and its health status is **Normal** or Alert.
   * 
   * - `unavailable`: The service for the GTM access domain is unavailable when the instance configuration is **disabled** or its health status is **Exceptional**.
   * 
   * @example
   * available
   */
  availableStatus?: string;
  /**
   * @remarks
   * A client-generated token to ensure the idempotence of the request. The token must be unique across requests and can contain up to 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The status of the instance configuration. Valid values:
   * 
   * - `enable`: Enabled. The intelligent scheduling policy of the GTM instance is in effect.
   * 
   * - `disable`: Disabled. The intelligent scheduling policy of the GTM instance is unavailable.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The health status of the instance configuration. Valid values:
   * 
   * - `ok`: Normal. All address pools referenced by the GTM access domain are available.
   * 
   * - `ok_alert`: Alert. Some address pools referenced by the GTM access domain are unavailable. In this state, DNS resolution continues for available address pools but stops for unavailable ones.
   * 
   * - `exceptional`: Exceptional. All address pools referenced by the GTM access domain are unavailable. In this case, failover resolution uses the addresses from the non-empty address pool with the smallest sequence number to ensure clients receive a resolution result.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * The ID of the Global Traffic Manager (GTM) 3.0 instance.
   * 
   * @example
   * gtm-cn-wwo3a3h****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. The default value is 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. The maximum value is **100** and the default value is **20**.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * A note for the instance configuration.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The GTM access domain. It is formed by combining the host record (`ScheduleHostname`) with the primary or subdomain name (`ScheduleZoneName`).
   * 
   * @example
   * www.example.com
   */
  scheduleDomainName?: string;
  /**
   * @remarks
   * The primary domain name (for example, `example.com`) or subdomain name (for example, `a.example.com`) of the GTM access domain. This is typically a domain name managed by Alibaba Cloud DNS under the same account that owns the GTM instance.
   * 
   * @example
   * example.com
   */
  scheduleZoneName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      availableStatus: 'AvailableStatus',
      clientToken: 'ClientToken',
      enableStatus: 'EnableStatus',
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
      scheduleDomainName: 'ScheduleDomainName',
      scheduleZoneName: 'ScheduleZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      availableStatus: 'string',
      clientToken: 'string',
      enableStatus: 'string',
      healthStatus: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remark: 'string',
      scheduleDomainName: 'string',
      scheduleZoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

