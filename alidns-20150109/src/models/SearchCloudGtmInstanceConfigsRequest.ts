// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCloudGtmInstanceConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US (default): English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The availability state of the access domain name. Valid values:
   * 
   * *   available: If the access domain name is **enabled** and the health state is **normal**, the access domain name is deemed **available**.
   * *   unavailable: If the access domain name is **disabled** or the health state is **abnormal**, the access domain name is deemed **unavailable**.
   * 
   * @example
   * available
   */
  availableStatus?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can specify a custom value for this parameter, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * The enabling state of the access domain name. Valid values:
   * 
   * *   enable: The access domain name is enabled and the intelligent scheduling policy of the corresponding GTM instance takes effect.
   * *   disable: The access domain name is disabled and the intelligent scheduling policy of the corresponding GTM instance does not take effect.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The health state of the access domain name. Valid values:
   * 
   * *   ok: The health state of the access domain name is normal and all address pools that are referenced by the access domain name are available.
   * *   ok_alert: The health state of the access domain name is warning and some of the address pools that are referenced by the access domain name are unavailable. In this case, only the available address pools are returned for Domain Name System (DNS) requests.
   * *   exceptional: The health state of the access domain name is abnormal and all address pools that are referenced by the access domain name are unavailable. In this case, addresses in the non-empty address pool with the smallest sequence number are preferentially used for fallback resolution. This returns DNS results for clients as much as possible.
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
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  /**
   * @remarks
   * Current page number, starting from 1, default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page when paginating queries, with a maximum value of **100**, and a default of **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Remarks for the domain instance.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The access domain name. The value of this parameter is composed of the value of ScheduleHostname and the value of ScheduleZoneName.
   * 
   * @example
   * www.example.com
   */
  scheduleDomainName?: string;
  /**
   * @remarks
   * The zone such as example.com or subzone such as a.example.com of the access domain name. In most cases, the zone or subzone is hosted by the Public Authoritative DNS module of Alibaba Cloud DNS. This zone belongs to the account to which the GTM instance belongs.
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

