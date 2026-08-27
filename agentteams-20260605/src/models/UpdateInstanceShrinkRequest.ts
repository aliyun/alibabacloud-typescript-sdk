// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token that is used to ensure the idempotence of the request.
   * 
   * @example
   * client-token-xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * **The ID of the AgentTeams instance.**
   * 
   * This parameter is required.
   * 
   * @example
   * agentteams-abc123
   */
  instanceId?: string;
  /**
   * @remarks
   * **The new instance name. This parameter cannot be empty.**
   * 
   * @example
   * New instance name.
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * PrivateNet
   */
  networkType?: string;
  /**
   * @remarks
   * The list of zones and vSwitches.
   * 
   * @example
   * [...]
   */
  zonesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      networkType: 'NetworkType',
      zonesShrink: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      instanceName: 'string',
      networkType: 'string',
      zonesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

