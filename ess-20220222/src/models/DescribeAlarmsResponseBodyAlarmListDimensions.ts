// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmsResponseBodyAlarmListDimensions extends $dara.Model {
  /**
   * @remarks
   * The dimension key of the metric. Valid values:
   * 
   * *   user_id: the ID of your Alibaba Cloud account.
   * *   scaling_group: the scaling group that is monitored by the event-triggered task.
   * *   device: the NIC type.
   * *   state: the status of the TCP connection.
   * 
   * @example
   * device
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The dimension value of the metric. The value of DimensionValue varies based on the value of DimensionKey.
   * 
   * *   If you set DimensionKey to `user_id`, the system specifies the value of DimensionValue.
   * 
   * *   If you set DimensionKey to `scaling_group`, the system specifies the value of DimensionValue.
   * 
   * *   If you set DimensionKey to `device`, you can set DimensionValue to eth0 or eth1.
   * 
   *     *   For instances of the classic network type, eth0 indicates the internal NIC. Only one eth0 NIC exists on each instance that resides in VPCs.
   *     *   For instances of the classic network type, eth1 indicates the public NIC.
   * 
   * *   If you set DimensionKey to `state`, you can set DimensionValue to TCP_TOTAL or ESTABLISHED.
   * 
   *     *   TCP_TOTAL indicates the total number of TCP connections.
   *     *   ESTABLISHED indicates the number of TCP connections that are established.
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

