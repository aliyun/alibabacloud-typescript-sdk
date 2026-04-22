// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsHistoryRequest extends $dara.Model {
  /**
   * @example
   * dns-example.top
   */
  domainName?: string;
  /**
   * @example
   * 1741526400000
   */
  endTimestamp?: number;
  /**
   * @example
   * 0
   */
  rcode?: string;
  /**
   * @example
   * ap-southeast-3
   */
  serverRegion?: string;
  /**
   * @example
   * 1474335170000
   */
  startTimestamp?: number;
  statisticalType?: string;
  /**
   * @example
   * lisheng999.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTimestamp: 'EndTimestamp',
      rcode: 'Rcode',
      serverRegion: 'ServerRegion',
      startTimestamp: 'StartTimestamp',
      statisticalType: 'StatisticalType',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTimestamp: 'number',
      rcode: 'string',
      serverRegion: 'string',
      startTimestamp: 'number',
      statisticalType: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

