// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainRegionDataResponseBodyValueRegionProportionData extends $dara.Model {
  /**
   * @example
   * 2888253.7875
   */
  avgObjectSize?: string;
  /**
   * @example
   * 154.3345765545624
   */
  avgResponseRate?: string;
  /**
   * @example
   * 5183.666666666667
   */
  avgResponseTime?: string;
  /**
   * @example
   * 380.9614285714286
   */
  bps?: string;
  /**
   * @example
   * 0.003544181046236794
   */
  bytesProportion?: string;
  /**
   * @example
   * 0.01155980271270037
   */
  proportion?: string;
  /**
   * @example
   * 0.001746031746031746
   */
  qps?: string;
  region?: string;
  /**
   * @example
   * chongqing
   */
  regionEname?: string;
  /**
   * @example
   * 0
   */
  reqErrRate?: string;
  /**
   * @example
   * 2400057
   */
  totalBytes?: string;
  /**
   * @example
   * 3
   */
  totalQuery?: string;
  static names(): { [key: string]: string } {
    return {
      avgObjectSize: 'AvgObjectSize',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      bps: 'Bps',
      bytesProportion: 'BytesProportion',
      proportion: 'Proportion',
      qps: 'Qps',
      region: 'Region',
      regionEname: 'RegionEname',
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
      proportion: 'string',
      qps: 'string',
      region: 'string',
      regionEname: 'string',
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

