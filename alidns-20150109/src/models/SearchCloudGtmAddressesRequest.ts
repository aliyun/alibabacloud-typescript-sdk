// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCloudGtmAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the return value. Valid values:
   * 
   * - zh-CN: Chinese.
   * 
   * - en-US: English. This is the default value.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Performs an exact search by endpoint. IP addresses and domain names are supported.
   * 
   * @example
   * 223.5.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The ID of the address. The address ID is a unique identifier.
   * 
   * @example
   * addr-89518218114368****
   */
  addressId?: string;
  /**
   * @remarks
   * Performs an exact search by the availability status of the address.
   * 
   * - available: The address is available.
   * 
   * - unavailable: The address is unavailable.
   * 
   * @example
   * available
   */
  availableStatus?: string;
  /**
   * @remarks
   * Performs an exact search by the status of the address.
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
   * Performs an exact search by the health status of the address.
   * 
   * - ok: All health check tasks for the referenced health check template are normal.
   * 
   * - ok_alert: Some health check tasks for the referenced health check template are abnormal, but the address is still considered normal.
   * 
   * - ok_no_monitor: The address does not reference any health check templates.
   * 
   * - exceptional: Some or all health check tasks for the referenced health check template are abnormal, and the address is considered abnormal.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * The name of the health check template.
   * 
   * @example
   * Ping-IPv4
   */
  monitorTemplateName?: string;
  /**
   * @remarks
   * The search logic for querying by address name. This parameter is required when you query by address name.
   * 
   * - and: The query returns results that match all the specified keywords.
   * 
   * - or: The query returns results that match some or all of the specified keywords.
   * 
   * @example
   * or
   */
  nameSearchCondition?: string;
  /**
   * @remarks
   * The name of the address. This name is used for easy identification.
   */
  names?: string[];
  /**
   * @remarks
   * The current page number. The value starts from 1. The default value is 1.
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
   * The search logic for querying by address remarks. This parameter is required when you query by address remarks.
   * 
   * and: The query returns results that match all the specified keywords.
   * 
   * or: The query returns results that match some or all of the specified keywords.
   * 
   * @example
   * or
   */
  remarkSearchCondition?: string;
  /**
   * @remarks
   * The remarks for the address.
   */
  remarks?: string[];
  /**
   * @remarks
   * Performs an exact search by the address type.
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

