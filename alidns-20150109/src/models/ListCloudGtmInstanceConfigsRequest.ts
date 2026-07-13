// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmInstanceConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese
   * 
   * - en-US (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique token for each request. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The status of the domain name instance:
   * 
   * - enable: The GTM instance uses intelligent scheduling policies.
   * 
   * - disable: The intelligent scheduling policies of the GTM instance are unavailable.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
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
   * The page number. The value starts from **1**. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. Maximum value: **100**. Default value: **20**.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The GTM access domain name. The domain name is a combination of the host record (ScheduleHostname) and the root or subdomain (ScheduleZoneName).
   * 
   * @example
   * www.example.com
   */
  scheduleDomainName?: string;
  /**
   * @remarks
   * The root domain, such as example.com, or subdomain, such as a.example.com, of the GTM access domain name. This is typically a domain name that is hosted in an authoritative zone in the Alibaba Cloud DNS console and belongs to the same account as the GTM instance.
   * 
   * @example
   * example.com
   */
  scheduleZoneName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clientToken: 'ClientToken',
      enableStatus: 'EnableStatus',
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
      clientToken: 'string',
      enableStatus: 'string',
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

