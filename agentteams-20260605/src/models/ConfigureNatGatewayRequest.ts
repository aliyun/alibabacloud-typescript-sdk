// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureNatGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The client idempotency token.
   * 
   * @example
   * test
   */
  clientToken?: string;
  /**
   * @remarks
   * The description for the NAT gateway, EIP, and SNAT rule creation.
   * 
   * @example
   * create public nat gateway for agentteams instance
   */
  description?: string;
  /**
   * @remarks
   * The allocation ID of the EIP.
   * 
   * @example
   * eip-xxx
   */
  eipAllocationId?: string;
  /**
   * @remarks
   * The bandwidth of the automatically applied EIP. Valid values: 1 to 200. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * The ID of the AgentTeams instance.
   * 
   * This parameter is required.
   * 
   * @example
   * <instanceId>
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the NAT gateway instance.
   * 
   * @example
   * nat-xxxx
   */
  natGatewayInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      eipAllocationId: 'EipAllocationId',
      eipBandwidth: 'EipBandwidth',
      instanceId: 'InstanceId',
      natGatewayInstanceId: 'NatGatewayInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      eipAllocationId: 'string',
      eipBandwidth: 'number',
      instanceId: 'string',
      natGatewayInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

