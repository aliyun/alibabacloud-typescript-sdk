// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLumaCatalogsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my_agent
   */
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

