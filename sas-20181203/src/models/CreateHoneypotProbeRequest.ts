// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHoneypotProbeRequestHoneypotBindListBindPortList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to bind a port. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  bindPort?: boolean;
  /**
   * @remarks
   * The end of the port range.
   * 
   * @example
   * 90
   */
  endPort?: number;
  /**
   * @remarks
   * Specifies whether the port is a fixed port. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  fixed?: boolean;
  /**
   * @remarks
   * The start of the port range.
   * 
   * @example
   * 80
   */
  startPort?: number;
  /**
   * @remarks
   * The destination port.
   * 
   * > If **HoneypotId** is specified, this parameter is required.
   * 
   * @example
   * 80
   */
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      bindPort: 'BindPort',
      endPort: 'EndPort',
      fixed: 'Fixed',
      startPort: 'StartPort',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindPort: 'boolean',
      endPort: 'number',
      fixed: 'boolean',
      startPort: 'number',
      targetPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHoneypotProbeRequestHoneypotBindList extends $dara.Model {
  /**
   * @remarks
   * The listener ports.
   */
  bindPortList?: CreateHoneypotProbeRequestHoneypotBindListBindPortList[];
  /**
   * @remarks
   * The ID of the honeypot.
   * 
   * > You can call the [ListHoneypot](~~ListHoneypot~~) operation to query the IDs of honeypots.
   * 
   * @example
   * 1a5eda2d40f92ac87d6b63e1a5ad4b76fe0d4110c4a3e2fa85438a29ae55****
   */
  honeypotId?: string;
  static names(): { [key: string]: string } {
    return {
      bindPortList: 'BindPortList',
      honeypotId: 'HoneypotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindPortList: { 'type': 'array', 'itemType': CreateHoneypotProbeRequestHoneypotBindListBindPortList },
      honeypotId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindPortList)) {
      $dara.Model.validateArray(this.bindPortList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHoneypotProbeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Address Resolution Protocol (ARP) spoofing. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  arp?: boolean;
  /**
   * @remarks
   * The ID of the business group.
   * 
   * @example
   * 2022011817324588686
   */
  businessGroupId?: string;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * a882e590-b87b-45a6-87b9-d0a3e5a0****
   */
  controlNodeId?: string;
  /**
   * @remarks
   * The name of the probe.
   * 
   * This parameter is required.
   * 
   * @example
   * testHoneyPotProbe
   */
  displayName?: string;
  /**
   * @remarks
   * The configuration of the probe.
   */
  honeypotBindList?: CreateHoneypotProbeRequestHoneypotBindList[];
  /**
   * @remarks
   * Specifies whether to enable ping scan. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  ping?: boolean;
  /**
   * @remarks
   * The type of the probe. Valid values:
   * 
   * *   **host_probe**: host probe
   * *   **vpc_black_hole_probe**: virtual private cloud (VPC) probe
   * 
   * This parameter is required.
   * 
   * @example
   * host_probe
   */
  probeType?: string;
  /**
   * @remarks
   * The version of the probe.
   * 
   * @example
   * 0.0.0
   */
  probeVersion?: string;
  /**
   * @remarks
   * The IP address of the proxy.
   * 
   * @example
   * 192.168.XX.XX
   */
  proxyIp?: string;
  /**
   * @remarks
   * The UUID of the instance.
   * 
   * > If **ProbeType** is set to **host_probe**, this parameter is required.
   * 
   * @example
   * e4af3620-6895-4e2f-a641-a9d8fb53****
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * > If **ProbeType** is set to **vpc_black_hole_probe**, this parameter is required. You can call the [DescribeVpcHoneyPotList](~~DescribeVpcHoneyPotList~~) operation to query the IDs of VPCs.
   * 
   * @example
   * vpc-zm0asrkpv1q8gnk7mn4dn
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      arp: 'Arp',
      businessGroupId: 'BusinessGroupId',
      controlNodeId: 'ControlNodeId',
      displayName: 'DisplayName',
      honeypotBindList: 'HoneypotBindList',
      ping: 'Ping',
      probeType: 'ProbeType',
      probeVersion: 'ProbeVersion',
      proxyIp: 'ProxyIp',
      uuid: 'Uuid',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arp: 'boolean',
      businessGroupId: 'string',
      controlNodeId: 'string',
      displayName: 'string',
      honeypotBindList: { 'type': 'array', 'itemType': CreateHoneypotProbeRequestHoneypotBindList },
      ping: 'boolean',
      probeType: 'string',
      probeVersion: 'string',
      proxyIp: 'string',
      uuid: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.honeypotBindList)) {
      $dara.Model.validateArray(this.honeypotBindList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

