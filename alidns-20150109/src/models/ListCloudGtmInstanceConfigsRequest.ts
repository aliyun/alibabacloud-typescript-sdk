// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmInstanceConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * The enabling state of the access domain name. Valid values:
   * 
   * *   enable: The access domain name is enabled and the intelligent scheduling policy of the GTM instance takes effect.
   * *   disable: The access domain name is disabled and the intelligent scheduling policy of the GTM instance does not take effect.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The ID of the GTM 3.0 instance.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  /**
   * @remarks
   * Current page number, starting at **1**, default is **1**.
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
   * Remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The GTM access domain name. The value of this parameter is composed of the value of ScheduleHostname and the value of ScheduleZoneName.
   * 
   * @example
   * www.example.com
   */
  scheduleDomainName?: string;
  /**
   * @remarks
   * The zone (such as example.com) or subzone (such as a.example.com) of the GTM access domain name. In most cases, the zone or subzone is hosted in Authoritative DNS Resolution of the Alibaba Cloud DNS console within the account to which the GTM instance belongs.
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

