// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainISPDataResponseBodyValueISPProportionData extends $dara.Model {
  /**
   * @remarks
   * The average response size. Unit: bytes.
   * 
   * @example
   * 7081884.7
   */
  avgObjectSize?: string;
  /**
   * @remarks
   * The average response speed. Unit: byte/ms.
   * 
   * @example
   * 88.92594866772144
   */
  avgResponseRate?: string;
  /**
   * @remarks
   * The average response time. Unit: milliseconds.
   * 
   * @example
   * 79638.0
   */
  avgResponseTime?: string;
  /**
   * @remarks
   * The bandwidth.
   * 
   * @example
   * 1311.4601296296296
   */
  bps?: string;
  /**
   * @remarks
   * The proportion of network traffic.
   * 
   * @example
   * 0.012220518530445479
   */
  bytesProportion?: string;
  /**
   * @remarks
   * The information about the ISP.
   * 
   * @example
   * Alibaba
   */
  ISP?: string;
  /**
   * @remarks
   * The name of the ISP.
   * 
   * @example
   * alibaba
   */
  ispEname?: string;
  /**
   * @remarks
   * The proportion of the HTTP status code.
   * 
   * @example
   * 0.004509176173513099
   */
  proportion?: string;
  /**
   * @remarks
   * The QPS.
   * 
   * @example
   * 2.3148148148148147E-5
   */
  qps?: string;
  /**
   * @remarks
   * The request error rate.
   * 
   * @example
   * 0.0
   */
  reqErrRate?: string;
  /**
   * @remarks
   * The total volume of traffic.
   * 
   * @example
   * 7081884
   */
  totalBytes?: string;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 1
   */
  totalQuery?: string;
  static names(): { [key: string]: string } {
    return {
      avgObjectSize: 'AvgObjectSize',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      bps: 'Bps',
      bytesProportion: 'BytesProportion',
      ISP: 'ISP',
      ispEname: 'IspEname',
      proportion: 'Proportion',
      qps: 'Qps',
      reqErrRate: 'ReqErrRate',
      totalBytes: 'TotalBytes',
      totalQuery: 'TotalQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgObjectSize: 'string',
      avgResponseRate: 'string',
      avgResponseTime: 'string',
      bps: 'string',
      bytesProportion: 'string',
      ISP: 'string',
      ispEname: 'string',
      proportion: 'string',
      qps: 'string',
      reqErrRate: 'string',
      totalBytes: 'string',
      totalQuery: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

