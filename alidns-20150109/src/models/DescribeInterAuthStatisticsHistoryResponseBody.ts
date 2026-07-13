// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The request count.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The DNS query protocol.
   * 
   * - UDP
   * 
   * - TCP
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The query type.
   * 
   * @example
   * A
   */
  qtype?: string;
  /**
   * @remarks
   * The success rate or ratio.
   * 
   * @example
   * 100
   */
  ratio?: number;
  /**
   * @remarks
   * The timestamp of the data point in milliseconds.
   * 
   * @example
   * 1706716800000
   */
  timestamp?: number;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * mt2.cn
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domainName: 'DomainName',
      protocol: 'Protocol',
      qtype: 'Qtype',
      ratio: 'Ratio',
      timestamp: 'Timestamp',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      domainName: 'string',
      protocol: 'string',
      qtype: 'string',
      ratio: 'number',
      timestamp: 'number',
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

export class DescribeInterAuthStatisticsHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of data objects.
   */
  data?: DescribeInterAuthStatisticsHistoryResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeInterAuthStatisticsHistoryResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

