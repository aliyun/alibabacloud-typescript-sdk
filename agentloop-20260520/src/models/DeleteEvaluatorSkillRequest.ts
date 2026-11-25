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
  /**
   * @example
   * v2
   */
  evaluatorVersion?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      evaluatorVersion: 'evaluatorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      evaluatorVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

