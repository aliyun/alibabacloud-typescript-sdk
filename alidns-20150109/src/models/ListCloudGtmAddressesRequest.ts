// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the return value. Valid values:
   * 
   * - zh-CN: Chinese.
   * 
   * - en-US: English.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The IP address or domain name.
   * 
   * @example
   * 223.5.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The unique ID of the address.
   * 
   * @example
   * addr-89518218114368****
   */
  addressId?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. The client must generate a unique token for each request. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The state of the address. Valid values:
   * 
   * - enable: The address is enabled.
   * 
   * - disable: The address is disabled.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The health status of the address. Valid values:
   * 
   * - ok: All health check tasks that are associated with the address are normal.
   * 
   * - ok_alert: Some health check tasks that are associated with the address are abnormal, but the address is still considered normal.
   * 
   * - ok_no_monitor: No health check template is associated with the address.
   * 
   * - exceptional: Some or all health check tasks that are associated with the address are abnormal, and the address is considered abnormal.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * The unique ID of the health check template.
   * 
   * @example
   * mtp-89518052425100****
   */
  monitorTemplateId?: string;
  /**
   * @remarks
   * The name of the address.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The page number. The value starts from **1**. The default value is **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. The maximum value is 100. The default value is 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the address. Valid values:
   * 
   * - IPv4
   * 
   * - IPv6
   * 
   * - domain
   * 
   * @example
   * IPv4
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      address: 'Address',
      addressId: 'AddressId',
      clientToken: 'ClientToken',
      enableStatus: 'EnableStatus',
      healthStatus: 'HealthStatus',
      monitorTemplateId: 'MonitorTemplateId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      address: 'string',
      addressId: 'string',
      clientToken: 'string',
      enableStatus: 'string',
      healthStatus: 'string',
      monitorTemplateId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

