// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNisNetworkMetricsResponseBodyDataMetrics extends $dara.Model {
  /**
   * @example
   * 1690684091100
   */
  timeStamp?: number;
  /**
   * @example
   * 88
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkMetricsResponseBodyData extends $dara.Model {
  metrics?: GetNisNetworkMetricsResponseBodyDataMetrics[];
  /**
   * @example
   * Bits/Second
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': GetNisNetworkMetricsResponseBodyDataMetrics },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNisNetworkMetricsResponseBody extends $dara.Model {
  data?: GetNisNetworkMetricsResponseBodyData;
  /**
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
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
      data: GetNisNetworkMetricsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

