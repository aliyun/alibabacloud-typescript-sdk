// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The region code. Valid values:
   * - **CN**: the Chinese mainland.
   * - **OverSeas**: outside the Chinese mainland.
   * - **AP1**: Asia-Pacific 1.
   * - **AP2**: Asia-Pacific 2.
   * - **AP3**: Asia-Pacific 3.
   * - **NA**: North America.
   * - **SA**: South America.
   * - **EU**: Europe.
   * - **MEAA**: Middle East and Africa.
   * - **all**: all regions.
   * 
   * > If this parameter is not specified, the default value is the Chinese mainland. Regions outside the Chinese mainland: - Asia-Pacific 1: Hong Kong (China), Macao (China), Taiwan (China), Japan, and Southeast Asian countries except Vietnam and Indonesia. - Asia-Pacific 2: Indonesia, South Korea, and Vietnam. - Asia-Pacific 3: Australia and New Zealand. North America: the United States and Canada. - South America: Brazil. - Europe: Ukraine, the United Kingdom, France, the Netherlands, Spain, Italy, Sweden, and Germany. - Middle East and Africa: South Africa, Oman, the United Arab Emirates, and Kuwait.
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The protocol of the data to retrieve. Valid values:
   * 
   * - **http**: HTTP.
   * 
   * - **https**: HTTPS.
   * 
   * - **quic**: QUIC.
   * 
   * - **all** (default): all of the preceding protocols.
   * 
   * @example
   * all
   */
  dataProtocol?: string;
  /**
   * @remarks
   * The streaming domain.
   * - You can specify a single domain name or multiple domain names. Separate multiple domain names with commas (,).
   * 
   * - If this parameter is empty, the merged data of all streaming domains is returned by default.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * The end time must be later than the start time, and the difference between the end time and the start time cannot exceed **31** days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The data type of the usage data to query. Valid values:
   * - **bps**: playback bandwidth.
   * 
   * - **traf**: traffic.
   * 
   * - **req_traf**: when Type is set to push, this indicates stream ingest traffic. When Type is set to push_proxy, this indicates relay traffic.
   * 
   * - **req_bps**: when Type is set to push, this indicates stream ingest bandwidth. When Type is set to push_proxy, this indicates relay bandwidth.
   * 
   * This parameter is required.
   * 
   * @example
   * traf
   */
  field?: string;
  /**
   * @remarks
   * Forces retrieval of data at the specified time granularity, in seconds. Valid values: **300** (5 minutes), **3600** (1 hour), and **86400** (1 day).
   * 
   * @example
   * 300
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of usage data to retrieve.
   * 
   * When **Field** is set to **bps** or **traf**, valid values:
   * - **rts**: RTS bandwidth or traffic.
   * - **quic**: QUIC bandwidth or traffic.
   * 
   * When **Field** is set to **req_traf** or **req_bps**, valid values:
   * - **push**: stream ingest bandwidth or traffic.
   * - **push_proxy**: relay bandwidth or traffic.
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

