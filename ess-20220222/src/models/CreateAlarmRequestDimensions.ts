// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlarmRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The dimension key of the metric. The valid values vary based on the metric type.
   * 
   * *   If you set MetricType to custom, you can specify this parameter based on your business requirements.
   * 
   * *   If you set MetricType to system, this parameter has the following valid values:
   * 
   *     *   user_id: the ID of your Alibaba Cloud account.
   *     *   scaling_group: the scaling group that you want to monitor by using the event-triggered task.
   *     *   device: the NIC type.
   *     *   state: the status of the TCP connection.
   * 
   * @example
   * device
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The dimension value of the metric. The valid values of this parameter vary based on the value of Dimensions.DimensionKey.
   * 
   * *   If you set MetricType to custom, you can specify this parameter based on your business requirements.
   * 
   * *   If you set MetricType to system, this parameter has the following valid values:
   * 
   *     *   user_id: The system specifies the value.
   * 
   *     *   scaling_group: The system specifies the value.
   * 
   *     *   device: You can set this parameter to eth0 or eth1.
   * 
   *         *   For instances of the classic network type, eth0 specifies the internal NIC. Only one eth0 NIC exists on each instance that resides in VPCs.
   *         *   For instances of the classic network type, eth1 specifies the public NIC.
   * 
   *     *   state: You can set this parameter to TCP_TOTAL or ESTABLISHED.
   * 
   *         *   TCP_TOTAL specifies the total number of TCP connections.
   *         *   ESTABLISHED specifies the number of TCP connections that are established.
   * 
   * @example
   * eth0
   */
  dimensionValue?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dimensionValue: 'DimensionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dimensionValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

