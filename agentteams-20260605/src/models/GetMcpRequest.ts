// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMcpRequest extends $dara.Model {
  /**
   * @remarks
   * The MCP server ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mcp-xxx
   */
  id?: string;
  /**
   * @remarks
   * Optional. The instance name for fuzzy matching.
   * 
   * This parameter is required.
   * 
   * @example
   * AgentTeams
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

