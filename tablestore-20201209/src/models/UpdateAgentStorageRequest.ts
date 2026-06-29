// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentStorageRequest extends $dara.Model {
  /**
   * @remarks
   * agent storage description
   * 
   * @example
   * description for agent storage
   */
  agentStorageDescription?: string;
  /**
   * @remarks
   * agent storage name
   * 
   * This parameter is required.
   * 
   * @example
   * agent-test
   */
  agentStorageName?: string;
  /**
   * @remarks
   * The alias of the agent storage.
   * 
   * @example
   * agent-test
   */
  aliasName?: string;
  /**
   * @remarks
   * (Deprecated) The network type of the agent storage. Valid values: NORMAL and VPC_CONSOLE. Default value: NORMAL.
   * 
   * @example
   * VPC
   */
  network?: string;
  /**
   * @remarks
   * The list of network sources allowed for the agent storage. All sources are allowed by default. Valid values:
   * - TRUST_PROXY: console.
   */
  networkSourceACL?: string[];
  /**
   * @remarks
   * The list of network types allowed for the agent storage. All types are allowed by default. Valid values:
   * - CLASSIC: classic network.
   * - INTERNET: public network.
   * - VPC: VPC network.
   */
  networkTypeACL?: string[];
  static names(): { [key: string]: string } {
    return {
      agentStorageDescription: 'AgentStorageDescription',
      agentStorageName: 'AgentStorageName',
      aliasName: 'AliasName',
      network: 'Network',
      networkSourceACL: 'NetworkSourceACL',
      networkTypeACL: 'NetworkTypeACL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageDescription: 'string',
      agentStorageName: 'string',
      aliasName: 'string',
      network: 'string',
      networkSourceACL: { 'type': 'array', 'itemType': 'string' },
      networkTypeACL: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.networkSourceACL)) {
      $dara.Model.validateArray(this.networkSourceACL);
    }
    if(Array.isArray(this.networkTypeACL)) {
      $dara.Model.validateArray(this.networkTypeACL);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

