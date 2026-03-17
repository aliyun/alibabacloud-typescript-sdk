// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProbeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name that is probed by the task. If the protocol of the probe task is ICMP or TCP, set the value to the IP address or domain name of the service that you want to probe. If the protocol of the probe task is HTTP, set the value to the URL of the service that you want to probe.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether to enable the probe task. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The number of probe packets transmitted by the probe task per minute.
   * 
   * Valid values: **1** to **60**.
   * 
   * > This parameter is required if the protocol of the probe task is ICMP. Ignore this parameter if the protocol of the probe task is not ICMP.
   * 
   * @example
   * 10
   */
  packetNumber?: number;
  /**
   * @remarks
   * The port that is probed by the task.
   * 
   * > This parameter is required if the protocol of the probe task is TCP. Ignore this parameter if the protocol of the probe task is not TCP.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The source address of the probe task.
   * 
   * > This parameter is required if the task probes private networks.
   * 
   * @example
   * 192.168.1.1
   */
  probeTaskSourceAddress?: string;
  /**
   * @remarks
   * The protocol of the probe task. Valid values:
   * 
   * *   **ICMP**
   * *   **TCP**
   * *   **HTTP**
   * 
   * > Tasks that probe private networks support only ICMP and TCP.
   * 
   * This parameter is required.
   * 
   * @example
   * ICMP
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID of the SAG instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-asdfz6ac74oj5v****
   */
  sagId?: string;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * sag****
   */
  sn?: string;
  /**
   * @remarks
   * The name of the probe task.
   * 
   * @example
   * test-ping
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the probe task. Valid values:
   * 
   * *   **Internet**: probes a public network.
   * *   **Intranet**: probes a private network.
   * 
   * This parameter is required.
   * 
   * @example
   * Internet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
      packetNumber: 'PacketNumber',
      port: 'Port',
      probeTaskSourceAddress: 'ProbeTaskSourceAddress',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sagId: 'SagId',
      sn: 'Sn',
      taskName: 'TaskName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'boolean',
      packetNumber: 'number',
      port: 'number',
      probeTaskSourceAddress: 'string',
      protocol: 'string',
      regionId: 'string',
      sagId: 'string',
      sn: 'string',
      taskName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

