// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TimeSeriesPointDTO } from "./TimeSeriesPointDto";


/**
 */
export class ObservationChartsDTOSuccessRate extends $dara.Model {
  /**
   * @example
   * series1
   */
  label?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  timestamp?: string;
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
  callVolume?: TimeSeriesPointDTO[];
  concurrency?: TimeSeriesPointDTO[];
  qpm?: TimeSeriesPointDTO[];
  responseTime?: TimeSeriesPointDTO[];
  successRate?: ObservationChartsDTOSuccessRate[];
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

