// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHoneypotProbeRequestHoneypotBindListBindPortList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to bind the port. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  bindPort?: boolean;
  /**
   * @remarks
   * The end port.
   * 
   * @example
   * 90
   */
  endPort?: number;
  /**
   * @remarks
   * Specifies whether the port is fixed. Valid values:
   * 
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * false
   */
  fixed?: boolean;
  /**
   * @remarks
   * The start port.
   * 
   * @example
   * 80
   */
  startPort?: number;
  /**
   * @remarks
   * The destination port.
   * > This parameter is required when **HoneypotId** is not empty.
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
   * The list of listening ports.
   */
  bindPortList?: CreateHoneypotProbeRequestHoneypotBindListBindPortList[];
  /**
   * @remarks
   * The honeypot ID.
   * > You can call the [ListHoneypot](~~ListHoneypot~~) operation to obtain this value.
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
   * Specifies whether to enable ARP spoof detection. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  arp?: boolean;
  /**
   * @remarks
   * The business group.
   * 
   * @example
   * 2022011817324588686
   */
  businessGroupId?: string;
  /**
   * @remarks
   * The management node ID.
   * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * a882e590-b87b-45a6-87b9-d0a3e5a0****
   */
  controlNodeId?: string;
  /**
   * @remarks
   * The probe name.
   * 
   * This parameter is required.
   * 
   * @example
   * testHoneyPotProbe
   */
  displayName?: string;
  /**
   * @remarks
   * The collection of service configurations.
   */
  honeypotBindList?: CreateHoneypotProbeRequestHoneypotBindList[];
  /**
   * @remarks
   * Specifies whether to enable ping scan detection. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  ping?: boolean;
  /**
   * @remarks
   * The probe type. Valid values:
   * 
   * - **host_probe**: host probe
   * 
   * - **vpc_black_hole_probe**: VPC blackhole probe
   * 
   * This parameter is required.
   * 
   * @example
   * host_probe
   */
  probeType?: string;
  /**
   * @remarks
   * The probe version.
   * 
   * @example
   * 0.0.0
   */
  probeVersion?: string;
  /**
   * @remarks
   * The proxy IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  proxyIp?: string;
  /**
   * @remarks
   * The instance UUID.
   * > This parameter is required when **ProbeType** is set to **host_probe**.
   * 
   * @example
   * e4af3620-6895-4e2f-a641-a9d8fb53****
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * > This parameter is required when **ProbeType** is set to **vpc_black_hole_probe**. You can call the [DescribeVpcHoneyPotList](~~DescribeVpcHoneyPotList~~) operation to obtain this value.
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

