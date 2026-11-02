// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNatGatewayCapacityReservationRequestNatGatewayCapacity extends $dara.Model {
  /**
   * @remarks
   * The number of LCUs reserved per hour.
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

export class ModifyNatGatewayCapacityReservationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters. Note: If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - true: performs a dry run without upgrading the Internet NAT gateway. The system checks whether your AccessKey pair is valid, the authorization of the Resource Access Management (RAM) user, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * - false (default): sends a Normal request. If the request passes the dry run, a 2xx HTTP status code is returned and the Internet NAT gateway is upgraded.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The number of capacity units (CUs) for the NAT resource reservation.
   */
  natGatewayCapacity?: ModifyNatGatewayCapacityReservationRequestNatGatewayCapacity;
  /**
   * @remarks
   * The instance ID of the NAT gateway.
   * 
   * @example
   * ngw-112za33e4****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to cancel the resource reservation. Valid values:
   * * **true**: cancels the resource reservation.
   * * **false** (default): does not cancel the resource reservation. This parameter is optional when you create or modify a resource reservation.
   * 
   * @example
   * true
   */
  resetCapacityReservation?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      natGatewayCapacity: 'NatGatewayCapacity',
      natGatewayId: 'NatGatewayId',
      regionId: 'RegionId',
      resetCapacityReservation: 'ResetCapacityReservation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'string',
      natGatewayCapacity: ModifyNatGatewayCapacityReservationRequestNatGatewayCapacity,
      natGatewayId: 'string',
      regionId: 'string',
      resetCapacityReservation: 'string',
    };
  }

  validate() {
    if(this.natGatewayCapacity && typeof (this.natGatewayCapacity as any).validate === 'function') {
      (this.natGatewayCapacity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

