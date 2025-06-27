// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCloudGtmAddressesRequest extends $dara.Model {
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
   * Query by service address with precise conditions, supporting IP addresses or domain names.
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
   * Search by address availability status with precise conditions:
   * - available
   * - unavailable
   * 
   * @example
   * available
   */
  availableStatus?: string;
  /**
   * @remarks
   * Query by exact address enable status:
   * - enable: enabled status
   * - disable: disabled status
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The health state of the addresses that you want to query. Valid values:
   * 
   * *   ok: The addresses pass all health checks of the referenced health check templates.
   * *   ok_alert: The addresses fail some health checks of the referenced health check templates, but the addresses are deemed available.
   * *   ok_no_monitor: The addresses do not reference any health check template.
   * *   exceptional: The addresses fail some or all health checks of the referenced health check templates, and the addresses are deemed unavailable.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * Health check template name.
   * 
   * @example
   * Ping-IPv4
   */
  monitorTemplateName?: string;
  /**
   * @remarks
   * The logical condition for querying addresses by name. This parameter is required if you want to query addresses by name. Valid values:
   * 
   * *   and: displays the results that match all search conditions.
   * *   or: displays the results that match some or all search conditions.
   * 
   * @example
   * or
   */
  nameSearchCondition?: string;
  /**
   * @remarks
   * Address name, usually for users to distinguish between different addresses.
   */
  names?: string[];
  /**
   * @remarks
   * Current page number, starting from 1, default is 1.
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
   * The logical condition for querying addresses by additional description. This parameter is required if you want to query addresses by additional description. Valid values:
   * 
   * and: displays the results that match all search conditions.
   * 
   * or: displays the results that match some or all search conditions.
   * 
   * @example
   * or
   */
  remarkSearchCondition?: string;
  /**
   * @remarks
   * Remarks for the address.
   */
  remarks?: string[];
  /**
   * @remarks
   * Search precisely by address type conditions:
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
      availableStatus: 'AvailableStatus',
      enableStatus: 'EnableStatus',
      healthStatus: 'HealthStatus',
      monitorTemplateName: 'MonitorTemplateName',
      nameSearchCondition: 'NameSearchCondition',
      names: 'Names',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remarkSearchCondition: 'RemarkSearchCondition',
      remarks: 'Remarks',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      address: 'string',
      addressId: 'string',
      availableStatus: 'string',
      enableStatus: 'string',
      healthStatus: 'string',
      monitorTemplateName: 'string',
      nameSearchCondition: 'string',
      names: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      remarkSearchCondition: 'string',
      remarks: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.names)) {
      $dara.Model.validateArray(this.names);
    }
    if(Array.isArray(this.remarks)) {
      $dara.Model.validateArray(this.remarks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

