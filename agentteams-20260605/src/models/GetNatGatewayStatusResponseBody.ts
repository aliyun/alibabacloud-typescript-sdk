// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNatGatewayStatusResponseBodyDataNatGateways extends $dara.Model {
  /**
   * @remarks
   * The NAT gateway ID.
   * 
   * @example
   * ngw-xxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * Indicates whether the SNAT rule is configured.
   * 
   * @example
   * true
   */
  snatConfigured?: boolean;
  /**
   * @remarks
   * The SNAT table ID.
   * 
   * @example
   * stb-xxx
   */
  snatTableId?: string;
  /**
   * @remarks
   * The status of the NAT gateway. Valid values:
   *  * Available: available
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      natGatewayId: 'NatGatewayId',
      snatConfigured: 'SnatConfigured',
      snatTableId: 'SnatTableId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayId: 'string',
      snatConfigured: 'boolean',
      snatTableId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayStatusResponseBodyDataZoneCidrs extends $dara.Model {
  /**
   * @remarks
   * The CIDR block.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * Indicates whether the CIDR block is covered by a SNAT rule.
   * 
   * @example
   * true
   */
  covered?: boolean;
  /**
   * @remarks
   * The associated NAT gateway ID. This value is null if not configured.
   * 
   * @example
   * ngw-xxx
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The SNAT entry ID. This value is null if not configured.
   * 
   * @example
   * snat-xxx
   */
  snatEntryId?: string;
  /**
   * @remarks
   * The SNAT source CIDR. This value is null if not configured.
   * 
   * @example
   * 192.168.1.0/24
   */
  snatSourceCidr?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      covered: 'Covered',
      natGatewayId: 'NatGatewayId',
      snatEntryId: 'SnatEntryId',
      snatSourceCidr: 'SnatSourceCidr',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      covered: 'boolean',
      natGatewayId: 'string',
      snatEntryId: 'string',
      snatSourceCidr: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * inst-1
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the NAT gateway is configured.
   * 
   * @example
   * true
   */
  natGatewayConfigured?: boolean;
  /**
   * @remarks
   * The list of NAT gateway details.
   * 
   * @example
   * [...]
   */
  natGateways?: GetNatGatewayStatusResponseBodyDataNatGateways[];
  /**
   * @remarks
   * Indicates whether the SNAT rule is configured.
   * 
   * @example
   * true
   */
  snatConfigured?: boolean;
  /**
   * @remarks
   * The status of the NAT gateway. Valid values:
   *  * READY: The NAT gateway exists, and the zone/vSwitch CIDR selected by the current instance is covered by SNAT.
   *  * NEED_CONFIGURE_NAT_GATEWAY: No NAT gateway exists in the VPC associated with the current instance. You need to purchase or configure a NAT gateway.
   *  * NEED_CONFIGURE_SNAT_RULE: The NAT gateway exists, but the zone/vSwitch CIDR selected by the current instance is not fully added to SNAT. You need to add SNAT rules.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  /**
   * @remarks
   * Indicates whether the selected zone/vSwitch CIDR is covered.
   * 
   * @example
   * true
   */
  zoneCidrCovered?: boolean;
  /**
   * @remarks
   * The CIDR blocks and SNAT configuration status of each zone/vSwitch in the VPC.
   * 
   * @example
   * [...]
   */
  zoneCidrs?: GetNatGatewayStatusResponseBodyDataZoneCidrs[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      natGatewayConfigured: 'NatGatewayConfigured',
      natGateways: 'NatGateways',
      snatConfigured: 'SnatConfigured',
      status: 'Status',
      vpcId: 'VpcId',
      zoneCidrCovered: 'ZoneCidrCovered',
      zoneCidrs: 'ZoneCidrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      natGatewayConfigured: 'boolean',
      natGateways: { 'type': 'array', 'itemType': GetNatGatewayStatusResponseBodyDataNatGateways },
      snatConfigured: 'boolean',
      status: 'string',
      vpcId: 'string',
      zoneCidrCovered: 'boolean',
      zoneCidrs: { 'type': 'array', 'itemType': GetNatGatewayStatusResponseBodyDataZoneCidrs },
    };
  }

  validate() {
    if(Array.isArray(this.natGateways)) {
      $dara.Model.validateArray(this.natGateways);
    }
    if(Array.isArray(this.zoneCidrs)) {
      $dara.Model.validateArray(this.zoneCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The NAT gateway configuration status information.
   * 
   * @example
   * {}
   */
  data?: GetNatGatewayStatusResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetNatGatewayStatusResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

