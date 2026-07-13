// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCloudGtmMonitorTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese
   * 
   * - en-US (default): English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The IP version of the detection points. An exact search is performed. Valid values:
   * 
   * - IPv4: This version is applicable when the target address is an IPv4 address.
   * 
   * - IPv6: This version is applicable when the target address is an IPv6 address.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The name of the health check template. A fuzzy search is performed based on the keyword that you enter.
   * 
   * @example
   * IPv4-Ping
   */
  name?: string;
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
   * The number of entries to return on each page for a paged query. The maximum value is **100**. The default value is **20**.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The protocol used for detection. An exact search is performed. Valid values:
   * 
   * - ping
   * 
   * - tcp
   * 
   * - http
   * 
   * - https
   * 
   * @example
   * ping
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ipVersion: 'IpVersion',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ipVersion: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

