// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProbeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The destination domain name of the probe node.
   * For ICMP and TCP Protocol Type probes, set this parameter to the IP address or domain name of the destination service. For HTTP Protocol Type probes, set this parameter to the URL of the destination service.
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
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The number of packets sent per minute for the probe protocol.
   * 
   * Valid values: **1** to **60**.
   * 
   * > This parameter is required for ICMP Protocol Type probe tasks. Do not specify this parameter for other protocols.
   * 
   * @example
   * 10
   */
  packetNumber?: number;
  /**
   * @remarks
   * The port number of the probe protocol.
   * 
   * > This parameter is required for TCP Protocol Type probe tasks. Do not specify this parameter for other protocols.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The source address for the private network probe.
   * 
   * > This parameter is required for private network probe tasks.
   * 
   * @example
   * 192.168.1.1
   */
  probeTaskSourceAddress?: string;
  /**
   * @remarks
   * The protocol of the probe task. Valid values:
   * 
   * - **ICMP**.
   * - **TCP**.
   * - **HTTP**.
   * 
   * > Private network probes support only the ICMP and TCP protocols.
   * 
   * This parameter is required.
   * 
   * @example
   * ICMP
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the Smart Access Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-asdfz6ac74oj5v****
   */
  sagId?: string;
  /**
   * @remarks
   * The serial number of the Smart Access Gateway device.
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
   * - **Internet**: public network probe.
   * 
   * - **Intranet**: private network probe.
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

