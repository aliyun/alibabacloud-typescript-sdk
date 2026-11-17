// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CalculateNatGatewayCapacityUnitsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. Note: If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - true: sends the request without upgrading the Internet NAT gateway. The system checks whether your AccessKey pair is valid, the authorization of the Resource Access Management (RAM) user, and whether the required parameters are specified. If the request fails the check, an error message is returned. If the request passes the check, the DryRunOperation error code is returned.
   * - false (default value): sends a normal request. If the request passes the check, a 2xx HTTP status code is returned and the Internet NAT gateway is directly upgraded.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The details of the reserved capacity units (CUs) to be calculated.
   */
  natGatewayCapacityShrink?: string;
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
  natGatewayPerformanceValuesShrink?: string;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      natGatewayCapacityShrink: 'NatGatewayCapacity',
      natGatewayId: 'NatGatewayId',
      natGatewayPerformanceValuesShrink: 'NatGatewayPerformanceValues',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'string',
      natGatewayCapacityShrink: 'string',
      natGatewayId: 'string',
      natGatewayPerformanceValuesShrink: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

