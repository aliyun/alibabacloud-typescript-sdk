// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsHistoryResponseBodyData extends $dara.Model {
  /**
   * @example
   * 20
   */
  count?: number;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * A
   */
  qtype?: string;
  /**
   * @example
   * 100
   */
  ratio?: number;
  /**
   * @example
   * 1706716800000
   */
  timestamp?: number;
  /**
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
  data?: DescribeInterAuthStatisticsHistoryResponseBodyData[];
  /**
   * @remarks
   * Id of the request
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

