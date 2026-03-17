// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProbeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name that is probed by the task.
   * 
   * If the protocol of the probe task is ICMP or TCP, set the value to the IP address or domain name of the service that you want to probe. If the protocol of the probe task is HTTP, set the value to the URL of the service that you want to probe.
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
   * The ID of the probe task.
   * 
   * This parameter is required.
   * 
   * @example
   * probe-****
   */
  probeTaskId?: string;
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
   * The ID of the Smart Access Gateway (SAG) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-****
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
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
      packetNumber: 'PacketNumber',
      port: 'Port',
      probeTaskId: 'ProbeTaskId',
      probeTaskSourceAddress: 'ProbeTaskSourceAddress',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sagId: 'SagId',
      sn: 'Sn',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'boolean',
      packetNumber: 'number',
      port: 'number',
      probeTaskId: 'string',
      probeTaskSourceAddress: 'string',
      protocol: 'string',
      regionId: 'string',
      sagId: 'string',
      sn: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

