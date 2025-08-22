// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The billable region. Valid values:
   * 
   * *   **CN**: Chinese mainland
   * *   **OverSeas**: outside the Chinese mainland
   * *   **AP1**: Asia Pacific 1
   * *   **AP2**: Asia Pacific 2
   * *   **AP3**: Asia Pacific 3
   * *   **NA**: North America
   * *   **SA**: South America
   * *   **EU**: Europe
   * *   **MEAA**: Middle East and Africa
   * *   **all**: all the preceding billable regions
   * 
   * Default value: **CN**
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The protocol of the data to query. Valid values:
   * 
   * *   **quic**: Quick UDP Internet Connections (QUIC)
   * *   **https**: HTTPS
   * *   **http**: HTTP
   * *   **all**: all the preceding protocols
   * 
   * Default value: **all**
   * 
   * @example
   * all
   */
  dataProtocol?: string;
  /**
   * @remarks
   * The accelerated domain name. You can specify up to 100 domain names in each request. Separate multiple domain names with commas (,).
   * 
   * >  If you do not specify this parameter, the usage data of all accelerated domain names that belong to your Alibaba Cloud account is returned.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time. The maximum time range that can be queried is 31 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T22:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of data that you want to query. Valid values:
   * 
   * *   **bps**: bandwidth
   * *   **traf**: traffic
   * *   **acc**: requests
   * 
   * >  **acc** does not support the **Area** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bps
   */
  field?: string;
  /**
   * @remarks
   * The time interval between the data entries to return. Unit: seconds.
   * 
   * The time interval varies with the maximum time range per query. Valid values: 300 (5 minutes), 3600 (1 hour), and 86400 (1 day). For more information, see **Usage notes**.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  The minimum time granularity at which the data is queried is 5 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the requests. Valid values:
   * 
   * *   **static**: static requests
   * *   **dynamic**: dynamic requests
   * *   **all**: all requests
   * 
   * Default value: **all**
   * 
   * @example
   * dynamic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      dataProtocol: 'DataProtocol',
      domainName: 'DomainName',
      endTime: 'EndTime',
      field: 'Field',
      interval: 'Interval',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      dataProtocol: 'string',
      domainName: 'string',
      endTime: 'string',
      field: 'string',
      interval: 'string',
      startTime: 'string',
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

