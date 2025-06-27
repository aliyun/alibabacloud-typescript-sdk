// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCloudGtmMonitorTemplatesRequest extends $dara.Model {
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
   * The IP address type of health check nodes. An exact search is performed based on the IP address type. Valid values:
   * 
   * *   IPv4: applicable when the destination address of health checks is an IPv4 address
   * *   IPv6: applicable when the destination address of health checks is an IPv6 address
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @example
   * IPv4-Ping
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
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

