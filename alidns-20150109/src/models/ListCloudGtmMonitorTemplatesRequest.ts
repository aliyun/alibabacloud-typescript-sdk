// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmMonitorTemplatesRequest extends $dara.Model {
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
   * The IP address type of health check nodes. Valid values:
   * 
   * *   IPv4: applicable when health checks are performed on IPv4 addresses.
   * *   IPv6: applicable when health checks are performed on IPv6 addresses.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The name of the health check probe template, which is recommended to be distinguishable for configuration personnel to differentiate and remember, ideally indicating the health check protocol.
   * 
   * @example
   * IPv4-Ping
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
   * Protocol types for initiating probes to the target IP address:
   * - ping
   * - tcp
   * - http
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

