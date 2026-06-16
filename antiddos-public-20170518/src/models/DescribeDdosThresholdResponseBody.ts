// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosThresholdResponseBodyThresholdsThreshold extends $dara.Model {
  bps?: number;
  ddosType?: string;
  elasticBps?: number;
  instanceId?: string;
  internetIp?: string;
  isAuto?: boolean;
  maxBps?: number;
  maxPps?: number;
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      ddosType: 'DdosType',
      elasticBps: 'ElasticBps',
      instanceId: 'InstanceId',
      internetIp: 'InternetIp',
      isAuto: 'IsAuto',
      maxBps: 'MaxBps',
      maxPps: 'MaxPps',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      ddosType: 'string',
      elasticBps: 'number',
      instanceId: 'string',
      internetIp: 'string',
      isAuto: 'boolean',
      maxBps: 'number',
      maxPps: 'number',
      pps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosThresholdResponseBodyThresholds extends $dara.Model {
  threshold?: DescribeDdosThresholdResponseBodyThresholdsThreshold[];
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: { 'type': 'array', 'itemType': DescribeDdosThresholdResponseBodyThresholdsThreshold },
    };
  }

  validate() {
    if(Array.isArray(this.threshold)) {
      $dara.Model.validateArray(this.threshold);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosThresholdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * E9B3C090-55AD-59C6-979E-FCFD81E7D9E7
   */
  requestId?: string;
  thresholds?: DescribeDdosThresholdResponseBodyThresholds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      thresholds: 'Thresholds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      thresholds: DescribeDdosThresholdResponseBodyThresholds,
    };
  }

  validate() {
    if(this.thresholds && typeof (this.thresholds as any).validate === 'function') {
      (this.thresholds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

