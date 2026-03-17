// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQosAttributeResponseBodyQosCars extends $dara.Model {
  /**
   * @remarks
   * The type of traffic throttling. Valid values:
   * 
   * *   **Absolute**: throttles traffic based on a specific range of bandwidth.
   * *   **Percent**: throttles traffic based on a specific range of bandwidth percentage.
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
   * The maximum bandwidth percentage that the traffic is throttled to.
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
   * Bandwidth type when traffic is throttled to a percentage of the total bandwidth of the network.
   * 
   * *   **CcnBandwidth**: Cloud Connect Network (CCN) bandwidth.
   * *   **InternetUpBandwidth**: Internet upstream bandwidth.
   * 
   * @example
   * InternetUpBandwidth
   */
  percentSourceType?: string;
  /**
   * @remarks
   * The priority of the traffic throttling rule.
   * 
   * Valid values are from **1** to **3**. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The description of the traffic throttling rule.
   * 
   * @example
   * test
   */
  qosCarDescription?: string;
  /**
   * @remarks
   * The ID of the traffic throttling rule.
   * 
   * @example
   * qoscar-xir1apa8ayjp56ei****
   */
  qosCarId?: string;
  /**
   * @remarks
   * The name of the traffic throttling rule.
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
   * The range of the destination CIDR block.
   * 
   * @example
   * 0.0.0.0/0
   */
  destCidr?: string;
  /**
   * @remarks
   * The range of destination ports.
   * 
   * Valid values: **1** to **65535** and **-1**.
   * 
   * Examples of the format of the destination port range:
   * 
   * *   **1/200**: a port range from 1 to 200.
   * *   **80/80**: port 80.
   * *   **-1/-1**: all ports.
   * 
   * @example
   * -1/-1
   */
  destPortRange?: string;
  /**
   * @remarks
   * The end time of the valid time of the 5-tuple.
   * 
   * The time must be in UTC+8.
   * 
   * @example
   * 2021-07-29T00:00:00+0800
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the protocol that is applied to the 5-tuple rule.
   * 
   * @example
   * ALL
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The priority of the traffic throttling rule that is applied to the 5-tuple.rule.
   * 
   * A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The description of the 5-tuple.
   * 
   * @example
   * test
   */
  qosPolicieDescription?: string;
  /**
   * @remarks
   * The name of the 5-tuple.
   * 
   * @example
   * test
   */
  qosPolicieName?: string;
  /**
   * @remarks
   * The range of the source CIDR block.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The range of source ports.
   * 
   * Valid values: **1** to **65535** and **-1**.
   * 
   * Examples of the format of the source port range:
   * 
   * *   **1/200**: a port range from 1 to 200.
   * *   **80/80**: port 80.
   * *   **-1/-1**: all ports.
   * 
   * @example
   * -1/-1
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The start time of the valid time of the 5-tuple.
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
   * The number of Smart Access Gateway (SAG) instances that have exceptional configurations.
   * 
   * @example
   * 1
   */
  errorConfigSmartAGCount?: number;
  /**
   * @remarks
   * The traffic throttling rule applied to the QoS policies that have exceptional configurations.
   */
  qosCars?: GetQosAttributeResponseBodyQosCars[];
  /**
   * @remarks
   * The description of the QoS policy.
   * 
   * @example
   * test
   */
  qosDescription?: string;
  /**
   * @remarks
   * The name of the QoS policy.
   * 
   * @example
   * test
   */
  qosName?: string;
  /**
   * @remarks
   * List of QoS policies based on 5-tuple.
   */
  qosPolicies?: GetQosAttributeResponseBodyQosPolicies[];
  /**
   * @remarks
   * The ID of the request.
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

