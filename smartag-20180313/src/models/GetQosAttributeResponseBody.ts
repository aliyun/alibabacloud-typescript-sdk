// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQosAttributeResponseBodyQosCars extends $dara.Model {
  /**
   * @remarks
   * The rate limiting type. Valid values:
   * 
   * - **Absolute**: by bandwidth value.
   * - **Percent**: by percentage.
   * 
   * @example
   * Absolute
   */
  limitType?: string;
  /**
   * @remarks
   * The maximum bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 2
   */
  maxBandwidthAbs?: number;
  /**
   * @remarks
   * The maximum bandwidth percentage.
   * 
   * @example
   * 20
   */
  maxBandwidthPercent?: number;
  /**
   * @remarks
   * The minimum bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 1
   */
  minBandwidthAbs?: number;
  /**
   * @remarks
   * The minimum bandwidth percentage.
   * 
   * @example
   * 10
   */
  minBandwidthPercent?: number;
  /**
   * @remarks
   * The bandwidth type when rate limiting is based on percentage. Valid values:
   * 
   * - **CcnBandwidth**: Cloud Connect Network (CCN) bandwidth.
   * - **InternetUpBandwidth**: Internet upstream bandwidth.
   * 
   * @example
   * InternetUpBandwidth
   */
  percentSourceType?: string;
  /**
   * @remarks
   * The priority of the rate limiting rule. Valid values: **1** to **3**. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The description of the rate limiting rule.
   * 
   * @example
   * test
   */
  qosCarDescription?: string;
  /**
   * @remarks
   * The ID of the rate limiting rule.
   * 
   * @example
   * qoscar-xir1apa8ayjp56ei****
   */
  qosCarId?: string;
  /**
   * @remarks
   * The name of the rate limiting rule.
   * 
   * @example
   * test
   */
  qosCarName?: string;
  static names(): { [key: string]: string } {
    return {
      limitType: 'LimitType',
      maxBandwidthAbs: 'MaxBandwidthAbs',
      maxBandwidthPercent: 'MaxBandwidthPercent',
      minBandwidthAbs: 'MinBandwidthAbs',
      minBandwidthPercent: 'MinBandwidthPercent',
      percentSourceType: 'PercentSourceType',
      priority: 'Priority',
      qosCarDescription: 'QosCarDescription',
      qosCarId: 'QosCarId',
      qosCarName: 'QosCarName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limitType: 'string',
      maxBandwidthAbs: 'number',
      maxBandwidthPercent: 'number',
      minBandwidthAbs: 'number',
      minBandwidthPercent: 'number',
      percentSourceType: 'string',
      priority: 'number',
      qosCarDescription: 'string',
      qosCarId: 'string',
      qosCarName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQosAttributeResponseBodyQosPolicies extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * @example
   * 0.0.0.0/0
   */
  destCidr?: string;
  /**
   * @remarks
   * The destination port range. Valid values: **-1** or **1** to **65535**.
   * 
   * Examples of the destination port range format:
   * 
   * - **1/200**: indicates ports 1 to 200.
   * - **80/80**: indicates port 80.
   * - **-1/-1**: indicates that ports are not restricted.
   * 
   * @example
   * -1/-1
   */
  destPortRange?: string;
  /**
   * @remarks
   * The expiration time of the 5-tuple rules. The time is displayed in Beijing time. Format: UTC+8.
   * 
   * @example
   * 2021-07-29T00:00:00+0800
   */
  endTime?: number;
  /**
   * @remarks
   * The protocol type applied to the 5-tuple rules.
   * 
   * @example
   * ALL
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The priority of the rate limiting rule to which the 5-tuple rules belong. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The description of the 5-tuple rules.
   * 
   * @example
   * test
   */
  qosPolicieDescription?: string;
  /**
   * @remarks
   * The name of the 5-tuple rules.
   * 
   * @example
   * test
   */
  qosPolicieName?: string;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The source port range. Valid values: **-1** or **1** to **65535**.
   * 
   * Examples of the source port range format:
   * 
   * - **1/200**: indicates ports 1 to 200.
   * - **80/80**: indicates port 80.
   * - **-1/-1**: indicates that ports are not restricted.
   * 
   * @example
   * -1/-1
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The start of the effective period for the 5-tuple rules. The time is displayed in Beijing time. Format: UTC+8.
   * 
   * @example
   * 2021-06-21T00:00:00+0800
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      endTime: 'EndTime',
      ipProtocol: 'IpProtocol',
      priority: 'Priority',
      qosPolicieDescription: 'QosPolicieDescription',
      qosPolicieName: 'QosPolicieName',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCidr: 'string',
      destPortRange: 'string',
      endTime: 'number',
      ipProtocol: 'string',
      priority: 'number',
      qosPolicieDescription: 'string',
      qosPolicieName: 'string',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQosAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of Smart Access Gateway instances with configuration errors.
   * 
   * @example
   * 1
   */
  errorConfigSmartAGCount?: number;
  /**
   * @remarks
   * The rate limiting rules with configuration errors in the QoS policy.
   */
  qosCars?: GetQosAttributeResponseBodyQosCars[];
  /**
   * @remarks
   * The description of the QoS policy instance.
   * 
   * @example
   * test
   */
  qosDescription?: string;
  /**
   * @remarks
   * The name of the QoS policy instance.
   * 
   * @example
   * test
   */
  qosName?: string;
  /**
   * @remarks
   * The list of 5-tuple rules for the QoS policy instance.
   */
  qosPolicies?: GetQosAttributeResponseBodyQosPolicies[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 91058E01-1806-45D5-B305-19E4D0A5CE04
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorConfigSmartAGCount: 'ErrorConfigSmartAGCount',
      qosCars: 'QosCars',
      qosDescription: 'QosDescription',
      qosName: 'QosName',
      qosPolicies: 'QosPolicies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorConfigSmartAGCount: 'number',
      qosCars: { 'type': 'array', 'itemType': GetQosAttributeResponseBodyQosCars },
      qosDescription: 'string',
      qosName: 'string',
      qosPolicies: { 'type': 'array', 'itemType': GetQosAttributeResponseBodyQosPolicies },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.qosCars)) {
      $dara.Model.validateArray(this.qosCars);
    }
    if(Array.isArray(this.qosPolicies)) {
      $dara.Model.validateArray(this.qosPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

