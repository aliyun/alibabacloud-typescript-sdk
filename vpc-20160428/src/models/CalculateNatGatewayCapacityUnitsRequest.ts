// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CalculateNatGatewayCapacityUnitsRequestNatGatewayCapacity extends $dara.Model {
  /**
   * @remarks
   * The number of reserved LCUs per hour.
   * 
   * @example
   * 100
   */
  capacityUnits?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUnits: 'CapacityUnits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnits: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateNatGatewayCapacityUnitsRequestNatGatewayPerformanceValues extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: Gbit/s.
   * 
   * @example
   * 20
   */
  bandwidth?: number;
  /**
   * @remarks
   * The maximum number of new connections per second.
   * 
   * @example
   * 500
   */
  cps?: number;
  /**
   * @remarks
   * The number of packets. Unit: pps.
   * 
   * @example
   * 50000
   */
  pps?: number;
  /**
   * @remarks
   * The number of sessions.
   * 
   * @example
   * 1000
   */
  sessionCount?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cps: 'Cps',
      pps: 'Pps',
      sessionCount: 'SessionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cps: 'number',
      pps: 'number',
      sessionCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateNatGatewayCapacityUnitsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. Note: If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - true: performs a dry run. The system checks whether your AccessKey pair is valid, the authorization of the Resource Access Management (RAM) user, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned. The Internet NAT gateway is not upgraded.
   * - false (default): sends a normal request. If the request passes the check, a 2xx HTTP status code is returned and the Internet NAT gateway is upgraded.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The details of the resource reservation CUs to be calculated.
   */
  natGatewayCapacity?: CalculateNatGatewayCapacityUnitsRequestNatGatewayCapacity;
  /**
   * @remarks
   * The instance ID of the NAT gateway.
   * 
   * @example
   * ngw-2ze0dcn4mq31qx2jc****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The details of the resource reservation metrics to be calculated.
   */
  natGatewayPerformanceValues?: CalculateNatGatewayCapacityUnitsRequestNatGatewayPerformanceValues;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      natGatewayCapacity: 'NatGatewayCapacity',
      natGatewayId: 'NatGatewayId',
      natGatewayPerformanceValues: 'NatGatewayPerformanceValues',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'string',
      natGatewayCapacity: CalculateNatGatewayCapacityUnitsRequestNatGatewayCapacity,
      natGatewayId: 'string',
      natGatewayPerformanceValues: CalculateNatGatewayCapacityUnitsRequestNatGatewayPerformanceValues,
      regionId: 'string',
    };
  }

  validate() {
    if(this.natGatewayCapacity && typeof (this.natGatewayCapacity as any).validate === 'function') {
      (this.natGatewayCapacity as any).validate();
    }
    if(this.natGatewayPerformanceValues && typeof (this.natGatewayPerformanceValues as any).validate === 'function') {
      (this.natGatewayPerformanceValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

