// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsSummaryRequest extends $dara.Model {
  /**
   * @example
   * DESC
   */
  direction?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 1741526400000
   */
  endTimestamp?: number;
  /**
   * @example
   * up
   * down
   */
  growType?: string;
  /**
   * @example
   * default
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * 300
   */
  period?: string;
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
   * File
   */
  sourceType?: string;
  /**
   * @example
   * 1516779348000
   */
  startTimestamp?: number;
  statisticalType?: string;
  /**
   * @example
   * example.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      domainName: 'DomainName',
      endTimestamp: 'EndTimestamp',
      growType: 'GrowType',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      period: 'Period',
      rcode: 'Rcode',
      serverRegion: 'ServerRegion',
      sourceType: 'SourceType',
      startTimestamp: 'StartTimestamp',
      statisticalType: 'StatisticalType',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      domainName: 'string',
      endTimestamp: 'number',
      growType: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      period: 'string',
      rcode: 'string',
      serverRegion: 'string',
      sourceType: 'string',
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

