// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentRequest extends $dara.Model {
  /**
   * @remarks
   * If omitted, the current definition is retrieved. If a published version is specified, the corresponding snapshot and the fixed versions of official skills and suite artifacts are retrieved. If a current unpublished version is specified, the draft is returned without fixed artifact versions. This is not the POP system parameter Version.
   * 
   * @example
   * 2
   */
  agentVersion?: number;
  /**
   * @remarks
   * The name of the skill to read.
   * 
   * This parameter is required.
   * 
   * @example
   * my-skill
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

