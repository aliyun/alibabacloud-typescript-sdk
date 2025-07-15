// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainUsageDataRequest extends $dara.Model {
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
   * *   **all**: all regions
   * 
   * >  If you do not specify this parameter, the default value CN is used. Alibaba Cloud supports the following countries and regions outside the Chinese mainland: - Asia Pacific 1: Hong Kong (China), Macao (China), Taiwan (China), Japan, and Southeast Asia excluding Vietnam and Indonesia. - Asia Pacific 2: Indonesia, South Korea, and Vietnam. - Asia Pacific 3: Australia and New Zealand. - North America: US and Canada. - South America: Brazil. Europe: Ukraine, UK, France, Netherlands, Spain, Italy, Sweden, and Germany. - Middle East and Africa: South Africa, Oman, UAE, and Kuwait.
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The protocol of the data to query. Valid values:
   * 
   * *   **http**: HTTP
   * *   **https**: HTTPS
   * *   **quic**: QUIC
   * *   **all** (default): HTTP, HTTPS, and QUIC
   * 
   * @example
   * all
   */
  dataProtocol?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * *   You can query one or more domain names. If you specify multiple domain names, separate them with commas (,).
   * *   If you leave this parameter empty, the data of all domain names within your Alibaba Cloud account is returned.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * The end time must be later than the start time. The maximum time range that you can specify is **31** days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The category of the resource usage data to query. Valid values:
   * 
   * *   **bps**: streaming bandwidth
   * *   **traf**: streaming traffic
   * *   **req_traf**: stream ingest traffic if you set Type to push, or stream relay traffic if you set Type to push_proxy
   * *   **req_bps**: stream ingest bandwidth if you set Type to push, or stream relay bandwidth if you set Type to push_proxy
   * 
   * This parameter is required.
   * 
   * @example
   * traf
   */
  field?: string;
  /**
   * @remarks
   * The time interval between the data entries to return. Unit: seconds. Valid values: **300** (5 minutes), **3600** (1 hour), and **86400** (1 day).
   * 
   * @example
   * 300
   */
  interval?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the resource usage data to query.
   * 
   * Valid values if you set **Field** to **bps** or **traf**:
   * 
   * *   **rts**: bandwidth or traffic for Real-Time Streaming (RTS)
   * *   **quic**: bandwidth or traffic for QUIC
   * *   **all**: all bandwidth or traffic
   * 
   * Valid values if you set **Field** to **req_traf** or **req_bps**:
   * 
   * *   **push**: stream ingest bandwidth or traffic
   * *   **push_proxy**: stream relay bandwidth or traffic
   * 
   * @example
   * all
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
      ownerId: 'OwnerId',
      regionId: 'RegionId',
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
      ownerId: 'number',
      regionId: 'string',
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

