// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureNatGatewayRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @example
   * create public nat gateway for agentteams instance
   */
  description?: string;
  eipAllocationId?: string;
  /**
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * <instanceId>
   */
  instanceId?: string;
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

