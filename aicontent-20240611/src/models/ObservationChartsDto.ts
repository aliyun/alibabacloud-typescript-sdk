// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TimeSeriesPointDTO } from "./TimeSeriesPointDto";


export class ObservationChartsDTO extends $dara.Model {
  callVolume?: TimeSeriesPointDTO[];
  concurrency?: TimeSeriesPointDTO[];
  qpm?: TimeSeriesPointDTO[];
  responseTime?: TimeSeriesPointDTO[];
  successRate?: TimeSeriesPointDTO[];
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
      successRate: { 'type': 'array', 'itemType': TimeSeriesPointDTO },
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

