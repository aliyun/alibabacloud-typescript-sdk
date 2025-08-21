// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosThresholdResponseBodyThresholdsThreshold extends $dara.Model {
  /**
   * @remarks
   * If the value of the **DdosType** parameter is **defense**, the Bps parameter indicates the current traffic scrubbing threshold. Unit: Mbit/s.
   * 
   * If the value of the **DdosType** parameter is **blackhole**, the Bps parameter indicates the basic protection threshold. Unit: Mbit/s.
   * 
   * @example
   * 500
   */
  bps?: number;
  /**
   * @remarks
   * The type of the threshold. Valid values:
   * 
   * *   **defense**: traffic scrubbing threshold
   * *   **blackhole**: DDoS mitigation threshold
   * 
   * @example
   * defense
   */
  ddosType?: string;
  /**
   * @remarks
   * The burstable protection threshold (the maximum DDoS mitigation threshold). Unit: Mbit/s.
   * 
   * > This parameter is returned only when the value of the **DdosType** parameter is **blackhole**.
   * 
   * @example
   * 12310
   */
  elasticBps?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp10bclrt56fblts****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * Indicates whether the threshold is automatically adjusted. Valid values:
   * 
   * *   **true**: The scrubbing thresholds are automatically adjusted based on the traffic load on the asset.
   * *   **false**: The scrubbing thresholds are not automatically adjusted. You must manually specify the scrubbing thresholds.
   * 
   * @example
   * false
   */
  isAuto?: boolean;
  /**
   * @remarks
   * The maximum traffic scrubbing threshold. Unit: Mbit/s.
   * 
   * @example
   * 1024
   */
  maxBps?: number;
  /**
   * @remarks
   * The maximum packet scrubbing threshold. Unit: pps.
   * 
   * @example
   * 150000
   */
  maxPps?: number;
  /**
   * @remarks
   * The packet scrubbing threshold. Unit: pps.
   * 
   * > This parameter is returned only when the value of the **DdosType** parameter is **defense**.
   * 
   * @example
   * 150000
   */
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
  /**
   * @remarks
   * An array that consists of the details of the threshold.
   */
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

