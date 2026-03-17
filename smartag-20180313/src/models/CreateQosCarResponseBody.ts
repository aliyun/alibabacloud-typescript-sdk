// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQosCarResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the traffic throttling rule.
   * 
   * @example
   * Qosdesc
   */
  description?: string;
  /**
   * @remarks
   * The type of the traffic throttling rule. Valid values:
   * 
   * *   **Absolute**: throttles traffic based on a specific range of bandwidth.
   * *   **Percent**: throttles traffic based on a specific range of bandwidth percentage.
   * 
   * @example
   * Percent
   */
  limitType?: string;
  /**
   * @remarks
   * The maximum bandwidth value. Unit: Mbit/s.
   * 
   * This parameter is returned when **LimitType** is set to **Absolute**.
   * 
   * @example
   * 6
   */
  maxBandwidthAbs?: number;
  /**
   * @remarks
   * The maximum bandwidth percentage. Unit: percent (%).
   * 
   * @example
   * 90
   */
  maxBandwidthPercent?: number;
  /**
   * @remarks
   * The minimum bandwidth value. Unit: Mbit/s.
   * 
   * This parameter is returned when **LimitType** is set to **Absolute**.
   * 
   * @example
   * 2
   */
  minBandwidthAbs?: number;
  /**
   * @remarks
   * The minimum bandwidth percentage. Unit: percent (%).
   * 
   * @example
   * 20
   */
  minBandwidthPercent?: number;
  /**
   * @remarks
   * The type of bandwidth when traffic is throttled based on bandwidth percentage. Valid values:
   * 
   * *   **CcnBandwidth**: CCN bandwidth
   * *   **InternetUpBandwidth**: total Internet bandwidth
   * 
   * @example
   * CcnBandwidth
   */
  percentSourceType?: string;
  /**
   * @remarks
   * The priority value of the traffic throttling rule.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the traffic throttling rule.
   * 
   * @example
   * qoscar-n5k8g97lihlph****
   */
  qosCarId?: string;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * @example
   * qos-xitd8690ucu8ro****
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AC13E8FF-4D61-40AD-868E-817F2D3AC86A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      limitType: 'LimitType',
      maxBandwidthAbs: 'MaxBandwidthAbs',
      maxBandwidthPercent: 'MaxBandwidthPercent',
      minBandwidthAbs: 'MinBandwidthAbs',
      minBandwidthPercent: 'MinBandwidthPercent',
      percentSourceType: 'PercentSourceType',
      priority: 'Priority',
      qosCarId: 'QosCarId',
      qosId: 'QosId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      limitType: 'string',
      maxBandwidthAbs: 'number',
      maxBandwidthPercent: 'number',
      minBandwidthAbs: 'number',
      minBandwidthPercent: 'number',
      percentSourceType: 'string',
      priority: 'number',
      qosCarId: 'string',
      qosId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

