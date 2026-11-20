// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TimeSeriesPointDTO } from "./TimeSeriesPointDto";


/**
 */
export class ObservationChartsDTOSuccessRate extends $dara.Model {
  /**
   * @remarks
   * The label.
   * 
   * @example
   * series1
   */
  label?: string;
  /**
   * @remarks
   * The timestamp (RFC3339).
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * 62.37
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      timestamp: 'timestamp',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      timestamp: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObservationChartsDTO extends $dara.Model {
  /**
   * @remarks
   * The call volume time series.
   */
  callVolume?: TimeSeriesPointDTO[];
  /**
   * @remarks
   * The number of concurrent connections.
   */
  concurrency?: TimeSeriesPointDTO[];
  /**
   * @remarks
   * The QPM time series.
   */
  qpm?: TimeSeriesPointDTO[];
  /**
   * @remarks
   * The response time time series.
   */
  responseTime?: TimeSeriesPointDTO[];
  /**
   * @remarks
   * The success rate time series.
   */
  successRate?: ObservationChartsDTOSuccessRate[];
  /**
   * @remarks
   * The TPM time series.
   */
  tpm?: TimeSeriesPointDTO[];
  static names(): { [key: string]: string } {
    return {
      callVolume: 'callVolume',
      concurrency: 'concurrency',
      qpm: 'qpm',
      responseTime: 'responseTime',
      successRate: 'successRate',
      tpm: 'tpm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callVolume: { 'type': 'array', 'itemType': TimeSeriesPointDTO },
      concurrency: { 'type': 'array', 'itemType': TimeSeriesPointDTO },
      qpm: { 'type': 'array', 'itemType': TimeSeriesPointDTO },
      responseTime: { 'type': 'array', 'itemType': TimeSeriesPointDTO },
      successRate: { 'type': 'array', 'itemType': ObservationChartsDTOSuccessRate },
      tpm: { 'type': 'array', 'itemType': TimeSeriesPointDTO },
    };
  }

  validate() {
    if(Array.isArray(this.callVolume)) {
      $dara.Model.validateArray(this.callVolume);
    }
    if(Array.isArray(this.concurrency)) {
      $dara.Model.validateArray(this.concurrency);
    }
    if(Array.isArray(this.qpm)) {
      $dara.Model.validateArray(this.qpm);
    }
    if(Array.isArray(this.responseTime)) {
      $dara.Model.validateArray(this.responseTime);
    }
    if(Array.isArray(this.successRate)) {
      $dara.Model.validateArray(this.successRate);
    }
    if(Array.isArray(this.tpm)) {
      $dara.Model.validateArray(this.tpm);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

