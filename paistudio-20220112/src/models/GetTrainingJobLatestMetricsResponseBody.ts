// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrainingJobLatestMetricsResponseBodyMetrics extends $dara.Model {
  /**
   * @example
   * loss
   */
  name?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-04-18T22:20:55Z
   */
  timestamp?: string;
  /**
   * @example
   * 0.97
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      timestamp: 'string',
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

export class GetTrainingJobLatestMetricsResponseBody extends $dara.Model {
  metrics?: GetTrainingJobLatestMetricsResponseBodyMetrics[];
  /**
   * @example
   * 18D5A1C6-14B8-545E-8408-0A7DDB4C6B5E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': GetTrainingJobLatestMetricsResponseBodyMetrics },
      requestId: 'string',
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

