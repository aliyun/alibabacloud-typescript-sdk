// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * Return language value, options:
   * - zh-CN: Chinese.
   * - en-US: English.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * IP address or domain name.
   * 
   * @example
   * 223.5.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The address ID. This ID uniquely identifies the address.
   * 
   * @example
   * addr-89518218114368**92
   */
  addressId?: string;
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
   * Indicates the current availability of the address:
   * - enable: Enabled status
   * - disable: Disabled status
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The health check state of the address. Valid values:
   * 
   * *   ok: The address passes all health checks of the referenced health check templates.
   * *   ok_alert: The address fails some health checks of the referenced health check templates but the address is deemed normal.
   * *   ok_no_monitor: The address does not reference a health check template.
   * *   exceptional: The address fails some or all health checks of the referenced health check templates and the address is deemed abnormal.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * The ID of the health check template. This ID uniquely identifies the health check template.
   * 
   * @example
   * mtp-89518052425100**80
   */
  monitorTemplateId?: string;
  /**
   * @remarks
   * Address name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Current page number, starting from **1**, default is **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page when paginating queries, with a maximum value of 100 and a default of 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Address type:
   * - IPv4
   * - IPv6
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

