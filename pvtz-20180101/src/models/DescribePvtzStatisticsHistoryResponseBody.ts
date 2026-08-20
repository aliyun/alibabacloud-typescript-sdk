// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePvtzStatisticsHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 29
   */
  count?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * wget At8P8tza.popscan.xaliyun.com
   */
  domainName?: string;
  /**
   * @remarks
   * The number of failed requests.
   * 
   * @example
   * 100
   */
  failCount?: number;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * UDP、TCP
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
   * The success rate.
   * 
   * @example
   * 95
   */
  ratio?: number;
  /**
   * @remarks
   * The number of successful requests.
   * 
   * @example
   * 5
   */
  successCount?: number;
  /**
   * @remarks
   * The timestamp of the data point. Unit: milliseconds.
   * 
   * @example
   * 1687190400000
   */
  timestamp?: number;
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * cn-zhangjiakou-share.log.aliyuncs.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domainName: 'DomainName',
      failCount: 'FailCount',
      protocol: 'Protocol',
      qtype: 'Qtype',
      ratio: 'Ratio',
      successCount: 'SuccessCount',
      timestamp: 'Timestamp',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      domainName: 'string',
      failCount: 'number',
      protocol: 'string',
      qtype: 'string',
      ratio: 'number',
      successCount: 'number',
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

export class DescribePvtzStatisticsHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistical data.
   */
  data?: DescribePvtzStatisticsHistoryResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46973D4C-E3E4-4ABA-9190-9A9DE406C7E
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
      data: { 'type': 'array', 'itemType': DescribePvtzStatisticsHistoryResponseBodyData },
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

