// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeThreatEventTopMetricResponseBodyTopMetrics extends $dara.Model {
  /**
   * @example
   * 20
   */
  cnt?: number;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 115.28.209.212
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cnt: 'Cnt',
      country: 'Country',
      region: 'Region',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnt: 'number',
      country: 'string',
      region: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeThreatEventTopMetricResponseBody extends $dara.Model {
  /**
   * @example
   * 12EF3845-CCEB-4B84-AE60-2B49B*****EE5
   */
  requestId?: string;
  topMetrics?: DescribeThreatEventTopMetricResponseBodyTopMetrics[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topMetrics: 'TopMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topMetrics: { 'type': 'array', 'itemType': DescribeThreatEventTopMetricResponseBodyTopMetrics },
    };
  }

  validate() {
    if(Array.isArray(this.topMetrics)) {
      $dara.Model.validateArray(this.topMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

