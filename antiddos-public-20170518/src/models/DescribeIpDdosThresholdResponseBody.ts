// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpDdosThresholdResponseBodyThreshold extends $dara.Model {
  /**
   * @remarks
   * If the value of the **DdosType** parameter is **defense**, the Bps parameter indicates the current traffic scrubbing threshold. Unit: Mbit/s.
   * 
   * If the value of the **DdosType** parameter is **blackhole**, the Bps parameter indicates the basic protection threshold. Unit: Mbit/s.
   * 
   * @example
   * 7500
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
   * i-bp1i88rqjza51s****
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
   * 7500
   */
  maxBps?: number;
  /**
   * @remarks
   * The maximum packet scrubbing threshold. Unit: pps.
   * 
   * @example
   * 5000000
   */
  maxPps?: number;
  /**
   * @remarks
   * The packet scrubbing threshold. Unit: packets per second (pps).
   * 
   * > This parameter is returned only when the value of the **DdosType** parameter is **defense**.
   * 
   * @example
   * 5000000
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

export class DescribeIpDdosThresholdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 025F1688-680B-551A-9A8E-1A0D796315CF
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the details of the threshold.
   */
  threshold?: DescribeIpDdosThresholdResponseBodyThreshold;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      threshold: DescribeIpDdosThresholdResponseBodyThreshold,
    };
  }

  validate() {
    if(this.threshold && typeof (this.threshold as any).validate === 'function') {
      (this.threshold as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

