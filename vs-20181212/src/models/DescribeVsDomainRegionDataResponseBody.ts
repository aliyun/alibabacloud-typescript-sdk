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

export class DescribeVsDomainRegionDataResponseBodyValue extends $dara.Model {
  regionProportionData?: DescribeVsDomainRegionDataResponseBodyValueRegionProportionData[];
  static names(): { [key: string]: string } {
    return {
      regionProportionData: 'RegionProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionProportionData: { 'type': 'array', 'itemType': DescribeVsDomainRegionDataResponseBodyValueRegionProportionData },
    };
  }

  validate() {
    if(Array.isArray(this.regionProportionData)) {
      $dara.Model.validateArray(this.regionProportionData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRegionDataResponseBody extends $dara.Model {
  /**
   * @example
   * 3600
   */
  dataInterval?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-10-31T15:59:59Z
   */
  endTime?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2021-10-30T16:00:00Z
   */
  startTime?: string;
  value?: DescribeVsDomainRegionDataResponseBodyValue;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      value: DescribeVsDomainRegionDataResponseBodyValue,
    };
  }

  validate() {
    if(this.value && typeof (this.value as any).validate === 'function') {
      (this.value as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

