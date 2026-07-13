// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNatGatewayStatusResponseBodyDataNatGateways extends $dara.Model {
  natGatewayId?: string;
  snatConfigured?: boolean;
  snatTableId?: string;
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
  cidrBlock?: string;
  covered?: boolean;
  natGatewayId?: string;
  snatEntryId?: string;
  snatSourceCidr?: string;
  vSwitchId?: string;
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
  instanceId?: string;
  natGatewayConfigured?: boolean;
  natGateways?: GetNatGatewayStatusResponseBodyDataNatGateways[];
  snatConfigured?: boolean;
  status?: string;
  vpcId?: string;
  zoneCidrCovered?: boolean;
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
   * @example
   * Success
   */
  code?: string;
  data?: GetNatGatewayStatusResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
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

