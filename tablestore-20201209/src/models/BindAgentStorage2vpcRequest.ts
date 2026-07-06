// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAgentStorage2VpcRequest extends $dara.Model {
  /**
   * @remarks
   * The agent storage name.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-test
   */
  agentStorageName?: string;
  /**
   * @remarks
   * The VPC name.
   * 
   * This parameter is required.
   * 
   * @example
   * remua
   */
  agentStorageVpcName?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-uf6***********ez6ge
   */
  virtualSwitchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-2ze***********g31n7
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      agentStorageName: 'AgentStorageName',
      agentStorageVpcName: 'AgentStorageVpcName',
      virtualSwitchId: 'VirtualSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageName: 'string',
      agentStorageVpcName: 'string',
      virtualSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

