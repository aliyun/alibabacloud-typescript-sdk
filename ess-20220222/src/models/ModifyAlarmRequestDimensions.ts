// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAlarmRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension. The valid values vary based on the metric type.
   * 
   * *   If you set the MetricType parameter to custom, you can specify this parameter based on your business requirements.
   * 
   * *   If you set the MetricType parameter to system, this parameter has the following valid values:
   * 
   *     *   user_id: the ID of your Alibaba Cloud account
   *     *   scaling_group: the scaling group that you want to monitor
   *     *   device: the type of the NIC
   *     *   state: the status of the TCP connection
   * 
   * @example
   * device
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The value of the dimension. The valid values vary based on the value of the DimensionKey parameter.
   * 
   * *   If you set the MetricType parameter to custom, you can specify this parameter based on your business requirements.
   * 
   * *   If you set the MetricType parameter to system, this parameter has the following valid values:
   * 
   *     *   If you set the DimensionKey parameter to user_id, the system specifies the value
   * 
   *     *   scaling_group: The system specifies the value of the DimensionValue parameter.
   * 
   *     *   If you set the DimensionKey parameter to device, you can set the DimensionValue parameter to eth0 or eth1.
   * 
   *         *   For instances that reside in the classic network type, eth0 specifies the internal NIC. Only one eth0 NIC exists on each instance that resides in a VPC.
   *         *   For instances that reside in the classic network, eth1 specifies the public NIC.
   * 
   *     *   If you set the DimensionKey parameter to state, you can set the DimensionValue parameter to TCP_TOTAL or ESTABLISHED.
   * 
   *         *   TCP_TOTAL specifies the total number of TCP connections.
   *         *   ESTABLISHED specifies the number of established TCP connections.
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

