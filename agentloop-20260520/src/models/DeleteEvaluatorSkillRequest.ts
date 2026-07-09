// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEvaluatorSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace name.
   * 
   * This parameter is required.
   * 
   * @example
   * prod-agentspace
   */
  agentSpace?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

